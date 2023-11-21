import React, { useState } from 'react';
import { Box, Grid, GridItem, Text, Button, HStack } from '@chakra-ui/react';
import solvePuzzle from './puzzleSolver';

const MatrixDisplay = ({ matrix }) => (
    <Grid templateColumns={`repeat(${matrix[0].length}, 1fr)`} gap={1}>
        {matrix.map((row, rowIndex) =>
            row.map((tile, colIndex) => (
                <GridItem
                    key={colIndex}
                    colSpan={1}
                    bg={tile === 0 ? 'pink.200' : 'white'}
                    borderWidth="0px"
                    borderRadius="md"
                    p={0}
                    textAlign="center"
                >
                    <Text fontSize="sm" fontWeight="normal" color="black">
                        {tile !== 0 && tile}
                    </Text>
                </GridItem>
            ))
        )}
    </Grid>
);

const PuzzleBoard = () => {
    const initialBoard = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 0]
    ];

    const [board, setBoard] = useState(initialBoard);
    const [count, setCount] = useState(0);
    const [isFirstMount, setIsFirstMount] = useState(true);
    const [minMoves, setMinMoves] = useState(0);
    const [path, setPath] = useState([]);

    const solvePuzzleHelper = (selectedBoard) => {
        const solutionPath = solvePuzzle(selectedBoard);
        setPath(solutionPath);
        setMinMoves(solutionPath.length > 0 ? solutionPath.length - 1 : 0);
    };

    const shuffleBoard = () => {
        setIsFirstMount(false);

        const puzzleConfigurations = [
            // [
            //     [1, 2, 0], //2 moves
            //     [4, 5, 3],
            //     [7, 8, 6]
            // ]
            // [
            //     [1, 0, 3], //3 moves
            //     [4, 2, 5],
            //     [7, 8, 6]
            // ]
            [
                [0, 1, 3], //4 moves
                [4, 2, 5],
                [7, 8, 6]
            ]
            // [
            //     [1, 2, 3], //6 moves
            //     [4, 0, 8],
            //     [7, 6, 5]
            // ]
            // [
            //     [1, 0, 2], //9 moves
            //     [7, 4, 3],
            //     [8, 6, 5]
            // ]
        ];

        const selectedBoard =
            puzzleConfigurations[
                Math.floor(Math.random() * puzzleConfigurations.length)
            ];

        console.log('Selected Board:', selectedBoard);

        setBoard(selectedBoard);
        solvePuzzleHelper(selectedBoard);
        setCount(0);
    };

    const findBlankPosition = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === 0) {
                    return { row: i, col: j };
                }
            }
        }
        return null;
    };

    const moveTile = (row, col, blankPosition) => {
        const newBoard = [...board];
        newBoard[blankPosition.row][blankPosition.col] = board[row][col];
        newBoard[row][col] = 0;
        return newBoard;
    };

    const handleTileClick = (row, col) => {
        setIsFirstMount(false);
        const blankPosition = findBlankPosition();
        const isValidMove = isAdjacentToBlank(row, col, blankPosition);

        if (isValidMove) {
            const newBoard = moveTile(row, col, blankPosition);
            setCount(count + 1);
            setBoard(newBoard);
        }
    };

    const isAdjacentToBlank = (row, col, blankPosition) => {
        return (
            (row === blankPosition.row &&
                Math.abs(col - blankPosition.col) === 1) ||
            (col === blankPosition.col &&
                Math.abs(row - blankPosition.row) === 1)
        );
    };

    const isBoardSolved = () => {
        return JSON.stringify(board) === JSON.stringify(initialBoard);
    };

    return (
        <>
            <HStack
                display="flex"
                justifyContent="left"
                alignItems="flex-start"
            >
                <Box bgColor="pink.700" width="300px" p={5} borderRadius="md">
                    <Grid templateColumns="repeat(3, 1fr)" gap={2} p={4}>
                        {board.map((row, rowIndex) =>
                            row.map((tile, colIndex) => (
                                <GridItem
                                    key={colIndex}
                                    colSpan={1}
                                    bg={tile === 0 ? 'pink.200' : 'white'}
                                    borderWidth="1px"
                                    borderRadius="md"
                                    p={4}
                                    textAlign="center"
                                    onClick={() =>
                                        handleTileClick(rowIndex, colIndex)
                                    }
                                    cursor={tile === 0 ? 'auto' : 'pointer'}
                                >
                                    <Text
                                        fontSize="xl"
                                        fontWeight="bold"
                                        color="black"
                                    >
                                        {tile !== 0 && tile}
                                    </Text>
                                </GridItem>
                            ))
                        )}
                    </Grid>
                    <HStack>
                        <Text mt={0} ml={4} fontWeight="bold">
                            Moves: {count}
                        </Text>
                        {isBoardSolved() && (
                            <Text
                                mt={0}
                                ml={4}
                                color="green.500"
                                fontWeight="bold"
                            >
                                {isFirstMount ? '' : 'Solved!'}
                            </Text>
                        )}
                    </HStack>
                    <HStack>
                        <Button mt={10} ml={4} onClick={shuffleBoard}>
                            {isFirstMount
                                ? 'Play'
                                : isBoardSolved()
                                ? 'Play Again'
                                : 'Shuffle'}
                        </Button>
                        <Text mt={10} ml={4} fontWeight="bold">
                            Min Moves: {minMoves}
                        </Text>
                    </HStack>
                </Box>
                <Box mt={4} p={5}>
                    <Text fontWeight="bold">Answer:</Text>
                    {path.map((step, index) => (
                        <div key={index}>
                            <Text fontWeight="bold" mt={4}>
                                Step {index + 1}:
                            </Text>
                            <MatrixDisplay matrix={step.board} />
                        </div>
                    ))}
                </Box>
            </HStack>
        </>
    );
};

export default PuzzleBoard;
