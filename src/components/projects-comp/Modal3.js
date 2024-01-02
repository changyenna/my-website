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
    Tag,
    Tooltip
} from '@chakra-ui/react';
// import { PiFolderFill } from 'react-icons/pi';
// import soundEffect1 from '../assets/button_click_1.mp3';
import IMG3 from '../../assets/handshake.png';
import FOLDER from '../../assets/greenf.png';

// const playSoundEffect = (soundEffect) => {
//     const audio = new Audio(soundEffect);
//     audio.play();
// };

const Modal3 = ({ isOpen, onClose, onOpen }) => {
    const bgColors = useColorModeValue('light.100', 'dark.300');
    const titleBar = useColorModeValue('light.400', 'dark.800');
    const buttonColors = useColorModeValue('light.300', 'light.400');
    const textColors = useColorModeValue('light.1000', 'dark.100');
    // const f1Colors = useColorModeValue('#ffbde8', '#ffdaf1');
    // const f2Colors = useColorModeValue('#bde8ff', '#d8f0ff');
    const f3Colors = useColorModeValue('#e8ffbd', '#f0ffdb');
    // const f4Colors = useColorModeValue('#ffe8bd', '#fff2d1');
    // const f5Colors = useColorModeValue('#e8bdff', '#f4d1ff');

    const [scrollBehavior, setScrollBehavior] = React.useState('inside');

    return (
        <>
            <Center>
                <VStack cursor="pointer" spacing={0}>
                    <Tooltip
                        label={`Quick Look`}
                        aria-label="A tooltip"
                        placement="right"
                    >
                        <img
                            src={FOLDER}
                            onClick={onOpen}
                            size={70}
                            style={{ color: f3Colors }}
                        />
                    </Tooltip>
                    <Text
                        fontWeight="medium"
                        fontSize="sm"
                        textAlign="center"
                        // bg="pink"
                        onClick={onOpen}
                        width="100px"
                    >
                        Ment-To-Be
                    </Text>
                    {/* <Badge>Completed</Badge> */}
                </VStack>
                <Modal
                    scrollBehavior={scrollBehavior}
                    isOpen={isOpen}
                    onClose={onClose}
                    maxWidth="500px"
                    minHeight="300px"
                    maxHeight="300px"
                >
                    <ModalOverlay />
                    <ModalContent
                        border="2px solid black"
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
                                        <Text fontSize="md">Ment-To-Be</Text>
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
                            <VStack align="center">
                                <Box mt="20px">
                                    <img src={IMG3} alt="" />
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
                                        Ment-to-Be is an application that aims
                                        to connect computer science students to
                                        industry professionals, promoting
                                        mentee-mentor relationships. Our goal
                                        was to create a positive and inspiring
                                        environment for the users. It features a
                                        matching system, a chatroom, an
                                        interactive profile dashboard, Google
                                        authentication, and much more.
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
                                                v
                                                variant="solid"
                                                color={textColors}
                                                bg={titleBar}
                                            >
                                                Chakra UI
                                            </Tag>
                                        </WrapItem>
                                        <WrapItem>
                                            <Tag
                                                size="md"
                                                variant="solid"
                                                color={textColors}
                                                bg={titleBar}
                                            >
                                                Express.js
                                            </Tag>
                                        </WrapItem>
                                        <WrapItem>
                                            <Tag
                                                v
                                                variant="solid"
                                                color={textColors}
                                                bg={titleBar}
                                            >
                                                MongoDB
                                            </Tag>
                                        </WrapItem>
                                    </Wrap>
                                </Box>
                            </VStack>
                            <ModalFooter>
                                <Button
                                    as="a"
                                    href="https://github.com/changyenna/Ment-To-be"
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

export default Modal3;
