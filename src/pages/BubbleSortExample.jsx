import React, { useState } from 'react';

const BubbleSortExample = () => {
  const [array, setArray] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [stepCount, setStepCount] = useState(0); // New state for step count

  // Modify bubbleSort to support ascending and descending order, and track steps
  const bubbleSort = (arr, order) => {
    const newArr = [...arr];
    let steps = 0; // Initialize step count
    for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < newArr.length - i - 1; j++) {
        if (
          (order === 'ascending' && newArr[j] > newArr[j + 1]) ||
          (order === 'descending' && newArr[j] < newArr[j + 1])
        ) {
          [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
          steps++; // Increment step count for each swap
        }
      }
    }
    setStepCount(steps); // Set the step count state
    return newArr;
  };

  const handleSort = () => {
    setIsSorting(true);
    const result = bubbleSort(array, sortOrder);
    setSortedArray(result);
    setIsSorting(false);
  };

  const handleArrayChange = (e) => {
    const inputArray = e.target.value.split(',').map(Number);
    setArray(inputArray);
  };

  const handleOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="p-4 w-fit rounded-xl bg-[#2D2D2D] text-white">
      <h3 className="text-xl font-bold">Bubble Sort Example</h3>

      {/* Input array */}
      <div className="my-4">
        <label htmlFor="arrayInput" className="block mb-2 font-semibold">Enter Array (comma separated):</label>
        <input
          placeholder='Enter an array of numbers'
          id="arrayInput"
          type="text"
          className="p-2 rounded bg-gray-700 text-white "
          value={array.join(', ')}
          onChange={handleArrayChange}
        />
      </div>

      {/* Sort order selection */}
      <div className="my-4">
        <label htmlFor="sortOrder" className="block mb-2 font-semibold">Sort Order:</label>
        <select
          id="sortOrder"
          className="p-2 rounded bg-gray-700 text-white"
          value={sortOrder}
          onChange={handleOrderChange}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>

      {/* Sort button */}
      <div className="my-4">
        <button
          onClick={handleSort}
          disabled={isSorting}
          className="bg-amber-400 text-white font-bold px-4 py-2 rounded"
        >
          {isSorting ? 'Sorting...' : 'Sort Array'}
        </button>
      </div>

      {/* Display original and sorted arrays */}
      <div className="flex flex-col gap-2 justify-between">
        <div>
          <h4 className="font-semibold">Original Array:</h4>
          <p>{array.join(', ')}</p>
        </div>
        <div>
          <h4 className="font-semibold">Sorted Array:</h4>
          <p>{sortedArray.join(', ')}</p>
        </div>
      </div>

      {/* Display step count */}
      <div className="mt-4">
        <h4 className="font-semibold">Number of Steps:</h4>
        <p>{stepCount}</p>
      </div>
    </div>
  );
};

export default BubbleSortExample;
