import React from 'react';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';

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
                    <Text
                        fontWeight="bold"
                        onClick={() => setShowAnswer(!showAnswer)}
                        cursor="pointer"
                    >
                        {showAnswer ? 'Hide Answer: ' : 'Show Answer: '}
                    </Text>
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
