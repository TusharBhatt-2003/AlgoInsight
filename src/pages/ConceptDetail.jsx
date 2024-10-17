import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { conceptsData } from "../data/conceptsData";
import BubbleSortExample from './BubbleSortExample';
import BinarySearchExample from './BinarySearchExample';
import MergeSortExample from './MergeSortExample';
import DFSExample from './DFSExample';
import FibonacciExample from './FibonacciExample';
import DijkstraExample from './DijkstraExample';
import Prism from 'prismjs';

const ConceptDetail = () => {
  const { id } = useParams();
  const concept = conceptsData.find(concept => concept.id === parseInt(id));

  useEffect(() => {
    Prism.highlightAll(); // Highlight code when the component mounts
  }, [concept]); // Update on concept change

  if (!concept) {
    return <div>Concept not found!</div>;
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(concept.code).then(() => {
      alert('Code copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const renderExample = () => {
    switch (concept.title) {
      case "Bubble Sort":
        return <BubbleSortExample />;
      case "Binary Search":
        return <BinarySearchExample />;
      case "Merge Sort":
        return <MergeSortExample />;
      case "Depth-First Search (DFS)":
        return <DFSExample />;
      case "Dynamic Programming":
        return <FibonacciExample />;
      case "Dijkstra's Algorithm":
        return <DijkstraExample />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen px-5 md:px-20 lg:px-60 bg-black flex items-center justify-center text-white">
      <div className="container mx-auto p-4">
        <div className='flex flex-col md:flex-row gap-10'>
          {/* Concept Details */}
          <div className="flex-1">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-4">{concept.title}</h2>
            <p className="text-slate-400 md:text-lg text-sm mb-8">
              {concept.documentation}
            </p>
            <div>
              <h3 className='mb-2 font-bold'>Interactive Example:</h3>
              {renderExample()}
            </div>
          </div>

          {/* Code Section */}
          <div className='flex-1'>
            <h3 className="text-xl md:text-2xl font-semibold text-amber-300 mb-4">Code:</h3>
            <div className="relative">    
              <pre className="w-full rounded-lg overflow-auto bg-gray-900 p-4">
                <button 
                  onClick={copyToClipboard} 
                  className="mb-2 mr-2 text-zinc-500 border-zinc-500 hover:text-zinc-400 hover:border-zinc-400 px-2 pb-1 rounded border"
                >
                  Copy
                </button>
                <code className="language-javascript block">{concept.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptDetail;
