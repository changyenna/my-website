const goalState = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]
];

const calculateMisplacedTiles = (board) => {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== goalState[i][j]) {
                count++;
            }
        }
    }
    return count;
};

class Node {
    constructor(state, zeroPosition, gCost, hCost) {
        this.state = state;
        this.zeroPosition = zeroPosition;
        this.gCost = gCost;
        this.hCost = hCost;
    }
}

const findBlankPositionHelper = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) {
                return { row: i, col: j };
            }
        }
    }
    return null;
};

const getValidMoves = (blankPosition, board) => {
    const validMoves = [];
    const { row, col } = blankPosition;

    console.log('Row:', row); // Add this line
    console.log('Col:', col); // Add this line
    console.log('Board:', board); // Add this line

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

const moveTileHelper = (row, col, blankPosition, state) => {
    const newState = state.map((rowArray) => [...rowArray]);
    newState[blankPosition.row][blankPosition.col] = state[row][col];
    newState[row][col] = 0;
    return newState;
};

const solvePuzzle = (newBoard) => {
    const maxIterations = 10;
    let iterations = 0;

    const open_set = [
        {
            state: newBoard,
            zeroPosition: findBlankPositionHelper(newBoard),
            gCost: 0,
            hCost: calculateMisplacedTiles(newBoard)
        }
    ];
    const closed_set = new Set();
    const path = [];

    while (open_set.length > 0 && iterations < maxIterations) {
        open_set.sort((a, b) => a.gCost + a.hCost - (b.gCost + b.hCost));
        console.log('Open Set:');
        open_set.forEach((node, index) => {
            console.log(`  Node ${index + 1}:`);
            console.log(`    State: ${node.state}`);
            console.log(`    Blank: ${node.zeroPosition.row}`);
            console.log(`    gCost: ${node.gCost}`);
            console.log(`    hCost: ${node.hCost}`);
        });

        const currNode = open_set.shift();

        if (JSON.stringify(currNode.state) === JSON.stringify(goalState)) {
            console.log('Goal state reached!');
            return path;
        }

        closed_set.add(currNode.state);

        const zeroPosition = currNode.zeroPosition;
        const validMoves = getValidMoves(zeroPosition, currNode.state);
        console.log('Valid Moves:', validMoves);

        validMoves.forEach((move) => {
            const newState = moveTileHelper(
                move.row,
                move.col,
                zeroPosition,
                currNode.state
            );
            const hCost = calculateMisplacedTiles(newState);
            const newNode = new Node(newState, move, currNode.gCost + 1, hCost);
            console.log('New Node:', newNode);

            if (!closed_set.has(newNode.state)) {
                open_set.push(newNode);
                console.log('Added to the priority queue.');
            } else {
                console.log('Already visited. Skipped.');
            }
        });

        iterations++;
        if (iterations === maxIterations) {
            console.log('Max Iterations reached.');
        }
    }

    console.log('No solution found within the maximum iterations.');
    return [];
};

export default solvePuzzle;
