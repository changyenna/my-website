class PriorityQueue {
    constructor(options) {
        this.heap = [];
        this.comparator = options.comparator;
    }

    enqueue(element) {
        this.heap.push(element);
        this.bubbleUp();
    }

    dequeue() {
        const root = this.heap[0];
        const lastElement = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastElement;
            this.bubbleDown();
        }

        return root;
    }

    peek() {
        return this.heap[0];
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.comparator(this.heap[parentIndex], this.heap[index]) < 0) {
                break;
            }

            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestChildIndex = index;

            if (
                leftChildIndex < this.heap.length &&
                this.comparator(
                    this.heap[leftChildIndex],
                    this.heap[smallestChildIndex]
                ) < 0
            ) {
                smallestChildIndex = leftChildIndex;
            }

            if (
                rightChildIndex < this.heap.length &&
                this.comparator(
                    this.heap[rightChildIndex],
                    this.heap[smallestChildIndex]
                ) < 0
            ) {
                smallestChildIndex = rightChildIndex;
            }

            if (smallestChildIndex === index) {
                break;
            }

            this.swap(index, smallestChildIndex);
            index = smallestChildIndex;
        }
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    get length() {
        return this.heap.length;
    }
}

const goalState = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]
];

class Node {
    constructor(state, zeroPosition, gCost, hCost, parent = null) {
        this.state = state;
        this.zeroPosition = zeroPosition;
        this.gCost = gCost;
        this.hCost = hCost;
        this.parent = parent;
    }
}

const misplacedTiles = (board) => {
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

const reconstructPath = (goalNode) => {
    const path = [];
    let current = goalNode;

    while (current !== null) {
        path.unshift(current.state);
        current = current.parent;
    }

    return path;
};

const solvePuzzle = (newBoard) => {
    const maxIterations = 1000;
    let iterations = 0;

    const pq = new PriorityQueue({
        comparator: (a, b) => {
            const costA = a.gCost + a.hCost;
            const costB = b.gCost + b.hCost;

            if (costA === costB) {
                return b.gCost - a.gCost;
            }

            return costA - costB;
        }
    });

    pq.enqueue({
        state: newBoard,
        zeroPosition: findBlankPositionHelper(newBoard),
        gCost: 0,
        hCost: misplacedTiles(newBoard),
        parent: null
    });

    const set = new Set();

    while (pq.length > 0 && iterations < maxIterations) {
        const currNode = pq.dequeue();
        // console.log('MOVE: ', JSON.stringify(currNode.state));
        // console.log('MOVE LEVEL: ', currNode.gCost);

        const currentStateString = JSON.stringify(currNode.state);
        set.add(currentStateString);

        if (JSON.stringify(currNode.state) === JSON.stringify(goalState)) {
            // console.log('Goal state reached!');
            return reconstructPath(currNode);
        }

        const zeroPosition = currNode.zeroPosition;
        const validMoves = getValidMoves(zeroPosition, currNode.state);

        // console.log('Valid Moves:', validMoves);

        // console.log('Closed Set: ', set);

        validMoves.forEach((move) => {
            const newState = moveTileHelper(
                move.row,
                move.col,
                zeroPosition,
                currNode.state
            );
            const hCost = misplacedTiles(newState);
            const newNode = new Node(
                newState,
                move,
                currNode.gCost + 1,
                hCost,
                currNode
            );

            // console.log('newNode.state: ', JSON.stringify(newNode.state));

            const newStateString = JSON.stringify(newNode.state);

            if (set.has(newStateString)) {
                // console.log('Already visited. Skipped.');
            } else {
                pq.enqueue(newNode);
                // console.log('Added to the priority queue.');
            }
        });

        // console.log('Priority Queue:', JSON.stringify(pq));

        iterations++;
        if (iterations === maxIterations) {
            // console.log('Max Iterations reached.');
        }
    }

    // console.log('No solution found within the maximum iterations.');
    return [];
};

export default solvePuzzle;
