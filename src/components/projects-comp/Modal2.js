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
    Wrap,
    WrapItem,
    Tag
} from '@chakra-ui/react';
// import { PiFolderFill } from 'react-icons/pi';
import FOLDER from '../../assets/purplef.png';
// import soundEffect1 from '../assets/button_click_1.mp3';
import IMG from '../../assets/prize.png';
import IMG2 from '../../assets/winner.png';

// const playSoundEffect = (soundEffect) => {
//     const audio = new Audio(soundEffect);
//     audio.play();
// };

const Modal2 = ({ isOpen, onClose, onOpen }) => {
    const bgColors = useColorModeValue('light.100', 'dark.300');
    const titleBar = useColorModeValue('light.400', 'dark.800');
    const buttonColors = useColorModeValue('light.300', 'light.400');
    const textColors = useColorModeValue('light.1000', 'dark.100');
    // const f1Colors = useColorModeValue('#ffbde8', '#ffdaf1');
    const f2Colors = useColorModeValue('#bde8ff', '#d8f0ff');
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
                            style={{ color: f2Colors }}
                        />
                    </div>
                    <Text
                        fontWeight="medium"
                        fontSize="sm"
                        textAlign="center"
                        // bg="pink"
                        width="100px"
                    >
                        Songnality
                    </Text>
                    {/* <Badge>Completed</Badge> */}
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
                                        <Text fontSize="md">Songnality</Text>
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
                            <VStack mt="20px">
                                {/* <Box mt="20px">
                                    <img src={IMG} alt="award" />
                                </Box> */}
                                <Box>
                                    <img src={IMG2} alt="award" />
                                </Box>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: '300px',
                                        textAlign: 'center',
                                        pointerEvents: 'default'
                                    }}
                                    color={textColors}
                                >
                                    <Text fontSize="md">
                                        Songnality is an appliation that
                                        generates the user's Animal Crossing
                                        character based on their song
                                        preferences. Using Spotify's API, our
                                        program allows the user to search for
                                        songs and then matches them to a
                                        character based on audio metric features
                                        that are given personalities.
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
                                                HTML
                                            </Tag>
                                        </WrapItem>
                                        <WrapItem>
                                            <Tag
                                                size="md"
                                                variant="solid"
                                                color={textColors}
                                                bg={titleBar}
                                            >
                                                CSS
                                            </Tag>
                                        </WrapItem>
                                        <WrapItem>
                                            <Tag
                                                v
                                                variant="solid"
                                                color={textColors}
                                                bg={titleBar}
                                            >
                                                Python
                                            </Tag>
                                        </WrapItem>
                                        <WrapItem>
                                            <Tag
                                                v
                                                variant="solid"
                                                color={textColors}
                                                bg={titleBar}
                                            >
                                                Django
                                            </Tag>
                                        </WrapItem>
                                    </Wrap>
                                </Box>
                            </VStack>
                            <ModalFooter>
                                <Button
                                    as="a"
                                    href="https://devpost.com/software/songnality"
                                    target="_blank"
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
                                    Explore
                                </Button>
                            </ModalFooter>
                        </VStack>
                    </ModalContent>
                </Modal>
            </Center>
        </>
    );
};

export default Modal2;
