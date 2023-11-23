import React from 'react';
import {
    Grid,
    GridItem,
    Container,
    useBreakpointValue
} from '@chakra-ui/react';
import PuzzleBoard from './EightPuzzle/PuzzleBoard';
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
                display="flex"
                justifyContent="center"
                height="auto"
                marginBottom={100}
            >
                <Grid
                    templateColumns={gridColumnTemplate}
                    gap={10}
                    justifyContent="center"
                >
                    <GridItem
                        w="100%"
                        h="100%"
                        // bgColor="red.100"
                        display="flex"
                        justifyContent="left"
                        alignItems="flex-start"
                    >
                        <PuzzleBoard />
                    </GridItem>
                    <GridItem
                        w="100%"
                        h="100%"
                        bgColor="blue.300"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        under construction
                    </GridItem>
                </Grid>
            </Container>
        </div>
    );
};

export default Playground;
