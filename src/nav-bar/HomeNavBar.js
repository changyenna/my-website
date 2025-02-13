import React from 'react';
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
    useColorModeValue
} from '@chakra-ui/react';
import {
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
    AiOutlineReload
} from 'react-icons/ai';
import Projects from '../components/projects-comp/Projects';
import About from '../components/About';
import Experience from '../components/Experience';

const HomeNavBar = () => {
    const textColors = useColorModeValue('black', 'white');
    const bgColors = useColorModeValue('light.100', 'dark.300');
    const titleBarColors = useColorModeValue('light.400', '#3B3F50');
    const formColors = useColorModeValue('#FAFAFA', 'dark.800');
    const tabHighlightColors = useColorModeValue('black', 'purple');

    const selectedTabBg = useColorModeValue('purple.500', 'purple.700');
    const hoverTabBg = useColorModeValue('light.200', 'dark.900');

    const pageData = [
        {
            url: 'https://www.linkedin.com/in/isabelle-y-chang/',
            title: 'About'
        },
        {
            url: 'https://github.com/changyenna',
            title: 'Portfolio'
        },
        {
            url: 'https://docs.google.com/document/d/1yZbLFwnkj3G_vOo46ojVfpv_4eJjNUBoSpNLe3iGX_k/edit?usp=sharing',
            title: 'Experience'
        }
    ];

    const handleTabChange = (index) => {};

    const renderTabs = () => {
        return pageData.map((data, index) => (
            <Tab
                key={index}
                fontSize={{ lg: 'md', md: 'md', sm: 'sm' }}
                fontWeight="medium"
                bg={titleBarColors}
                flex="1"
                textAlign="center"
                _selected={{ bg: formColors, color: textColors }}
                _hover={{ bg: hoverTabBg, opacity: 0.9 }}
                _focus={{ boxShadow: 'outline' }}
                borderTopRightRadius={'8px'}
                borderTopLeftRadius={'8px'}
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
                <TabPanel key={index} bg={bgColors} h="550px" zIndex={99}>
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
            padding="0px"
            borderRadius="8px"
            bg={titleBarColors}
            // height={{ lg: '400px', md: '400px', sm: '1000px' }}
            display="flex"
            flexDirection="column"
            zIndex={-99}
        >
            <Box borderRadius="8px">
                <Tabs variant="enclosed-colored" onChange={handleTabChange}>
                    <TabList
                        borderBottom="0px white solid"
                        padding="0px"
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                    >
                        {renderTabs()}
                    </TabList>
                    <TabPanels>{renderTabPanels()}</TabPanels>
                </Tabs>
            </Box>
        </Box>
    );
};

export default HomeNavBar;
