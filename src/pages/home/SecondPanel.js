import React from 'react';
import {
    Grid,
    GridItem,
    HStack,
    Button,
    VStack,
    Text,
    Box,
    useColorModeValue,
    Stack,
    useBreakpointValue
} from '@chakra-ui/react';
import Memories from '../../components/memories-comp/Memories';
import MusicPlayer from '../../components/music-player-comp/MusicPlayer';
import Fade from 'react-reveal/Fade';
import PDF from '../../assets/pdf.png';
import GMAIL from '../../assets/gmail.png';

const SecondPanel = ({ className }) => {
    const bgColors = useColorModeValue('light.100', 'dark.300');

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
        <Box
            margin={{
                lg: '0px auto 150px',
                md: '0px auto 150px',
                sm: '40px 10px 150px'
            }}
            maxWidth="840px"
            className={className}
        >
            <Grid bg="green" templateAreas={templateAreas}>
                <GridItem bg="red" pl="0" area={'music'}>
                    {/* <Fade bottom> */}
                    <MusicPlayer />
                    {/* </Fade> */}
                </GridItem>
                <GridItem bg="blue" pl="0" area={'memories'}>
                    {/* <Fade bottom> */}
                    <Memories />
                    {/* </Fade> */}
                </GridItem>
                <GridItem bg="pink" mt={0} pl="0" area={'gmail'}>
                    <HStack spacing="0px">
                        {/* <Fade bottom> */}
                        <Button
                            variant="ghost"
                            width="100px"
                            height="100px"
                            as="a"
                        >
                            <VStack>
                                <a href="mailto:yenna.chang@gmail.com">
                                    <Box>
                                        <img src={GMAIL} alt="Compose Email" />
                                    </Box>

                                    <Text fontWeight="normal">Contact</Text>
                                </a>
                            </VStack>
                        </Button>
                        {/* </Fade> */}

                        {/* <Fade bottom> */}
                        <Button
                            variant="ghost"
                            width="100px"
                            height="100px"
                            as="a"
                        >
                            <VStack>
                                <a
                                    href="https://drive.google.com/file/d/1ssmMkihymg_eHK4hwYdHgI_EhGMWEWjo/view?usp=sharing"
                                    target="_blank"
                                >
                                    <Box>
                                        <img src={PDF} />
                                    </Box>
                                    <Text fontWeight="normal">Resume</Text>
                                </a>
                            </VStack>
                        </Button>
                        {/* </Fade> */}
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
            </Stack>
        </Box>
    );
};

export default SecondPanel;
