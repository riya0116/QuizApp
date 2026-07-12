const aptitudeQuestions = [
  {
    id: 1,
    question: "A train travels 120 km in 2 hours. What is its average speed?",
    options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
    answer: "60 km/h",
    explanation: "Average Speed = Distance ÷ Time = 120 ÷ 2 = 60 km/h."
  },
  {
    id: 2,
    question: "What is 25% of 480?",
    options: ["100", "110", "120", "125"],
    answer: "120",
    explanation: "25% of 480 = (25/100) × 480 = 120."
  },
  {
    id: 3,
    question: "If the ratio of boys to girls in a class is 3:2 and there are 30 boys, how many girls are there?",
    options: ["15", "18", "20", "25"],
    answer: "20",
    explanation: "3 parts = 30, so 1 part = 10. Girls = 2 × 10 = 20."
  },
  {
    id: 4,
    question: "Find the next number in the series: 2, 4, 8, 16, ?",
    options: ["18", "24", "30", "32"],
    answer: "32",
    explanation: "Each number is multiplied by 2."
  },
  {
    id: 5,
    question: "A shopkeeper gives a 10% discount on a ₹500 item. What is the final price?",
    options: ["₹400", "₹425", "₹450", "₹475"],
    answer: "₹450",
    explanation: "10% of ₹500 = ₹50. Final price = ₹500 − ₹50 = ₹450."
  },
  {
    id: 6,
    question: "What is the simple interest on ₹2000 at 5% per annum for 2 years?",
    options: ["₹100", "₹150", "₹200", "₹250"],
    answer: "₹200",
    explanation: "SI = (P × R × T) / 100 = (2000 × 5 × 2) / 100 = ₹200."
  },
  {
    id: 7,
    question: "If 8 workers complete a job in 15 days, how many days will 12 workers take (same efficiency)?",
    options: ["8", "10", "12", "15"],
    answer: "10",
    explanation: "Workers × Days = Constant. (8 × 15) ÷ 12 = 10 days."
  },
  {
    id: 8,
    question: "A number is increased by 20% and becomes 240. What was the original number?",
    options: ["180", "190", "200", "220"],
    answer: "200",
    explanation: "Original Number = 240 ÷ 1.2 = 200."
  },
  {
    id: 9,
    question: "The average of five numbers is 24. What is their total sum?",
    options: ["100", "110", "120", "130"],
    answer: "120",
    explanation: "Total = Average × Number of values = 24 × 5 = 120."
  },
  {
    id: 10,
    question: "If the cost price of an item is ₹800 and it is sold for ₹920, what is the profit percentage?",
    options: ["10%", "12%", "15%", "20%"],
    answer: "15%",
    explanation: "Profit = ₹920 − ₹800 = ₹120. Profit % = (120 ÷ 800) × 100 = 15%."
  }
];

export default aptitudeQuestions;