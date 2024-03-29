import React from 'react';
import {
    Grid,
    GridItem,
    HStack,
    Button,
    VStack,
    Text,
    Box,
    Stack,
    useBreakpointValue
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Memories from '../../components/memories-comp/Memories';
import MusicPlayer from '../../components/music-player-comp/MusicPlayer';
// import Fade from 'react-reveal/Fade';
import PDF from '../../assets/pdf.png';
import GMAIL from '../../assets/gmail.png';

const SecondPanel = ({ className }) => {
    // const bgColors = useColorModeValue('light.100', 'dark.300');

    const templateAreas = useBreakpointValue({
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
                                <Link to="/contact">
                                    <Box>
                                        <img src={GMAIL} alt="Contact" />
                                    </Box>

                                    <Text fontWeight="normal">Contact</Text>
                                </Link>
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
                                    href="https://docs.google.com/document/d/1yZbLFwnkj3G_vOo46ojVfpv_4eJjNUBoSpNLe3iGX_k/edit?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Box>
                                        <img src={PDF} alt="pdf icon" />
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
            ></Stack>
        </Box>
    );
};

export default SecondPanel;
