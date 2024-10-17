import React, { useState } from 'react';

const FibonacciExample = () => {
  const [n, setN] = useState('');
  const [result, setResult] = useState(null);
  const [steps, setSteps] = useState([]);

  const fibonacci = (num) => {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  const handleCalculate = () => {
    const parsedN = parseInt(n);
    if (isNaN(parsedN) || parsedN < 0) {
      alert('Please enter a valid non-negative number');
      return;
    }

    const fibResult = fibonacciWithSteps(parsedN);
    setResult(fibResult.result);
    setSteps(fibResult.steps);
  };

  // Enhanced Fibonacci function that logs steps
  const fibonacciWithSteps = (num) => {
    const steps = [];
    const fib = (num) => {
      if (num <= 1) {
        steps.push(`fibonacci(${num}) = ${num}`);
        return num;
      }
      const value = fib(num - 1) + fib(num - 2);
      steps.push(`fibonacci(${num}) = fibonacci(${num - 1}) + fibonacci(${num - 2}) = ${value}`);
      return value;
    };

    return { result: fib(num), steps };
  };

  return (
    <div className="p-4 w-fit rounded-xl bg-[#2D2D2D] text-white">
      <h3 className="text-xl font-bold">Fibonacci Example</h3>
      
      {/* Input for N */}
      <input
        type="number"
        value={n}
        onChange={(e) => setN(e.target.value)}
        className="border my-4 border-gray-400 px-2 py-1 bg-gray-700 text-white rounded"
        placeholder="Don't add large number"
      />

      {/* Calculate Button */}
      <button onClick={handleCalculate} className="ml-4 bg-amber-400 text-white px-4 py-2 rounded">
        Calculate Fibonacci
      </button>

      {/* Result Output */}
      <p className="mt-4">{result !== null ? `Fibonacci(${n}) = ${result}` : ''}</p>

      {/* Calculation Steps */}
      {steps.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold">Calculation Steps:</h4>
          <ul className="list-disc ml-6">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FibonacciExample;
