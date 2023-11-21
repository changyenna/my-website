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
import IMG from '../../assets/tooth.png';
import FOLDER from '../../assets/bluef.png';
import { Link } from 'react-router-dom';
// import { PiFolderFill } from 'react-icons/pi';
// import soundEffect1 from '../assets/button_click_1.mp3';
// const playSoundEffect = (soundEffect) => {
//     const audio = new Audio(soundEffect);
//     audio.play();
// };

const Modal6 = ({ isOpen, onClose, onOpen }) => {
    const bgColors = useColorModeValue('light.100', 'dark.300');
    const titleBar = useColorModeValue('light.400', 'dark.800');
    const buttonColors = useColorModeValue('light.300', 'light.400');
    const textColors = useColorModeValue('light.1000', 'dark.100');
    // const f1Colors = useColorModeValue('#ffbde8', '#ffdaf1');
    // const f2Colors = useColorModeValue('#bde8ff', '#d8f0ff');
    // const f3Colors = useColorModeValue('#e8ffbd', '#f0ffdb');
    const f4Colors = useColorModeValue('#ffe8bd', '#fff2d1');
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
                            style={{ color: f4Colors }}
                        />
                    </div>
                    <Text
                        fontWeight="medium"
                        fontSize="sm"
                        textAlign="center"
                        // bg="pink"
                        width="100px"
                    >
                        My Playground
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
                                        <Text fontSize="md">My Playground</Text>
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
                                    <img src={IMG} alt="" />
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
                                    <VStack>
                                        <Text fontSize="md" fontWeight="bold">
                                            hello?
                                        </Text>
                                        <Text fontSize="md">
                                            July - August 2023
                                        </Text>
                                    </VStack>
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
                                                Next.js
                                            </Tag>
                                        </WrapItem>

                                        <WrapItem>
                                            <Tag
                                                variant="solid"
                                                color={textColors}
                                                bg={titleBar}
                                            >
                                                Typescript
                                            </Tag>
                                        </WrapItem>
                                        <WrapItem>
                                            <Tag
                                                v
                                                variant="solid"
                                                color={textColors}
                                                bg={titleBar}
                                            >
                                                MaterialUI
                                            </Tag>
                                        </WrapItem>
                                        <WrapItem>
                                            <Tag
                                                v
                                                variant="solid"
                                                color={textColors}
                                                bg={titleBar}
                                            >
                                                AWS Amplify
                                            </Tag>
                                        </WrapItem>
                                        <WrapItem>
                                            <Tag
                                                size="md"
                                                variant="solid"
                                                color={textColors}
                                                bg={titleBar}
                                            >
                                                Lambda
                                            </Tag>
                                        </WrapItem>
                                        <WrapItem>
                                            <Tag
                                                size="md"
                                                variant="solid"
                                                color={textColors}
                                                bg={titleBar}
                                            >
                                                DynamoDB
                                            </Tag>
                                        </WrapItem>
                                        <WrapItem>
                                            <Tag
                                                size="md"
                                                variant="solid"
                                                color={textColors}
                                                bg={titleBar}
                                            >
                                                SEO
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
                                    <Link to="/playground">explore</Link>
                                </Button>
                            </ModalFooter>
                        </VStack>
                    </ModalContent>
                </Modal>
            </Center>
        </>
    );
};

export default Modal6;
