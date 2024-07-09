import React from 'react';
// import { Link } from 'react-router-dom';
import {
    Box,
    HStack,
    VStack,
    Grid,
    GridItem,
    useColorModeValue,
    Text,
    Wrap,
    WrapItem,
    Tag,
    useBreakpointValue
} from '@chakra-ui/react';

import ME from '../assets/dukes2.jpg';
import PIN from '../assets/pin.png';

// const playSoundEffect = (soundEffect) => {
//     const audio = new Audio(soundEffect);
//     audio.play();
// };

const About = ({ theme }) => {
    const bgColors = useColorModeValue('light.100', 'dark.300');
    const titleBar = useColorModeValue('light.400', 'dark.800');
    const buttonColors = useColorModeValue('light.300', 'light.400');
    const textColors = useColorModeValue('light.1000', 'dark.100');

    const templateAreas = useBreakpointValue({
        lg: `"nav header"
        "nav tags"
        "main main"
        "footer footer"`,
        md: `"nav header"
        "nav tags"
        "main main"
        "footer footer"`,
        sm: `"nav nav"
        "header header"
        "tags tags"
        "main main"
        "footer footer"`
    });

    const gridTemplateRows = useBreakpointValue({
        lg: '120px 1fr 90px',
        md: '120px 1fr 90px',
        sm: '140px 1fr 60px 350px'
    });
    const gridTemplateColumns = useBreakpointValue({
        lg: '200px 1fr',
        md: '200px 1fr',
        sm: '150px'
    });

    return (
        <Box
            // bg="red"
            margin={{
                lg: '60px 0px 0',
                md: '60px 0px 0',
                sm: '60px 0px 0'
            }}
            padding={{
                lg: 5,
                md: 5,
                sm: 0
            }}
            maxWidth="800px"
            // minHeight="460px"
            // display="flex"
        >
            <Grid
                templateAreas={templateAreas}
                gridTemplateRows={gridTemplateRows}
                gridTemplateColumns={gridTemplateColumns}
                h="300px"
                gap="1"
                color={textColors}
                fontWeight="normal"
            >
                <GridItem pl="2" bg="transparent" area={'header'}>
                    <VStack align="left">
                        <Text
                            fontSize={{ lg: '5xl', md: '5xl', sm: '4xl' }}
                            fontWeight="black"
                        >
                            Isabelle Chang
                        </Text>
                        <VStack align="left">
                            <HStack>
                                <Box
                                    boxSize={{
                                        lg: 7,
                                        md: 7,
                                        sm: 4
                                    }}
                                >
                                    <img src={PIN} alt="" />
                                </Box>
                                <Text
                                    fontSize={{
                                        lg: 'md',
                                        md: 'md',
                                        sm: 'xs'
                                    }}
                                    fontWeight="normal"
                                >
                                    Software Engineer in Los Angeles
                                    Metropolitan Area
                                </Text>
                            </HStack>
                        </VStack>
                    </VStack>
                </GridItem>
                <GridItem align="left" pl="2" bg="transparent" area={'tags'}>
                    <Box maxW="400px" bg="transparent" margin="10px 10px 0px">
                        <Wrap spacing={2}>
                            <WrapItem>
                                <Tag
                                    size="sm"
                                    variant="solid"
                                    color={textColors}
                                    bg={titleBar}
                                >
                                    C++
                                </Tag>
                            </WrapItem>
                            <WrapItem>
                                <Tag
                                    size="sm"
                                    variant="solid"
                                    color={textColors}
                                    bg={titleBar}
                                >
                                    Python
                                </Tag>
                            </WrapItem>
                            <WrapItem>
                                <Tag
                                    size="sm"
                                    variant="solid"
                                    color={textColors}
                                    bg={titleBar}
                                >
                                    Javascript
                                </Tag>
                            </WrapItem>
                            <WrapItem>
                                <Tag
                                    size="sm"
                                    variant="solid"
                                    color={textColors}
                                    bg={titleBar}
                                >
                                    TypeScript
                                </Tag>
                            </WrapItem>
                            <WrapItem>
                                <Tag
                                    size="sm"
                                    variant="solid"
                                    color={textColors}
                                    bg={titleBar}
                                >
                                    HTML5/CSS3
                                </Tag>
                            </WrapItem>
                            <WrapItem>
                                <Tag
                                    size="sm"
                                    variant="solid"
                                    color={textColors}
                                    bg={titleBar}
                                >
                                    MERN
                                </Tag>
                            </WrapItem>
                            <WrapItem>
                                <Tag
                                    size="sm"
                                    variant="solid"
                                    color={textColors}
                                    bg={titleBar}
                                >
                                    GraphQL
                                </Tag>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </GridItem>
                <GridItem pl="2" bg="transparent" area={'nav'}>
                    <Box
                        width={{ lg: '200px', md: '200px', sm: '140px' }}
                        borderRadius="50%"
                        overflow="hidden"
                        ml={{ lg: -3, md: -3, sm: 1 }}
                    >
                        <img src={ME} alt="" />
                    </Box>
                </GridItem>
                <GridItem pl="2" bg="transparent" area={'main'}>
                    <VStack align="left">
                        <Text
                            fontSize={{ lg: '3xl', md: '3xl', sm: '2xl' }}
                            fontWeight="black"
                        >
                            Bio
                        </Text>
                        <Text fontSize={{ lg: 'md', md: 'md', sm: 'sm' }}>
                            Hello! My name is Isabelle, and I am currently
                            pursuing a Master's in Computer Science at Georgia
                            Tech. I've always been the kind of person who is
                            passionate about making creative ideas come to life
                            and have found a love for building projects with my
                            colleagues. When I'm not working on my programming
                            skills, I love discovering new music on Spotify,
                            hitting the gym, and spending time with my friends!
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem pl="2" bg="blue.300" area={'footer'}></GridItem>
            </Grid>
        </Box>
    );
};

export default About;

// #ffbde8 (255,189,232) - Lighter Shade: #ffdaf1 (255,218,241)
// #bde8ff (189,232,255) - Lighter Shade: #d8f0ff (216,240,255)
// #e8ffbd (232,255,189) - Lighter Shade: #f0ffdb (240,255,219)
// #ffe8bd (255,232,189) - Lighter Shade: #fff2d1 (255,242,209)
// #e8bdff (232,189,255) - Lighter Shade: #f4d1ff (244,209,255)
