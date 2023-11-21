import React, { useState, useEffect } from 'react';
import { Graph } from 'react-d3-graph';

const SearchTree = ({ searchTree }) => {
    const [graphData, setGraphData] = useState({ nodes: [], links: [] });

    useEffect(() => {
        // Convert the search tree data into a format that can be consumed by react-d3-graph
        const nodes = [];
        const links = [];

        // Add nodes and links based on the search tree
        // You need to customize this part based on your specific search tree structure
        searchTree.forEach((node, index) => {
            nodes.push({ id: index, label: `Moves: ${node.moves}` });

            if (index > 0) {
                links.push({ source: index - 1, target: index });
            }
        });

        setGraphData({ nodes, links });
    }, [searchTree]);

    const myConfig = {
        nodeHighlightBehavior: true,
        directed: true,
        height: 300,
        width: 600,
        node: {
            color: 'lightblue',
            size: 120,
            highlightStrokeColor: 'blue'
        },
        link: { highlightColor: 'lightblue' }
    };

    return (
        <Graph
            id="graph-id" // id is mandatory
            data={graphData}
            config={myConfig}
        />
    );
};

export default SearchTree;
