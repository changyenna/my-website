import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useColorModeValue } from '@chakra-ui/react';
import MySceneNavBar from '../../nav-bar/MySceneNavBar';
// import { Link } from 'react-router-dom';
// import soundEffect1 from '../../assets/button_click_1.mp3';
// import LandingPageNavBarCore from '../../nav-bar/LandingPageNavBarCore';

// const playSoundEffect = (soundEffect) => {
//     const audio = new Audio(soundEffect);
//     audio.play();
// };

const useArrowKeyControls = (model) => {
    useEffect(() => {
        const stepSize = 0.2;
        const rotationSpeed = 0.1;

        const moveDirection = new THREE.Vector3();
        let targetRotation = 0;
        const rotationQuaternion = new THREE.Quaternion();

        const handleKeyDown = (event) => {
            if (
                ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(
                    event.key
                )
            ) {
                event.preventDefault();
            }
            switch (event.key) {
                case 'ArrowUp':
                    moveDirection.z = -1;
                    break;
                case 'ArrowDown':
                    moveDirection.z = 1;
                    break;
                case 'ArrowLeft':
                    moveDirection.x = -1;
                    break;
                case 'ArrowRight':
                    moveDirection.x = 1;
                    break;
                default:
                    break;
            }
        };

        const handleKeyUp = (event) => {
            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                    moveDirection.z = 0;
                    break;
                case 'ArrowLeft':
                case 'ArrowRight':
                    moveDirection.x = 0;
                    break;
                default:
                    break;
            }
        };

        const updateModel = () => {
            if (!model) return;

            const moveVector = moveDirection
                .clone()
                .normalize()
                .multiplyScalar(stepSize);
            const newPosX = THREE.MathUtils.clamp(
                model.position.x + moveVector.x,
                -14,
                14
            );
            const newPosZ = THREE.MathUtils.clamp(
                model.position.z + moveVector.z,
                -14,
                14
            );

            model.position.set(newPosX, model.position.y, newPosZ);

            if (moveDirection.lengthSq() > 0) {
                targetRotation = Math.atan2(moveDirection.x, moveDirection.z);
            }

            rotationQuaternion.setFromAxisAngle(
                new THREE.Vector3(0, 1, 0),
                targetRotation
            );
            model.quaternion.slerp(rotationQuaternion, rotationSpeed);
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        const animate = () => {
            updateModel();
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [model]);
};

const MyScene = () => {
    const sceneRef = useRef(null);
    const [model, setModel] = useState(null);

    const bgColors = useColorModeValue('#CDFEFB', 'dark.300');

    useArrowKeyControls(model);

    useEffect(() => {
        let mixer;
        let clock;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const orbit = new OrbitControls(camera, renderer.domElement);
        const axesHelper = new THREE.AxesHelper(5);

        const catUrl = new URL(
            '../../assets/cute_cat_in_cute_banana.glb',
            import.meta.url
        );
        const grassPattern = new URL(
            '../../assets/grass_pattern.png',
            import.meta.url
        );
        // const palmTree = new URL('../../assets/palm_tree.glb', import.meta.url);

        // const sky = new URL('../../assets/sky_background.jpg', import.meta.url);

        const animate = () => {
            requestAnimationFrame(animate);

            if (mixer && clock) {
                const delta = clock.getDelta();
                mixer.update(delta);
            }

            renderer.render(scene, camera);
        };

        renderer.setSize(window.innerWidth, window.innerHeight);
        sceneRef.current.appendChild(renderer.domElement);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 0);
        scene.add(directionalLight);

        camera.position.set(-20, 30, 40);
        orbit.update();

        scene.add(axesHelper);
        axesHelper.visible = false;

        const boxGeometry = new THREE.BoxGeometry(30, 8, 30);
        const textureLoader = new THREE.TextureLoader();

        const texture = textureLoader.load(grassPattern.href, () => {
            const boxMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide
            });
            const box = new THREE.Mesh(boxGeometry, boxMaterial);
            scene.add(box);
            box.rotation.y = -0.5 * Math.PI;
        });

        const assetLoader = new GLTFLoader();

        assetLoader.load(
            catUrl.href,
            function (gltf) {
                const loadedModel = gltf.scene;
                loadedModel.scale.set(4, 4, 4);
                scene.add(loadedModel);
                loadedModel.position.set(0, -11, 0);
                setModel(loadedModel);

                const animations = gltf.animations;
                if (animations && animations.length > 0) {
                    mixer = new THREE.AnimationMixer(loadedModel);
                    const animation = mixer.clipAction(animations[0]);
                    animation.play();
                    clock = new THREE.Clock();
                }
            },
            undefined,
            function (error) {
                console.error(error);
            }
        );

        // const skyLoader = new THREE.TextureLoader();
        // scene.background = skyLoader.load(sky);

        renderer.setClearColor(0x000000, 0);

        animate();

        return () => {
            if (sceneRef.current) {
                sceneRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div jstyle={{ background: '#CDFEFB', height: '100vh' }}>
            <MySceneNavBar display_return={true} />
            <div
                style={{
                    marginTop: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                Please use arrow keys to move banana cat
            </div>
            <div ref={sceneRef} />

            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    textAlign: 'center',
                    padding: '10px',
                    color: 'grey',
                    fontSize: '10px'
                }}
            >
                Cat model by{' '}
                <a
                    href="https://sketchfab.com/sbl-cool"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    SOBOL
                </a>
                , licensed under CC Attribution.
            </div>
        </div>
    );
};

export default MyScene;
