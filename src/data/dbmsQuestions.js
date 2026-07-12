const dbmsQuestions = [
  {
    id: 1,
    question: "What does DBMS stand for?",
    options: [
      "Database Management System",
      "Data Backup Management System",
      "Database Memory System",
      "Data Block Management System"
    ],
    answer: "Database Management System",
    explanation: "DBMS is software used to create, manage, and manipulate databases."
  },
  {
    id: 2,
    question: "Which SQL command is used to retrieve data?",
    options: [
      "INSERT",
      "UPDATE",
      "SELECT",
      "DELETE"
    ],
    answer: "SELECT",
    explanation: "SELECT is used to fetch data from one or more tables."
  },
  {
    id: 3,
    question: "Which key uniquely identifies each record in a table?",
    options: [
      "Foreign Key",
      "Primary Key",
      "Composite Key",
      "Candidate Key"
    ],
    answer: "Primary Key",
    explanation: "A Primary Key uniquely identifies every row in a table."
  },
  {
    id: 4,
    question: "Which normal form removes partial dependency?",
    options: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    answer: "2NF",
    explanation: "Second Normal Form removes partial dependencies."
  },
  {
    id: 5,
    question: "Which SQL clause is used to filter rows?",
    options: [
      "GROUP BY",
      "ORDER BY",
      "WHERE",
      "HAVING"
    ],
    answer: "WHERE",
    explanation: "WHERE filters rows before grouping."
  },
  {
    id: 6,
    question: "Which JOIN returns all matching rows from both tables?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN"
    ],
    answer: "FULL OUTER JOIN",
    explanation: "FULL OUTER JOIN returns matching and non-matching rows from both tables."
  },
  {
    id: 7,
    question: "Which property of ACID ensures that a transaction is completed entirely or not at all?",
    options: [
      "Consistency",
      "Isolation",
      "Atomicity",
      "Durability"
    ],
    answer: "Atomicity",
    explanation: "Atomicity ensures all-or-nothing execution of a transaction."
  },
  {
    id: 8,
    question: "Which SQL command is used to remove a table permanently?",
    options: [
      "DELETE",
      "TRUNCATE",
      "DROP",
      "REMOVE"
    ],
    answer: "DROP",
    explanation: "DROP permanently deletes the table structure and data."
  },
  {
    id: 9,
    question: "Which index structure is commonly used in databases?",
    options: [
      "Binary Tree",
      "B+ Tree",
      "Stack",
      "Queue"
    ],
    answer: "B+ Tree",
    explanation: "B+ Trees are widely used for efficient indexing."
  },
  {
    id: 10,
    question: "Which SQL clause is used to group rows having the same values?",
    options: [
      "ORDER BY",
      "GROUP BY",
      "WHERE",
      "LIMIT"
    ],
    answer: "GROUP BY",
    explanation: "GROUP BY groups rows based on one or more columns."
  }
];

export default dbmsQuestions;