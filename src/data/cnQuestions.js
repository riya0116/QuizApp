const cnQuestions = [
  {
    id: 1,
    question: "What does the OSI model stand for?",
    options: [
      "Open Systems Interconnection",
      "Operating System Interface",
      "Open Software Integration",
      "Optical System Interconnection"
    ],
    answer: "Open Systems Interconnection",
    explanation: "OSI stands for Open Systems Interconnection, a 7-layer networking model."
  },
  {
    id: 2,
    question: "Which layer of the OSI model is responsible for routing packets?",
    options: [
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
      "Application Layer"
    ],
    answer: "Network Layer",
    explanation: "The Network Layer is responsible for logical addressing and routing."
  },
  {
    id: 3,
    question: "Which protocol is primarily used to transfer web pages?",
    options: ["FTP", "SMTP", "HTTP", "TCP"],
    answer: "HTTP",
    explanation: "HTTP (HyperText Transfer Protocol) is used for communication between web browsers and web servers."
  },
  {
    id: 4,
    question: "Which device forwards data packets between different networks?",
    options: ["Switch", "Hub", "Router", "Repeater"],
    answer: "Router",
    explanation: "Routers connect multiple networks and forward packets based on IP addresses."
  },
  {
    id: 5,
    question: "Which protocol is responsible for assigning IP addresses automatically?",
    options: ["DNS", "DHCP", "FTP", "ARP"],
    answer: "DHCP",
    explanation: "DHCP dynamically assigns IP addresses to devices on a network."
  },
  {
    id: 6,
    question: "Which protocol translates domain names into IP addresses?",
    options: ["HTTP", "DNS", "SMTP", "ICMP"],
    answer: "DNS",
    explanation: "DNS converts human-readable domain names into IP addresses."
  },
  {
    id: 7,
    question: "Which layer of the TCP/IP model is equivalent to the OSI Transport Layer?",
    options: [
      "Internet Layer",
      "Application Layer",
      "Transport Layer",
      "Network Access Layer"
    ],
    answer: "Transport Layer",
    explanation: "The TCP/IP Transport Layer provides end-to-end communication like the OSI Transport Layer."
  },
  {
    id: 8,
    question: "Which protocol provides reliable, connection-oriented communication?",
    options: ["UDP", "IP", "TCP", "ARP"],
    answer: "TCP",
    explanation: "TCP ensures reliable data delivery using acknowledgments and retransmissions."
  },
  {
    id: 9,
    question: "How many layers are there in the OSI model?",
    options: ["4", "5", "6", "7"],
    answer: "7",
    explanation: "The OSI model consists of seven layers."
  },
  {
    id: 10,
    question: "Which device operates primarily at the Data Link Layer (Layer 2) of the OSI model?",
    options: ["Router", "Gateway", "Switch", "Modem"],
    answer: "Switch",
    explanation: "A network switch forwards frames using MAC addresses and operates at Layer 2."
  }
];

export default cnQuestions;