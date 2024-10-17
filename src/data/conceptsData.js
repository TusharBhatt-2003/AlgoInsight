export const conceptsData = [
  // Basic DSA Concepts
  {
    id: 1,
    category: "basic",
    title: "Bubble Sort",
    description: "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
    code: `function bubbleSort(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            // Swap
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
      return arr;
    }`,
    documentation: "Bubble sort is a simple sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. It is not suitable for large datasets as its average and worst-case time complexity is quite high (O(n²)).",
  },
  {
    id: 2,
    category: "basic",
    title: "Binary Search",
    description: "A searching algorithm that finds the position of a target value within a sorted array.",
    code: `function binarySearch(arr, target) {
      let left = 0;
      let right = arr.length - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
          return mid; // Target found
        }
        if (arr[mid] < target) {
          left = mid + 1; // Search in the right half
        } else {
          right = mid - 1; // Search in the left half
        }
      }
      return -1; // Target not found
    }`,
    documentation: "Binary search works on sorted arrays and repeatedly divides the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. The average time complexity is O(log n).",
  },
  
  // Intermediate DSA Concepts
  {
    id: 3,
    category: "intermediate",
    title: "Merge Sort",
    description: "A divide and conquer algorithm that was invented by John von Neumann in 1945.",
    code: `function mergeSort(arr) {
      if (arr.length <= 1) return arr;

      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));

      return merge(left, right);
    }

    function merge(left, right) {
      const result = [];
      let i = 0, j = 0;

      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
      }
      return result.concat(left.slice(i)).concat(right.slice(j));
    }`,
    documentation: "Merge sort is a comparison-based sorting algorithm that divides the array into halves, sorts them, and then merges them back together. Its time complexity is O(n log n), making it efficient for large datasets.",
  },
  {
    id: 4,
    category: "intermediate",
    title: "Depth-First Search (DFS)",
    description: "An algorithm for traversing or searching tree or graph data structures.",
    code: `function depthFirstSearch(graph, start) {
      const visited = new Set();
      function dfs(node) {
        if (!node) return;
        visited.add(node);
        console.log(node);
        graph[node].forEach(neighbor => {
          if (!visited.has(neighbor)) {
            dfs(neighbor);
          }
        });
      }
      dfs(start);
    }`,
    documentation: "DFS explores as far as possible along each branch before backing up. It can be implemented using recursion or a stack. Its time complexity is O(V + E), where V is vertices and E is edges.",
  },
  
  // Advanced DSA Concepts
  {
    id: 5,
    category: "advanced",
    title: "Dynamic Programming",
    description: "A method for solving complex problems by breaking them down into simpler subproblems.",
    code: `function fibonacci(n) {
      const memo = {};
      function fib(n) {
        if (n <= 1) return n;
        if (memo[n]) return memo[n];
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
      }
      return fib(n);
    }`,
    documentation: "Dynamic programming is an optimization technique that solves problems by storing the results of expensive function calls and reusing them when the same inputs occur again. This technique is useful for problems with overlapping subproblems and optimal substructure properties.",
  },
  {
    id: 6,
    category: "advanced",
    title: "Dijkstra's Algorithm",
    description: "An algorithm for finding the shortest paths between nodes in a graph.",
    code: `function dijkstra(graph, start) {
      const distances = {};
      const visited = new Set();
      const pq = new PriorityQueue();
      pq.enqueue(start, 0);
      distances[start] = 0;

      while (!pq.isEmpty()) {
        const { node } = pq.dequeue();
        visited.add(node);

        graph[node].forEach(neighbor => {
          const newDist = distances[node] + neighbor.weight;
          if (newDist < (distances[neighbor.node] || Infinity)) {
            distances[neighbor.node] = newDist;
            pq.enqueue(neighbor.node, newDist);
          }
        });
      }
      return distances;
    }`,
    documentation: "Dijkstra's algorithm finds the shortest path between nodes in a graph, which may represent, for example, road networks. It uses a priority queue to greedily select the next closest node. Its time complexity can vary, commonly O(E + V log V).",
  },
];
