// ============================================
// SYLLANI ENTRY TEST PRACTICE - JAVASCRIPT
// ============================================

// Global Variables
let currentSubject = '';
let currentQuestionIndex = 0;
let userAnswers = [];
let questions = [];
let isTestCompleted = false;

// DOM Elements
const sections = {
  home: document.getElementById('home-section'),
  mcq: document.getElementById('mcq-section'),
  review: document.getElementById('review-section'),
  about: document.getElementById('about-section'),
  contact: document.getElementById('contact-section'),
  faqs: document.getElementById('faqs-section')
};

const mcqElements = {
  subject: document.getElementById('current-subject'),
  questionText: document.getElementById('question-text'),
  questionCounter: document.getElementById('question-counter'),
  progressFill: document.getElementById('progress-fill'),
  optionA: document.getElementById('option-A-text'),
  optionB: document.getElementById('option-B-text'),
  optionC: document.getElementById('option-C-text'),
  optionD: document.getElementById('option-D-text'),
  prevBtn: document.getElementById('prev-btn'),
  nextBtn: document.getElementById('next-btn'),
  finishBtn: document.getElementById('finish-btn')
};

const reviewElements = {
  correctCount: document.getElementById('correct-count'),
  incorrectCount: document.getElementById('incorrect-count'),
  percentageScore: document.getElementById('percentage-score'),
  reviewContent: document.getElementById('review-content')
};

// ============================================
// MCQs DATA - ADD YOUR QUESTIONS HERE
// ============================================

const mcqsData = {
  // COMPUTER SUBJECT MCQs (50 Questions)
  // Add your computer science MCQs here
  computer: [

    {
      question: "Which part of the computer is considered the brain?",
      options: {
        A: "Monitor",
        B: "CPU",
        C: "Keyboard",
        D: "Mouse"
      },
      correct: "B"
    },
    {
      question: "What does HTML stand for?",
      options: {
        A: "Hyper Trainer Marking Language",
        B: "Hyper Text Markup Language",
        C: "High Text Machine Language",
        D: "None of the above"
      },
      correct: "B"
    },
    {
      question: "Which device is used to convert digital signals to analog?",
      options: {
        A: "Router",
        B: "Modem",
        C: "Switch",
        D: "Hub"
      },
      correct: "B"
    },
    {
      question: "What does RAM stand for?",
      options: {
        A: "Read Access Memory",
        B: "Random Access Memory",
        C: "Run Accept Memory",
        D: "Random Allocate Memory"
      },
      correct: "B"
    },
    {
      question: "Which of the following is an output device?",
      options: {
        A: "Scanner",
        B: "Keyboard",
        C: "Monitor",
        D: "Mouse"
      },
      correct: "C"
    },
    {
      question: "What is the extension of a Python file?",
      options: {
        A: ".java",
        B: ".py",
        C: ".cpp",
        D: ".txt"
      },
      correct: "B"
    },
    {
      question: "Which one is a programming language?",
      options: {
        A: "HTTP",
        B: "HTML",
        C: "FTP",
        D: "C++"
      },
      correct: "D"
    },
    {
      question: "Which part stores permanent data?",
      options: {
        A: "RAM",
        B: "Cache",
        C: "ROM",
        D: "CPU"
      },
      correct: "C"
    },
    {
      question: "Which one is used to connect to the internet?",
      options: {
        A: "Printer",
        B: "Scanner",
        C: "Modem",
        D: "Keyboard"
      },
      correct: "C"
    },
    {
      question: "What does CPU stand for?",
      options: {
        A: "Central Performance Unit",
        B: "Central Process Unit",
        C: "Central Processing Unit",
        D: "Computer Processing Unit"
      },
      correct: "C"
    },
    {
      question: "Which software lets you browse the internet?",
      options: {
        A: "Excel",
        B: "Photoshop",
        C: "Chrome",
        D: "Word"
      },
      correct: "C"
    },
    {
      question: "Which is not an input device?",
      options: {
        A: "Mouse",
        B: "Microphone",
        C: "Printer",
        D: "Scanner"
      },
      correct: "C"
    },
    {
      question: "Which unit is used to measure computer memory?",
      options: {
        A: "Liter",
        B: "Gram",
        C: "Byte",
        D: "Meter"
      },
      correct: "C"
    },
    {
      question: "Which one is a storage device?",
      options: {
        A: "Mouse",
        B: "Keyboard",
        C: "Pen Drive",
        D: "Monitor"
      },
      correct: "C"
    },
    {
      question: "Which one is system software?",
      options: {
        A: "MS Word",
        B: "Photoshop",
        C: "Windows",
        D: "Excel"
      },
      correct: "C"
    },
    {
      question: "What does URL stand for?",
      options: {
        A: "Uniform Resource Locator",
        B: "Uniform Resource Link",
        C: "Universal Reference Link",
        D: "Universal Resource Location"
      },
      correct: "A"
    },
    {
      question: "Which shortcut key is used to copy?",
      options: {
        A: "Ctrl + C",
        B: "Ctrl + V",
        C: "Ctrl + X",
        D: "Ctrl + P"
      },
      correct: "A"
    },
    {
      question: "Which company developed Windows?",
      options: {
        A: "Apple",
        B: "Microsoft",
        C: "Google",
        D: "IBM"
      },
      correct: "B"
    },
    {
      question: "What is the full form of PDF?",
      options: {
        A: "Printable Document Format",
        B: "Portable Document Format",
        C: "Public Document File",
        D: "Program Data File"
      },
      correct: "B"
    },
    {
      question: "What is a GUI?",
      options: {
        A: "Graphical User Interface",
        B: "Global User Input",
        C: "General Use Interface",
        D: "Graphical Utility Input"
      },
      correct: "A"
    },
    {
      question: "Which of these is a search engine?",
      options: {
        A: "Yahoo",
        B: "Facebook",
        C: "Gmail",
        D: "PowerPoint"
      },
      correct: "A"
    },
    {
      question: "Which of these is an operating system?",
      options: {
        A: "Google",
        B: "Linux",
        C: "Intel",
        D: "Firefox"
      },
      correct: "B"
    },
    {
      question: "Which key is used to refresh a webpage?",
      options: {
        A: "F5",
        B: "F2",
        C: "Ctrl",
        D: "Esc"
      },
      correct: "A"
    },
    {
      question: "Which of the following is a web browser?",
      options: {
        A: "MS Excel",
        B: "Google Chrome",
        C: "Notepad",
        D: "Paint"
      },
      correct: "B"
    },
    {
      question: "Which is the fastest memory?",
      options: {
        A: "RAM",
        B: "Cache",
        C: "Hard Disk",
        D: "CD-ROM"
      },
      correct: "B"
    },
    {
      question: "Which file format is used for web pages?",
      options: {
        A: ".docx",
        B: ".html",
        C: ".mp3",
        D: ".xls"
      },
      correct: "B"
    },
    {
      question: "What does ICT stand for?",
      options: {
        A: "Information Communication Technology",
        B: "Internet Computer Technology",
        C: "Internal Communication Tech",
        D: "Instant Communication Tool"
      },
      correct: "A"
    },
    {
      question: "What is an IP address?",
      options: {
        A: "Internal Port",
        B: "Internet Protocol",
        C: "International Point",
        D: "Intel Port"
      },
      correct: "B"
    },
    {
      question: "Which of the following is a spreadsheet program?",
      options: {
        A: "MS Excel",
        B: "MS Word",
        C: "PowerPoint",
        D: "Paint"
      },
      correct: "A"
    },
    {
      question: "Which of these is not hardware?",
      options: {
        A: "Monitor",
        B: "Antivirus",
        C: "Printer",
        D: "Keyboard"
      },
      correct: "B"
    },
    {
      question: "What does LAN stand for?",
      options: {
        A: "Large Area Network",
        B: "Local Area Network",
        C: "Long Access Network",
        D: "Local Assignment Network"
      },
      correct: "B"
    },
    {
      question: "Which port is used for internet cable?",
      options: {
        A: "USB",
        B: "HDMI",
        C: "Ethernet",
        D: "Audio Jack"
      },
      correct: "C"
    },
    {
      question: "Which is an anti-virus software?",
      options: {
        A: "Chrome",
        B: "Avast",
        C: "Excel",
        D: "Edge"
      },
      correct: "B"
    },
    {
      question: "Which programming language is mostly used in AI?",
      options: {
        A: "Python",
        B: "HTML",
        C: "CSS",
        D: "SQL"
      },
      correct: "A"
    },
    {
      question: "Which one is a cloud storage?",
      options: {
        A: "Google Drive",
        B: "SSD",
        C: "Flash Drive",
        D: "Hard Disk"
      },
      correct: "A"
    },
    {
      question: "Which of these is a file extension?",
      options: {
        A: ".exe",
        B: "app",
        C: "run",
        D: "soft"
      },
      correct: "A"
    },
    {
      question: "Which one is a mobile OS?",
      options: {
        A: "Linux",
        B: "Android",
        C: "Windows 10",
        D: "Ubuntu"
      },
      correct: "B"
    },
    {
      question: "Which of these is not an application software?",
      options: {
        A: "MS Paint",
        B: "MS DOS",
        C: "Photoshop",
        D: "MS Word"
      },
      correct: "B"
    },
    {
      question: "Which of the following is a social media platform?",
      options: {
        A: "Facebook",
        B: "Excel",
        C: "Chrome",
        D: "Photoshop"
      },
      correct: "A"
    },
    {
      question: "Which command is used to save a file?",
      options: {
        A: "Ctrl + C",
        B: "Ctrl + S",
        C: "Ctrl + X",
        D: "Ctrl + Z"
      },
      correct: "B"
    },
    {
      question: "What does BIOS stand for?",
      options: {
        A: "Basic Input Output System",
        B: "Binary Integrated Operating System",
        C: "Basic Internal Output Signal",
        D: "Base Input Output Server"
      },
      correct: "A"
    },
    {
      question: "Which input device is used for drawing?",
      options: {
        A: "Keyboard",
        B: "Scanner",
        C: "Light Pen",
        D: "Microphone"
      },
      correct: "C"
    },
    {
      question: "Which of the following is an email service?",
      options: {
        A: "Google Docs",
        B: "Gmail",
        C: "MS Excel",
        D: "Paint"
      },
      correct: "B"
    },
    {
      question: "What is the main page of a website called?",
      options: {
        A: "Main Page",
        B: "Homepage",
        C: "Start Page",
        D: "Intro Page"
      },
      correct: "B"
    },
    {
      question: "Which of the following is a Microsoft product?",
      options: {
        A: "Safari",
        B: "Chrome",
        C: "Edge",
        D: "Firefox"
      },
      correct: "C"
    },
    {
      question: "What does ISP stand for?",
      options: {
        A: "Internet Source Provider",
        B: "Internet Service Provider",
        C: "Internal System Provider",
        D: "International Service Provider"
      },
      correct: "B"
    },
    {
      question: "Which device connects computers in a network?",
      options: {
        A: "Monitor",
        B: "Mouse",
        C: "Router",
        D: "Speaker"
      },
      correct: "C"
    },
    {
      question: "Which company makes the iPhone?",
      options: {
        A: "Samsung",
        B: "Apple",
        C: "Google",
        D: "Huawei"
      },
      correct: "B"
    },
    {
      question: "Which key is used to delete?",
      options: {
        A: "Esc",
        B: "Del",
        C: "Ctrl",
        D: "Alt"
      },
      correct: "B"
    }
  ],

  // ENGLISH SUBJECT MCQs (50 Questions)
  // Add your English language MCQs here
  english: [

    {
      question: "Choose the correct synonym for 'Happy':",
      options: {
        A: "Sad",
        B: "Joyful",
        C: "Angry",
        D: "Tired"
      },
      correct: "B"
    },
    {
      question: "Choose the correct spelling:",
      options: {
        A: "Enviroment",
        B: "Environment",
        C: "Environmant",
        D: "Envioronment"
      },
      correct: "B"
    },
    {
      question: "Synonym of 'Happy':",
      options: {
        A: "Sad",
        B: "Angry",
        C: "Joyful",
        D: "Tired"
      },
      correct: "C"
    },
    {
      question: "Antonym of 'Cold':",
      options: {
        A: "Chilly",
        B: "Hot",
        C: "Cool",
        D: "Freezing"
      },
      correct: "B"
    },
    {
      question: "Plural of 'Child' is:",
      options: {
        A: "Childs",
        B: "Childes",
        C: "Children",
        D: "Childer"
      },
      correct: "C"
    },
    {
      question: "Choose the correct sentence:",
      options: {
        A: "He go to school",
        B: "He goes to school",
        C: "He going to school",
        D: "He gone to school"
      },
      correct: "B"
    },
    {
      question: "Which is a verb?",
      options: {
        A: "Run",
        B: "Quickly",
        C: "Beautiful",
        D: "Happiness"
      },
      correct: "A"
    },
    {
      question: "Fill in the blank: She ___ a book.",
      options: {
        A: "read",
        B: "reads",
        C: "reading",
        D: "is read"
      },
      correct: "B"
    },
    {
      question: "Choose the correct article: ___ apple",
      options: {
        A: "A",
        B: "An",
        C: "The",
        D: "None"
      },
      correct: "B"
    },
    {
      question: "Identify the noun in this sentence: The dog barked loudly.",
      options: {
        A: "dog",
        B: "barked",
        C: "loudly",
        D: "the"
      },
      correct: "A"
    },
    {
      question: "Which is a preposition?",
      options: {
        A: "Under",
        B: "Happy",
        C: "Run",
        D: "Blue"
      },
      correct: "A"
    },
    {
      question: "Opposite of 'Easy':",
      options: {
        A: "Hard",
        B: "Soft",
        C: "Quick",
        D: "Late"
      },
      correct: "A"
    },
    {
      question: "Which is a question word?",
      options: {
        A: "Who",
        B: "Dog",
        C: "Fast",
        D: "House"
      },
      correct: "A"
    },
    {
      question: "Past form of 'Go' is:",
      options: {
        A: "Goes",
        B: "Went",
        C: "Gone",
        D: "Going"
      },
      correct: "B"
    },
    {
      question: "Adjective in this sentence: She wore a beautiful dress.",
      options: {
        A: "beautiful",
        B: "wore",
        C: "dress",
        D: "she"
      },
      correct: "A"
    },
    {
      question: "Which is an interjection?",
      options: {
        A: "Wow!",
        B: "Run",
        C: "Blue",
        D: "Softly"
      },
      correct: "A"
    },
    {
      question: "Which is a compound word?",
      options: {
        A: "Sunlight",
        B: "Very",
        C: "About",
        D: "More"
      },
      correct: "A"
    },
    {
      question: "Choose the correct tense: I have eaten lunch.",
      options: {
        A: "Past Perfect",
        B: "Present Perfect",
        C: "Present Continuous",
        D: "Past Simple"
      },
      correct: "B"
    },
    {
      question: "What is the synonym of 'Big'?",
      options: {
        A: "Huge",
        B: "Tiny",
        C: "Small",
        D: "Short"
      },
      correct: "A"
    },
    {
      question: "What is the opposite of 'Strong'?",
      options: {
        A: "Weak",
        B: "Powerful",
        C: "Heavy",
        D: "Tall"
      },
      correct: "A"
    },
    {
      question: "Which is a conjunction?",
      options: {
        A: "And",
        B: "Run",
        C: "Pretty",
        D: "Dog"
      },
      correct: "A"
    },
    {
      question: "Choose the correct sentence:",
      options: {
        A: "He is play football",
        B: "He playing football",
        C: "He plays football",
        D: "He play football"
      },
      correct: "C"
    },
    {
      question: "Choose the correct spelling:",
      options: {
        A: "Febuary",
        B: "February",
        C: "Febraury",
        D: "Februry"
      },
      correct: "B"
    },
    {
      question: "Which is an adverb?",
      options: {
        A: "Quickly",
        B: "Fast",
        C: "Soft",
        D: "Kind"
      },
      correct: "A"
    },
    {
      question: "Complete the phrase: Once upon a ___",
      options: {
        A: "time",
        B: "day",
        C: "night",
        D: "dream"
      },
      correct: "A"
    },
    {
      question: "Past form of 'Eat' is:",
      options: {
        A: "Ate",
        B: "Eated",
        C: "Eating",
        D: "Eats"
      },
      correct: "A"
    },
    {
      question: "Which is a question tag?",
      options: {
        A: "Isn't it?",
        B: "And also",
        C: "Because",
        D: "Therefore"
      },
      correct: "A"
    },
    {
      question: "Which is a pronoun?",
      options: {
        A: "He",
        B: "Happy",
        C: "Tall",
        D: "Softly"
      },
      correct: "A"
    },
    {
      question: "What is the plural of 'Mouse'?",
      options: {
        A: "Mouses",
        B: "Mices",
        C: "Mouse",
        D: "Mice"
      },
      correct: "D"
    },
    {
      question: "Which one is a vowel?",
      options: {
        A: "B",
        B: "C",
        C: "E",
        D: "D"
      },
      correct: "C"
    },
    {
      question: "Choose the correct form: They ___ going to school.",
      options: {
        A: "is",
        B: "are",
        C: "was",
        D: "am"
      },
      correct: "B"
    },
    {
      question: "What is the antonym of 'Up'?",
      options: {
        A: "Down",
        B: "Over",
        C: "Out",
        D: "Top"
      },
      correct: "A"
    },
    {
      question: "Which of the following is an adjective?",
      options: {
        A: "Fast",
        B: "Faster",
        C: "Quick",
        D: "All"
      },
      correct: "C"
    },
    {
      question: "Fill in the blank: She has ___ friends.",
      options: {
        A: "much",
        B: "many",
        C: "very",
        D: "some"
      },
      correct: "B"
    },
    {
      question: "Which of these is a verb?",
      options: {
        A: "Jump",
        B: "Tall",
        C: "Quick",
        D: "Soft"
      },
      correct: "A"
    },
    {
      question: "Choose the correct sentence:",
      options: {
        A: "He don't like tea",
        B: "He doesn't likes tea",
        C: "He doesn't like tea",
        D: "He not like tea"
      },
      correct: "C"
    },
    {
      question: "What is the plural of 'Box'?",
      options: {
        A: "Boxs",
        B: "Boxes",
        C: "Boxen",
        D: "Boxies"
      },
      correct: "B"
    },
    {
      question: "What is the synonym of 'Fast'?",
      options: {
        A: "Slow",
        B: "Quick",
        C: "Hard",
        D: "Late"
      },
      correct: "B"
    },
    {
      question: "Antonym of 'Laugh':",
      options: {
        A: "Cry",
        B: "Smile",
        C: "Talk",
        D: "Shout"
      },
      correct: "A"
    },
    {
      question: "Choose the correct form: I ___ born in 2000.",
      options: {
        A: "am",
        B: "was",
        C: "were",
        D: "is"
      },
      correct: "B"
    },
    {
      question: "Which of these is a helping verb?",
      options: {
        A: "Is",
        B: "Tree",
        C: "Big",
        D: "Jump"
      },
      correct: "A"
    },
    {
      question: "Which one is a countable noun?",
      options: {
        A: "Sugar",
        B: "Water",
        C: "Book",
        D: "Rice"
      },
      correct: "C"
    },
    {
      question: "Choose the correct option: He is ___ honest man.",
      options: {
        A: "a",
        B: "an",
        C: "the",
        D: "no article"
      },
      correct: "B"
    },
    {
      question: "Which is a collective noun?",
      options: {
        A: "Army",
        B: "Chair",
        C: "Star",
        D: "Man"
      },
      correct: "A"
    },
    {
      question: "Choose the correct spelling:",
      options: {
        A: "Recieve",
        B: "Receive",
        C: "Receeve",
        D: "Receave"
      },
      correct: "B"
    },
    {
      question: "Identify the adjective: The tall boy won the race.",
      options: {
        A: "tall",
        B: "boy",
        C: "won",
        D: "race"
      },
      correct: "A"
    },
    {
      question: "Which of the following is an interrogative sentence?",
      options: {
        A: "He goes to school.",
        B: "Do you like ice cream?",
        C: "He eats rice.",
        D: "She is dancing."
      },
      correct: "B"
    },
    {
      question: "What is the correct order of the sentence: 'to / I / like / read / books'",
      options: {
        A: "I like to read books",
        B: "To I like read books",
        C: "Like I books to read",
        D: "Books like I to read"
      },
      correct: "A"
    },
    {
      question: "Which is the correct question tag: She is a teacher,",
      options: {
        A: "is she?",
        B: "isn't she?",
        C: "was she?",
        D: "has she?"
      },
      correct: "B"
    },
    {
      question: "What is the correct comparative of 'Good'?",
      options: {
        A: "Gooder",
        B: "Better",
        C: "Best",
        D: "Most good"
      },
      correct: "B"
    }
  ],

  // GENERAL KNOWLEDGE MCQs (50 Questions)
  // Add your general knowledge MCQs here
  'general-knowledge': [
    {
      question: "What is the capital of Pakistan?",
      options: {
        A: "Karachi",
        B: "Lahore",
        C: "Islamabad",
        D: "Peshawar"
      },
      correct: "C"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: {
        A: "Earth",
        B: "Mars",
        C: "Jupiter",
        D: "Saturn"
      },
      correct: "B"
    },
    {
      question: "Which is the largest ocean?",
      options: {
        A: "Atlantic",
        B: "Indian",
        C: "Pacific",
        D: "Arctic"
      },
      correct: "C"
    },
    {
      question: "Who wrote the national anthem of Pakistan?",
      options: {
        A: "Allama Iqbal",
        B: "Hafeez Jalandhari",
        C: "Faiz Ahmad Faiz",
        D: "Ahmed Faraz"
      },
      correct: "B"
    },
    {
      question: "Which animal is known as the king of the jungle?",
      options: {
        A: "Tiger",
        B: "Lion",
        C: "Elephant",
        D: "Leopard"
      },
      correct: "B"
    },
    {
      question: "What is the capital of China?",
      options: {
        A: "Shanghai",
        B: "Beijing",
        C: "Guangzhou",
        D: "Hong Kong"
      },
      correct: "B"
    },
    {
      question: "Who discovered gravity?",
      options: {
        A: "Einstein",
        B: "Newton",
        C: "Galileo",
        D: "Tesla"
      },
      correct: "B"
    },
    {
      question: "Which country has the largest population?",
      options: {
        A: "India",
        B: "USA",
        C: "China",
        D: "Russia"
      },
      correct: "C"
    },
    {
      question: "What is the currency of Japan?",
      options: {
        A: "Dollar",
        B: "Yen",
        C: "Won",
        D: "Euro"
      },
      correct: "B"
    },
    {
      question: "How many continents are there?",
      options: {
        A: "5",
        B: "6",
        C: "7",
        D: "8"
      },
      correct: "C"
    },
    {
      question: "What is the national sport of Pakistan?",
      options: {
        A: "Cricket",
        B: "Hockey",
        C: "Football",
        D: "Squash"
      },
      correct: "B"
    },
    {
      question: "Which is the smallest continent?",
      options: {
        A: "Europe",
        B: "Australia",
        C: "Antarctica",
        D: "Asia"
      },
      correct: "B"
    },
    {
      question: "What is the tallest mountain in the world?",
      options: {
        A: "K2",
        B: "Mount Everest",
        C: "Nanga Parbat",
        D: "Himalaya"
      },
      correct: "B"
    },
    {
      question: "How many players in a cricket team?",
      options: {
        A: "10",
        B: "11",
        C: "12",
        D: "9"
      },
      correct: "B"
    },
    {
      question: "What does UNO stand for?",
      options: {
        A: "United Nations Organization",
        B: "United National Office",
        C: "United Nations Order",
        D: "United Name Organization"
      },
      correct: "A"
    },
    {
      question: "Which gas do humans need to breathe?",
      options: {
        A: "Carbon Dioxide",
        B: "Oxygen",
        C: "Nitrogen",
        D: "Helium"
      },
      correct: "B"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: {
        A: "Van Gogh",
        B: "Leonardo da Vinci",
        C: "Picasso",
        D: "Michelangelo"
      },
      correct: "B"
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: {
        A: "China",
        B: "Korea",
        C: "Japan",
        D: "Thailand"
      },
      correct: "C"
    },
    {
      question: "How many bones are in the human body?",
      options: {
        A: "206",
        B: "208",
        C: "210",
        D: "200"
      },
      correct: "A"
    },
    {
      question: "Which country is the Eiffel Tower in?",
      options: {
        A: "Germany",
        B: "Italy",
        C: "France",
        D: "UK"
      },
      correct: "C"
    },
    {
      question: "Which is the largest desert?",
      options: {
        A: "Sahara",
        B: "Gobi",
        C: "Thar",
        D: "Kalahari"
      },
      correct: "A"
    },
    {
      question: "What is the chemical symbol for water?",
      options: {
        A: "O2",
        B: "H2O",
        C: "CO2",
        D: "HO2"
      },
      correct: "B"
    },
    {
      question: "How many legs does a spider have?",
      options: {
        A: "6",
        B: "8",
        C: "10",
        D: "12"
      },
      correct: "B"
    },
    {
      question: "Which is the longest river in the world?",
      options: {
        A: "Amazon",
        B: "Nile",
        C: "Yangtze",
        D: "Indus"
      },
      correct: "B"
    },
    {
      question: "What is the name of Earth’s natural satellite?",
      options: {
        A: "Moon",
        B: "Sun",
        C: "Mars",
        D: "Venus"
      },
      correct: "A"
    },
    {
      question: "Which is the largest mammal?",
      options: {
        A: "Elephant",
        B: "Blue Whale",
        C: "Giraffe",
        D: "Hippo"
      },
      correct: "B"
    },
    {
      question: "Which Pakistani won the Nobel Peace Prize in 2014?",
      options: {
        A: "Edhi",
        B: "Imran Khan",
        C: "Malala Yousafzai",
        D: "Abdul Sattar"
      },
      correct: "C"
    },
    {
      question: "Which city is called the City of Lights?",
      options: {
        A: "Islamabad",
        B: "Karachi",
        C: "Lahore",
        D: "Quetta"
      },
      correct: "B"
    },
    {
      question: "What color are emeralds?",
      options: {
        A: "Red",
        B: "Blue",
        C: "Green",
        D: "Yellow"
      },
      correct: "C"
    },
    {
      question: "Which is the largest planet in the solar system?",
      options: {
        A: "Earth",
        B: "Mars",
        C: "Jupiter",
        D: "Saturn"
      },
      correct: "C"
    },
    {
      question: "Which vitamin do we get from sunlight?",
      options: {
        A: "Vitamin A",
        B: "Vitamin C",
        C: "Vitamin D",
        D: "Vitamin E"
      },
      correct: "C"
    },
    {
      question: "What is the capital of the USA?",
      options: {
        A: "New York",
        B: "Washington D.C.",
        C: "Los Angeles",
        D: "Chicago"
      },
      correct: "B"
    },
    {
      question: "Which organ pumps blood?",
      options: {
        A: "Liver",
        B: "Lungs",
        C: "Heart",
        D: "Kidneys"
      },
      correct: "C"
    },
    {
      question: "Which day is celebrated as Independence Day in Pakistan?",
      options: {
        A: "14 August",
        B: "15 August",
        C: "23 March",
        D: "6 September"
      },
      correct: "A"
    },
    {
      question: "Which planet has rings?",
      options: {
        A: "Mars",
        B: "Venus",
        C: "Saturn",
        D: "Mercury"
      },
      correct: "C"
    },
    {
      question: "How many colors in the rainbow?",
      options: {
        A: "5",
        B: "6",
        C: "7",
        D: "8"
      },
      correct: "C"
    },
    {
      question: "What is the largest bird?",
      options: {
        A: "Eagle",
        B: "Peacock",
        C: "Ostrich",
        D: "Parrot"
      },
      correct: "C"
    },
    {
      question: "Who invented the telephone?",
      options: {
        A: "Edison",
        B: "Newton",
        C: "Bell",
        D: "Tesla"
      },
      correct: "C"
    },
    {
      question: "What is the boiling point of water?",
      options: {
        A: "90°C",
        B: "80°C",
        C: "100°C",
        D: "120°C"
      },
      correct: "C"
    },
    {
      question: "Which metal is liquid at room temperature?",
      options: {
        A: "Gold",
        B: "Silver",
        C: "Mercury",
        D: "Aluminum"
      },
      correct: "C"
    },
    {
      question: "Which animal gives us wool?",
      options: {
        A: "Goat",
        B: "Sheep",
        C: "Cow",
        D: "Dog"
      },
      correct: "B"
    },
    {
      question: "What does ATM stand for?",
      options: {
        A: "Auto Teller Machine",
        B: "Automated Teller Machine",
        C: "Auto Transfer Machine",
        D: "Account Transfer Mode"
      },
      correct: "B"
    },
    {
      question: "Which country is famous for pyramids?",
      options: {
        A: "India",
        B: "China",
        C: "Egypt",
        D: "Peru"
      },
      correct: "C"
    },
    {
      question: "Who was the founder of Pakistan?",
      options: {
        A: "Allama Iqbal",
        B: "Liaquat Ali Khan",
        C: "Quaid-e-Azam",
        D: "Ayub Khan"
      },
      correct: "C"
    },
    {
      question: "Which is the national flower of Pakistan?",
      options: {
        A: "Rose",
        B: "Tulip",
        C: "Jasmine",
        D: "Lily"
      },
      correct: "C"
    },
    {
      question: "What is the capital of Saudi Arabia?",
      options: {
        A: "Jeddah",
        B: "Riyadh",
        C: "Mecca",
        D: "Medina"
      },
      correct: "B"
    },
    {
      question: "Which is the national bird of Pakistan?",
      options: {
        A: "Parrot",
        B: "Chakor",
        C: "Peacock",
        D: "Sparrow"
      },
      correct: "B"
    },
    {
      question: "Which city is famous for the Eiffel Tower?",
      options: {
        A: "London",
        B: "Paris",
        C: "Rome",
        D: "Berlin"
      },
      correct: "B"
    },
    {
      question: "Which natural resource is used to produce electricity?",
      options: {
        A: "Coal",
        B: "Plastic",
        C: "Wood",
        D: "Glass"
      },
      correct: "A"
    },
    {
      question: "What is Earth’s only natural satellite?",
      options: {
        A: "Mars",
        B: "Moon",
        C: "Sun",
        D: "Star"
      },
      correct: "B"
    },
    {
      question: "Which ocean is on the east of Africa?",
      options: {
        A: "Atlantic",
        B: "Pacific",
        C: "Indian",
        D: "Arctic"
      },
      correct: "C"
    }

  ],

  // IQ TEST MCQs (50 Questions)
  // Add your IQ test MCQs here
  iq: [

    {
      question: "What comes next in the sequence: 2, 4, 8, 16, ?",
      options: {
        A: "24",
        B: "32",
        C: "28",
        D: "20"
      },
      correct: "B"
    },
    {
      question: "What comes next in the series: 2, 4, 8, 16, ?",
      options: { A: "18", B: "24", C: "32", D: "20" },
      correct: "C"
    },
    {
      question: "If 5 + 3 = 28, 4 + 2 = 16, then 3 + 1 = ?",
      options: { A: "8", B: "6", C: "12", D: "4" },
      correct: "A"
    },
    {
      question: "Which is the odd one out: Apple, Banana, Carrot, Mango?",
      options: { A: "Apple", B: "Banana", C: "Carrot", D: "Mango" },
      correct: "C"
    },
    {
      question: "What is the mirror image of 'b'?",
      options: { A: "d", B: "q", C: "p", D: "none" },
      correct: "A"
    },
    {
      question: "If CAT = 24, BAT = ?",
      options: { A: "23", B: "25", C: "22", D: "24" },
      correct: "A"
    },
    {
      question: "Which number is missing: 1, 4, 9, 16, ?, 36",
      options: { A: "20", B: "25", C: "30", D: "28" },
      correct: "B"
    },
    {
      question: "Which is the odd number: 2, 4, 6, 9, 8",
      options: { A: "4", B: "6", C: "9", D: "8" },
      correct: "C"
    },
    {
      question: "If A = 1, B = 2, ... Z = 26, then SUM = ?",
      options: { A: "58", B: "60", C: "52", D: "54" },
      correct: "A"
    },
    {
      question: "Complete the series: 5, 10, 20, 40, ?",
      options: { A: "50", B: "60", C: "80", D: "100" },
      correct: "C"
    },
    {
      question: "Which shape has 4 equal sides?",
      options: { A: "Circle", B: "Triangle", C: "Square", D: "Rectangle" },
      correct: "C"
    },
    {
      question: "Find the odd one: Pen, Pencil, Eraser, Book",
      options: { A: "Pen", B: "Pencil", C: "Eraser", D: "Book" },
      correct: "D"
    },
    {
      question: "How many sides does a hexagon have?",
      options: { A: "5", B: "6", C: "7", D: "8" },
      correct: "B"
    },
    {
      question: "If 2 + 3 = 10, 3 + 4 = 21, then 4 + 5 = ?",
      options: { A: "36", B: "28", C: "29", D: "27" },
      correct: "A"
    },
    {
      question: "Which number is next: 3, 6, 11, 18, ?",
      options: { A: "25", B: "26", C: "27", D: "28" },
      correct: "C"
    },
    {
      question: "Which one is different: Cow, Goat, Dog, Chair",
      options: { A: "Cow", B: "Dog", C: "Chair", D: "Goat" },
      correct: "C"
    },
    {
      question: "Which number completes: 121, 144, ?, 196",
      options: { A: "155", B: "164", C: "169", D: "176" },
      correct: "C"
    },
    {
      question: "Which one does not belong: Triangle, Square, Circle, Cube",
      options: { A: "Triangle", B: "Square", C: "Circle", D: "Cube" },
      correct: "D"
    },
    {
      question: "What comes next: A, C, E, G, ?",
      options: { A: "H", B: "I", C: "J", D: "K" },
      correct: "B"
    },
    {
      question: "Which number comes next: 1, 1, 2, 3, 5, 8, ?",
      options: { A: "12", B: "13", C: "14", D: "15" },
      correct: "B"
    },
    {
      question: "Find the missing letter: J, L, N, P, ?",
      options: { A: "Q", B: "R", C: "S", D: "T" },
      correct: "B"
    },
    {
      question: "Find the odd one out: Red, Green, Yellow, Dog",
      options: { A: "Red", B: "Green", C: "Yellow", D: "Dog" },
      correct: "D"
    },
    {
      question: "What is next in: 100, 90, 80, 70, ?",
      options: { A: "50", B: "60", C: "65", D: "75" },
      correct: "B"
    },
    {
      question: "What is the next number: 2, 3, 5, 7, 11, ?",
      options: { A: "13", B: "14", C: "15", D: "16" },
      correct: "A"
    },
    {
      question: "How many hours in 3 days?",
      options: { A: "48", B: "60", C: "72", D: "90" },
      correct: "C"
    },
    {
      question: "If MONDAY = 1, TUESDAY = 2, ..., then SUNDAY = ?",
      options: { A: "5", B: "6", C: "7", D: "1" },
      correct: "C"
    },
    {
      question: "Which one is a square number?",
      options: { A: "6", B: "8", C: "9", D: "10" },
      correct: "C"
    },
    {
      question: "Which of these is not a fruit?",
      options: { A: "Mango", B: "Orange", C: "Carrot", D: "Apple" },
      correct: "C"
    },
    {
      question: "What is the missing number: 64, 32, 16, ?, 4",
      options: { A: "12", B: "10", C: "8", D: "6" },
      correct: "C"
    },
    {
      question: "What comes next: Z, X, V, T, ?",
      options: { A: "R", B: "S", C: "U", D: "Q" },
      correct: "A"
    },
    {
      question: "How many months have 31 days?",
      options: { A: "5", B: "6", C: "7", D: "8" },
      correct: "C"
    },
    {
      question: "If 3 = 18, 4 = 32, then 5 = ?",
      options: { A: "40", B: "45", C: "50", D: "60" },
      correct: "C"
    },
    {
      question: "What comes next: 0, 1, 1, 2, 3, 5, ?",
      options: { A: "7", B: "8", C: "9", D: "10" },
      correct: "B"
    },
    {
      question: "Which one is different: Fish, Cow, Goat, Hen",
      options: { A: "Cow", B: "Hen", C: "Fish", D: "Goat" },
      correct: "C"
    },
    {
      question: "Which letter comes next: D, G, J, M, ?",
      options: { A: "N", B: "P", C: "Q", D: "R" },
      correct: "B"
    },
    {
      question: "If WHITE = 23, BLACK = ?",
      options: { A: "28", B: "29", C: "30", D: "31" },
      correct: "B"
    },
    {
      question: "Which figure is symmetrical?",
      options: { A: "Circle", B: "Triangle", C: "Square", D: "All" },
      correct: "D"
    },
    {
      question: "How many minutes in 2.5 hours?",
      options: { A: "120", B: "125", C: "150", D: "180" },
      correct: "C"
    },
    {
      question: "Which is heavier: 1kg iron or 1kg cotton?",
      options: { A: "Iron", B: "Cotton", C: "Equal", D: "None" },
      correct: "C"
    },
    {
      question: "If 6 × 2 = 12, 6 + 2 = ?",
      options: { A: "7", B: "8", C: "9", D: "10" },
      correct: "B"
    },
    {
      question: "If yesterday was Friday, what is today?",
      options: { A: "Saturday", B: "Thursday", C: "Sunday", D: "Monday" },
      correct: "A"
    },
    {
      question: "Which letter comes after 'Q'?",
      options: { A: "R", B: "S", C: "T", D: "P" },
      correct: "A"
    },
    {
      question: "Find the next in the pattern: A2, B4, C6, D8, ?",
      options: { A: "E10", B: "E9", C: "F10", D: "F12" },
      correct: "A"
    },
    {
      question: "What comes next: 81, 64, 49, ?",
      options: { A: "36", B: "30", C: "25", D: "20" },
      correct: "A"
    },
    {
      question: "If 10 + 10 = 100, then 5 + 5 = ?",
      options: { A: "25", B: "50", C: "100", D: "10" },
      correct: "A"
    },
    {
      question: "What comes next: 1, 2, 4, 7, 11, ?",
      options: { A: "16", B: "17", C: "18", D: "15" },
      correct: "A"
    },
    {
      question: "Which number is odd: 10, 12, 13, 14",
      options: { A: "10", B: "12", C: "13", D: "14" },
      correct: "C"
    },
    {
      question: "How many vowels in the word 'INTELLIGENCE'?",
      options: { A: "5", B: "4", C: "6", D: "7" },
      correct: "A"
    },
    {
      question: "Which shape has no corners?",
      options: { A: "Square", B: "Triangle", C: "Circle", D: "Rectangle" },
      correct: "C"
    },
    {
      question: "If 8 + 2 = 20, 9 + 3 = ?",
      options: { A: "24", B: "27", C: "25", D: "30" },
      correct: "B"
    }

  ],

  // ISLAMIAT MCQs (50 Questions)
  // Add your Islamiat MCQs here
  islamiat: [
     {
         question: "How many pillars of Islam are there?",
         options: {
             A: "4",
             B: "5",
             C: "6",
             D: "7"
         },
         correct: "B"
     },
     {
    question: "Who was the first Prophet of Islam?",
    options: { A: "Hazrat Ibrahim (A.S)", B: "Hazrat Nuh (A.S)", C: "Hazrat Adam (A.S)", D: "Hazrat Musa (A.S)" },
    correct: "C"
  },
  {
    question: "What is the name of our Holy Book?",
    options: { A: "Bible", B: "Torah", C: "Zaboor", D: "Quran" },
    correct: "D"
  },
  {
    question: "How many Surahs are in the Quran?",
    options: { A: "114", B: "110", C: "120", D: "112" },
    correct: "A"
  },
  {
    question: "Which Surah is known as the heart of Quran?",
    options: { A: "Surah Yaseen", B: "Surah Rahman", C: "Surah Fatiha", D: "Surah Ikhlas" },
    correct: "A"
  },
  {
    question: "What is the first month of Islamic calendar?",
    options: { A: "Ramzan", B: "Shaban", C: "Rabi-ul-Awal", D: "Muharram" },
    correct: "D"
  },
  {
    question: "Who was the last Prophet of Islam?",
    options: { A: "Hazrat Musa (A.S)", B: "Hazrat Isa (A.S)", C: "Hazrat Muhammad (PBUH)", D: "Hazrat Ibrahim (A.S)" },
    correct: "C"
  },
  {
    question: "In which cave was the Quran first revealed?",
    options: { A: "Hira", B: "Saur", C: "Uhud", D: "None" },
    correct: "A"
  },
  {
    question: "Who brought the message of Allah to the Prophet?",
    options: { A: "Mikael", B: "Israfil", C: "Izraeel", D: "Jibreel" },
    correct: "D"
  },
  {
    question: "How many pillars of Islam are there?",
    options: { A: "3", B: "4", C: "5", D: "6" },
    correct: "C"
  },
  {
    question: "Which prayer is offered before sunrise?",
    options: { A: "Asr", B: "Maghrib", C: "Fajr", D: "Isha" },
    correct: "C"
  },
  {
    question: "How many Rakats are in Fajr prayer?",
    options: { A: "2", B: "4", C: "3", D: "5" },
    correct: "A"
  },
  {
    question: "What is the meaning of Islam?",
    options: { A: "Peace", B: "War", C: "Truth", D: "Light" },
    correct: "A"
  },
  {
    question: "Who was the first Caliph of Islam?",
    options: { A: "Hazrat Usman", B: "Hazrat Ali", C: "Hazrat Umar", D: "Hazrat Abu Bakr" },
    correct: "D"
  },
  {
    question: "Which Surah is the longest in the Quran?",
    options: { A: "Surah Nisa", B: "Surah Fatiha", C: "Surah Baqarah", D: "Surah Anfal" },
    correct: "C"
  },
  {
    question: "Which battle is known as the first battle of Islam?",
    options: { A: "Uhud", B: "Badr", C: "Hunain", D: "Khandaq" },
    correct: "B"
  },
  {
    question: "How many years did Prophet Muhammad (PBUH) live in Makkah after prophethood?",
    options: { A: "10", B: "13", C: "15", D: "12" },
    correct: "B"
  },
  {
    question: "How many times Hajj is obligatory in a lifetime?",
    options: { A: "Every year", B: "Twice", C: "Once", D: "Thrice" },
    correct: "C"
  },
  {
    question: "Which Prophet could talk to animals?",
    options: { A: "Hazrat Musa (A.S)", B: "Hazrat Ibrahim (A.S)", C: "Hazrat Suleman (A.S)", D: "Hazrat Isa (A.S)" },
    correct: "C"
  },
  {
    question: "In which city is the Kaaba located?",
    options: { A: "Madinah", B: "Jerusalem", C: "Makkah", D: "Baghdad" },
    correct: "C"
  },
  {
    question: "How many total Makki Surahs are there?",
    options: { A: "86", B: "28", C: "114", D: "90" },
    correct: "A"
  },
  {
    question: "Which angel takes souls at death?",
    options: { A: "Mikael", B: "Jibreel", C: "Israfil", D: "Izraeel" },
    correct: "D"
  },
  {
    question: "What is the name of the Holy Prophet’s mother?",
    options: { A: "Amina", B: "Fatima", C: "Haleema", D: "Khadija" },
    correct: "A"
  },
  {
    question: "What was the age of Prophet Muhammad (PBUH) at the time of marriage with Hazrat Khadija (R.A)?",
    options: { A: "30", B: "35", C: "25", D: "40" },
    correct: "C"
  },
  {
    question: "Which Surah is recited in every Rakat of Salah?",
    options: { A: "Surah Yaseen", B: "Surah Ikhlas", C: "Surah Fatiha", D: "Surah Baqarah" },
    correct: "C"
  },
  {
    question: "Which month is the fasting month in Islam?",
    options: { A: "Zil Hajj", B: "Ramzan", C: "Shaban", D: "Safar" },
    correct: "B"
  },
  {
    question: "What is Zakat?",
    options: { A: "Prayer", B: "Fasting", C: "Charity", D: "Hajj" },
    correct: "C"
  },
  {
    question: "How many days are there in Islamic months?",
    options: { A: "29 or 30", B: "30 or 31", C: "31", D: "28" },
    correct: "A"
  },
  {
    question: "What is the second pillar of Islam?",
    options: { A: "Zakat", B: "Salah", C: "Hajj", D: "Shahadah" },
    correct: "B"
  },
  {
    question: "Which Prophet built the Kaaba?",
    options: { A: "Hazrat Muhammad (PBUH)", B: "Hazrat Ibrahim (A.S)", C: "Hazrat Isa (A.S)", D: "Hazrat Musa (A.S)" },
    correct: "B"
  },
  {
    question: "What is the meaning of 'La ilaha illallah'?",
    options: { A: "Allah is Great", B: "There is no God but Allah", C: "Allah is One", D: "Allah is Merciful" },
    correct: "B"
  },
  {
    question: "Which Prophet was swallowed by a big fish?",
    options: { A: "Hazrat Musa (A.S)", B: "Hazrat Isa (A.S)", C: "Hazrat Yunus (A.S)", D: "Hazrat Yusuf (A.S)" },
    correct: "C"
  },
  {
    question: "Which prayer has 4 obligatory Rakats?",
    options: { A: "Fajr", B: "Maghrib", C: "Asr", D: "Isha" },
    correct: "C"
  },
  {
    question: "How many Ayahs are in the Quran?",
    options: { A: "6236", B: "6666", C: "114", D: "6000" },
    correct: "A"
  },
  {
    question: "Who was the first person to accept Islam?",
    options: { A: "Hazrat Abu Bakr", B: "Hazrat Khadija", C: "Hazrat Ali", D: "Hazrat Zaid" },
    correct: "B"
  },
  {
    question: "Which Prophet’s staff turned into a snake?",
    options: { A: "Hazrat Isa (A.S)", B: "Hazrat Musa (A.S)", C: "Hazrat Haroon (A.S)", D: "Hazrat Nuh (A.S)" },
    correct: "B"
  },
  {
    question: "Which Prophet built a big ship?",
    options: { A: "Hazrat Nuh (A.S)", B: "Hazrat Ibrahim (A.S)", C: "Hazrat Musa (A.S)", D: "Hazrat Isa (A.S)" },
    correct: "A"
  },
  {
    question: "Which Surah does not begin with Bismillah?",
    options: { A: "Surah Tawbah", B: "Surah Ikhlas", C: "Surah Fatiha", D: "Surah Yaseen" },
    correct: "A"
  },
  {
    question: "Which Prophet was born without a father?",
    options: { A: "Hazrat Musa (A.S)", B: "Hazrat Isa (A.S)", C: "Hazrat Ibrahim (A.S)", D: "Hazrat Haroon (A.S)" },
    correct: "B"
  },
  {
    question: "Who was known as Siddiq?",
    options: { A: "Hazrat Umar", B: "Hazrat Abu Bakr", C: "Hazrat Usman", D: "Hazrat Ali" },
    correct: "B"
  },
  {
    question: "Who compiled the Quran in book form?",
    options: { A: "Hazrat Umar", B: "Hazrat Usman", C: "Hazrat Abu Bakr", D: "Hazrat Ali" },
    correct: "B"
  },
  {
    question: "Which daughter of the Prophet is famous?",
    options: { A: "Ayesha", B: "Khadija", C: "Fatima", D: "Haleema" },
    correct: "C"
  },
  {
    question: "What is the reward of reading one letter of Quran?",
    options: { A: "10 good deeds", B: "20 good deeds", C: "1 good deed", D: "5 good deeds" },
    correct: "A"
  },
  {
    question: "How many wives did the Prophet (PBUH) have?",
    options: { A: "10", B: "11", C: "12", D: "13" },
    correct: "B"
  },
  {
    question: "What is the name of the night when Quran was revealed?",
    options: { A: "Shab-e-Barat", B: "Shab-e-Qadr", C: "Lailatul Mubarak", D: "None" },
    correct: "B"
  },
  {
    question: "Who was the foster mother of the Prophet?",
    options: { A: "Haleema", B: "Amina", C: "Fatima", D: "Khadija" },
    correct: "A"
  },
  {
    question: "What was the profession of the Prophet before Prophethood?",
    options: { A: "Carpenter", B: "Farmer", C: "Shepherd", D: "Trader" },
    correct: "D"
  },
  {
    question: "Which prayer is offered after sunset?",
    options: { A: "Fajr", B: "Zuhr", C: "Maghrib", D: "Asr" },
    correct: "C"
  },
  {
    question: "What is the name of the first Surah of Quran?",
    options: { A: "Surah Baqarah", B: "Surah Fatiha", C: "Surah Ikhlas", D: "Surah Yaseen" },
    correct: "B"
  },
  {
    question: "How many prophets are mentioned in the Quran?",
    options: { A: "25", B: "20", C: "15", D: "30" },
    correct: "A"
  }
  ],

  // MATHEMATICS MCQs (50 Questions)
  // Add your mathematics MCQs here
  math: [
    
     {
         question: "What is 15 + 25?",
         options: {
             A: "35",
             B: "40",
             C: "45",
             D: "50"
         },
         correct: "B"

     },
    {
    question: "What is 5 + 3?",
    options: { A: "6", B: "7", C: "8", D: "9" },
    correct: "C"
  },
  {
    question: "What is 12 × 3?",
    options: { A: "36", B: "30", C: "42", D: "32" },
    correct: "A"
  },
  {
    question: "What is the square root of 49?",
    options: { A: "5", B: "6", C: "7", D: "8" },
    correct: "C"
  },
  {
    question: "Solve: 15 ÷ 3 =",
    options: { A: "3", B: "5", C: "6", D: "4" },
    correct: "B"
  },
  {
    question: "What is 100 - 75?",
    options: { A: "20", B: "30", C: "25", D: "15" },
    correct: "C"
  },
  {
    question: "What comes after 89?",
    options: { A: "88", B: "90", C: "91", D: "92" },
    correct: "B"
  },
  {
    question: "How many sides does a triangle have?",
    options: { A: "3", B: "4", C: "5", D: "6" },
    correct: "A"
  },
  {
    question: "What is 9 × 6?",
    options: { A: "54", B: "45", C: "63", D: "56" },
    correct: "A"
  },
  {
    question: "What is 144 ÷ 12?",
    options: { A: "10", B: "11", C: "12", D: "13" },
    correct: "C"
  },
  {
    question: "What is 11 squared?",
    options: { A: "121", B: "111", C: "110", D: "122" },
    correct: "A"
  },
  {
    question: "What is the value of π (pi) approximately?",
    options: { A: "3.14", B: "2.14", C: "4.14", D: "3.41" },
    correct: "A"
  },
  {
    question: "How many degrees in a right angle?",
    options: { A: "45", B: "90", C: "180", D: "360" },
    correct: "B"
  },
  {
    question: "Solve: 2³ =",
    options: { A: "6", B: "8", C: "9", D: "7" },
    correct: "B"
  },
  {
    question: "Which number is even?",
    options: { A: "5", B: "7", C: "8", D: "9" },
    correct: "C"
  },
  {
    question: "Which is a prime number?",
    options: { A: "4", B: "6", C: "9", D: "7" },
    correct: "D"
  },
  {
    question: "What is 0 × 9?",
    options: { A: "0", B: "9", C: "1", D: "None" },
    correct: "A"
  },
  {
    question: "What is 3/6 in simplest form?",
    options: { A: "1/3", B: "1/2", C: "2/3", D: "3/4" },
    correct: "B"
  },
  {
    question: "Solve: 6² =",
    options: { A: "36", B: "12", C: "18", D: "24" },
    correct: "A"
  },
  {
    question: "What is the cube of 2?",
    options: { A: "6", B: "8", C: "4", D: "10" },
    correct: "B"
  },
  {
    question: "Which is greater: 0.7 or 0.09?",
    options: { A: "0.7", B: "0.09", C: "Equal", D: "Can't say" },
    correct: "A"
  },
  {
    question: "What is 25% of 200?",
    options: { A: "25", B: "50", C: "75", D: "100" },
    correct: "B"
  },
  {
    question: "Which number is a multiple of 3?",
    options: { A: "10", B: "12", C: "14", D: "17" },
    correct: "B"
  },
  {
    question: "What is 5 × 0?",
    options: { A: "0", B: "5", C: "1", D: "Undefined" },
    correct: "A"
  },
  {
    question: "How many months have 30 days?",
    options: { A: "4", B: "6", C: "11", D: "12" },
    correct: "A"
  },
  {
    question: "Solve: 100 ÷ 10 =",
    options: { A: "5", B: "10", C: "20", D: "15" },
    correct: "B"
  },
  {
    question: "What is 10²?",
    options: { A: "20", B: "100", C: "110", D: "90" },
    correct: "B"
  },
  {
    question: "What is the smallest even number?",
    options: { A: "0", B: "1", C: "2", D: "3" },
    correct: "A"
  },
  {
    question: "What is 1/2 of 50?",
    options: { A: "20", B: "25", C: "30", D: "15" },
    correct: "B"
  },
  {
    question: "If x = 4, what is 2x + 3?",
    options: { A: "8", B: "9", C: "10", D: "11" },
    correct: "D"
  },
  {
    question: "Which number is divisible by 5?",
    options: { A: "13", B: "17", C: "20", D: "22" },
    correct: "C"
  },
  {
    question: "What is 10 + 9 - 4?",
    options: { A: "15", B: "16", C: "14", D: "13" },
    correct: "A"
  },
  {
    question: "What is the average of 5, 10, and 15?",
    options: { A: "10", B: "12", C: "11", D: "9" },
    correct: "A"
  },
  {
    question: "What is 7 × 7?",
    options: { A: "49", B: "56", C: "63", D: "77" },
    correct: "A"
  },
  {
    question: "How many hours in 2 days?",
    options: { A: "24", B: "36", C: "48", D: "72" },
    correct: "C"
  },
  {
    question: "What is the perimeter of a square with side 4?",
    options: { A: "12", B: "16", C: "8", D: "20" },
    correct: "B"
  },
  {
    question: "What is the area of rectangle: 4 × 3?",
    options: { A: "7", B: "12", C: "14", D: "16" },
    correct: "B"
  },
  {
    question: "Which number is not a factor of 20?",
    options: { A: "2", B: "4", C: "5", D: "9" },
    correct: "D"
  },
  {
    question: "How many zeroes in one thousand?",
    options: { A: "1", B: "2", C: "3", D: "4" },
    correct: "C"
  },
  {
    question: "What is 15% of 100?",
    options: { A: "10", B: "15", C: "20", D: "25" },
    correct: "B"
  },
  {
    question: "What is the next even number after 18?",
    options: { A: "19", B: "20", C: "21", D: "22" },
    correct: "B"
  },
  {
    question: "Which is a proper fraction?",
    options: { A: "5/2", B: "4/4", C: "3/5", D: "7/3" },
    correct: "C"
  },
  {
    question: "Solve: (5 + 3) × 2 =",
    options: { A: "14", B: "16", C: "10", D: "12" },
    correct: "B"
  },
  {
    question: "What is the value of 3⁰?",
    options: { A: "1", B: "3", C: "0", D: "Undefined" },
    correct: "A"
  },
  {
    question: "Which is a negative number?",
    options: { A: "-5", B: "0", C: "5", D: "1" },
    correct: "A"
  },
  {
    question: "What is 0.5 as a fraction?",
    options: { A: "1/2", B: "1/3", C: "1/4", D: "2/5" },
    correct: "A"
  },
  {
    question: "Which is an odd number?",
    options: { A: "6", B: "8", C: "10", D: "13" },
    correct: "D"
  },
  {
    question: "What is 6 × 8?",
    options: { A: "48", B: "42", C: "56", D: "36" },
    correct: "A"
  },
  {
    question: "What is the sum of angles in a triangle?",
    options: { A: "180°", B: "90°", C: "360°", D: "270°" },
    correct: "A"
  },
  {
    question: "What is 2/4 in simplest form?",
    options: { A: "1/2", B: "2/4", C: "2/2", D: "1/4" },
    correct: "A"
  }
  ]
};

// ============================================
// THEME MANAGEMENT
// ============================================

class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.themeToggleBtn = document.getElementById('theme-toggle-btn');
    this.init();
  }

  init() {
    this.setTheme(this.currentTheme);
    this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.currentTheme = theme;
    this.updateThemeIcon();
    // Note: localStorage is not used in Claude.ai environment
    // localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  updateThemeIcon() {
    const icon = this.themeToggleBtn.querySelector('i');
    if (this.currentTheme === 'light') {
      icon.className = 'fas fa-moon';
    } else {
      icon.className = 'fas fa-sun';
    }
  }
}

// ============================================
// NAVIGATION MANAGEMENT
// ============================================

class NavigationManager {
  constructor() {
    this.mobileMenu = document.getElementById('mobile-menu');
    this.navMenu = document.querySelector('.nav-menu');
    this.init();
  }

  init() {
    // Mobile menu toggle
    this.mobileMenu.addEventListener('click', () => this.toggleMobileMenu());

    // Navigation links
    this.setupNavigationLinks();

    // Subject cards and dropdown links
    this.setupSubjectLinks();

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.navMenu.contains(e.target) && !this.mobileMenu.contains(e.target)) {
        this.closeMobileMenu();
      }
    });
  }

  toggleMobileMenu() {
    this.navMenu.classList.toggle('active');
    this.mobileMenu.classList.toggle('active');
  }

  closeMobileMenu() {
    this.navMenu.classList.remove('active');
    this.mobileMenu.classList.remove('active');
  }

  setupNavigationLinks() {
    // About Us tab
    document.getElementById('about-tab').addEventListener('click', (e) => {
      e.preventDefault();
      this.showSection('about');
      this.closeMobileMenu();
    });

    // Contact tab
    document.getElementById('contact-tab').addEventListener('click', (e) => {
      e.preventDefault();
      this.showSection('contact');
      this.closeMobileMenu();
    });

    // FAQs tab
    document.getElementById('faqs-tab').addEventListener('click', (e) => {
      e.preventDefault();
      this.showSection('faqs');
      this.closeMobileMenu();
    });

    // Footer links
    document.getElementById('footer-home').addEventListener('click', (e) => {
      e.preventDefault();
      this.showSection('home');
    });

    document.getElementById('footer-about').addEventListener('click', (e) => {
      e.preventDefault();
      this.showSection('about');
    });

    document.getElementById('footer-contact').addEventListener('click', (e) => {
      e.preventDefault();
      this.showSection('contact');
    });

    document.getElementById('footer-faqs').addEventListener('click', (e) => {
      e.preventDefault();
      this.showSection('faqs');
    });
  }

  setupSubjectLinks() {
    // Subject cards in hero section
    const subjectCards = document.querySelectorAll('.subject-card');
    subjectCards.forEach(card => {
      card.addEventListener('click', () => {
        const subject = card.getAttribute('data-subject');
        mcqManager.startTest(subject);
        this.closeMobileMenu();
      });
    });

    // Dropdown subject links
    const dropdownLinks = document.querySelectorAll('.dropdown-content a[data-subject]');
    dropdownLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const subject = link.getAttribute('data-subject');
        mcqManager.startTest(subject);
        this.closeMobileMenu();
      });
    });

    // Footer subject links
    const footerSubjectLinks = document.querySelectorAll('.footer-section a[data-subject]');
    footerSubjectLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const subject = link.getAttribute('data-subject');
        mcqManager.startTest(subject);
      });
    });
  }

  showSection(sectionName) {
    // Hide all sections
    Object.values(sections).forEach(section => {
      section.classList.remove('active');
    });

    // Show selected section
    if (sections[sectionName]) {
      sections[sectionName].classList.add('active');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ============================================
// MCQ TEST MANAGEMENT
// ============================================

class MCQManager {
  constructor() {
    this.init();
  }

  init() {
    // MCQ navigation buttons
    mcqElements.prevBtn.addEventListener('click', () => this.previousQuestion());
    mcqElements.nextBtn.addEventListener('click', () => this.nextQuestion());
    mcqElements.finishBtn.addEventListener('click', () => this.finishTest());

    // Option selection
    const radioButtons = document.querySelectorAll('input[name="answer"]');
    radioButtons.forEach(radio => {
      radio.addEventListener('change', () => this.handleAnswerSelection());
    });

    // Review buttons
    document.getElementById('retry-btn').addEventListener('click', () => this.retryTest());
    document.getElementById('home-btn').addEventListener('click', () => this.goHome());
  }

  startTest(subject) {
    // Check if subject has questions
    if (!mcqsData[subject] || mcqsData[subject].length === 0) {
      alert(`Sorry, ${subject} questions are not available yet. Please add questions to the mcqsData object.`);
      return;
    }

    // Initialize test
    currentSubject = subject;
    questions = [...mcqsData[subject]];
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    isTestCompleted = false;

    // Show MCQ section
    navigationManager.showSection('mcq');

    // Load first question
    this.loadQuestion();
    this.updateUI();
  }

  loadQuestion() {
    if (currentQuestionIndex >= questions.length) return;

    const question = questions[currentQuestionIndex];

    // Update question text and subject
    mcqElements.subject.textContent = this.getSubjectDisplayName(currentSubject);
    mcqElements.questionText.textContent = question.question;

    // Update options
    mcqElements.optionA.textContent = question.options.A;
    mcqElements.optionB.textContent = question.options.B;
    mcqElements.optionC.textContent = question.options.C;
    mcqElements.optionD.textContent = question.options.D;

    // Clear previous selection
    const radioButtons = document.querySelectorAll('input[name="answer"]');
    radioButtons.forEach(radio => radio.checked = false);

    // Set saved answer if exists
    if (userAnswers[currentQuestionIndex]) {
      const savedAnswer = userAnswers[currentQuestionIndex];
      document.getElementById(`option-${savedAnswer}`).checked = true;
    }

    // Update question counter and progress
    mcqElements.questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    mcqElements.progressFill.style.width = `${progress}%`;

    // Update button states
    mcqElements.prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === questions.length - 1) {
      mcqElements.nextBtn.style.display = 'none';
      mcqElements.finishBtn.style.display = 'inline-flex';
    } else {
      mcqElements.nextBtn.style.display = 'inline-flex';
      mcqElements.finishBtn.style.display = 'none';
    }
  }

  handleAnswerSelection() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      userAnswers[currentQuestionIndex] = selectedOption.value;
    }
  }

  nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      this.loadQuestion();
      this.addQuestionAnimation('animate-right');
    }
  }

  previousQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      this.loadQuestion();
      this.addQuestionAnimation('animate-left');
    }
  }

  addQuestionAnimation(animationClass) {
    const questionContainer = document.querySelector('.question-container');
    questionContainer.classList.remove('animate-left', 'animate-right');
    setTimeout(() => {
      questionContainer.classList.add(animationClass);
    }, 10);
  }

  finishTest() {
    // Check if all questions are answered
    const unansweredQuestions = userAnswers.filter(answer => answer === null).length;

    if (unansweredQuestions > 0) {
      const confirmFinish = confirm(`You have ${unansweredQuestions} unanswered questions. Do you want to finish the test anyway?`);
      if (!confirmFinish) return;
    }

    isTestCompleted = true;
    this.showReview();
  }

  showReview() {
    navigationManager.showSection('review');
    this.generateReview();
  }

  generateReview() {
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    // Clear previous review content
    reviewElements.reviewContent.innerHTML = '';

    // Generate review items
    questions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      const correctAnswer = question.correct;
      const isCorrect = userAnswer === correctAnswer;

      if (isCorrect) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }

      const reviewItem = this.createReviewItem(question, userAnswer, correctAnswer, isCorrect, index + 1);
      reviewElements.reviewContent.appendChild(reviewItem);
    });

    // Update score summary
    const totalQuestions = questions.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    reviewElements.correctCount.textContent = correctAnswers;
    reviewElements.incorrectCount.textContent = incorrectAnswers;
    reviewElements.percentageScore.textContent = `${percentage}%`;
  }

  createReviewItem(question, userAnswer, correctAnswer, isCorrect, questionNumber) {
    const reviewItem = document.createElement('div');
    reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

    const questionDiv = document.createElement('div');
    questionDiv.className = 'review-question';
    questionDiv.textContent = `${questionNumber}. ${question.question}`;

    const answersDiv = document.createElement('div');
    answersDiv.className = 'review-answers';

    // Show correct answer
    const correctDiv = document.createElement('div');
    correctDiv.className = 'review-answer correct';
    correctDiv.innerHTML = `<i class="fas fa-check"></i> Correct Answer: ${correctAnswer}. ${question.options[correctAnswer]}`;
    answersDiv.appendChild(correctDiv);

    // Show user answer if different from correct
    if (userAnswer && userAnswer !== correctAnswer) {
      const userDiv = document.createElement('div');
      userDiv.className = 'review-answer user-incorrect';
      userDiv.innerHTML = `<i class="fas fa-times"></i> Your Answer: ${userAnswer}. ${question.options[userAnswer]}`;
      answersDiv.appendChild(userDiv);
    } else if (!userAnswer) {
      const userDiv = document.createElement('div');
      userDiv.className = 'review-answer user-incorrect';
      userDiv.innerHTML = `<i class="fas fa-times"></i> Your Answer: Not Answered`;
      answersDiv.appendChild(userDiv);
    }

    reviewItem.appendChild(questionDiv);
    reviewItem.appendChild(answersDiv);

    return reviewItem;
  }

  retryTest() {
    if (currentSubject) {
      this.startTest(currentSubject);
    }
  }

  goHome() {
    navigationManager.showSection('home');
    // Reset test state
    currentSubject = '';
    currentQuestionIndex = 0;
    userAnswers = [];
    questions = [];
    isTestCompleted = false;
  }

  updateUI() {
    // Any additional UI updates can be added here
  }

  getSubjectDisplayName(subject) {
    const displayNames = {
      'computer': 'Computer Science',
      'english': 'English Language',
      'general-knowledge': 'General Knowledge',
      'iq': 'IQ Test',
      'islamiat': 'Islamiat',
      'math': 'Mathematics'
    };
    return displayNames[subject] || subject;
  }
}

// ============================================
// FAQ MANAGEMENT
// ============================================

class FAQManager {
  constructor() {
    this.init();
  }

  init() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
          faqItem.classList.add('active');
        }
      });
    });
  }
}

// ============================================
// CONTACT FORM MANAGEMENT
// ============================================

class ContactFormManager {
  constructor() {
    this.init();
  }

  init() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;

    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate form submission
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  }
}

// ============================================
// ANIMATION UTILITIES
// ============================================

class AnimationUtils {
  static observeElements() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.subject-card, .feature, .contact-item, .faq-item');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  static addLoadingAnimation(element) {
    element.classList.add('loading');
    setTimeout(() => {
      element.classList.remove('loading');
    }, 1000);
  }
}

// ============================================
// INITIALIZATION
// ============================================

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme manager
  window.themeManager = new ThemeManager();

  // Initialize navigation manager
  window.navigationManager = new NavigationManager();

  // Initialize MCQ manager
  window.mcqManager = new MCQManager();

  // Initialize FAQ manager
  window.faqManager = new FAQManager();

  // Initialize contact form manager
  window.contactFormManager = new ContactFormManager();

  // Setup scroll animations
  AnimationUtils.observeElements();

  // Show home section by default
  navigationManager.showSection('home');

  console.log('Syllani Entry Test Practice initialized successfully!');
  console.log('To add MCQs, edit the mcqsData object in the JavaScript code.');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Function to add sample MCQs for testing (you can remove this)
function addSampleMCQs() {
  // This is just for testing purposes
  // You should replace this with actual MCQs

  mcqsData.computer.push({
    question: "What does HTML stand for?",
    options: {
      A: "HyperText Markup Language",
      B: "High Tech Modern Language",
      C: "Home Tool Markup Language",
      D: "Hyperlink and Text Markup Language"
    },
    correct: "A"
  });

  console.log('Sample MCQ added. Please add your own MCQs to the mcqsData object.');
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Only work in MCQ section
  if (!sections.mcq.classList.contains('active')) return;

  switch (e.key) {
    case 'ArrowLeft':
      e.preventDefault();
      if (!mcqElements.prevBtn.disabled) {
        mcqManager.previousQuestion();
      }
      break;
    case 'ArrowRight':
      e.preventDefault();
      if (mcqElements.nextBtn.style.display !== 'none') {
        mcqManager.nextQuestion();
      }
      break;
    case '1':
    case 'a':
    case 'A':
      e.preventDefault();
      document.getElementById('option-A').checked = true;
      mcqManager.handleAnswerSelection();
      break;
    case '2':
    case 'b':
    case 'B':
      e.preventDefault();
      document.getElementById('option-B').checked = true;
      mcqManager.handleAnswerSelection();
      break;
    case '3':
    case 'c':
    case 'C':
      e.preventDefault();
      document.getElementById('option-C').checked = true;
      mcqManager.handleAnswerSelection();
      break;
    case '4':
    case 'd':
    case 'D':
      e.preventDefault();
      document.getElementById('option-D').checked = true;
      mcqManager.handleAnswerSelection();
      break;
  }
});

// Performance monitoring
window.addEventListener('load', () => {
  const loadTime = performance.now();
  console.log(`Page loaded in ${Math.round(loadTime)}ms`);
});

// Error handling
window.addEventListener('error', (e) => {
  console.error('An error occurred:', e.error);
});

// ============================================
// END OF JAVASCRIPT CODE
// ============================================