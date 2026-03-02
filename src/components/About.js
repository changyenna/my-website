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
    const [scrollBehavior, setScrollBehavior] = React.useState('inside');
    
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
            overflow={scrollBehavior === 'inside' ? 'auto' : 'hidden'}
            // bg="red"
            margin={{
                lg: '60px auto 0',
                md: '60px auto 0',
                sm: '60px auto 0'
            }}
            padding={{
                lg: 5,
                md: 5,
                sm: 0
            }}
            width="100%"
            height={{
                lg: '97%',
                md: '84%',
                sm: '107%'
            }}
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            maxWidth="800px"
            // minHeight="460px"
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
                                    Programmer Analyst in Southern California
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
                                    C#
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
                                    React.js
                                </Tag>
                            </WrapItem>
                            <WrapItem>
                                <Tag
                                    size="sm"
                                    variant="solid"
                                    color={textColors}
                                    bg={titleBar}
                                >
                                    JavaScript
                                </Tag>
                            </WrapItem>
                            <WrapItem>
                                <Tag
                                    size="sm"
                                    variant="solid"
                                    color={textColors}
                                    bg={titleBar}
                                >
                                    Agile
                                </Tag>
                            </WrapItem>
                            <WrapItem>
                                <Tag
                                    size="sm"
                                    variant="solid"
                                    color={textColors}
                                    bg={titleBar}
                                >
                                    OOP
                                </Tag>
                            </WrapItem>
                            <WrapItem>
                                <Tag
                                    size="sm"
                                    variant="solid"
                                    color={textColors}
                                    bg={titleBar}
                                >
                                    SQL
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
                            Hi there!👋 My name is Isabelle, and I'm a programmer analyst. You might also know me by my Korean name, Yenna, which is what my family and friends call me.
                            I'm currently working as a programmer analyst full-time, 
                            while also pursuing a Master's in Computer Science at Georgia
                            Tech online. I've always been the kind of person who is
                            passionate about making creative ideas come to life
                            and have found a love for building projects through technology!
                            Outside of programming, I love discovering new music on Spotify, going skiing in the winter,
                            hitting the gym, and spending time with my friends and loved ones! Thanks for stopping by hehe.
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
