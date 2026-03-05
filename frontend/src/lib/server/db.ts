import type { Question, Quiz } from "$lib/types/quiz";

export const questions = [
  {
    id: "q1",
    question: "What is the capital of Australia?",
    options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
    answer: "Canberra",
    type: "mcq",
  },
  {
    id: "q2",
    question: "The chemical symbol for Gold is Au.",
    options: ["True", "False"],
    answer: "True",
    type: "true-false",
  },
  {
    id: "q3",
    question: "Who developed the theory of general relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
    answer: "Albert Einstein",
    type: "mcq",
  },
  {
    id: "q4",
    question: "In which year did World War II end?",
    options: ["1942", "1945", "1948", "1950"],
    answer: "1945",
    type: "mcq",
  },
  {
    id: "q5",
    question: "Water boils at 100°C at sea level.",
    options: ["True", "False"],
    answer: "True",
    type: "true-false",
  },
  {
    id: "q6",
    question: "What is the square root of 144?",
    options: ["10", "12", "14", "16"],
    answer: "12",
    type: "mcq",
  },
  {
    id: "q7",
    question: "The Great Wall of China is visible from space.",
    options: ["True", "False"],
    answer: "False",
    type: "true-false",
  },
  {
    id: "q8",
    question: "Who painted the Mona Lisa?",
    options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    answer: "Leonardo da Vinci",
    type: "mcq",
  },
  {
    id: "q9",
    question: "What is the hardest natural substance on Earth?",
    options: ["Diamond", "Gold", "Quartz", "Graphite"],
    answer: "Diamond",
    type: "mcq",
  },
  {
    id: "q10",
    question: "The currency of Japan is the Yen.",
    options: ["True", "False"],
    answer: "True",
    type: "true-false",
  },
  {
    id: "q11",
    question: "What gas do plants absorb during photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
    type: "mcq",
  },
  {
    id: "q12",
    question: "The human body has four lungs.",
    options: ["True", "False"],
    answer: "False",
    type: "true-false",
  },
  {
    id: "q13",
    question: "What is the chemical formula for table salt?",
    options: ["NaCl", "KCl", "Na2CO3", "CaCl2"],
    answer: "NaCl",
    type: "mcq",
  },
  {
    id: "q14",
    question: "What is the tallest mountain in the world?",
    options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Denali"],
    answer: "Mount Everest",
    type: "mcq",
  },
  {
    id: "q15",
    question: "The speed of light is approximately 300,000 km/s.",
    options: ["True", "False"],
    answer: "True",
    type: "true-false",
  },
  {
    id: "q16",
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
    type: "mcq",
  },
  {
    id: "q17",
    question: "Which organ in the human body produces insulin?",
    options: ["Pancreas", "Liver", "Kidney", "Heart"],
    answer: "Pancreas",
    type: "mcq",
  },
  {
    id: "q18",
    question: "Flashcard: Capital of Canada?",
    answer: "Ottawa",
    type: "flashcard",
  },
  {
    id: "q19",
    question: "Flashcard: Who wrote '1984'?",
    answer: "George Orwell",
    type: "flashcard",
  },
  {
    id: "q20",
    question: "Flashcard: What is the chemical symbol for Oxygen?",
    answer: "O",
    type: "flashcard",
  },
];

export const quiz1: Quiz = {
  id: "physics-101",
  title: "Physics 101",
  questions: [
    {
      id: "q1",
      type: "mcq",
      prompt: "What is the unit of force in the SI system?",
      options: ["Newton", "Joule", "Watt", "Pascal"],
      answer: "Newton",
      points: 1,
      explanation: "Force is measured in Newtons (N)."
    },
    {
      id: "q2",
      type: "mcq",
      prompt: "Which of the following is a scalar quantity?",
      options: ["Velocity", "Acceleration", "Speed", "Force"],
      answer: "Speed",
      points: 1,
      explanation: "Speed has magnitude only, no direction."
    },
    {
      id: "q3",
      type: "flashcard",
      prompt: "Define Newton's Second Law of Motion.",
      answer: "Force equals mass times acceleration (F = ma).",
      points: 1
    },
    {
      id: "q4",
      type: "mcq",
      prompt: "What physical quantity does 'joule' measure?",
      options: ["Energy", "Force", "Power", "Pressure"],
      answer: "Energy",
      points: 1
    },
    {
      id: "q5",
      type: "flashcard",
      prompt: "What is the formula for kinetic energy?",
      answer: "KE = 1/2 mv²",
      points: 1
    },
    {
      id: "q6",
      type: "mcq",
      prompt: "Which type of wave requires a medium to travel?",
      options: ["Light wave", "Radio wave", "Sound wave", "X-ray"],
      answer: "Sound wave",
      points: 1
    },
    {
      id: "q7",
      type: "flashcard",
      prompt: "What is the unit of frequency?",
      answer: "Hertz (Hz)",
      points: 1
    },
    {
      id: "q8",
      type: "mcq",
      prompt: "Who formulated the laws of motion?",
      options: ["Einstein", "Newton", "Galileo", "Tesla"],
      answer: "Newton",
      points: 1
    },
    {
      id: "q9",
      type: "flashcard",
      prompt: "Define momentum.",
      answer: "Mass times velocity.",
      points: 1
    },
    {
      id: "q10",
      type: "mcq",
      prompt: "What is the acceleration of an object in free fall near Earth’s surface?",
      options: ["9.8 m/s²", "10 m/s", "8.9 m/s²", "0 m/s²"],
      answer: "9.8 m/s²",
      points: 1
    }
  ]
};

export const quiz2: Quiz = {
  id: "chemistry-basics",
  title: "Chemistry Basics",
  questions: [
    {
      id: "q11",
      type: "mcq",
      prompt: "What is the atomic number of Oxygen?",
      options: ["8", "16", "6", "12"],
      answer: "8",
      points: 1
    },
    {
      id: "q12",
      type: "flashcard",
      prompt: "Name the process where a liquid changes into a gas.",
      answer: "Evaporation",
      points: 1
    },
    {
      id: "q13",
      type: "mcq",
      prompt: "Which element is a noble gas?",
      options: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
      answer: "Argon",
      points: 1
    },
    {
      id: "q14",
      type: "mcq",
      prompt: "What is the chemical symbol for Sodium?",
      options: ["S", "Na", "N", "So"],
      answer: "Na",
      points: 1
    },
    {
      id: "q15",
      type: "flashcard",
      prompt: "Define pH.",
      answer: "Measure of acidity or alkalinity of a solution.",
      points: 1
    },
    {
      id: "q16",
      type: "mcq",
      prompt: "What type of bond holds water molecules together?",
      options: ["Ionic", "Covalent", "Hydrogen", "Metallic"],
      answer: "Hydrogen",
      points: 1
    },
    {
      id: "q17",
      type: "flashcard",
      prompt: "What is Avogadro’s number?",
      answer: "6.022 × 10²³ particles per mole.",
      points: 1
    },
    {
      id: "q18",
      type: "mcq",
      prompt: "Which gas do plants absorb during photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Carbon Dioxide",
      points: 1
    },
    {
      id: "q19",
      type: "mcq",
      prompt: "What is the main component of natural gas?",
      options: ["Methane", "Ethane", "Propane", "Butane"],
      answer: "Methane",
      points: 1
    },
    {
      id: "q20",
      type: "flashcard",
      prompt: "Describe the law of conservation of mass.",
      answer: "Mass is neither created nor destroyed in chemical reactions.",
      points: 1
    }
  ]
};

export const quiz3: Quiz = {
  id: "biology-intro",
  title: "Biology Intro",
  questions: [
    {
      id: "q21",
      type: "mcq",
      prompt: "What is the basic unit of life?",
      options: ["Organ", "Cell", "Tissue", "Molecule"],
      answer: "Cell",
      points: 1
    },
    {
      id: "q22",
      type: "mcq",
      prompt: "Which organelle is responsible for photosynthesis?",
      options: ["Mitochondria", "Ribosomes", "Chloroplast", "Nucleus"],
      answer: "Chloroplast",
      points: 1
    },
    {
      id: "q23",
      type: "flashcard",
      prompt: "Define osmosis.",
      answer: "Movement of water across a semi-permeable membrane.",
      points: 1
    },
    {
      id: "q24",
      type: "mcq",
      prompt: "DNA stands for?",
      options: ["Deoxyribonucleic Acid", "Deoxyribose Nucleic Acid", "Deoxynitric Acid", "Dioxynucleic Acid"],
      answer: "Deoxyribonucleic Acid",
      points: 1
    },
    {
      id: "q25",
      type: "mcq",
      prompt: "Which blood cells fight infections?",
      options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
      answer: "White blood cells",
      points: 1
    },
    {
      id: "q26",
      type: "flashcard",
      prompt: "What does ATP stand for?",
      answer: "Adenosine Triphosphate",
      points: 1
    },
    {
      id: "q27",
      type: "mcq",
      prompt: "What kingdom do mushrooms belong to?",
      options: ["Animalia", "Plantae", "Fungi", "Protista"],
      answer: "Fungi",
      points: 1
    },
    {
      id: "q28",
      type: "mcq",
      prompt: "Which system regulates hormones?",
      options: ["Digestive system", "Endocrine system", "Nervous system", "Respiratory system"],
      answer: "Endocrine system",
      points: 1
    },
    {
      id: "q29",
      type: "flashcard",
      prompt: "Define homeostasis.",
      answer: "Maintenance of a stable internal environment.",
      points: 1
    },
    {
      id: "q30",
      type: "mcq",
      prompt: "Which macronutrient is primary for energy?",
      options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
      answer: "Carbohydrates",
      points: 1
    }
  ]
};

export const quiz4: Quiz = {
  id: "algebra-i",
  title: "Algebra I",
  questions: [
    {
      id: "q31",
      type: "mcq",
      prompt: "What is the solution to the equation 2x + 3 = 7?",
      options: ["x = 2", "x = 5", "x = 10", "x = 1"],
      answer: "x = 2",
      points: 1
    },
    {
      id: "q32",
      type: "mcq",
      prompt: "Simplify: 3(x + 4).",
      options: ["3x + 4", "3x + 12", "x + 12", "3x + 7"],
      answer: "3x + 12",
      points: 1
    },
    {
      id: "q33",
      type: "flashcard",
      prompt: "Define a variable in algebra.",
      answer: "A symbol representing an unknown value.",
      points: 1
    },
    {
      id: "q34",
      type: "mcq",
      prompt: "What is the value of x if x² = 25?",
      options: ["5", "-5", "±5", "0"],
      answer: "±5",
      points: 1
    },
    {
      id: "q35",
      type: "mcq",
      prompt: "Which property is used to solve equations like a(b + c) = ab + ac?",
      options: ["Associative", "Distributive", "Commutative", "Reflexive"],
      answer: "Distributive",
      points: 1
    },
    {
      id: "q36",
      type: "flashcard",
      prompt: "What is the degree of the polynomial 5x³ + 2x² - 7?",
      answer: "3",
      points: 1
    },
    {
      id: "q37",
      type: "mcq",
      prompt: "Solve for y: 2y - 4 = 10.",
      options: ["7", "3", "6", "4"],
      answer: "7",
      points: 1
    },
    {
      id: "q38",
      type: "flashcard",
      prompt: "Explain the term 'coefficient'.",
      answer: "The numerical factor in a term.",
      points: 1
    },
    {
      id: "q39",
      type: "mcq",
      prompt: "What is the slope of a horizontal line?",
      options: ["0", "Undefined", "1", "-1"],
      answer: "0",
      points: 1
    },
    {
      id: "q40",
      type: "mcq",
      prompt: "Which of these is an example of a quadratic equation?",
      options: ["x² + 3x + 2 = 0", "2x + 3 = 6", "x + 5 = 0", "3x³ = 9"],
      answer: "x² + 3x + 2 = 0",
      points: 1
    }
  ]
};

export const quiz5: Quiz = {
  id: "economics-intro",
  title: "Economics Intro",
  questions: [
    {
      id: "q41",
      type: "mcq",
      prompt: "What does GDP stand for?",
      options: ["Gross Domestic Product", "General Domestic Price", "Government Debt Percentage", "Gross Demand Projection"],
      answer: "Gross Domestic Product",
      points: 1
    },
    {
      id: "q42",
      type: "mcq",
      prompt: "Which of these is a factor of production?",
      options: ["Labor", "Price", "Demand", "Profit"],
      answer: "Labor",
      points: 1
    },
    {
      id: "q43",
      type: "flashcard",
      prompt: "Define opportunity cost.",
      answer: "The cost of forgoing the next best alternative when making a decision.",
      points: 1
    },
    {
      id: "q44",
      type: "mcq",
      prompt: "What does inflation do to prices over time?",
      options: ["Raises prices", "Lowers prices", "Keeps prices constant", "Makes prices unpredictable"],
      answer: "Raises prices",
      points: 1
    },
    {
      id: "q45",
      type: "mcq",
      prompt: "Which market structure has only one seller?",
      options: ["Monopoly", "Oligopoly", "Perfect Competition", "Monopolistic Competition"],
      answer: "Monopoly",
      points: 1
    },
    {
      id: "q46",
      type: "flashcard",
      prompt: "What is demand elasticity?",
      answer: "How quantity demanded changes with price.",
      points: 1
    },
    {
      id: "q47",
      type: "mcq",
      prompt: "Which instrument is used to measure inflation?",
      options: ["Consumer Price Index", "GDP", "Interest Rate", "Stock Market"],
      answer: "Consumer Price Index",
      points: 1
    },
    {
      id: "q48",
      type: "mcq",
      prompt: "What is a substitute good?",
      options: ["A good that replaces another", "A good used together with another", "A luxury good", "A perishable good"],
      answer: "A good that replaces another",
      points: 1
    },
    {
      id: "q49",
      type: "flashcard",
      prompt: "Describe 'scarcity' in economics.",
      answer: "Limited availability of resources compared to wants.",
      points: 1
    },
    {
      id: "q50",
      type: "mcq",
      prompt: "Which market structure features many sellers offering differentiated products?",
      options: ["Monopoly", "Perfect Competition", "Oligopoly", "Monopolistic Competition"],
      answer: "Monopolistic Competition",
      points: 1
    }
  ]
};

export const quizSample : Quiz[] =[
  {
    id: "physics-101",
    title: "Physics 101",
    questions: [
      {
        id: "q1",
        type: "mcq",
        prompt: "What is the unit of force in the SI system?",
        options: ["Newton", "Joule", "Watt", "Pascal"],
        answer: "Newton",
        points: 1,
        explanation: "Force is measured in Newtons (N)."
      },
      {
        id: "q2",
        type: "mcq",
        prompt: "Which of the following is a scalar quantity?",
        options: ["Velocity", "Acceleration", "Speed", "Force"],
        answer: "Speed",
        points: 1,
        explanation: "Speed has magnitude only, no direction."
      },
      {
        id: "q3",
        type: "flashcard",
        prompt: "Define Newton's Second Law of Motion.",
        answer: "Force equals mass times acceleration (F = ma).",
        points: 1
      },
      {
        id: "q4",
        type: "mcq",
        prompt: "What physical quantity does 'joule' measure?",
        options: ["Energy", "Force", "Power", "Pressure"],
        answer: "Energy",
        points: 1
      },
      {
        id: "q5",
        type: "flashcard",
        prompt: "What is the formula for kinetic energy?",
        answer: "KE = 1/2 mv²",
        points: 1
      },
      {
        id: "q6",
        type: "mcq",
        prompt: "Which type of wave requires a medium to travel?",
        options: ["Light wave", "Radio wave", "Sound wave", "X-ray"],
        answer: "Sound wave",
        points: 1
      },
      {
        id: "q7",
        type: "flashcard",
        prompt: "What is the unit of frequency?",
        answer: "Hertz (Hz)",
        points: 1
      },
      {
        id: "q8",
        type: "mcq",
        prompt: "Who formulated the laws of motion?",
        options: ["Einstein", "Newton", "Galileo", "Tesla"],
        answer: "Newton",
        points: 1
      },
      {
        id: "q9",
        type: "flashcard",
        prompt: "Define momentum.",
        answer: "Mass times velocity.",
        points: 1
      },
      {
        id: "q10",
        type: "mcq",
        prompt: "What is the acceleration of an object in free fall near Earth’s surface?",
        options: ["9.8 m/s²", "10 m/s", "8.9 m/s²", "0 m/s²"],
        answer: "9.8 m/s²",
        points: 1
      }
    ]
  },
  {
    id: "economics-intro",
    title: "Economics Intro",
    questions: [
      {
        id: "q41",
        type: "mcq",
        prompt: "What does GDP stand for?",
        options: ["Gross Domestic Product", "General Domestic Price", "Government Debt Percentage", "Gross Demand Projection"],
        answer: "Gross Domestic Product",
        points: 1
      },
      {
        id: "q42",
        type: "mcq",
        prompt: "Which of these is a factor of production?",
        options: ["Labor", "Price", "Demand", "Profit"],
        answer: "Labor",
        points: 1
      },
      {
        id: "q43",
        type: "flashcard",
        prompt: "Define opportunity cost.",
        answer: "The cost of forgoing the next best alternative when making a decision.",
        points: 1
      },
      {
        id: "q44",
        type: "mcq",
        prompt: "What does inflation do to prices over time?",
        options: ["Raises prices", "Lowers prices", "Keeps prices constant", "Makes prices unpredictable"],
        answer: "Raises prices",
        points: 1
      },
      {
        id: "q45",
        type: "mcq",
        prompt: "Which market structure has only one seller?",
        options: ["Monopoly", "Oligopoly", "Perfect Competition", "Monopolistic Competition"],
        answer: "Monopoly",
        points: 1
      },
      {
        id: "q46",
        type: "flashcard",
        prompt: "What is demand elasticity?",
        answer: "How quantity demanded changes with price.",
        points: 1
      },
      {
        id: "q47",
        type: "mcq",
        prompt: "Which instrument is used to measure inflation?",
        options: ["Consumer Price Index", "GDP", "Interest Rate", "Stock Market"],
        answer: "Consumer Price Index",
        points: 1
      },
      {
        id: "q48",
        type: "mcq",
        prompt: "What is a substitute good?",
        options: ["A good that replaces another", "A good used together with another", "A luxury good", "A perishable good"],
        answer: "A good that replaces another",
        points: 1
      },
      {
        id: "q49",
        type: "flashcard",
        prompt: "Describe 'scarcity' in economics.",
        answer: "Limited availability of resources compared to wants.",
        points: 1
      },
      {
        id: "q50",
        type: "mcq",
        prompt: "Which market structure features many sellers offering differentiated products?",
        options: ["Monopoly", "Perfect Competition", "Oligopoly", "Monopolistic Competition"],
        answer: "Monopolistic Competition",
        points: 1
      }
    ]
  },
  {
    id: "biology-intro",
    title: "Biology Intro",
    questions: [
      {
        id: "q21",
        type: "mcq",
        prompt: "What is the basic unit of life?",
        options: ["Organ", "Cell", "Tissue", "Molecule"],
        answer: "Cell",
        points: 1
      },
      {
        id: "q22",
        type: "mcq",
        prompt: "Which organelle is responsible for photosynthesis?",
        options: ["Mitochondria", "Ribosomes", "Chloroplast", "Nucleus"],
        answer: "Chloroplast",
        points: 1
      },
      {
        id: "q23",
        type: "flashcard",
        prompt: "Define osmosis.",
        answer: "Movement of water across a semi-permeable membrane.",
        points: 1
      },
      {
        id: "q24",
        type: "mcq",
        prompt: "DNA stands for?",
        options: ["Deoxyribonucleic Acid", "Deoxyribose Nucleic Acid", "Deoxynitric Acid", "Dioxynucleic Acid"],
        answer: "Deoxyribonucleic Acid",
        points: 1
      },
      {
        id: "q25",
        type: "mcq",
        prompt: "Which blood cells fight infections?",
        options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        answer: "White blood cells",
        points: 1
      },
      {
        id: "q26",
        type: "flashcard",
        prompt: "What does ATP stand for?",
        answer: "Adenosine Triphosphate",
        points: 1
      },
      {
        id: "q27",
        type: "mcq",
        prompt: "What kingdom do mushrooms belong to?",
        options: ["Animalia", "Plantae", "Fungi", "Protista"],
        answer: "Fungi",
        points: 1
      },
      {
        id: "q28",
        type: "mcq",
        prompt: "Which system regulates hormones?",
        options: ["Digestive system", "Endocrine system", "Nervous system", "Respiratory system"],
        answer: "Endocrine system",
        points: 1
      },
      {
        id: "q29",
        type: "flashcard",
        prompt: "Define homeostasis.",
        answer: "Maintenance of a stable internal environment.",
        points: 1
      },
      {
        id: "q30",
        type: "mcq",
        prompt: "Which macronutrient is primary for energy?",
        options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
        answer: "Carbohydrates",
        points: 1
      }
    ]
  },
  {
    id: "chemistry-basics",
    title: "Chemistry Basics",
    questions: [
      {
        id: "q11",
        type: "mcq",
        prompt: "What is the atomic number of Oxygen?",
        options: ["8", "16", "6", "12"],
        answer: "8",
        points: 1
      },
      {
        id: "q12",
        type: "flashcard",
        prompt: "Name the process where a liquid changes into a gas.",
        answer: "Evaporation",
        points: 1
      },
      {
        id: "q13",
        type: "mcq",
        prompt: "Which element is a noble gas?",
        options: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
        answer: "Argon",
        points: 1
      },
      {
        id: "q14",
        type: "mcq",
        prompt: "What is the chemical symbol for Sodium?",
        options: ["S", "Na", "N", "So"],
        answer: "Na",
        points: 1
      },
      {
        id: "q15",
        type: "flashcard",
        prompt: "Define pH.",
        answer: "Measure of acidity or alkalinity of a solution.",
        points: 1
      },
      {
        id: "q16",
        type: "mcq",
        prompt: "What type of bond holds water molecules together?",
        options: ["Ionic", "Covalent", "Hydrogen", "Metallic"],
        answer: "Hydrogen",
        points: 1
      },
      {
        id: "q17",
        type: "flashcard",
        prompt: "What is Avogadro’s number?",
        answer: "6.022 × 10²³ particles per mole.",
        points: 1
      },
      {
        id: "q18",
        type: "mcq",
        prompt: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide",
        points: 1
      },
      {
        id: "q19",
        type: "mcq",
        prompt: "What is the main component of natural gas?",
        options: ["Methane", "Ethane", "Propane", "Butane"],
        answer: "Methane",
        points: 1
      },
      {
        id: "q20",
        type: "flashcard",
        prompt: "Describe the law of conservation of mass.",
        answer: "Mass is neither created nor destroyed in chemical reactions.",
        points: 1
      }
    ]
  },
  {
    id: "algebra-i",
    title: "Algebra I",
    questions: [
      {
        id: "q31",
        type: "mcq",
        prompt: "What is the solution to the equation 2x + 3 = 7?",
        options: ["x = 2", "x = 5", "x = 10", "x = 1"],
        answer: "x = 2",
        points: 1
      },
      {
        id: "q32",
        type: "mcq",
        prompt: "Simplify: 3(x + 4).",
        options: ["3x + 4", "3x + 12", "x + 12", "3x + 7"],
        answer: "3x + 12",
        points: 1
      },
      {
        id: "q33",
        type: "flashcard",
        prompt: "Define a variable in algebra.",
        answer: "A symbol representing an unknown value.",
        points: 1
      },
      {
        id: "q34",
        type: "mcq",
        prompt: "What is the value of x if x² = 25?",
        options: ["5", "-5", "±5", "0"],
        answer: "±5",
        points: 1
      },
      {
        id: "q35",
        type: "mcq",
        prompt: "Which property is used to solve equations like a(b + c) = ab + ac?",
        options: ["Associative", "Distributive", "Commutative", "Reflexive"],
        answer: "Distributive",
        points: 1
      },
      {
        id: "q36",
        type: "flashcard",
        prompt: "What is the degree of the polynomial 5x³ + 2x² - 7?",
        answer: "3",
        points: 1
      },
      {
        id: "q37",
        type: "mcq",
        prompt: "Solve for y: 2y - 4 = 10.",
        options: ["7", "3", "6", "4"],
        answer: "7",
        points: 1
      },
      {
        id: "q38",
        type: "flashcard",
        prompt: "Explain the term 'coefficient'.",
        answer: "The numerical factor in a term.",
        points: 1
      },
      {
        id: "q39",
        type: "mcq",
        prompt: "What is the slope of a horizontal line?",
        options: ["0", "Undefined", "1", "-1"],
        answer: "0",
        points: 1
      },
      {
        id: "q40",
        type: "mcq",
        prompt: "Which of these is an example of a quadratic equation?",
        options: ["x² + 3x + 2 = 0", "2x + 3 = 6", "x + 5 = 0", "3x³ = 9"],
        answer: "x² + 3x + 2 = 0",
        points: 1
      }
    ]
  },

  ]
