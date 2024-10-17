import { useState } from 'react';

const MergeSortExample = () => {
  const [array, setArray] = useState([38, 27, 43, 3, 9, 82, 10]);
  const [sortedArray, setSortedArray] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending'); // Track sort order
  const [steps, setSteps] = useState([]); // Track sorting steps

  const mergeSort = (arr, order) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid), order);
    const right = mergeSort(arr.slice(mid), order);

    return merge(left, right, order);
  };

  const merge = (left, right, order) => {
    const result = [];
    let i = 0, j = 0;
    let currentStep = [];

    while (i < left.length && j < right.length) {
      if ((order === 'ascending' && left[i] < right[j]) || (order === 'descending' && left[i] > right[j])) {
        result.push(left[i]);
        currentStep.push(`Merged ${left[i]}`);
        i++;
      } else {
        result.push(right[j]);
        currentStep.push(`Merged ${right[j]}`);
        j++;
      }
    }

    currentStep.push(`Remaining left: ${left.slice(i)}, right: ${right.slice(j)}`);
    setSteps(prev => [...prev, currentStep.join(', ')]);
    
    return result.concat(left.slice(i)).concat(right.slice(j));
  };

  const handleSort = () => {
    setSteps([]); // Clear previous steps
    const result = mergeSort(array, sortOrder);
    setSortedArray(result);
  };

  const handleArrayChange = (e) => {
    const inputArray = e.target.value.split(',').map(Number); // Convert input string to number array
    setArray(inputArray);
  };

  const handleOrderChange = (e) => {
    setSortOrder(e.target.value); // Set ascending/descending
  };

  return (
    <div className="p-4 w-fit rounded-xl bg-[#2D2D2D] text-white">
      <h3 className="text-xl font-bold">Merge Sort Example</h3>

      {/* Input Array */}
      <div className="my-4">
        <label htmlFor="arrayInput" className="block mb-2 font-semibold">Enter Array (comma separated):</label>
        <input
          id="arrayInput"
          type="text"
          className="p-2 rounded bg-gray-700 text-white"
          value={array.join(', ')}
          onChange={handleArrayChange}
        />
      </div>

      {/* Sort Order Selection */}
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

      {/* Sort Button */}
      <div className="my-4">
        <button
          onClick={handleSort}
          className="bg-amber-400 text-white font-bold px-4 py-2 rounded"
        >
          Sort Array
        </button>
      </div>

      {/* Original and Sorted Array */}
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

      {/* Sorting Steps */}
      <div className="mt-4">
        <h4 className="font-semibold">Sorting Steps:</h4>
        <ul className="list-disc ml-6">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MergeSortExample;
