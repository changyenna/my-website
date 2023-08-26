import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    VStack,
    HStack,
    useColorModeValue,
    useMediaQuery,
    Link as ChakraLink,
    Text
} from '@chakra-ui/react';
import { FaMusic } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import soundEffect1 from '../../assets/button_click_1.mp3';
import soundEffect2 from '../../assets/button_click_2.mp3';
import Player from './Player';

// const playSoundEffect = (soundEffect) => {
//     const audio = new Audio(soundEffect);
//     audio.play();
// };

const MusicPlayer = () => {
    const bgColors = useColorModeValue('light.100', 'dark.300');
    const titleBar = useColorModeValue('light.400', 'dark.800');
    const buttonColors = useColorModeValue('light.300', 'light.400');
    const textColors = useColorModeValue('light.1000', 'dark.100');
    const button2Colors = useColorModeValue('light.200', 'dark.800');

    // const [isLargeDevice] = useMediaQuery('(min-width: 960px)');

    // const [isDragging, setIsDragging] = useState(false);

    // const getInitialXPosition = () => {
    //     return (window.innerWidth * 25) / 100;
    // };

    // const getInitialYPosition = () => {
    //     return (window.innerWidth * 10) / 100;
    // };

    // const [position, setPosition] = useState({
    //     x: getInitialXPosition(),
    //     y: getInitialYPosition()
    // });

    // const [offset, setOffset] = useState({ x: 0, y: 0 });

    // const handleMouseDown = (event) => {
    //     setIsDragging(true);
    //     setOffset({
    //         x: event.clientX - position.x,
    //         y: event.clientY - position.y
    //     });
    // };

    // const handleMouseMove = (event) => {
    //     if (!isDragging) return;
    //     setPosition({
    //         x: event.clientX - offset.x,
    //         y: event.clientY - offset.y
    //     });
    // };

    // const handleMouseUp = () => {
    //     setIsDragging(false);
    // };

    return (
        <>
            {/* {isLargeDevice && (
                <Box
                    border="2px solid black"
                    // minWidth="50px"
                    minWidth="300px"
                    maxWidth={{ lg: '400px', md: '400px' }}
                    minHeight="560px"
                    backgroundColor={bgColors}
                    position="relative"
                    // position="absolute"
                    // top={position.y}
                    // left={position.x}
                    // onMouseDown={handleMouseDown}
                    // onMouseMove={handleMouseMove}
                    // onMouseUp={handleMouseUp}
                    // style={{
                    //     cursor: isDragging ? 'grabbing' : '',
                    //     userSelect: 'none' // Prevent text selection while dragging
                    // }}
                    // position="relative"

                    margin={{
                        lg: '0px auto 150px',
                        md: '0px auto 150px',
                        sm: '40px 0px 0px' //needs to match with home.js box for all
                    }}
                    borderRadius="10px"
                >
                    <VStack>
                        <Box
                            style={{
                                cursor: isDragging ? 'grabbing' : 'grab',
                                userSelect: 'none' // Prevent text selection while dragging
                            }}
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
                                <Box>
                                    <FaMusic />
                                </Box>
                                <Box color={textColors} pointerEvents="none">
                                    <Text fontSize="md">
                                        My top tracks this month
                                    </Text>
                                </Box>

                                <Box
                                    className="close"
                                    position="absolute"
                                    right="2%"
                                    top="2%"
                                    cursor="pointer"
                                    height="20px"
                                    width="20px"
                                    borderRadius="50px"
                                    bg={'light.300'}
                                    // onClick={() => playSoundEffect(soundEffect2)}
                                ></Box>
                            </HStack>
                        </Box>
                        <Box>
                            <BeatPlayer />
                        </Box>
                    </VStack>
                </Box>
            )} */}

            {/* {!isLargeDevice && ( */}

            <Box
                border="2px solid black"
                // minWidth="50px"
                // minWidth="400px"
                maxWidth={{ lg: '400px' }}
                minHeight="560px"
                backgroundColor={bgColors}
                position="relative"
                margin={{
                    lg: '0px auto 0px',
                    md: '0px 10px 0px',
                    sm: '0px 10px 0px' //needs to match with home.js box for all
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
                            <Box>
                                <FaMusic />
                            </Box>
                            <Box color={textColors} pointerEvents="none">
                                <Text fontSize="md">
                                    My top tracks this month
                                </Text>
                            </Box>

                            <Box
                                className="close"
                                position="absolute"
                                right="2%"
                                top="1.5%"
                                // cursor="pointer"
                                height="20px"
                                width="20px"
                                borderRadius="50px"
                                bg={'light.300'}
                                // onClick={() => playSoundEffect(soundEffect2)}
                            ></Box>
                        </HStack>
                    </Box>
                    <Box>
                        <Player />
                    </Box>
                </VStack>
            </Box>

            {/* )} */}
        </>
    );
};

export default React.memo(MusicPlayer);
