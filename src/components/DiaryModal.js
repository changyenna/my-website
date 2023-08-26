import React from 'react';
import DIARY from '../assets/diary.png';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    RadioGroup,
    Stack,
    Radio,
    Button,
    Box,
    HStack,
    Text,
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Center,
    Spacer,
    useColorModeValue,
    Flex,
    UnorderedList,
    OrderedList,
    ListItem,
    ListIcon
} from '@chakra-ui/react';

import { AiOutlinePlayCircle } from 'react-icons/ai';

const DiaryModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState('inside');

    const bgColors = useColorModeValue('light.100', 'dark.300');
    const titleBar = useColorModeValue('light.400', 'dark.800');
    const buttonColors = useColorModeValue('black', 'white');
    const textColors = useColorModeValue('light.1000', 'dark.100');
    const button2Colors = useColorModeValue('light.200', 'dark.800');

    const btnRef = React.useRef(null);

    return (
        <>
            {/* <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
                <Stack direction="row">
                    <Radio value="inside">inside</Radio>
                    <Radio value="outside">outside</Radio>
                </Stack>
            </RadioGroup> */}
            <VStack>
                <Box>
                    <img
                        mt={3}
                        ref={btnRef}
                        onClick={onOpen}
                        src={DIARY}
                        alt=""
                    />
                </Box>
                <Text>Playlist Diary</Text>
            </VStack>

            <Modal
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}
                scrollBehavior={scrollBehavior}
            >
                <ModalOverlay />
                <ModalContent
                    border="2px solid black"
                    borderRadius="10px"
                    backgroundColor={bgColors}
                    minWidth="400px"
                    maxWidth="800px"
                >
                    <Box
                        borderTop="none"
                        borderRight="none"
                        borderLeft="none"
                        borderTopLeftRadius="8px"
                        borderTopRightRadius="8px"
                        borderBottom="2px solid black"
                        bg={titleBar}
                        textAlign="center"
                    >
                        <ModalHeader fontSize="sm">Playlist Diary</ModalHeader>
                    </Box>
                    <Box
                        className="close"
                        position="absolute"
                        right="15px"
                        top="15px"
                        cursor="pointer"
                        height="20px"
                        width="20px"
                        borderRadius="50px"
                        bg={'light.300'}
                        onClick={onClose}
                        // onClick={() => playSoundEffect(soundEffect2)}
                    ></Box>

                    {/* <ModalCloseButton /> */}
                    <ModalBody>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Flex
                                            align="center"
                                            justify="space-between"
                                            w="100%"
                                        >
                                            <Flex align="center">
                                                {/* <Box
                                                    mr={4}
                                                    width="30px"
                                                    height="30px"
                                                >
                                                    <img
                                                        src={IMG1}
                                                        alt="sunset lover"
                                                    />
                                                </Box> */}
                                                <Box
                                                    as="span"
                                                    flex="1"
                                                    textAlign="left"
                                                >
                                                    sunset lover - the sun sets
                                                    longer where i am from
                                                </Box>
                                            </Flex>
                                            <AccordionIcon />
                                        </Flex>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    My playlist "sunset lover" was originally a
                                    playlist that I made for a local boba shop
                                    that I worked my first year of college. It
                                    was a very classic, no-brainer summer
                                    playlist filled with your typical crowd
                                    pleasers and nostalgic, annual repeats.
                                    Occasionally, while I was working, I would
                                    sometimes catch customers doing a silly
                                    little dance while picking out their drink,
                                    and it would make my day. After that summer
                                    though, I went abroad for a while, and I
                                    ended up continuing to listen this playlist
                                    for fun. And I realized it was because it
                                    reminded me of home. While I was abroad, I
                                    was meeting people from all over the world
                                    and whenever I would mention that I was from
                                    California, they would always react with
                                    this impressed envy, saying things like,
                                    "Oh, you're a Cali girl!" and would express
                                    this admiration for its reputation, in which
                                    I was not used to hearing so often. It was a
                                    reminder that the place where I was from is
                                    one of the most coveted places in the world.
                                    It made me appreciate the simple joys of
                                    living in my hometown, like driving through
                                    the suburbs while the sun is setting. Now,
                                    this playlist is one of my most frequently
                                    updated playlists—it's my love letter to
                                    California.
                                    <Flex justify="flex-end">
                                        <a
                                            href="https://open.spotify.com/playlist/1Fatre6Ck1niz0v4hOtmAf?si=821ee4244db24263"
                                            target="_blank" // Open in a new tab
                                            rel="noopener noreferrer" // Recommended for security reasons
                                        >
                                            <Button
                                                rightIcon={
                                                    <AiOutlinePlayCircle />
                                                }
                                                color={buttonColors}
                                            >
                                                Listen
                                            </Button>
                                        </a>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Flex
                                            align="center"
                                            justify="space-between"
                                            w="100%"
                                        >
                                            <Flex align="center">
                                                {/* <Box
                                                    mr={4}
                                                    width="30px"
                                                    height="30px"
                                                >
                                                    <img
                                                        src={IMG1}
                                                        alt="sunset lover"
                                                    />
                                                </Box> */}
                                                <Box
                                                    as="span"
                                                    flex="1"
                                                    textAlign="left"
                                                >
                                                    the art of making a playlist
                                                </Box>
                                            </Flex>
                                            <AccordionIcon />
                                        </Flex>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    There are many different ways that you can
                                    make a playlist. But in my opinion, these
                                    are the three main ones.
                                    <OrderedList
                                        spacing={2}
                                        pl={2}
                                        mt={1}
                                        mb={2}
                                    >
                                        <ListItem>
                                            Genre-Based: Curating a playlist
                                            based on genre like R&B, pop, edm,
                                            hip-hop, etc.
                                        </ListItem>
                                        <ListItem>
                                            Mood-Based: Curating a playlist
                                            based on moods like relaxing, happy,
                                            or energetic
                                        </ListItem>
                                        <ListItem>
                                            Lyric-Based: Curating a playlist
                                            based on the lyrics of the songs
                                            like romantic, sad, or angry
                                        </ListItem>
                                    </OrderedList>
                                    A really good one does all three.
                                    <Spacer></Spacer>
                                    For example,
                                    <Spacer></Spacer>
                                    <UnorderedList
                                        spacing={2}
                                        pl={2}
                                        mt={1}
                                        mb={2}
                                    >
                                        <ListItem>
                                            My playlist "you got me spinnin..."
                                            is based on both lyrics ("feeling
                                            myself") and mood (getting ready),
                                            but the genre ranges from pop, to
                                            r&b to hip-hop.
                                        </ListItem>
                                        <ListItem>
                                            My playlist "whiplash wonderland" is
                                            based on genre (edm) and mood
                                            (euphoric), but the lyrical themes
                                            vary from song to song.
                                        </ListItem>
                                        <ListItem>
                                            My playlist "duo" does all three.
                                            The genre (soft pop), mood (chill
                                            late night), and the
                                            lyrics(friendship) are consitient
                                            throughout the whole playlist.
                                        </ListItem>
                                    </UnorderedList>
                                    "Duo" is about a good friend of mine; it's a
                                    playlist meant for the listening of someone
                                    else. It's always good when you have a muse.
                                    The playlist opens with the song "Best
                                    Friend" by Rex Orange County and is followed
                                    by a track called "alongtheway." which is
                                    the audio of a seems to be a man walking
                                    into his house after a long day. He takes
                                    off his shoes and immediately walks over to
                                    his casset player to play a song. The song
                                    we don't know, but we can imagine it's a
                                    song that brings him comfort after a long
                                    day.
                                    <Flex justify="flex-end">
                                        <a
                                            href="https://open.spotify.com/playlist/1aWFpbaZ5LQrfGHMtsY2AL?si=9b26e1da34134230"
                                            target="_blank" // Open in a new tab
                                            rel="noopener noreferrer" // Recommended for security reasons
                                        >
                                            <Button
                                                rightIcon={
                                                    <AiOutlinePlayCircle />
                                                }
                                                color={buttonColors}
                                            >
                                                Listen
                                            </Button>
                                        </a>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Flex
                                            align="center"
                                            justify="space-between"
                                            w="100%"
                                        >
                                            <Flex align="center">
                                                {/* <Box
                                                    mr={4}
                                                    width="30px"
                                                    height="30px"
                                                >
                                                    <img
                                                        src={IMG1}
                                                        alt="sunset lover"
                                                    />
                                                </Box> */}
                                                <Box
                                                    as="span"
                                                    flex="1"
                                                    textAlign="left"
                                                >
                                                    Memory Consolidation
                                                </Box>
                                            </Flex>
                                            <AccordionIcon />
                                        </Flex>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    There are many different ways that you can
                                    make a playlist. But in my opinion, these
                                    are the three main ones.
                                    <OrderedList
                                        spacing={2}
                                        pl={2}
                                        mt={1}
                                        mb={2}
                                    >
                                        <ListItem>
                                            Genre-Based: Curating a playlist
                                            based on genre like R&B, pop, edm,
                                            hip-hop, etc.
                                        </ListItem>
                                        <ListItem>
                                            Mood-Based: Curating a playlist
                                            based on moods like relaxing, happy,
                                            or energetic
                                        </ListItem>
                                        <ListItem>
                                            Lyric-Based: Curating a playlist
                                            based on the lyrics of the songs
                                            like romantic, sad, or angry
                                        </ListItem>
                                    </OrderedList>
                                    A really good one does all three.
                                    <Spacer></Spacer>
                                    For example,
                                    <Spacer></Spacer>
                                    <UnorderedList
                                        spacing={2}
                                        pl={2}
                                        mt={1}
                                        mb={2}
                                    >
                                        <ListItem>
                                            My playlist "you got me spinnin..."
                                            is based on both lyrics ("feeling
                                            myself") and mood (getting ready),
                                            but the genre ranges from pop, to
                                            r&b to hip-hop.
                                        </ListItem>
                                        <ListItem>
                                            My playlist "whiplash wonderland" is
                                            based on genre (edm) and mood
                                            (euphoric), but the lyrical themes
                                            vary from song to song.
                                        </ListItem>
                                        <ListItem>
                                            My playlist "duo" does all three.
                                            The genre (soft pop), mood (chill
                                            late night), and the
                                            lyrics(friendship) are consitient
                                            throughout the whole playlist.
                                        </ListItem>
                                    </UnorderedList>
                                    "Duo" is about a good friend of mine; it's a
                                    playlist meant for the listening of someone
                                    else. It's always good when you have a muse.
                                    The playlist opens with the song "Best
                                    Friend" by Rex Orange County and is followed
                                    by a track called "alongtheway." which is
                                    the audio of a seems to be a man walking
                                    into his house after a long day. He takes
                                    off his shoes and immediately walks over to
                                    his cassette player to play a song. The song
                                    we don't know, but we can imagine it's a
                                    song that brings him comfort after a long
                                    day.
                                    <Flex justify="flex-end">
                                        <a
                                            href="https://open.spotify.com/playlist/1aWFpbaZ5LQrfGHMtsY2AL?si=9b26e1da34134230"
                                            target="_blank" // Open in a new tab
                                            rel="noopener noreferrer" // Recommended for security reasons
                                        >
                                            <Button
                                                rightIcon={
                                                    <AiOutlinePlayCircle />
                                                }
                                                color={buttonColors}
                                            >
                                                Listen
                                            </Button>
                                        </a>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default DiaryModal;
