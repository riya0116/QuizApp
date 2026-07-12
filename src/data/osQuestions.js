const osQuestions = [
  {
    id: 1,
    question: "What is the primary purpose of an Operating System?",
    options: [
      "Compile programs",
      "Manage computer hardware and software resources",
      "Create databases",
      "Design web pages"
    ],
    answer: "Manage computer hardware and software resources",
    explanation: "An Operating System manages hardware resources and provides services for applications."
  },
  {
    id: 2,
    question: "Which scheduling algorithm gives the shortest process the highest priority?",
    options: [
      "FCFS",
      "Round Robin",
      "Shortest Job First (SJF)",
      "Priority Scheduling"
    ],
    answer: "Shortest Job First (SJF)",
    explanation: "SJF selects the process with the smallest CPU burst time."
  },
  {
    id: 3,
    question: "Which of the following is NOT a process state?",
    options: [
      "Ready",
      "Running",
      "Waiting",
      "Compiled"
    ],
    answer: "Compiled",
    explanation: "Common process states are New, Ready, Running, Waiting, and Terminated."
  },
  {
    id: 4,
    question: "Which memory management technique divides memory into fixed-size blocks?",
    options: [
      "Paging",
      "Segmentation",
      "Swapping",
      "Virtual Memory"
    ],
    answer: "Paging",
    explanation: "Paging divides memory into fixed-size pages and frames."
  },
  {
    id: 5,
    question: "What is a deadlock?",
    options: [
      "A process finishes successfully",
      "Two or more processes wait indefinitely for resources",
      "A CPU scheduling algorithm",
      "A type of memory"
    ],
    answer: "Two or more processes wait indefinitely for resources",
    explanation: "Deadlock occurs when processes are permanently blocked waiting for each other."
  },
  {
    id: 6,
    question: "Which CPU scheduling algorithm uses a fixed time quantum?",
    options: [
      "FCFS",
      "SJF",
      "Round Robin",
      "Priority Scheduling"
    ],
    answer: "Round Robin",
    explanation: "Round Robin allocates CPU for a fixed time slice to each process."
  },
  {
    id: 7,
    question: "Which of the following is volatile memory?",
    options: [
      "ROM",
      "Hard Disk",
      "RAM",
      "SSD"
    ],
    answer: "RAM",
    explanation: "RAM loses its data when power is turned off."
  },
  {
    id: 8,
    question: "Which page replacement algorithm replaces the page that has not been used for the longest time?",
    options: [
      "FIFO",
      "LRU",
      "Optimal",
      "Round Robin"
    ],
    answer: "LRU",
    explanation: "LRU stands for Least Recently Used."
  },
  {
    id: 9,
    question: "Which system call is used to create a new process in Unix/Linux?",
    options: [
      "exec()",
      "fork()",
      "wait()",
      "kill()"
    ],
    answer: "fork()",
    explanation: "fork() creates a child process."
  },
  {
    id: 10,
    question: "Which of the following is NOT one of Coffman's deadlock conditions?",
    options: [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    answer: "Preemption",
    explanation: "The condition is 'No Preemption', not 'Preemption'."
  }
];

export default osQuestions;