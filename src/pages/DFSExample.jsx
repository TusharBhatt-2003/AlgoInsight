import React, { useState } from 'react';

const DFSExample = () => {
  const [visited, setVisited] = useState([]);
  const [steps, setSteps] = useState([]);
  const [startNode, setStartNode] = useState('A');

  const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
  };

  const depthFirstSearch = (node, visitedNodes, steps) => {
    if (!node) return;
    visitedNodes.push(node);
    steps.push(`Visited ${node}`);
    for (const neighbor of graph[node]) {
      if (!visitedNodes.includes(neighbor)) {
        depthFirstSearch(neighbor, visitedNodes, steps);
      }
    }
  };

  const handleDFS = () => {
    const visitedNodes = [];
    const traversalSteps = [];
    depthFirstSearch(startNode, visitedNodes, traversalSteps);
    setVisited(visitedNodes);
    setSteps(traversalSteps);
  };

  const isVisited = (node) => visited.includes(node);

  return (
    <div className="p-4 w-fit rounded-xl bg-[#2D2D2D] text-white">
      <h3 className="text-xl font-bold">Depth-First Search Example</h3>

      {/* Start Node Input */}
      <div className="my-4">
        <label htmlFor="startNode" className="block mb-2 font-semibold">Start Node:</label>
        <input
          id="startNode"
          type="text"
          className="p-2 rounded bg-gray-700 text-white"
          value={startNode}
          onChange={(e) => setStartNode(e.target.value.toUpperCase())}
        />
      </div>

      {/* Start DFS Button */}
      <button onClick={handleDFS} className="my-4 bg-amber-400 text-white px-4 py-2 rounded">
        Start DFS
      </button>

      {/* Display Graph Nodes */}
      <div className="my-4">
        <h4 className="font-semibold">Graph Nodes:</h4>
        <div className="grid grid-cols-3 gap-4">
          {Object.keys(graph).map((node) => (
            <div
              key={node}
              className={`p-4 text-center rounded-full ${
                isVisited(node) ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
              }`}
            >
              {node}
            </div>
          ))}
        </div>
      </div>

      {/* Display Edges */}
      <div className="my-4">
        <h4 className="font-semibold">Graph Edges:</h4>
        <ul className="list-disc ml-6">
          {Object.entries(graph).map(([node, neighbors]) => (
            <li key={node}>
              {node} → {neighbors.join(', ') || 'None'}
            </li>
          ))}
        </ul>
      </div>

      {/* Display Traversal Steps */}
      <div className="my-4">
        <h4 className="font-semibold">Traversal Steps:</h4>
        <ul className="list-disc ml-6">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DFSExample;
