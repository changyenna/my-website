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
    const [minMoves, setMinMoves] = useState(0);

    const shuffleBoard = () => {
        // setIsFirstMount(false);

        // const flattenedBoard = initialBoard.flat();
        // const shuffledBoard = [...flattenedBoard].sort(
        //     () => Math.random() - 0.5
        // );

        // const newBoard = [
        //     shuffledBoard.slice(0, 3),
        //     shuffledBoard.slice(3, 6),
        //     shuffledBoard.slice(6, 9)
        // ];
        // console.log('Shuffled Board:', newBoard);
        // setBoard(newBoard);
        // solvePuzzle(newBoard);
        // setCount(0);
        setIsFirstMount(false);

        const puzzleConfigurations = [
            [
                [1, 2, 0], //2 moves
                [4, 5, 3],
                [7, 8, 6]
            ],

            [
                [1, 0, 3], //3 moves
                [4, 2, 5],
                [7, 8, 6]
            ],
            [
                [0, 1, 3], //4 moves
                [4, 2, 5],
                [7, 8, 6]
            ],
            [
                [1, 2, 3], //6 moves
                [4, 0, 8],
                [7, 6, 5]
            ],
            [
                [1, 0, 2], //9 moves
                [7, 4, 3],
                [8, 6, 5]
            ]
        ];

        const selectedBoard =
            puzzleConfigurations[
                Math.floor(Math.random() * puzzleConfigurations.length)
            ];

        console.log('Selected Board:', selectedBoard);

        setBoard(selectedBoard);
        solvePuzzle(selectedBoard);
        setCount(0);
    };

    const findBlankPositionHelper = (currBoard) => {
        for (let i = 0; i < currBoard.length; i++) {
            for (let j = 0; j < currBoard[i].length; j++) {
                if (currBoard[i][j] === 0) {
                    return { row: i, col: j };
                }
            }
        }
        return null;
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

    const moveTileHelper = (row, col, blankPosition, currentBoard) => {
        const newSolvingBoard = currentBoard.map((rowArray) => [...rowArray]);
        newSolvingBoard[blankPosition.row][blankPosition.col] =
            currentBoard[row][col];
        newSolvingBoard[row][col] = 0;
        return newSolvingBoard;
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

    const solvePuzzle = (newBoard) => {
        const solvedBoard = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 0]
        ];

        const calculateMisplacedTiles = (board) => {
            let count = 0;
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    if (board[i][j] !== solvedBoard[i][j]) {
                        count++;
                    }
                }
            }
            return count;
        };

        const initialNode = {
            board: newBoard,
            zeroPosition: findBlankPositionHelper(newBoard),
            moves: 0
        };

        const priorityQueue = [{ node: initialNode, priority: 0 }];
        const visited = new Set();

        while (priorityQueue.length > 0) {
            priorityQueue.sort((a, b) => a.priority - b.priority);
            const { node, priority } = priorityQueue.shift();

            const currentBoardString = JSON.stringify(node.board);

            if (visited.has(currentBoardString)) {
                continue;
            }

            visited.add(currentBoardString);

            if (currentBoardString === JSON.stringify(solvedBoard)) {
                setMinMoves(node.moves);
                console.log('Puzzle solved! Min moves:', node.moves);
                break;
            }

            const zeroPosition = node.zeroPosition;
            const validMoves = getValidMoves(zeroPosition);

            validMoves.forEach((move) => {
                const newSolvingBoard = moveTileHelper(
                    move.row,
                    move.col,
                    zeroPosition,
                    node.board
                );

                const newNode = {
                    board: newSolvingBoard,
                    zeroPosition: move,
                    moves: node.moves + 1
                };

                const heuristic = calculateMisplacedTiles(newNode.board);
                const totalCost = newNode.moves + heuristic;

                priorityQueue.push({ node: newNode, priority: totalCost });
            });
        }
    };

    // const solvePuzzle = (newBoard) => {
    //     const solvedBoard = [
    //         [1, 2, 3],
    //         [4, 5, 6],
    //         [7, 8, 0]
    //     ];

    //     console.log('Starting solvePuzzle with board:', newBoard);

    //     const initialNode = {
    //         board: newBoard,
    //         zeroPosition: findBlankPositionHelper(newBoard),
    //         moves: 0
    //     };

    //     console.log('Initial Node:', initialNode);

    //     const queue = [initialNode];
    //     const visited = new Set();
    //     console.log('visited:', visited);

    //     while (queue.length > 0) {
    //         console.log('Queue:', queue);
    //         const currentNode = queue.shift();
    //         const currentBoardString = JSON.stringify(currentNode.board);
    //         console.log('currentBoardString:', currentBoardString);

    //         if (visited.has(currentBoardString)) {
    //             continue;
    //         }

    //         visited.add(currentBoardString);
    //         console.log('visited:', visited);

    //         console.log('Checking board:', currentNode.board);

    //         if (currentBoardString === JSON.stringify(solvedBoard)) {
    //             setMinMoves(currentNode.moves);
    //             console.log('Puzzle solved! Min moves:', currentNode.moves);
    //             break;
    //         }

    //         const zeroPosition = currentNode.zeroPosition;
    //         console.log('zeroPosition:', zeroPosition);
    //         const validMoves = getValidMoves(zeroPosition);
    //         console.log('validMoves:', validMoves);

    //         validMoves.forEach((move) => {
    //             console.log('move:', move);
    //             const newSolvingBoard = moveTileHelper(
    //                 move.row,
    //                 move.col,
    //                 zeroPosition,
    //                 currentNode.board
    //             );
    //             console.log('newSolvingBoard:', newSolvingBoard);
    //             const newNode = {
    //                 board: newSolvingBoard,
    //                 zeroPosition: move,
    //                 moves: currentNode.moves + 1
    //             };
    //             console.log('MOVES:', newNode.moves);

    //             queue.push(newNode);
    //         });
    //     }
    // };

    return (
        <Box bgColor="pink.700" width="300px" p={5}>
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
            <HStack>
                <Text mt={4} ml={4} fontWeight="bold">
                    Moves: {count}
                </Text>
                {isBoardSolved() && (
                    <Text mt={4} ml={4} color="green.500" fontWeight="bold">
                        {isFirstMount ? '' : 'Solved!'}
                    </Text>
                )}
            </HStack>
            <HStack>
                <Button mt={4} ml={4} onClick={shuffleBoard}>
                    {isFirstMount
                        ? 'Play'
                        : isBoardSolved()
                        ? 'Play Again'
                        : 'Shuffle'}
                </Button>
                <Text mt={4} ml={4} fontWeight="bold">
                    Min Moves: {minMoves}
                </Text>
            </HStack>
        </Box>
    );
};

export default PuzzleBoard;
