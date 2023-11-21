import React, { useState } from 'react';
import { Box, Grid, GridItem, Text, Button, HStack } from '@chakra-ui/react';

const PuzzleBoard = () => {
    const initialBoard = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 0]
    ];

    const [board, setBoard] = useState(initialBoard);
    const [count, setCount] = useState(0);
    const [isFirstMount, setIsFirstMount] = useState(true);

    const shuffleBoard = () => {
        let shuffledBoard = initialBoard.map((row) => [...row]);

        while (JSON.stringify(shuffledBoard) === JSON.stringify(initialBoard)) {
            for (let i = 0; i < 5; i++) {
                const blankPosition = findBlankPosition();
                const validMoves = getValidMoves(blankPosition);
                const randomMove =
                    validMoves[Math.floor(Math.random() * validMoves.length)];
                shuffledBoard = moveTile(
                    randomMove.row,
                    randomMove.col,
                    blankPosition,
                    shuffledBoard
                );
            }
        }

        setBoard(shuffledBoard);
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

    const getValidMoves = (blankPosition) => {
        const validMoves = [];
        const { row, col } = blankPosition;

        if (row > 0) {
            validMoves.push({ row: row - 1, col });
        }
        if (row < board.length - 1) {
            validMoves.push({ row: row + 1, col });
        }
        if (col > 0) {
            validMoves.push({ row, col: col - 1 });
        }
        if (col < board[0].length - 1) {
            validMoves.push({ row, col: col + 1 });
        }

        return validMoves;
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
        <Box bgColor="pink.700">
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
                            onClick={() => handleTileClick(rowIndex, colIndex)}
                            cursor={tile === 0 ? 'auto' : 'pointer'}
                        >
                            <Text fontSize="xl" fontWeight="bold" color="black">
                                {tile !== 0 && tile}
                            </Text>
                        </GridItem>
                    ))
                )}
            </Grid>
            <HStack></HStack>
            <HStack>
                <Box>
                    <Text mt={4} fontWeight="bold">
                        Moves: {count}
                    </Text>
                </Box>
                {isBoardSolved() && (
                    <Text mt={4} color="green.500" fontWeight="bold">
                        {isFirstMount ? '' : 'Solved!'}
                    </Text>
                )}
            </HStack>
            <HStack>
                <Button mt={4} onClick={shuffleBoard}>
                    {isFirstMount
                        ? 'Play'
                        : isBoardSolved()
                        ? 'Play Again'
                        : 'Shuffle'}
                </Button>
                {/* <Button mt={4} onClick={solvePuzzle}>
                    Solve
                </Button> */}
            </HStack>
        </Box>
    );
};

export default PuzzleBoard;
