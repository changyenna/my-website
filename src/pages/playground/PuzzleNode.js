import React from 'react';

const PuzzleNode = ({ board, moves, children }) => (
    <div style={{ margin: '10px', textAlign: 'center' }}>
        <div style={{ marginBottom: '5px' }}>Moves: {moves}</div>
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 30px)',
                gap: '5px'
            }}
        >
            {board.map((row, rowIndex) =>
                row.map((tile, colIndex) => (
                    <div
                        key={colIndex}
                        style={{
                            backgroundColor: tile === 0 ? 'pink' : 'white',
                            border: '1px solid black',
                            borderRadius: '3px',
                            width: '30px',
                            height: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'default'
                        }}
                    >
                        {tile !== 0 && tile}
                    </div>
                ))
            )}
        </div>
        <div style={{ marginTop: '5px' }}>{children}</div>
    </div>
);

export default PuzzleNode;
