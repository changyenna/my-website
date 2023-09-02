import React from 'react';
import {
    Box,
    VStack,
    HStack,
    Center,
    useColorModeValue,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    Button,
    Stack,
    Wrap,
    WrapItem,
    Tag
} from '@chakra-ui/react';
// import { PiFolderFill } from 'react-icons/pi';
// import soundEffect1 from '../assets/button_click_1.mp3';
import IMG1 from '../../assets/3d.png';
import FOLDER from '../../assets/pinkf.png';
import { Link } from 'react-router-dom';

// const playSoundEffect = (soundEffect) => {
//     const audio = new Audio(soundEffect);
//     audio.play();
// };

const Modal1 = ({ isOpen, onClose, onOpen }) => {
    const bgColors = useColorModeValue('light.100', 'dark.300');
    const titleBar = useColorModeValue('light.400', 'dark.800');
    const buttonColors = useColorModeValue('light.300', 'light.400');
    const textColors = useColorModeValue('light.1000', 'dark.100');
    const f1Colors = useColorModeValue('#ffbde8', '#ffdaf1');
    // const f2Colors = useColorModeValue('#bde8ff', '#d8f0ff');
    // const f3Colors = useColorModeValue('#e8ffbd', '#f0ffdb');
    // const f4Colors = useColorModeValue('#ffe8bd', '#fff2d1');
    // const f5Colors = useColorModeValue('#e8bdff', '#f4d1ff');

    return (
        <>
            <Center>
                <VStack cursor="pointer" spacing={0}>
                    <div>
                        <img
                            src={FOLDER}
                            onClick={onOpen}
                            size={70}
                            style={{ color: f1Colors }}
                        />
                    </div>
                    <Stack direction={{ lg: 'row', md: 'row', sm: 'column' }}>
                        {' '}
                        <Text
                            fontWeight="medium"
                            fontSize="sm"
                            textAlign="center"
                            // bgColor="pink"
                            width="100px"
                        >
                            My 3D Scene
                        </Text>
                        {/* <Badge maxHeight="20px" colorScheme="green">
                            new
                        </Badge> */}
                    </Stack>
                </VStack>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent
                        border="2px solid black"
                        maxWidth="500px"
                        minHeight="300px"
                        backgroundColor={bgColors}
                        position="relative"
                        margin={{
                            lg: '100px auto 0',
                            md: '100px auto 0',
                            sm: '100px 10px 0'
                        }}
                        borderRadius="10px"
                    >
                        <VStack>
                            <Box
                                borderTop="none"
                                borderRight="none"
                                borderLeft="none"
                                borderTopLeftRadius="8px"
                                borderTopRightRadius="8px"
                                borderBottom="2px solid black"
                                width="100%"
                                height="40px"
                                bg={titleBar}
                            >
                                <HStack spacing="10px" ml="20px" mt="6px">
                                    <Box
                                        color={textColors}
                                        pointerEvents="none"
                                    >
                                        <Text fontSize="md">My 3D Scene</Text>
                                    </Box>
                                    <Box
                                        onClick={onClose}
                                        position="absolute"
                                        right="2%"
                                        top="2%"
                                        cursor="pointer"
                                        height="20px"
                                        width="20px"
                                        borderRadius="50px"
                                        bg={'light.300'}
                                    ></Box>
                                </HStack>
                            </Box>
                            <VStack>
                                <Box mt="20px">
                                    <img src={IMG1} alt="" />
                                </Box>
                                <div
                                    style={{
                                        pointerEvents: 'none',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: '300px',
                                        textAlign: 'center'
                                    }}
                                    color={textColors}
                                >
                                    <Text fontSize="md">
                                        Check out my little 3D scene! I utilized
                                        the Three.js library to develop a React
                                        component capable of rendering a dynamic
                                        3D scene. This component features a
                                        character controller using arrow keys as
                                        input. (Desktop view only)
                                    </Text>
                                </div>
                                <Box
                                    // bg="red"
                                    margin="10px auto 0px"
                                    width="300px"
                                >
                                    <Wrap spacing="10px" justify="center">
                                        <WrapItem>
                                            <Tag
                                                size="md"
                                                variant="solid"
                                                color={textColors}
                                                bg={titleBar}
                                            >
                                                React.js
                                            </Tag>
                                        </WrapItem>
                                        <WrapItem>
                                            <Tag
                                                size="md"
                                                variant="solid"
                                                color={textColors}
                                                bg={titleBar}
                                            >
                                                Three.js
                                            </Tag>
                                        </WrapItem>
                                        <WrapItem>
                                            <Tag
                                                v
                                                variant="solid"
                                                color={textColors}
                                                bg={titleBar}
                                            >
                                                Blender
                                            </Tag>
                                        </WrapItem>
                                    </Wrap>
                                </Box>
                            </VStack>
                            <ModalFooter>
                                <Button
                                    // onClick={() =>
                                    //     playSoundEffect(soundEffect1)
                                    // }
                                    style={{
                                        borderRadius: '3px',
                                        padding: '10px 25px',
                                        cursor: 'pointer',
                                        color: 'var(--color-black)',
                                        margin: '10px auto 20px'
                                    }}
                                    color={textColors}
                                    fontFamily="body"
                                    fontWeight="normal"
                                    bg={buttonColors}
                                >
                                    <Link to="/myScene">explore</Link>
                                </Button>
                            </ModalFooter>
                        </VStack>
                    </ModalContent>
                </Modal>
            </Center>
        </>
    );
};

export default Modal1;
