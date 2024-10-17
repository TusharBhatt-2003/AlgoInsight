import React, { useState } from 'react';

const DijkstraExample = () => {
  const [distances, setDistances] = useState({});
  const [startNode, setStartNode] = useState('A'); // Default starting node

  const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
  };

  const dijkstra = (start) => {
    const distances = {};
    const visited = new Set();
    const pq = [{ node: start, distance: 0 }];

    for (const node in graph) {
      distances[node] = Infinity;
    }
    distances[start] = 0;

    while (pq.length) {
      const { node } = pq.shift();
      if (visited.has(node)) continue;
      visited.add(node);

      for (const neighbor in graph[node]) {
        const newDist = distances[node] + graph[node][neighbor];
        if (newDist < distances[neighbor]) {
          distances[neighbor] = newDist;
          pq.push({ node: neighbor, distance: newDist });
        }
      }
    }

    return distances;
  };

  const handleRun = () => {
    const result = dijkstra(startNode);
    setDistances(result);
  };

  return (
    <div className="p-4 w-fit rounded-xl bg-[#2D2D2D]">
      <h3 className="text-xl font-bold">Dijkstra's Algorithm Example</h3>
      
      {/* Dropdown for selecting starting node */}
      <div className="my-4">
        <label htmlFor="startNode" className="block mb-2 font-semibold">Choose Starting Node:</label>
        <select
          id="startNode"
          value={startNode}
          onChange={(e) => setStartNode(e.target.value)}
          className="border border-gray-400 p-2 rounded bg-gray-700 text-white"
        >
          {Object.keys(graph).map(node => (
            <option key={node} value={node}>{node}</option>
          ))}
        </select>
      </div>

      <button onClick={handleRun} className="bg-blue-500 my-4 text-white px-4 py-2 rounded">
        Run Dijkstra
      </button>
      <div className="">
        <h4 className="font-semibold">Distances from {startNode}:</h4>
        <pre>{JSON.stringify(distances, null, 2)}</pre>
      </div>
    </div>
  );
};

export default DijkstraExample;
