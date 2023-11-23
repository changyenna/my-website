import React from 'react';
import {
    Box,
    Text,
    Grid,
    GridItem,
    HStack,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Portal
} from '@chakra-ui/react';
import { CiCircleInfo } from 'react-icons/ci';

const MatrixDisplay = ({ matrix }) => (
    <Grid
        templateColumns={`repeat(${matrix[0].length}, 1fr)`}
        gap={1}
        width="100px"
    >
        {matrix.map((row, rowIndex) =>
            row.map((tile, colIndex) => (
                <GridItem
                    key={colIndex}
                    colSpan={1}
                    bg={tile === 0 ? 'yellow.100' : 'white'}
                    borderRadius="md"
                    p={0}
                    textAlign="center"
                    width="30px"
                >
                    <Text fontSize="sm" color="black">
                        {tile !== 0 && tile}
                    </Text>
                </GridItem>
            ))
        )}
    </Grid>
);

const AnswerKey = ({ scrollBehavior, showAnswer, setShowAnswer, path }) => {
    return (
        <Box
            // width="100%"
            overflow={scrollBehavior === 'inside' ? 'auto' : 'hidden'}
        >
            {scrollBehavior === 'inside' && (
                <>
                    <HStack display="flex" justifyContent="space-between">
                        <Text
                            fontWeight="bold"
                            onClick={() => setShowAnswer(!showAnswer)}
                            cursor="pointer"
                        >
                            {showAnswer ? 'Hide Answer: ' : 'Show Answer: '}
                        </Text>
                        <Popover placement="bottom">
                            <PopoverTrigger>
                                <Box>
                                    <CiCircleInfo />
                                </Box>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverHeader>
                                        Algorithmic Insight: A* Search
                                    </PopoverHeader>
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                        To solve the 8-puzzle and discover the
                                        most optimal path to the goal state, we
                                        employ the A* search algorithm. This
                                        algorithm assesses various moves by
                                        calculating the number of misplaced
                                        tiles along each potential path,
                                        utilizing a priority queue and a
                                        heuristic function.
                                        <br />
                                        <br />
                                        A* search is a widely used algorithm in
                                        artificial intelligence and robotics for
                                        pathfinding and graph traversal. Solving
                                        the 8 puzzle with A* helps us to
                                        understand the algorithmic principles of
                                        heuristic search, exploring states
                                        efficiently to find the optimal
                                        solution.
                                    </PopoverBody>
                                </PopoverContent>
                            </Portal>
                        </Popover>
                    </HStack>
                    {showAnswer && (
                        <>
                            {path.slice(1).map((step, index) => (
                                <div key={index + 1}>
                                    <Text mt={4}>Step {index + 1}:</Text>
                                    <MatrixDisplay matrix={step} />
                                </div>
                            ))}
                        </>
                    )}
                </>
            )}
        </Box>
    );
};

export default AnswerKey;
