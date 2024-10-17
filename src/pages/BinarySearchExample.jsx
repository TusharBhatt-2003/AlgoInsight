import React, { useState } from 'react';

const BinarySearchExample = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [target, setTarget] = useState('');
  const [result, setResult] = useState('');
  const [steps, setSteps] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let searchSteps = []; // Track steps

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      searchSteps.push(`Checking middle index ${mid} with value ${arr[mid]}`); // Log the current step

      if (arr[mid] === target) {
        searchSteps.push(`Target ${target} found at index ${mid}`);
        setSteps(searchSteps);
        return mid;
      }

      if (arr[mid] < target) {
        searchSteps.push(`Target is greater than ${arr[mid]}, moving right`);
        left = mid + 1;
      } else {
        searchSteps.push(`Target is less than ${arr[mid]}, moving left`);
        right = mid - 1;
      }
    }

    searchSteps.push(`Target ${target} not found in the array`);
    setSteps(searchSteps);
    return -1;
  };

  const handleSearch = () => {
    if (target === '') {
      setResult('Please enter a number');
      return;
    }

    setIsSearching(true);
    const index = binarySearch(array, parseInt(target));
    setResult(index !== -1 ? `Found at index: ${index}` : 'Not found');
    setIsSearching(false);
  };

  return (
    <div className="p-4 w-fit rounded-xl bg-[#2D2D2D] text-white">
      <h3 className="text-xl font-bold">Binary Search Example</h3>
      
      <div className="my-4">
        <h4 className="font-semibold">Array (sorted):</h4>
        <p>{array.join(', ')}</p>
      </div>

      {/* Target Input */}
      <div className="my-4">
        <label htmlFor="targetInput" className="block mb-2 font-semibold">Enter Target Number:</label>
        <input
          id="targetInput"
          type="number"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white"
          placeholder="Enter target number"
        />
      </div>

      {/* Search Button */}
      <div className="my-4">
        <button
          onClick={handleSearch}
          disabled={isSearching}
          className="bg-amber-400 text-white font-bold px-4 py-2 rounded"
        >
          {isSearching ? 'Searching...' : 'Search'}
        </button>
      </div>

      {/* Search Result */}
      <div className="mt-4">
        <h4 className="font-semibold">Result:</h4>
        <p>{result}</p>
      </div>

      {/* Search Steps */}
      <div className="mt-4">
        <h4 className="font-semibold">Search Steps:</h4>
        <ul className="list-disc ml-6">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BinarySearchExample;
