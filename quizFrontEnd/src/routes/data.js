export const subjects = [
  { subject: "Mathematics", category: [
      { topic: "Algebra", no_of_questions: 30 },
      { topic: "Geometry", no_of_questions: 25 },
      { topic: "Calculus", no_of_questions: 20 },
      { topic: "Statistics", no_of_questions: 15 },
      { topic: "Trigonometry", no_of_questions: 10 }
  ]},
  { subject: "Physics", category: [
      { topic: "Mechanics", no_of_questions: 35 },
      { topic: "Optics", no_of_questions: 20 },
      { topic: "Thermodynamics", no_of_questions: 25 },
      { topic: "Electricity & Magnetism", no_of_questions: 30 },
      { topic: "Modern Physics", no_of_questions: 15 }
  ]},
  { subject: "Chemistry", category: [
      { topic: "Organic Chemistry", no_of_questions: 40 },
      { topic: "Inorganic Chemistry", no_of_questions: 30 },
      { topic: "Physical Chemistry", no_of_questions: 25 },
      { topic: "Analytical Chemistry", no_of_questions: 20 },
      { topic: "Biochemistry", no_of_questions: 15 }
  ]},
  { subject: "Biology", category: [
      { topic: "Cell Biology", no_of_questions: 35 },
      { topic: "Genetics", no_of_questions: 30 },
      { topic: "Evolution", no_of_questions: 20 },
      { topic: "Human Anatomy", no_of_questions: 25 },
      { topic: "Ecology", no_of_questions: 15 }
  ]},
  { subject: "Computer Science", category: [
      { topic: "Programming Fundamentals", no_of_questions: 40 },
      { topic: "Data Structures", no_of_questions: 30 },
      { topic: "Algorithms", no_of_questions: 25 },
      { topic: "Databases", no_of_questions: 20 },
      { topic: "Cybersecurity", no_of_questions: 15 }
  ]},
  { subject: "History", category: [
      { topic: "Ancient History", no_of_questions: 25 },
      { topic: "Medieval History", no_of_questions: 30 },
      { topic: "Modern History", no_of_questions: 20 },
      { topic: "World Wars", no_of_questions: 15 },
      { topic: "Post-Colonial History", no_of_questions: 10 }
  ]},
  { subject: "Geography", category: [
      { topic: "Physical Geography", no_of_questions: 35 },
      { topic: "Human Geography", no_of_questions: 30 },
      { topic: "Climate & Weather", no_of_questions: 20 },
      { topic: "Oceans & Rivers", no_of_questions: 25 },
      { topic: "Maps & Cartography", no_of_questions: 15 }
  ]},
  { subject: "Economics", category: [
      { topic: "Microeconomics", no_of_questions: 30 },
      { topic: "Macroeconomics", no_of_questions: 25 },
      { topic: "International Trade", no_of_questions: 20 },
      { topic: "Monetary Policy", no_of_questions: 15 },
      { topic: "Labor Economics", no_of_questions: 10 }
  ]},
  { subject: "Political Science", category: [
      { topic: "Government Systems", no_of_questions: 25 },
      { topic: "Public Policy", no_of_questions: 30 },
      { topic: "Constitutional Law", no_of_questions: 20 },
      { topic: "International Relations", no_of_questions: 15 },
      { topic: "Political Theories", no_of_questions: 10 }
  ]},
  { subject: "Business Studies",  category: [
      { topic: "Marketing", no_of_questions: 30 },
      { topic: "Finance", no_of_questions: 25 },
      { topic: "Management", no_of_questions: 20 },
      { topic: "Entrepreneurship", no_of_questions: 15 },
      { topic: "Business Ethics", no_of_questions: 10 }
  ]},
  { subject: "Sociology",  category: [
      { topic: "Social Structures", no_of_questions: 30 },
      { topic: "Cultural Studies", no_of_questions: 25 },
      { topic: "Social Inequality", no_of_questions: 20 },
      { topic: "Family & Society", no_of_questions: 15 },
      { topic: "Urbanization", no_of_questions: 10 }
  ]},
  { subject: "Psychology",  category: [
      { topic: "Cognitive Psychology", no_of_questions: 35 },
      { topic: "Behavioral Psychology", no_of_questions: 30 },
      { topic: "Clinical Psychology", no_of_questions: 25 },
      { topic: "Developmental Psychology", no_of_questions: 20 },
      { topic: "Neuroscience", no_of_questions: 15 }
  ]},
  { subject: "Philosophy",  category: [
      { topic: "Ethics", no_of_questions: 30 },
      { topic: "Metaphysics", no_of_questions: 25 },
      { topic: "Epistemology", no_of_questions: 20 },
      { topic: "Logic", no_of_questions: 15 },
      { topic: "Aesthetics", no_of_questions: 10 }
  ]},
  { subject: "Law",  category: [
      { topic: "Criminal Law", no_of_questions: 35 },
      { topic: "Civil Law", no_of_questions: 30 },
      { topic: "International Law", no_of_questions: 25 },
      { topic: "Corporate Law", no_of_questions: 20 },
      { topic: "Intellectual Property", no_of_questions: 15 }
  ]},
  { subject: "Engineering",  category: [
      { topic: "Mechanical Engineering", no_of_questions: 40 },
      { topic: "Electrical Engineering", no_of_questions: 30 },
      { topic: "Civil Engineering", no_of_questions: 25 },
      { topic: "Computer Engineering", no_of_questions: 20 },
      { topic: "Aerospace Engineering", no_of_questions: 15 }
  ]},
  { subject: "Music",  category: [
      { topic: "Music Theory", no_of_questions: 25 },
      { topic: "Instruments", no_of_questions: 30 },
      { topic: "Composition", no_of_questions: 20 },
      { topic: "Genres", no_of_questions: 15 },
      { topic: "Music History", no_of_questions: 10 }
  ]}
]


export const questions = [
    {
      "ID": 1,
      "Question": "What is the capital of France?",
      "CorrectOption": "A",
      "OptionA": "Paris",
      "OptionB": "Berlin",
      "OptionC": "Madrid",
      "OptionD": "Rome",
      "Answer Explanation": "Paris is the capital and most populous city of France.",
      "Category": "Geography"
    },
    {
      "ID": 2,
      "Question": "What is 2 + 2?",
      "CorrectOption": "B",
      "OptionA": "3",
      "OptionB": "4",
      "OptionC": "5",
      "OptionD": "6",
      "Answer Explanation": "2 + 2 equals 4.",
      "Category": "Math"
    },
    {
      "ID": 3,
      "Question": "Who wrote \"Romeo and Juliet\"?",
      "CorrectOption": "C",
      "OptionA": "Charles Dickens",
      "OptionB": "Mark Twain",
      "OptionC": "William Shakespeare",
      "OptionD": "Jane Austen",
      "Answer Explanation": "William Shakespeare is the author of \"Romeo and Juliet\".",
      "Category": "Literature"
    },
    {
      "ID": 4,
      "Question": "Which element has the chemical symbol O?",
      "CorrectOption": "A",
      "OptionA": "Oxygen",
      "OptionB": "Gold",
      "OptionC": "Osmium",
      "OptionD": "Oganesson",
      "Answer Explanation": "Oxygen is represented by the symbol O.",
      "Category": "Science"
    },
    {
      "ID": 5,
      "Question": "What is the largest planet in our solar system?",
      "CorrectOption": "D",
      "OptionA": "Earth",
      "OptionB": "Saturn",
      "OptionC": "Neptune",
      "OptionD": "Jupiter",
      "Answer Explanation": "Jupiter is the largest planet in our solar system by mass and volume.",
      "Category": "Astronomy"
    },
    {
      "ID": 6,
      "Question": "In which continent is the Sahara Desert located?",
      "CorrectOption": "B",
      "OptionA": "Asia",
      "OptionB": "Africa",
      "OptionC": "Australia",
      "OptionD": "South America",
      "Answer Explanation": "The Sahara Desert is located in Africa.",
      "Category": "Geography"
    },
    {
      "ID": 7,
      "Question": "What is the boiling point of water at sea level in Celsius?",
      "CorrectOption": "A",
      "OptionA": "100°C",
      "OptionB": "90°C",
      "OptionC": "80°C",
      "OptionD": "110°C",
      "Answer Explanation": "Water boils at 100°C at sea level.",
      "Category": "Science"
    },
    {
      "ID": 8,
      "Question": "Who painted the Mona Lisa?",
      "CorrectOption": "C",
      "OptionA": "Vincent van Gogh",
      "OptionB": "Pablo Picasso",
      "OptionC": "Leonardo da Vinci",
      "OptionD": "Claude Monet",
      "Answer Explanation": "Leonardo da Vinci painted the Mona Lisa.",
      "Category": "Art"
    },
    {
      "ID": 9,
      "Question": "What is the currency of Japan?",
      "CorrectOption": "B",
      "OptionA": "Yuan",
      "OptionB": "Yen",
      "OptionC": "Won",
      "OptionD": "Dollar",
      "Answer Explanation": "The currency of Japan is the Yen.",
      "Category": "Economics"
    },
    {
      "ID": 10,
      "Question": "What is the square root of 64?",
      "CorrectOption": "D",
      "OptionA": "6",
      "OptionB": "7",
      "OptionC": "8.5",
      "OptionD": "8",
      "Answer Explanation": "The square root of 64 is 8.",
      "Category": "Math"
    }
          ]

       
        