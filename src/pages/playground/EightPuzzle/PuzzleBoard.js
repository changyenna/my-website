import React, { useState } from 'react';
import {
    Box,
    Grid,
    GridItem,
    Text,
    Button,
    HStack,
    useColorModeValue
} from '@chakra-ui/react';
import solvePuzzle from './puzzleSolver';
import puzzleConfigurations from './puzzleConfigurations';
import AnswerKey from './AnswerKey';

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

    let previousBoard = null;

    const shuffleBoard = () => {
        setIsFirstMount(false);
        setShufflePressed(true);

        let selectedBoard = null;
        do {
            selectedBoard =
                puzzleConfigurations[
                    Math.floor(Math.random() * puzzleConfigurations.length)
                ];
        } while (
            JSON.stringify(selectedBoard) === JSON.stringify(previousBoard)
        );

        // console.log('Selected Board:', selectedBoard);

        setBoard(selectedBoard);
        solvePuzzleHelper(selectedBoard);
        setCount(0);

        previousBoard = selectedBoard;
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

    const resetBoard = (selectedBoard) => {
        setBoard(selectedBoard);
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

    const [scrollBehavior, setScrollBehavior] = React.useState('inside');
    const [showAnswer, setShowAnswer] = React.useState(false);
    const [shufflePressed, setShufflePressed] = useState(false);

    const textColors = useColorModeValue('light.1000', 'dark.100');
    const bgColors = useColorModeValue('light.100', 'dark.300');
    const buttonColors = useColorModeValue('light.300', 'light.400');
    const titleBar = useColorModeValue('light.400', 'dark.800');

    return (
        <>
            <Box
                display="flex"
                flexDirection={{ base: 'column', md: 'row' }}
                gap={1}
            >
                <Box bgColor={titleBar} width="350px" p={8} borderRadius="md">
                    <Grid templateColumns="repeat(3, 1fr)" gap={2} p={0}>
                        {board.map((row, rowIndex) =>
                            row.map((tile, colIndex) => (
                                <GridItem
                                    key={colIndex}
                                    colSpan={1}
                                    bg={tile === 0 ? 'yellow.100' : 'white'}
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
                    <HStack
                        display="flex"
                        justifyContent="space-between"
                        mt={7}
                    >
                        <Text mt={0} fontWeight="bold">
                            Moves: {count}
                        </Text>
                        <Text mt={0} fontWeight="bold">
                            Min Moves: {minMoves}
                        </Text>
                    </HStack>
                    <HStack
                        display="flex"
                        justifyContent="space-between"
                        mt={7}
                    >
                        <Button mt={0} onClick={shuffleBoard}>
                            {isFirstMount
                                ? 'Play'
                                : isBoardSolved()
                                ? 'Play Again'
                                : 'Shuffle'}
                        </Button>
                        {/* {shufflePressed ? (
                            <Button onClick={() => resetBoard(previousBoard)}>
                                Reset
                            </Button>
                        ) : null} */}

                        {isBoardSolved() && (
                            <Text
                                mt={0}
                                ml={4}
                                color="green.300"
                                fontWeight="bold"
                            >
                                {isFirstMount ? '' : 'Solved!'}
                            </Text>
                        )}
                    </HStack>
                </Box>
                <Box
                    bgColor={titleBar}
                    width="350px"
                    height="400px"
                    p={5}
                    borderRadius="md"
                    overflow={scrollBehavior === 'inside' ? 'auto' : 'hidden'}
                >
                    <AnswerKey
                        scrollBehavior={scrollBehavior}
                        showAnswer={showAnswer}
                        setShowAnswer={setShowAnswer}
                        path={path}
                        shufflePressed={shufflePressed}
                    />
                </Box>
            </Box>
        </>
    );
};

export default PuzzleBoard;
