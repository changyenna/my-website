import React from 'react';
import {
    Box,
    Button,
    VStack,
    HStack,
    useColorModeValue,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    FormHelperText,
    Container
} from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';
import MySceneNavBar from '../nav-bar/MySceneNavBar';

const Contact = () => {
    const bgColors = useColorModeValue('light.100', 'dark.300');
    const titleBar = useColorModeValue('light.400', 'dark.800');
    const textColors = useColorModeValue('light.1000', 'dark.100');
    const buttonColors = useColorModeValue('light.300', 'light.400');

    return (
        <div>
            <MySceneNavBar display_return={true} />
            <Box
                border="2px solid black"
                maxWidth={{ lg: '900px' }}
                backgroundColor={bgColors}
                position="relative"
                margin={{
                    lg: '0px auto 0px',
                    md: '0px 10px 0px',
                    sm: '0px 10px 0px'
                }}
                borderRadius="10px"
            >
                <VStack spacing="4">
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
                        <HStack spacing="10px" ml="20px" mt="6px">
                            <Box>
                                <FaEnvelope />
                            </Box>
                            <Box color={textColors} pointerEvents="none">
                                <Text fontSize="md">Contact</Text>
                            </Box>
                            {/* <Box
                                className="close"
                                position="absolute"
                                right="1%"
                                top="1.5%"
                                cursor="pointer"
                                height="20px"
                                width="20px"
                                borderRadius="50px"
                                bg={'light.300'}
                            ></Box> */}
                        </HStack>
                    </Box>

                    <Box width="100%" p={5}>
                        <VStack>
                            <FormControl isRequired mt={0}>
                                <HStack spacing="4">
                                    <Box flex="1">
                                        <FormLabel>First Name</FormLabel>
                                        <Input type="text" />
                                    </Box>
                                    <Box flex="1">
                                        <FormLabel>Last Name</FormLabel>
                                        <Input type="text" />
                                    </Box>
                                </HStack>
                            </FormControl>

                            <FormControl isRequired mt={4}>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Website</FormLabel>
                                <Input type="url" placeholder="https://" />
                            </FormControl>

                            <FormControl isRequired mt={4}>
                                <FormLabel>Subject</FormLabel>
                                <Input type="text" />
                            </FormControl>

                            <FormControl isRequired mt={4}>
                                <FormLabel>Message</FormLabel>
                                <Input as="textarea" />
                            </FormControl>

                            <Button
                                bg={buttonColors}
                                variant="solid"
                                mt={4}
                                mb={4}
                            >
                                Submit
                            </Button>
                        </VStack>
                    </Box>
                </VStack>
            </Box>
        </div>
    );
};

export default Contact;
