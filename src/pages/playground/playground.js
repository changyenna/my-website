import React from 'react';
import { Grid, GridItem, Container } from '@chakra-ui/react';
import EightPuzzle from './EightPuzzle';

const Playground = () => {
    return (
        <div>
            <Container
                maxW="container.xl"
                justifyContent="center"
                marginTop="100px" //fix me
                height="auto"
                // backgroundColor="pink"
            >
                <Grid
                    templateColumns="repeat(2, 1fr)"
                    gap={10}
                    justifyContent="center"
                >
                    <GridItem
                        w="100%"
                        h="100"
                        // bg="blue.500"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    ></GridItem>
                    <GridItem
                        w="100%"
                        h="100%"
                        bg="blue.500"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <EightPuzzle />
                    </GridItem>
                    {/* <GridItem w="100%" h="10" bg="blue.500" />
                    <GridItem w="100%" h="10" bg="blue.500" />
                    <GridItem w="100%" h="10" bg="blue.500" /> */}
                </Grid>
            </Container>
        </div>
    );
};

export default Playground;
