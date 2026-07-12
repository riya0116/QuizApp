const dsaQuestions = [
  {
    id: 1,
    question: "Which data structure follows the Last In First Out (LIFO) principle?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    answer: "Stack",
    explanation: "A Stack follows the Last In First Out (LIFO) principle."
  },
  {
    id: 2,
    question: "Which data structure follows the First In First Out (FIFO) principle?",
    options: ["Stack", "Heap", "Queue", "Graph"],
    answer: "Queue",
    explanation: "A Queue follows the First In First Out (FIFO) principle."
  },
  {
    id: 3,
    question: "What is the time complexity of accessing an element in an array by index?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(1)",
    explanation: "Arrays provide constant-time random access using indices."
  },
  {
    id: 4,
    question: "Which traversal of a Binary Search Tree (BST) gives elements in sorted order?",
    options: ["Preorder", "Postorder", "Inorder", "Level Order"],
    answer: "Inorder",
    explanation: "Inorder traversal of a BST visits nodes in ascending order."
  },
  {
    id: 5,
    question: "Which data structure is mainly used to implement recursion?",
    options: ["Queue", "Stack", "Heap", "Graph"],
    answer: "Stack",
    explanation: "Recursive function calls are stored in the call stack."
  },
  {
    id: 6,
    question: "What is the worst-case time complexity of linear search?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "O(n)",
    explanation: "In the worst case, every element must be checked."
  },
  {
    id: 7,
    question: "Which searching algorithm requires the array to be sorted?",
    options: ["Linear Search", "Binary Search", "Depth First Search", "Breadth First Search"],
    answer: "Binary Search",
    explanation: "Binary Search only works correctly on sorted arrays."
  },
  {
    id: 8,
    question: "Which of the following is NOT a linear data structure?",
    options: ["Array", "Linked List", "Queue", "Tree"],
    answer: "Tree",
    explanation: "A Tree is a non-linear data structure."
  },
  {
    id: 9,
    question: "Which sorting algorithm repeatedly swaps adjacent elements until the array is sorted?",
    options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Selection Sort"],
    answer: "Bubble Sort",
    explanation: "Bubble Sort compares and swaps adjacent elements repeatedly."
  },
  {
    id: 10,
    question: "Which data structure is best suited for representing hierarchical relationships?",
    options: ["Array", "Queue", "Tree", "Stack"],
    answer: "Tree",
    explanation: "Trees naturally represent hierarchical data like file systems and organization charts."
  }
];

export default dsaQuestions;