import React from 'react';
import { Box, Grid, GridItem, Center, useDisclosure } from '@chakra-ui/react';
// import { SiDevpost } from 'react-icons/si';
// import { PiFolderFill } from 'react-icons/pi';
// import { FaGithubAlt, FaRegHandPointRight } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
// import { pFolder } from '../../assets/pink-folder.png';
// import soundEffect1 from '../../assets/button_click1.mp3';
// import soundEffect2 from '../../assets/button_click_2.mp3';
// import { MdWbAuto } from 'react-icons/md';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Modal4 from './Modal4';
import Modal5 from './Modal5';
import Modal6 from './Modal6';
import Modal7 from './Modal7';
import Modal8 from './Modal8';
// import Footer from '../footer/Footer';

// const playSoundEffect = (soundEffect) => {
//     const audio = new Audio(soundEffect);
//     audio.play();
// };

const Projects = ({ theme }) => {
    // const bgColors = useColorModeValue('light.100', 'dark.300');
    // const titleBar = useColorModeValue('light.400', 'dark.800');
    // const buttonColors = useColorModeValue('light.300', 'light.400');
    // const textColors = useColorModeValue('light.1000', 'dark.100');

    const {
        isOpen: isOpenModal1,
        onOpen: onOpenModal1,
        onClose: onCloseModal1
    } = useDisclosure();

    const {
        isOpen: isOpenModal2,
        onOpen: onOpenModal2,
        onClose: onCloseModal2
    } = useDisclosure();

    const {
        isOpen: isOpenModal3,
        onOpen: onOpenModal3,
        onClose: onCloseModal3
    } = useDisclosure();

    const {
        isOpen: isOpenModal4,
        onOpen: onOpenModal4,
        onClose: onCloseModal4
    } = useDisclosure();

    const {
        isOpen: isOpenModal5,
        onOpen: onOpenModal5,
        onClose: onCloseModal5
    } = useDisclosure();

    const {
        isOpen: isOpenModal6,
        onOpen: onOpenModal6,
        onClose: onCloseModal6
    } = useDisclosure();

    const {
        isOpen: isOpenModal7,
        onOpen: onOpenModal7,
        onClose: onCloseModal7
    } = useDisclosure();

    const {
        isOpen: isOpenModal8,
        onOpen: onOpenModal8,
        onClose: onCloseModal8
    } = useDisclosure();

    return (
        <Box
            // bg="red"
            margin={{
                lg: '100px auto 0',
                md: '100px auto 0',
                sm: '100px auto 0'
            }}
            maxWidth="500px"
            minHeight="130px"
            // display="flex"
        >
            <Grid templateColumns="repeat(6, 1fr)" gap={9} rowGap={'100px'}>
                <GridItem colSpan={2} h="10" bg="transparent">
                    <Center>
                        <Modal8
                            isOpen={isOpenModal8}
                            onOpen={onOpenModal8}
                            onClose={onCloseModal8}
                        />
                    </Center>
                </GridItem>
                <GridItem colSpan={2} h="10" bg="transparent">
                    <Center>
                        <Modal7
                            isOpen={isOpenModal7}
                            onOpen={onOpenModal7}
                            onClose={onCloseModal7}
                        />
                    </Center>
                </GridItem>
                <GridItem colSpan={2} h="10" bg="transparent">
                    <Center>
                        <Modal5
                            isOpen={isOpenModal5}
                            onOpen={onOpenModal5}
                            onClose={onCloseModal5}
                        />
                    </Center>
                </GridItem>
                <GridItem colSpan={2} h="10" bg="transparent">
                    <Center>
                        <Modal6
                            isOpen={isOpenModal6}
                            onOpen={onOpenModal6}
                            onClose={onCloseModal6}
                        />
                    </Center>
                </GridItem>
                <GridItem colSpan={2} h="10" bg="transparent">
                    <Center>
                        <Modal2
                            isOpen={isOpenModal2}
                            onOpen={onOpenModal2}
                            onClose={onCloseModal2}
                        />
                    </Center>
                </GridItem>
                <GridItem colSpan={2} h="10" bg="transparent">
                    <Center>
                        <Modal3
                            isOpen={isOpenModal3}
                            onOpen={onOpenModal3}
                            onClose={onCloseModal3}
                        />
                    </Center>
                </GridItem>
                <GridItem colSpan={2} h="10" bg="transparent">
                    <Center>
                        <Modal4
                            isOpen={isOpenModal4}
                            onOpen={onOpenModal4}
                            onClose={onCloseModal4}
                        />
                    </Center>
                </GridItem>
                <GridItem colSpan={2} h="10" bg="transparent">
                    <Center>
                        <Modal1
                            isOpen={isOpenModal1}
                            onOpen={onOpenModal1}
                            onClose={onCloseModal1}
                        />
                    </Center>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Projects;

// #ffbde8 (255,189,232) - Lighter Shade: #ffdaf1 (255,218,241)
// #bde8ff (189,232,255) - Lighter Shade: #d8f0ff (216,240,255)
// #e8ffbd (232,255,189) - Lighter Shade: #f0ffdb (240,255,219)
// #ffe8bd (255,232,189) - Lighter Shade: #fff2d1 (255,242,209)
// #e8bdff (232,189,255) - Lighter Shade: #f4d1ff (244,209,255)
