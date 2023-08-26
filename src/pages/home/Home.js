// import React, { useState, useEffect } from 'react';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// import Fade from 'react-reveal/Fade';
// import {
//     Box,
//     Button,
//     VStack,
//     HStack,
//     useColorModeValue,
//     Link as ChakraLink,
//     Text,
//     Stack,
//     Icon,
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     useDisclosure,
//     useMediaQuery,
//     Grid,
//     GridItem,
//     useBreakpointValue,
//     IconButton,
//     useColorMode
// } from '@chakra-ui/react';
// import { FaEnvelope } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// // import DIARY from '../../assets/diary.png';

// import PDF from '../../assets/pdf.png';
// import GMAIL from '../../assets/gmail.png';

// import soundEffect1 from '../../assets/button_click_1.mp3';
// import soundEffect2 from '../../assets/button_click_2.mp3';

// // import LandingPageNavBarCore from '../../nav-bar/LandingPageNavBarCore';
// import HomeNavBar from '../../nav-bar/HomeNavBar';
// import MessageNavBar from '../../nav-bar/MessageNavBar';
// import MusicPlayer from '../../components/music-player-comp/MusicPlayer';
// import Memories from '../../components/memories-comp/Memories';
// import DiaryModal from '../../components/DiaryModal';
// import Slideshow from '../../components/memories-comp/Slideshow';
// // import MusicPlayerTab from '../../components/music-player-comp/MusicPlayerTab';
// // import PlayerCore from '../../components/music-player-comp/PlayerCore';

// const playSoundEffect = (soundEffect) => {
//     const audio = new Audio(soundEffect);
//     audio.play();
// };

// const Home = () => {
// const bgColors = useColorModeValue('light.100', 'dark.300');
// const titleBar = useColorModeValue('light.400', 'dark.800');
// const buttonColors = useColorModeValue('light.300', 'dark.200');
// const textColors = useColorModeValue('light.1000', 'dark.100');

// const { colorMode } = useColorMode();
//     const [isLargeDevice] = useMediaQuery('(min-width: 960px)');

//     const [showBox, setShowBox] = useState(true);
//     const [showLeft, setShowLeft] = useState(false);
//     const [showRight, setShowRight] = useState(true);

//     const handleClick = () => {
//         if (showBox) {
//             setShowBox(false);
//             setShowLeft(true);
//             setShowRight(false);
//         } else {
//             setShowBox(true);
//             setShowLeft(false);
//             setShowRight(true);
//         }
//     };

//     const templateAreas = useBreakpointValue({
//         lg: `"memories music"
//         "gmail music"
//         "pdf music"
//         "pdf music"`,
//         lg: `"memories music"
//         "gmail music"
//         "pdf music"
//         "pdf music"`,
//         sm: `"music music"
//         "memories memories"
//         "gmail null"
//         "pdf null"`
//     });

//     const {
//         isOpen: isOpenModal,
//         onOpen: onOpenModal,
//         onClose: onCloseModal
//     } = useDisclosure();

//     return (
//         <>
//             <MessageNavBar display_return={true} />
//             {isLargeDevice && (
//                 <>
//                     {showBox ? (
//                         <Fade bottom>
//                             <Box
//                                 border="2px solid black"
//                                 // minWidth="50px"
//                                 maxWidth="800px"
//                                 minHeight="600px"
//                                 height={{
//                                     lg: '600px',
//                                     md: '600px',
//                                     sm: '700px'
//                                 }}
//                                 backgroundColor={bgColors}
//                                 position="relative"
//                                 margin={{
//                                     lg: '10px auto 0px',
//                                     md: '10px 20px 0',
//                                     sm: '10px 20px 0'
//                                 }}
//                                 borderRadius="10px"
//                             >
//                                 <Box
//                                     borderTop="none"
//                                     borderRight="none"
//                                     borderLeft="none"
//                                     borderTopLeftRadius="8px"
//                                     borderTopRightRadius="8px"
//                                     borderBottom="2px solid black"
//                                     width="100%"
//                                     height="40px"
//                                     bg={titleBar}
//                                 >
//                                     <HomeNavBar display_return={true} />
//                                 </Box>
//                             </Box>
//                         </Fade>
//                     ) : (
//                         <Box
//                             margin={{
//                                 lg: '0px auto 150px',
//                                 md: '0px auto 150px',
//                                 sm: '40px 10px 150px'
//                             }}
//                             maxWidth="840px"
//                             // bg="red"
//                         >
//                             <Grid
//                                 templateAreas={templateAreas}
//                                 // gridTemplateRows={'50px 1fr 30px'}
//                                 // gridTemplateColumns={'150px 1fr'}
//                                 // h="200px"
//                                 // gap="1"
//                                 // color="blackAlpha.700"
//                                 // fontWeight="bold"
//                             >
//                                 <GridItem pl="0" area={'music'}>
//                                     <Fade bottom>
//                                         <MusicPlayer />
//                                     </Fade>
//                                 </GridItem>
//                                 <GridItem pl="0" area={'memories'}>
//                                     <Fade bottom>
//                                         <Memories />
//                                     </Fade>
//                                 </GridItem>
//                                 <GridItem mt={0} pl="0" area={'gmail'}>
//                                     <HStack spacing="0px">
//                                         <Fade bottom>
//                                             <Button
//                                                 variant="ghost"
//                                                 width="100px"
//                                                 height="100px"
//                                                 // _hover={{ backgroundColor: 'red' }}
//                                                 as="a" // Use the "as" prop to change the button's root element to anchor tag
//                                             >
//                                                 <VStack>
//                                                     <a href="mailto:yenna.chang@gmail.com">
//                                                         <Box>
//                                                             <img
//                                                                 src={GMAIL}
//                                                                 alt="Compose Email"
//                                                             />
//                                                         </Box>

//                                                         <Text fontWeight="normal">
//                                                             Contact
//                                                         </Text>
//                                                     </a>
//                                                 </VStack>
//                                             </Button>
//                                         </Fade>

//                                         <Fade bottom>
//                                             <Button
//                                                 variant="ghost"
//                                                 width="100px"
//                                                 height="100px"
//                                                 // _hover={{ backgroundColor: 'red' }}
//                                                 as="a" // Use the "as" prop to change the button's root element to anchor tag
//                                             >
//                                                 <VStack>
//                                                     <a
//                                                         href="https://drive.google.com/file/d/1ssmMkihymg_eHK4hwYdHgI_EhGMWEWjo/view?usp=sharing"
//                                                         target="_blank"
//                                                     >
//                                                         <Box>
//                                                             <img src={PDF} />
//                                                         </Box>
//                                                         <Text fontWeight="normal">
//                                                             Resume
//                                                         </Text>
//                                                     </a>
//                                                 </VStack>
//                                             </Button>
//                                         </Fade>
//                                     </HStack>
//                                 </GridItem>
//                                 <GridItem
//                                     mt={3}
//                                     pl="300"
//                                     area={'pdf'}
//                                 ></GridItem>
//                             </Grid>
//                             <Stack
//                                 marginLeft={{ lg: '0px', md: '0px', sm: '0px' }}
//                                 direction={{
//                                     lg: 'row',
//                                     md: 'row',
//                                     sm: 'column'
//                                 }}
//                                 spacing={{ lg: '0px', md: '0px', sm: '0px' }}
//                             >
//                                 <HStack></HStack>

//                                 {/* <Box
//                         margin={{
//                             lg: '0px auto 150px',
//                             md: '0px auto 150px',
//                             sm: '70px 10px 150px'
//                         }}
//                         minWidth="100px"
//                         minHeight="50px"
//                         maxWidth="100px"
//                         maxHeight="50px"
//                         // bg="red"
//                     >
//                         <DiaryModal
//                             isOpen={isOpenModal}
//                             onOpen={onOpenModal}
//                             onClose={onCloseModal}
//                         />
//                     </Box> */}
//                             </Stack>
//                         </Box>
//                     )}

// <IconButton
//     position="absolute"
//     variant="primary"
//     top="50%"
//     right={showBox ? '2%' : undefined}
//     left={!showBox ? '2%' : undefined}
//     bg="transparent"
//     borderRadius="50px"
//     width="50px"
//     height="50px"
//     fontSize="30px"
//     _hover={{
//         bg:
//             colorMode === 'light'
//                 ? 'blackAlpha.100'
//                 : 'whiteAlpha.100'
//     }}
//     icon={showBox ? <FiChevronRight /> : <FiChevronLeft />}
//     onClick={handleClick}
// />
//                 </>
//             )}
// {!isLargeDevice && (
//     <>
//         <Fade bottom>
//             <Box
//                 border="2px solid black"
//                 // minWidth="50px"
//                 maxWidth="800px"
//                 minHeight="600px"
//                 height={{
//                     lg: '600px',
//                     md: '600px',
//                     sm: '700px'
//                 }}
//                 backgroundColor={bgColors}
//                 position="relative"
//                 margin={{
//                     lg: '10px auto 0px',
//                     md: '10px 20px 0',
//                     sm: '10px 20px 0'
//                 }}
//                 borderRadius="10px"
//             >
//                 <Box
//                     borderTop="none"
//                     borderRight="none"
//                     borderLeft="none"
//                     borderTopLeftRadius="8px"
//                     borderTopRightRadius="8px"
//                     borderBottom="2px solid black"
//                     width="100%"
//                     height="40px"
//                     bg={titleBar}
//                 >
//                     <HomeNavBar display_return={true} />
//                 </Box>
//             </Box>
//         </Fade>

//         <Box
//             margin={{
//                 lg: '40px auto 150px',
//                 md: '40px auto 150px',
//                 sm: '40px 10px 150px'
//             }}
//             maxWidth="840px"
//             // bg="red"
//         >
//             <Grid
//                 templateAreas={templateAreas}
//                 // gridTemplateRows={'50px 1fr 30px'}
//                 // gridTemplateColumns={'150px 1fr'}
//                 // h="200px"
//                 // gap="1"
//                 // color="blackAlpha.700"
//                 // fontWeight="bold"
//             >
//                 <GridItem pl="0" area={'music'}>
//                     <Fade bottom>
//                         <MusicPlayer />
//                     </Fade>
//                 </GridItem>
//                 <GridItem pl="0" area={'memories'}>
//                     <Fade bottom>
//                         <Memories />
//                     </Fade>
//                 </GridItem>
//                 <GridItem mt={0} pl="0" area={'gmail'}>
//                     <HStack spacing="0px">
//                         <Fade bottom>
//                             <Button
//                                 variant="ghost"
//                                 width="100px"
//                                 height="100px"
//                                 // _hover={{ backgroundColor: 'red' }}
//                                 as="a" // Use the "as" prop to change the button's root element to anchor tag
//                             >
//                                 <VStack>
//                                     <a href="mailto:yenna.chang@gmail.com">
//                                         <Box>
//                                             <img
//                                                 src={GMAIL}
//                                                 alt="Compose Email"
//                                             />
//                                         </Box>

//                                         <Text fontWeight="normal">
//                                             Contact
//                                         </Text>
//                                     </a>
//                                 </VStack>
//                             </Button>
//                         </Fade>

//                         <Fade bottom>
//                             <Button
//                                 variant="ghost"
//                                 width="100px"
//                                 height="100px"
//                                 // _hover={{ backgroundColor: 'red' }}
//                                 as="a" // Use the "as" prop to change the button's root element to anchor tag
//                             >
//                                 <VStack>
//                                     <a
//                                         href="https://drive.google.com/file/d/1ssmMkihymg_eHK4hwYdHgI_EhGMWEWjo/view?usp=sharing"
//                                         target="_blank"
//                                     >
//                                         <Box>
//                                             <img src={PDF} />
//                                         </Box>
//                                         <Text fontWeight="normal">
//                                             Resume
//                                         </Text>
//                                     </a>
//                                 </VStack>
//                             </Button>
//                         </Fade>
//                     </HStack>
//                 </GridItem>
//                 <GridItem mt={3} pl="300" area={'pdf'}></GridItem>
//             </Grid>
//             <Stack
//                 marginLeft={{ lg: '0px', md: '0px', sm: '0px' }}
//                 direction={{
//                     lg: 'row',
//                     md: 'row',
//                     sm: 'column'
//                 }}
//                 spacing={{ lg: '0px', md: '0px', sm: '0px' }}
//             >
//                 <HStack></HStack>

//                 {/* <Box
//         margin={{
//             lg: '0px auto 150px',
//             md: '0px auto 150px',
//             sm: '70px 10px 150px'
//         }}
//         minWidth="100px"
//         minHeight="50px"
//         maxWidth="100px"
//         maxHeight="50px"
//         // bg="red"
//     >
//         <DiaryModal
//             isOpen={isOpenModal}
//             onOpen={onOpenModal}
//             onClose={onCloseModal}
//         />
//     </Box> */}
//             </Stack>
//         </Box>
//     </>
// )}
//         </>
//     );
// };
// export default Home;

// import React from 'react';
// import { SlidingPanelProvider, useSlidingPanel } from './SlidingPanelContext'; // Make sure the import path is correct
// import FirstPanel from './FirstPanel';
// import SecondPanel from './SecondPanel';
// import './Home.css'; // Import the CSS file for styling

// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// import Fade from 'react-reveal/Fade';
// import { Box, IconButton, useColorMode } from '@chakra-ui/react';

// const Home = () => {
//     const { showPanel, togglePanel } = useSlidingPanel();
//     const { colorMode } = useColorMode();

//     return (
//         <SlidingPanelProvider>
//             <Box position="relative">
//                 <FirstPanel />
//                 <SecondPanel className={showPanel ? 'show-panel' : ''} />
//                 <IconButton
//                     position="absolute"
//                     variant="primary"
//                     top="50%"
//                     right={showPanel ? '2%' : undefined}
//                     left={!showPanel ? '2%' : undefined}
//                     bg="transparent"
//                     borderRadius="50px"
//                     width="50px"
//                     height="50px"
//                     fontSize="30px"
//                     _hover={{
//                         bg:
//                             colorMode === 'light'
//                                 ? 'blackAlpha.100'
//                                 : 'whiteAlpha.100'
//                     }}
//                     icon={showPanel ? <FiChevronRight /> : <FiChevronLeft />}
//                     onClick={togglePanel}
//                 />
//             </Box>
//         </SlidingPanelProvider>
//     );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';
import {
    Box,
    Button,
    VStack,
    HStack,
    useColorModeValue,
    Link as ChakraLink,
    Text,
    Stack,
    Icon,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useMediaQuery,
    Grid,
    GridItem,
    useBreakpointValue,
    IconButton,
    useColorMode
} from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import DIARY from '../../assets/diary.png';

import PDF from '../../assets/pdf.png';
import GMAIL from '../../assets/gmail.png';

import soundEffect1 from '../../assets/button_click_1.mp3';
import soundEffect2 from '../../assets/button_click_2.mp3';

import LandingPageNavBarCore from '../../nav-bar/LandingPageNavBarCore';
import HomeNavBar from '../../nav-bar/HomeNavBar';
// import MessageNavBar from '../../nav-bar/MessageNavBar';
import MusicPlayer from '../../components/music-player-comp/MusicPlayer';
import Memories from '../../components/memories-comp/Memories';
import DiaryModal from '../../components/DiaryModal';
import Slideshow from '../../components/memories-comp/Slideshow';
// import MusicPlayerTab from '../../components/music-player-comp/MusicPlayerTab';
// import PlayerCore from '../../components/music-player-comp/PlayerCore';

const Home = () => {
    const bgColors = useColorModeValue('light.100', 'dark.300');
    const titleBar = useColorModeValue('light.400', 'dark.800');
    const buttonColors = useColorModeValue('light.300', 'dark.200');
    const textColors = useColorModeValue('light.1000', 'dark.100');

    const [isLargeDevice] = useMediaQuery('(min-width: 960px)');

    const { colorMode } = useColorMode();
    const [showBox, setShowBox] = useState(true);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    // const {
    //     isOpen: isOpenModal,
    //     onOpen: onOpenModal,
    //     onClose: onCloseModal
    // } = useDisclosure();

    const handleClick = () => {
        setShowBox(!showBox);
        setShowLeft(!showLeft);
        setShowRight(!showRight);
    };

    const templateAreas = useBreakpointValue({
        lg: `"memories music"
        "gmail music"
        "pdf music"
        "pdf music"`,
        lg: `"memories music"
        "gmail music"
        "pdf music"
        "pdf music"`,
        sm: `"music music"
        "memories memories"
        "gmail null"
        "pdf null"`
    });

    return (
        <>
            <LandingPageNavBarCore display_return={true} />

            {isLargeDevice && (
                <>
                    <Box
                        position="relative"
                        transition="transform 0.3s ease-in-out"
                        transform={
                            showRight ? 'translateX(0)' : 'translateX(-100%)'
                        }
                    >
                        <Fade bottom>
                            <Box
                                border="2px solid black"
                                // minWidth="50px"
                                maxWidth="800px"
                                minHeight="600px"
                                height={{
                                    lg: '600px',
                                    md: '600px',
                                    sm: '700px'
                                }}
                                backgroundColor={bgColors}
                                position="relative"
                                margin={{
                                    lg: '10px auto 100px',
                                    md: '10px 20px 100px',
                                    sm: '10px 20px 0px'
                                }}
                                borderRadius="10px"
                            >
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
                                    <HomeNavBar display_return={true} />
                                </Box>
                            </Box>
                        </Fade>
                    </Box>

                    <Box
                        position="relative"
                        transition="transform 0.3s ease-in-out"
                        transform={
                            showLeft ? 'translateX(0)' : 'translateX(100%)'
                        }
                    >
                        <Box
                            // margin={{
                            //     lg: '0px auto 150px',
                            //     md: '0px auto 150px',
                            //     sm: '40px 10px 150px'
                            // }}

                            margin={{
                                lg: '-700px auto 100px',
                                md: '-700px 20px 100px',
                                sm: '10px 20px 100px'
                            }}
                            maxWidth="840px"
                            // bg="red"
                        >
                            <Grid
                                templateAreas={templateAreas}
                                // gridTemplateRows={'50px 1fr 30px'}
                                // gridTemplateColumns={'150px 1fr'}
                                // h="200px"
                                // gap="1"
                                // color="blackAlpha.700"
                                // fontWeight="bold"
                                // bg="red"
                            >
                                <GridItem pl="0" area={'music'}>
                                    <MusicPlayer />
                                </GridItem>
                                <GridItem pl="0" area={'memories'}>
                                    <Memories />
                                </GridItem>
                                <GridItem mt={0} pl="0" area={'gmail'}>
                                    <HStack spacing="0px">
                                        <Button
                                            variant="ghost"
                                            width="100px"
                                            height="100px"
                                            // _hover={{ backgroundColor: 'red' }}
                                            as="a" // Use the "as" prop to change the button's root element to anchor tag
                                        >
                                            <VStack>
                                                <a href="mailto:yenna.chang@gmail.com">
                                                    <Box>
                                                        <img
                                                            src={GMAIL}
                                                            alt="Compose Email"
                                                        />
                                                    </Box>

                                                    <Text fontWeight="normal">
                                                        Contact
                                                    </Text>
                                                </a>
                                            </VStack>
                                        </Button>

                                        <Button
                                            variant="ghost"
                                            width="100px"
                                            height="100px"
                                            // _hover={{ backgroundColor: 'red' }}
                                            as="a" // Use the "as" prop to change the button's root element to anchor tag
                                        >
                                            <VStack>
                                                <a
                                                    href="https://drive.google.com/file/d/1ssmMkihymg_eHK4hwYdHgI_EhGMWEWjo/view?usp=sharing"
                                                    target="_blank"
                                                >
                                                    <Box>
                                                        <img src={PDF} />
                                                    </Box>
                                                    <Text fontWeight="normal">
                                                        Resume
                                                    </Text>
                                                </a>
                                            </VStack>
                                        </Button>
                                    </HStack>
                                </GridItem>
                                <GridItem
                                    mt={3}
                                    pl="300"
                                    area={'pdf'}
                                ></GridItem>
                            </Grid>
                            <Stack
                                marginLeft={{ lg: '0px', md: '0px', sm: '0px' }}
                                direction={{
                                    lg: 'row',
                                    md: 'row',
                                    sm: 'column'
                                }}
                                spacing={{ lg: '0px', md: '0px', sm: '0px' }}
                            >
                                <HStack></HStack>
                            </Stack>
                        </Box>
                    </Box>

                    {/* <Box
                        margin={{
                            lg: '0px auto 150px',
                            md: '0px auto 150px',
                            sm: '70px 10px 150px'
                        }}
                        minWidth="100px"
                        minHeight="50px"
                        maxWidth="100px"
                        maxHeight="50px"
                        // bg="red"
                    >
                        <DiaryModal
                            isOpen={isOpenModal}
                            onOpen={onOpenModal}
                            onClose={onCloseModal}
                        />
                    </Box> */}

                    <IconButton
                        position="absolute"
                        variant="primary"
                        top="50%"
                        right={showBox ? '2%' : undefined}
                        left={!showBox ? '2%' : undefined}
                        bg="transparent"
                        borderRadius="50px"
                        width="50px"
                        height="50px"
                        fontSize="30px"
                        _hover={{
                            bg:
                                colorMode === 'light'
                                    ? 'blackAlpha.100'
                                    : 'whiteAlpha.100'
                        }}
                        icon={showBox ? <FiChevronRight /> : <FiChevronLeft />}
                        onClick={handleClick}
                    />
                </>
            )}

            {!isLargeDevice && (
                <>
                    <Fade bottom>
                        <Box
                            border="2px solid black"
                            // minWidth="50px"
                            maxWidth="800px"
                            minHeight="600px"
                            height={{
                                lg: '600px',
                                md: '600px',
                                sm: '700px'
                            }}
                            backgroundColor={bgColors}
                            position="relative"
                            margin={{
                                lg: '10px auto 0px',
                                md: '10px 20px 0',
                                sm: '10px 20px 0'
                            }}
                            borderRadius="10px"
                        >
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
                                <HomeNavBar display_return={true} />
                            </Box>
                        </Box>
                    </Fade>

                    <Box
                        margin={{
                            lg: '40px auto 150px',
                            md: '40px auto 150px',
                            sm: '40px 10px 150px'
                        }}
                        maxWidth="840px"
                        // bg="red"
                    >
                        <Grid
                            templateAreas={templateAreas}
                            // gridTemplateRows={'50px 1fr 30px'}
                            // gridTemplateColumns={'150px 1fr'}
                            // h="200px"
                            // gap="1"
                            // color="blackAlpha.700"
                            // fontWeight="bold"
                        >
                            <GridItem pl="0" area={'music'}>
                                <Fade bottom>
                                    <MusicPlayer />
                                </Fade>
                            </GridItem>
                            <GridItem pl="0" area={'memories'}>
                                <Fade bottom>
                                    <Memories />
                                </Fade>
                            </GridItem>
                            <GridItem mt={0} pl="0" area={'gmail'}>
                                <HStack spacing="0px">
                                    <Fade bottom>
                                        <Button
                                            variant="ghost"
                                            width="100px"
                                            height="100px"
                                            // _hover={{ backgroundColor: 'red' }}
                                            as="a" // Use the "as" prop to change the button's root element to anchor tag
                                        >
                                            <VStack>
                                                <a href="mailto:yenna.chang@gmail.com">
                                                    <Box>
                                                        <img
                                                            src={GMAIL}
                                                            alt="Compose Email"
                                                        />
                                                    </Box>

                                                    <Text fontWeight="normal">
                                                        Contact
                                                    </Text>
                                                </a>
                                            </VStack>
                                        </Button>
                                    </Fade>

                                    <Fade bottom>
                                        <Button
                                            variant="ghost"
                                            width="100px"
                                            height="100px"
                                            // _hover={{ backgroundColor: 'red' }}
                                            as="a" // Use the "as" prop to change the button's root element to anchor tag
                                        >
                                            <VStack>
                                                <a
                                                    href="https://drive.google.com/file/d/1ssmMkihymg_eHK4hwYdHgI_EhGMWEWjo/view?usp=sharing"
                                                    target="_blank"
                                                >
                                                    <Box>
                                                        <img src={PDF} />
                                                    </Box>
                                                    <Text fontWeight="normal">
                                                        Resume
                                                    </Text>
                                                </a>
                                            </VStack>
                                        </Button>
                                    </Fade>
                                </HStack>
                            </GridItem>
                            <GridItem mt={3} pl="300" area={'pdf'}></GridItem>
                        </Grid>
                        <Stack
                            marginLeft={{ lg: '0px', md: '0px', sm: '0px' }}
                            direction={{
                                lg: 'row',
                                md: 'row',
                                sm: 'column'
                            }}
                            spacing={{ lg: '0px', md: '0px', sm: '0px' }}
                        >
                            <HStack></HStack>

                            {/* <Box
        margin={{
            lg: '0px auto 150px',
            md: '0px auto 150px',
            sm: '70px 10px 150px'
        }}
        minWidth="100px"
        minHeight="50px"
        maxWidth="100px"
        maxHeight="50px"
        // bg="red"
    >
        <DiaryModal
            isOpen={isOpenModal}
            onOpen={onOpenModal}
            onClose={onCloseModal}
        />
    </Box> */}
                        </Stack>
                    </Box>
                </>
            )}
        </>
    );
};

export default Home;
