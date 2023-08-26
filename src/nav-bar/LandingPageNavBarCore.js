import React from 'react';
import {
    Box,
    chakra,
    Flex,
    HStack,
    Spacer,
    useColorModeValue
} from '@chakra-ui/react';
import { LightDarkModeSwitcher } from '../components/LightDarkModeSwitcher';

function LandingPageNavBarCore({ display_return }) {
    const bg = useColorModeValue('light.100', 'dark.800');
    const btn_border_colors = useColorModeValue('light.900', 'dark.100');

    return (
        <chakra.header w="full" px={{ base: 2 }} py={4} zIndex={999}>
            <Flex alignItems="center" justifyContent="space-between" mx="auto">
                {/* <Flex>
                    {display_return ? (
                        <Link
                            px={2}
                            py={1}
                            as={RouterLink}
                            to="/"
                            _hover={{
                                textDecoration: 'none'
                            }}
                        >
                            <Icon
                                color={btn_border_colors}
                                as={MdOutlineKeyboardBackspace}
                                h={8}
                                w={8}
                                mt={1}
                            ></Icon>
                        </Link>
                    ) : (
                        ''
                    )}
                </Flex> */}
                <Spacer />
                <HStack spacing={1} mr={1}>
                    {/* <ButtonLink button_text={"test"} website={"/test"}></ButtonLink> */}
                    {/* 
                    <ButtonLink
                        button_text={'about us'}
                        website={'/about-us'}
                    ></ButtonLink> */}
                    {/* 
                    <ButtonLink
                        button_text={'login'}
                        website={'/login'}
                    ></ButtonLink> */}

                    <Box ml={3}>
                        <LightDarkModeSwitcher />
                    </Box>
                </HStack>
            </Flex>
        </chakra.header>
    );
}

export default LandingPageNavBarCore;
