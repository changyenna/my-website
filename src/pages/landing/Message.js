import React from 'react';
import {
    Box,
    Button,
    VStack,
    HStack,
    useColorModeValue,
    Link as ChakraLink,
    Text
} from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import soundEffect1 from '../../assets/button_click_1.mp3';
import soundEffect2 from '../../assets/button_click_2.mp3';

import MessageNavBar from '../../nav-bar/MessageNavBar';
import LandingPageNavBarCore from '../../nav-bar/LandingPageNavBarCore';

const playSoundEffect = (soundEffect) => {
    const audio = new Audio(soundEffect);
    audio.play();
};

const Message = () => {
    const bgColors = useColorModeValue('light.100', 'dark.300');
    const titleBar = useColorModeValue('light.400', 'dark.800');
    const buttonColors = useColorModeValue('light.300', 'light.400');
    const textColors = useColorModeValue('light.1000', 'dark.100');
    const button2Colors = useColorModeValue('light.200', 'dark.800');

    return (
        <>
            {/* <MessageNavBar display_return={true} /> */}
            <LandingPageNavBarCore display_return={true} />
            <Box
                border="2px solid black"
                // minWidth="50px"
                maxWidth="500px"
                minHeight="300px"
                backgroundColor={bgColors}
                position="relative"
                margin={{
                    lg: '100px auto 0',
                    md: '100px auto 0',
                    sm: '100px 20px 0'
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
                                <FaEnvelope />
                            </Box>
                            <Box color={textColors} pointerEvents="none">
                                <Text fontSize="md">Message</Text>
                            </Box>

                            <Box
                                className="close"
                                position="absolute"
                                right="2%"
                                top="3%"
                                cursor="pointer"
                                height="20px"
                                width="20px"
                                borderRadius="50px"
                                bg={'light.300'}
                                // onClick={() => playSoundEffect(soundEffect2)}
                            ></Box>
                        </HStack>
                    </Box>
                    <div
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            //  color: { textColors },
                            width: '300px',
                            textAlign: 'center',
                            marginTop: '60px',
                            pointerEvents: 'default'
                        }}
                        color={textColors}
                    >
                        <Text fontSize="md">
                            hello! welcome to my personal website. thanks for
                            stopping by!
                        </Text>
                    </div>
                    <HStack
                        spacing={0}
                        style={{
                            marginTop: '50px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Link to="/home" as={ChakraLink}>
                            <Button
                                // onClick={() => playSoundEffect(soundEffect1)}
                                style={{
                                    borderRadius: '3px',
                                    // border: '1px solid black',
                                    padding: '10px 25px',
                                    cursor: 'pointer',
                                    // color: 'black',
                                    marginTop: '-60px'
                                }}
                                bg={buttonColors}
                                color={textColors}
                            >
                                <Text fontWeight="400" fontSize="md">
                                    let's go!
                                </Text>
                            </Button>
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </>
    );
};

export default Message;
