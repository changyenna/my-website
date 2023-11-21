import React from 'react';
import {
    Grid,
    GridItem,
    Container,
    useBreakpointValue
} from '@chakra-ui/react';
import EightPuzzle from './EightPuzzle';
import MySceneNavBar from '../../nav-bar/MySceneNavBar';

const Playground = () => {
    const gridColumnTemplate = useBreakpointValue({
        base: '1fr',
        md: 'repeat(2, 1fr)'
    });

    return (
        <div>
            <MySceneNavBar display_return={true} />
            <Container
                maxW="container.xl"
                justifyContent="center"
                marginTop="100px"
                height="auto"
            >
                <Grid
                    templateColumns={gridColumnTemplate}
                    gap={10}
                    justifyContent="center"
                >
                    <GridItem
                        w="100%"
                        h="100%"
                        // bgColor="blue.100"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <EightPuzzle />
                    </GridItem>
                    <GridItem
                        w="100%"
                        h="100"
                        // bgColor="blue.100"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    ></GridItem>
                </Grid>
            </Container>
        </div>
    );
};

export default Playground;
