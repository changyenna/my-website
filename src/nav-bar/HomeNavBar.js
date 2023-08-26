import React, { useState, useEffect } from 'react';
import {
    Box,
    Flex,
    Button,
    Input,
    Icon,
    Tabs,
    Tab,
    TabPanel,
    TabPanels,
    TabList,
    Tooltip,
    Stack,
    useColorModeValue,
    useMediaQuery
} from '@chakra-ui/react';
import {
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
    AiOutlineReload,
    AiFillHeart,
    AiOutlineHeart
} from 'react-icons/ai';

import Alert from '../pages/landing/Alert';
import Message from '../pages/landing/Message';
import Projects from '../components/projects-comp/Projects';
import About from '../components/About';
import Experience from '../components/Experience';

const HomeNavBar = () => {
    const bgColors = useColorModeValue('light.100', 'dark.300');
    const titleBarColors = useColorModeValue('light.400', 'dark.800');
    const buttonColors = useColorModeValue('light.300', 'dark.200');
    const textColors = useColorModeValue('light.1000', 'dark.100');
    const formColors = useColorModeValue('#FAFAFA', 'dark.800');
    const plusColors = useColorModeValue('#FAB4DF', '#5D6071');
    const bookmarkColors = useColorModeValue('yellow.400', 'light.400');
    const tabHighlightColors = useColorModeValue('black', 'purple');

    const pageData = [
        {
            url: 'https://www.linkedin.com/in/yenna-chang/',
            title: 'About',
            special: null,
            info: 'https',
            back_btn: true,
            forward_btn: false,
            bookmarked: true,
            address_bar_selected: false
        },
        {
            url: 'https://github.com/changyenna',
            title: 'Portfolio',
            special: 'Duck Duck Go, Inc. [US]',
            info: 'https',
            back_btn: true,
            forward_btn: true,
            bookmarked: false,
            address_bar_selected: false
        },
        {
            url: 'https://drive.google.com/file/d/1ssmMkihymg_eHK4hwYdHgI_EhGMWEWjo/view?usp=sharing',
            title: 'Experience',
            special: null,
            back_btn: false,
            forward_btn: false,
            bookmarked: false,
            address_bar_selected: true
        }
    ];

    const handleTabChange = (index) => {
        // Handle tab change logic here
    };

    const renderTabs = () => {
        return pageData.map((data, index) => (
            <Tab
                key={index}
                borderBottom="0px"
                mr={{ lg: 4, md: 4, sm: 0 }}
                fontSize={{ lg: 'md', md: 'md', sm: 'sm' }}
                fontWeight={{ lg: 'medium', md: 'medium', sm: 'medium' }}
            >
                {data.title}
            </Tab>
        ));
    };

    const renderTabPanels = () => {
        return pageData.map((data, index) => {
            let tooltipLabel = '';

            if (data.title === 'About') {
                tooltipLabel = 'LinkedIn';
            } else if (data.title === 'Portfolio') {
                tooltipLabel = 'GitHub';
            } else if (data.title === 'Experience') {
                tooltipLabel = 'Resume';
            }

            return (
                <TabPanel
                    key={index}
                    bg={bgColors}
                    border="0px transparent solid"
                    h="550px"
                >
                    <Box
                        bg={formColors}
                        margin="-16px -16px 0"
                        paddingTop={2}
                        paddingBottom={2}
                        width="100%"
                        position="absolute"
                        borderBottom="1px #B6B4B6 solid"
                    >
                        <Flex alignItems="left">
                            <Icon
                                as={AiOutlineArrowLeft}
                                boxSize={{ lg: 5, md: 5, sm: 4 }}
                                ml={{ lg: 4, md: 4, sm: 2 }}
                                mt={1}
                            />
                            <Icon
                                as={AiOutlineArrowRight}
                                boxSize={{ lg: 5, md: 5, sm: 4 }}
                                ml={{ lg: 4, md: 4, sm: 2 }}
                                mt={1}
                            />
                            <Icon
                                as={AiOutlineReload}
                                boxSize={{ lg: 5, md: 5, sm: 4 }}
                                ml={{ lg: 4, md: 4, sm: 2 }}
                                mt={1}
                            />
                            <Input
                                value={data.url ? data.url : ''}
                                variant="filled"
                                size={{ lg: 'sm', md: 'sm', sm: 'xs' }}
                                width={{
                                    lg: '300px',
                                    md: '300px',
                                    sm: '200px'
                                }}
                                borderRadius="md"
                                ml={{ lg: 4, md: 2, sm: 1 }}
                            />
                            <Tooltip
                                label={`Go to ${tooltipLabel}`}
                                aria-label="A tooltip"
                            >
                                <Button
                                    as="a"
                                    href={data.url}
                                    target="_blank"
                                    ml={{ lg: 4, md: 2, sm: 1 }}
                                    size={{ lg: 'sm', md: 'sm', sm: 'xs' }}
                                    fontSize={{
                                        lg: 'sm',
                                        md: 'sm',
                                        sm: 'xs'
                                    }}
                                    fontFamily="body"
                                    fontWeight="normal"
                                    rel="noopener noreferrer"
                                >
                                    Go
                                </Button>
                            </Tooltip>
                        </Flex>
                    </Box>

                    {data.title === 'About' && <About />}
                    {data.title === 'Portfolio' && <Projects />}
                    {data.title === 'Experience' && <Experience />}
                </TabPanel>
            );
        });
    };

    return (
        <Box
            padding="0px 0px"
            borderTopLeftRadius="8px"
            borderTopRightRadius="8px"
            borderBottomLeftRadius="8px"
            borderBottomRightRadius="8px"
            height={{ lg: '400px', md: '400px', sm: '1000px' }}
        >
            <Flex direction="column">
                <Box
                    display="flex"
                    flexDirection="column"
                    borderTopLeftRadius="8px"
                    borderTopRightRadius="8px"
                    // borderBottom="1px solid #B6B4B6"
                    mb={0}
                    bg={titleBarColors}
                >
                    <Tabs
                        isFitted
                        variant="enclosed"
                        colorScheme={tabHighlightColors}
                        onChange={handleTabChange}

                        // mr={5}
                    >
                        <TabList>
                            {renderTabs()}
                            {/* <Hide below="md">
                                <Button
                                    size="sm"
                                    borderRadius="full"
                                    bg={plusColors}
                                    ml={3}
                                    mt={1}
                                    p={0}
                                >
                                    +
                                </Button>
                            </Hide> */}
                        </TabList>
                        <TabPanels>{renderTabPanels()}</TabPanels>
                    </Tabs>
                </Box>
                {/* <Flex
                    alignItems="center"
                    height="36px"
                    padding="0 6px"
                    backgroundColor="#FFFFFF"
                >
                    <Button size="xs" borderRadius="full">
                        <Icon as={AiFillCaretLeft} boxSize={4} />
                    </Button>
                    <Button size="xs" borderRadius="full" ml={1}>
                        <Icon as={AiFillCaretRight} boxSize={4} />
                    </Button>
                    <Input
                        variant="filled"
                        size="xs"
                        borderRadius="full"
                        ml={2}
                        mr={1}
                    />
                    <Button size="xs">Go</Button>
                </Flex> */}
            </Flex>
        </Box>
    );
};

export default HomeNavBar;
