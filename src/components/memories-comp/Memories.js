import React, { useState } from 'react';
import {
    Box,
    VStack,
    HStack,
    useColorModeValue,
    useMediaQuery,
    Text
} from '@chakra-ui/react';
import { FaCamera } from 'react-icons/fa';
import Slideshow from './Slideshow';

const Memories = () => {
    const bgColors = useColorModeValue('light.100', 'dark.300');
    const titleBar = useColorModeValue('light.400', 'dark.800');
    const buttonColors = useColorModeValue('light.300', 'light.400');
    const textColors = useColorModeValue('light.1000', 'dark.100');
    const button2Colors = useColorModeValue('light.200', 'dark.800');

    // const [isLargeDevice] = useMediaQuery('(min-width: 960px)');

    // const [isDragging, setIsDragging] = useState(false);

    // const getInitialXPosition = () => {
    //     if (window.innerWidth > 1536) {
    //         return 1390;
    //     } else if (window.innerWidth > 960) {
    //         return 1050;
    //     }
    //     return 0;
    // };

    // const getInitialYPosition = () => {
    //     if (window.innerWidth > 1536) {
    //         return 93;
    //     } else if (window.innerWidth > 960) {
    //         return 200;
    //     }
    //     return 0;
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
                    minWidth="300px"
                    maxWidth={{ lg: '400px', md: '400px' }}
                    height="400px"
                    backgroundColor={bgColors}
                    position="relative"
                    // position="absolute"
                    // top={position.y}
                    // left={position.x}
                    // onMouseDown={handleMouseDown}
                    // onMouseMove={handleMouseMove}
                    // onMouseUp={handleMouseUp}
                    margin={{
                        lg: '0px auto 150px',
                        md: '0px auto 150px',
                        sm: '0px 0px 0px'
                    }}
                    borderRadius="10px"
                    style={{
                        userSelect: 'none' // Prevent text selection while dragging
                    }}
                >
                    <VStack>
                        <Box
                            cursor="move"
                            borderTop="none"
                            borderRight="none"
                            borderLeft="none"
                            borderTopLeftRadius="8px"
                            borderTopRightRadius="8px"
                            borderBottom="2px solid black"
                            width="100%"
                            height="40px"
                            bg={titleBar}
                            style={{
                                cursor: isDragging ? 'grabbing' : 'grab',
                                userSelect: 'none' // Prevent text selection while dragging
                            }}
                        >
                            <HStack spacing="10px" ml="20px" mt="6px">
                                <Box>
                                    <FaCamera />
                                </Box>
                                <Box color={textColors} pointerEvents="none">
                                    <Text fontSize="md">Memories</Text>
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
                        {/* <Box> */}
            {/* <Slideshow /> */}
            {/* </Box> */}
            {/* </VStack> */}
            {/* </Box> */}
            {/* )} */}
            {/* {!isLargeDevice && ( */}
            <Box
                border="2px solid black"
                // minWidth="300px"
                maxWidth={{ lg: '400px' }}
                height="400px"
                backgroundColor={bgColors}
                position="relative"
                margin={{
                    lg: '0px auto 0px',
                    md: '40px 10px 40px',
                    sm: '40px 10px 40px' //needs to match with home.js box for all
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
                                <FaCamera />
                            </Box>
                            <Box color={textColors} pointerEvents="none">
                                <Text fontSize="md">Memories</Text>
                            </Box>

                            <Box
                                className="close"
                                position="absolute"
                                right="3%"
                                top="2%"
                                // cursor="pointer"
                                height="20px"
                                width="20px"
                                borderRadius="50px"
                                bg={'light.300'}
                                // onClick={() => playSoundEffect(soundEffect2)}
                            ></Box>
                        </HStack>
                    </Box>
                    {/* <Box> */}
                    <Slideshow />
                    {/* </Box> */}
                </VStack>
            </Box>
            {/* // )} */}
        </>
    );
};

export default Memories;
