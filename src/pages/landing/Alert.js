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
import GIF from '../../assets/message.png';

// import soundEffect1 from '../../assets/button_click_1.mp3';
// import soundEffect2 from '../../assets/button_click_2.mp3';

import LandingPageNavBarCore from '../../nav-bar/LandingPageNavBarCore';

// const playSoundEffect = (soundEffect) => {
//     const audio = new Audio(soundEffect);
//     audio.play();
// };

const Alert = () => {
    const bgColors = useColorModeValue('light.100', 'dark.300');
    const titleBar = useColorModeValue('light.400', 'dark.800');
    const buttonColors = useColorModeValue('light.300', 'light.400');
    const textColors = useColorModeValue('light.1000', 'dark.100');
    const button2Colors = useColorModeValue('light.200', 'dark.800');

    return (
        <>
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
                                <Text fontSize="md">Alert</Text>
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
                        <Box
                            justifyContent="center"
                            textAlign="center"
                            display="flex"
                            margin="40px auto 0px"
                        >
                            <img src={GIF} alt="" />
                        </Box>
                    </Box>
                    <div
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            //  color: { textColors },
                            width: '300px',
                            textAlign: 'center',
                            marginTop: '100px',
                            pointerEvents: 'default'
                        }}
                        color={textColors}
                    >
                        <Text fontSize="md">read your message?</Text>
                    </div>
                    <HStack
                        spacing={50}
                        style={{
                            marginTop: '5px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Link to="">
                            <Button
                                className="lets_go"
                                // onClick={() => playSoundEffect(soundEffect2)}
                                style={{
                                    // background: '#F5F5F5',
                                    borderRadius: '3px',
                                    padding: '10px 25px',
                                    cursor: 'pointer',
                                    marginTop: '10px'
                                }}
                                bg={button2Colors}
                                color={textColors}
                            >
                                <h4>no</h4>
                            </Button>
                        </Link>
                        <Link to="/message">
                            <Button
                                // onClick={() => playSoundEffect(soundEffect1)}
                                style={{
                                    borderRadius: '3px',
                                    // border: '1px solid black',
                                    padding: '10px 25px',
                                    cursor: 'pointer',
                                    color: 'var(--color-black',
                                    marginTop: '10px'
                                }}
                                bg={buttonColors}
                                color={textColors}
                            >
                                yes
                            </Button>
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </>
    );
};

export default Alert;
