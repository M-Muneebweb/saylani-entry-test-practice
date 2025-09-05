// ============================================
// Saylani ENTRY TEST PRACTICE - JAVASCRIPT
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
    question: "Which data structure is used to implement function calls in programming languages?",
    options: {
      A: "Queue",
      B: "Stack", 
      C: "Linked List",
      D: "Hash Table"
    },
    correct: "B"
  },
  {
    question: "What is the time complexity of searching in a balanced Binary Search Tree?",
    options: {
      A: "O(n)",
      B: "O(log n)",
      C: "O(n²)",
      D: "O(1)"
    },
    correct: "B"
  },
  {
    question: "Which sorting algorithm has the best average case time complexity?",
    options: {
      A: "Bubble Sort",
      B: "Selection Sort", 
      C: "Merge Sort",
      D: "Insertion Sort"
    },
    correct: "C"
  },
  {
    question: "What does ACID stand for in database systems?",
    options: {
      A: "Atomicity, Consistency, Isolation, Durability",
      B: "Accuracy, Consistency, Integration, Database",
      C: "Atomic, Complete, Isolated, Durable",
      D: "All Complete Information Database"
    },
    correct: "A"
  },
  {
    question: "Which protocol is used for secure communication over the internet?",
    options: {
      A: "HTTP",
      B: "FTP",
      C: "HTTPS",
      D: "SMTP"
    },
    correct: "C"
  },
  {
    question: "What is the maximum number of nodes in a binary tree of height h?",
    options: {
      A: "2^h - 1",
      B: "2^(h+1) - 1",
      C: "2^h",
      D: "h + 1"
    },
    correct: "B"
  },
  {
    question: "Which design pattern ensures only one instance of a class exists?",
    options: {
      A: "Factory Pattern",
      B: "Observer Pattern",
      C: "Singleton Pattern",
      D: "Strategy Pattern"
    },
    correct: "C"
  },
  {
    question: "What is the space complexity of the merge sort algorithm?",
    options: {
      A: "O(1)",
      B: "O(log n)",
      C: "O(n)",
      D: "O(n²)"
    },
    correct: "C"
  },
  {
    question: "Which normal form eliminates transitive dependencies?",
    options: {
      A: "1NF",
      B: "2NF",
      C: "3NF",
      D: "BCNF"
    },
    correct: "C"
  },
  {
    question: "What is the worst-case time complexity of Quick Sort?",
    options: {
      A: "O(n log n)",
      B: "O(n²)",
      C: "O(n)",
      D: "O(log n)"
    },
    correct: "B"
  },
  {
    question: "Which layer of the OSI model handles routing?",
    options: {
      A: "Data Link Layer",
      B: "Network Layer",
      C: "Transport Layer",
      D: "Session Layer"
    },
    correct: "B"
  },
  {
    question: "What is deadlock in operating systems?",
    options: {
      A: "When a process terminates unexpectedly",
      B: "When two or more processes wait indefinitely for each other",
      C: "When CPU utilization is 100%",
      D: "When memory is full"
    },
    correct: "B"
  },
  {
    question: "Which algorithm is used to find the shortest path in a weighted graph?",
    options: {
      A: "Breadth-First Search",
      B: "Depth-First Search",
      C: "Dijkstra's Algorithm",
      D: "Binary Search"
    },
    correct: "C"
  },
  {
    question: "What is the purpose of virtual memory in operating systems?",
    options: {
      A: "To increase CPU speed",
      B: "To provide more storage than physical RAM",
      C: "To encrypt data",
      D: "To manage network connections"
    },
    correct: "B"
  },
  {
    question: "Which data structure is best for implementing LRU cache?",
    options: {
      A: "Array",
      B: "Stack",
      C: "Hash Map + Doubly Linked List",
      D: "Binary Tree"
    },
    correct: "C"
  },
  {
    question: "What is the maximum number of edges in a simple undirected graph with n vertices?",
    options: {
      A: "n",
      B: "n-1",
      C: "n(n-1)/2",
      D: "n²"
    },
    correct: "C"
  },
  {
    question: "Which concurrency control technique prevents lost updates?",
    options: {
      A: "Indexing",
      B: "Normalization",
      C: "Locking",
      D: "Partitioning"
    },
    correct: "C"
  },
  {
    question: "What is the time complexity of building a heap from an unsorted array?",
    options: {
      A: "O(n log n)",
      B: "O(n²)",
      C: "O(n)",
      D: "O(log n)"
    },
    correct: "C"
  },
  {
    question: "Which scheduling algorithm can cause starvation?",
    options: {
      A: "First Come First Serve",
      B: "Round Robin",
      C: "Shortest Job First",
      D: "Priority Scheduling"
    },
    correct: "D"
  },
  {
    question: "What is the minimum number of colors needed to color any planar graph?",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6"
    },
    correct: "B"
  },
  {
    question: "Which tree traversal gives nodes in ascending order for a BST?",
    options: {
      A: "Pre-order",
      B: "Post-order",
      C: "In-order",
      D: "Level-order"
    },
    correct: "C"
  },
  {
    question: "What is thrashing in virtual memory systems?",
    options: {
      A: "Frequent page faults causing poor performance",
      B: "Memory corruption",
      C: "CPU overheating",
      D: "Network congestion"
    },
    correct: "A"
  },
  {
    question: "Which algorithm is used for finding strongly connected components?",
    options: {
      A: "Kruskal's Algorithm",
      B: "Prim's Algorithm",
      C: "Tarjan's Algorithm",
      D: "Bellman-Ford Algorithm"
    },
    correct: "C"
  },
  {
    question: "What is the space-time tradeoff in computing?",
    options: {
      A: "Using more memory to reduce computation time",
      B: "Using less memory to increase computation time",
      C: "Both A and B",
      D: "Neither A nor B"
    },
    correct: "C"
  },
  {
    question: "Which index type provides fastest access in databases?",
    options: {
      A: "B-Tree Index",
      B: "Hash Index",
      C: "Bitmap Index",
      D: "Clustered Index"
    },
    correct: "B"
  },
  {
    question: "What is the banker's algorithm used for?",
    options: {
      A: "Shortest path finding",
      B: "Deadlock avoidance",
      C: "Memory allocation",
      D: "Process scheduling"
    },
    correct: "B"
  },
  {
    question: "Which consistency model allows reads to return stale data?",
    options: {
      A: "Strong Consistency",
      B: "Eventual Consistency",
      C: "Sequential Consistency",
      D: "Linearizability"
    },
    correct: "B"
  },
  {
    question: "What is the maximum height of an AVL tree with n nodes?",
    options: {
      A: "log n",
      B: "1.44 log n",
      C: "n",
      D: "√n"
    },
    correct: "B"
  },
  {
    question: "Which memory allocation technique reduces external fragmentation?",
    options: {
      A: "Fixed Partitioning",
      B: "Dynamic Partitioning",
      C: "Paging",
      D: "Segmentation"
    },
    correct: "C"
  },
  {
    question: "What is the purpose of DNS in networking?",
    options: {
      A: "Data encryption",
      B: "Domain name to IP address translation",
      C: "File transfer",
      D: "Email routing"
    },
    correct: "B"
  },
  {
    question: "Which garbage collection algorithm has the least pause time?",
    options: {
      A: "Mark and Sweep",
      B: "Copying Collector",
      C: "Incremental Collector",
      D: "Reference Counting"
    },
    correct: "C"
  },
  {
    question: "What is the chromatic number of a complete graph with n vertices?",
    options: {
      A: "2",
      B: "3",
      C: "n-1",
      D: "n"
    },
    correct: "D"
  },
  {
    question: "Which join operation in SQL is most expensive?",
    options: {
      A: "Inner Join",
      B: "Left Join",
      C: "Cross Join",
      D: "Right Join"
    },
    correct: "C"
  },
  {
    question: "What is the minimum spanning tree of a graph?",
    options: {
      A: "Tree with minimum number of edges",
      B: "Tree connecting all vertices with minimum total weight",
      C: "Tree with maximum height",
      D: "Binary tree with minimum nodes"
    },
    correct: "B"
  },
  {
    question: "Which cache replacement policy has the lowest miss rate theoretically?",
    options: {
      A: "FIFO",
      B: "LRU",
      C: "LFU",
      D: "Optimal (OPT)"
    },
    correct: "D"
  },
  {
    question: "What is the purpose of semaphores in operating systems?",
    options: {
      A: "Memory management",
      B: "Process synchronization",
      C: "File system management",
      D: "Network communication"
    },
    correct: "B"
  },
  {
    question: "Which HTTP status code indicates server error?",
    options: {
      A: "200",
      B: "404",
      C: "500",
      D: "301"
    },
    correct: "C"
  },
  {
    question: "What is the difference between process and thread?",
    options: {
      A: "No difference",
      B: "Threads share memory, processes don't",
      C: "Processes are faster than threads",
      D: "Threads can't communicate"
    },
    correct: "B"
  },
  {
    question: "Which algorithm solves the all-pairs shortest path problem?",
    options: {
      A: "Dijkstra's Algorithm",
      B: "Bellman-Ford Algorithm",
      C: "Floyd-Warshall Algorithm",
      D: "A* Algorithm"
    },
    correct: "C"
  },
  {
    question: "What is referential integrity in databases?",
    options: {
      A: "Data encryption",
      B: "Foreign key constraints",
      C: "Index optimization",
      D: "Query performance"
    },
    correct: "B"
  },
  {
    question: "Which scheduling algorithm provides the best average waiting time?",
    options: {
      A: "FCFS",
      B: "SJF",
      C: "Round Robin",
      D: "Priority Scheduling"
    },
    correct: "B"
  },
  {
    question: "What is the purpose of hashing in data structures?",
    options: {
      A: "Data encryption",
      B: "Fast data retrieval",
      C: "Data compression",
      D: "Data sorting"
    },
    correct: "B"
  },
  {
    question: "Which network topology has the highest fault tolerance?",
    options: {
      A: "Star",
      B: "Bus",
      C: "Ring",
      D: "Mesh"
    },
    correct: "D"
  },
  {
    question: "What is polymorphism in object-oriented programming?",
    options: {
      A: "Multiple inheritance",
      B: "Method overloading and overriding",
      C: "Data hiding",
      D: "Code reusability"
    },
    correct: "B"
  },
  {
    question: "Which data structure is used in breadth-first search?",
    options: {
      A: "Stack",
      B: "Queue",
      C: "Priority Queue",
      D: "Deque"
    },
    correct: "B"
  },
  {
    question: "What is the main advantage of B+ trees over B trees?",
    options: {
      A: "Lower height",
      B: "Better range queries",
      C: "Less memory usage",
      D: "Faster insertions"
    },
    correct: "B"
  },
  {
    question: "Which memory management technique eliminates internal fragmentation?",
    options: {
      A: "Fixed Partitioning",
      B: "Dynamic Partitioning", 
      C: "Both paging and segmentation",
      D: "Paging only"
    },
    correct: "D"
  },
  {
    question: "What is the maximum flow problem in graph theory?",
    options: {
      A: "Finding shortest path",
      B: "Finding minimum spanning tree",
      C: "Finding maximum flow from source to sink",
      D: "Finding strongly connected components"
    },
    correct: "C"
  },
  {
    question: "Which SQL command is used to remove duplicates?",
    options: {
      A: "UNIQUE",
      B: "DISTINCT",
      C: "REMOVE",
      D: "DELETE"
    },
    correct: "B"
  },
  {
    question: "What is the space complexity of recursive Fibonacci algorithm?",
    options: {
      A: "O(1)",
      B: "O(n)",
      C: "O(log n)",
      D: "O(2^n)"
    },
    correct: "B"
  }
],

  // ENGLISH SUBJECT MCQs (50 Questions)
  // Add your English language MCQs here
  english: [
  {
    question: "Which literary device is used in 'The wind whispered through the trees'?",
    options: {
      A: "Metaphor",
      B: "Personification",
      C: "Alliteration",
      D: "Hyperbole"
    },
    correct: "B"
  },
  {
    question: "What is the correct meaning of the word 'ubiquitous'?",
    options: {
      A: "Rare and precious",
      B: "Present everywhere",
      C: "Ancient and outdated",
      D: "Mysterious and unknown"
    },
    correct: "B"
  },
  {
    question: "Which sentence uses the subjunctive mood correctly?",
    options: {
      A: "If I was rich, I would travel",
      B: "If I were rich, I would travel",
      C: "If I am rich, I would travel",
      D: "If I will be rich, I would travel"
    },
    correct: "B"
  },
  {
    question: "What type of poem has 14 lines and follows a specific rhyme scheme?",
    options: {
      A: "Haiku",
      B: "Limerick",
      C: "Sonnet",
      D: "Ballad"
    },
    correct: "C"
  },
  {
    question: "Which word is spelled correctly?",
    options: {
      A: "Occassionally",
      B: "Ocassionally", 
      C: "Occasionally",
      D: "Occasionaly"
    },
    correct: "C"
  },
  {
    question: "What is an oxymoron?",
    options: {
      A: "A comparison using 'like' or 'as'",
      B: "A contradiction in terms",
      C: "Repetition of consonant sounds",
      D: "An exaggerated statement"
    },
    correct: "B"
  },
  {
    question: "Which sentence demonstrates proper parallel structure?",
    options: {
      A: "She likes reading, writing, and to paint",
      B: "She likes reading, writing, and painting",
      C: "She likes to read, writing, and painting",
      D: "She likes reading, to write, and painting"
    },
    correct: "B"
  },
  {
    question: "What is the plural form of 'datum'?",
    options: {
      A: "Datums",
      B: "Data",
      C: "Datas",
      D: "Datumses"
    },
    correct: "B"
  },
  {
    question: "Which literary term refers to a recurring theme or idea in literature?",
    options: {
      A: "Motif",
      B: "Allegory",
      C: "Symbolism",
      D: "Irony"
    },
    correct: "A"
  },
  {
    question: "What is the correct pronunciation guide for 'epitome'?",
    options: {
      A: "EP-i-tome",
      B: "ep-i-TOME-ee",
      C: "EP-i-to-me",
      D: "e-PIT-o-me"
    },
    correct: "B"
  },
  {
    question: "Which sentence uses 'whom' correctly?",
    options: {
      A: "Who did you give the book to?",
      B: "Whom did you give the book to?",
      C: "Who should I address this letter to?",
      D: "Whom is calling?"
    },
    correct: "B"
  },
  {
    question: "What is a gerund?",
    options: {
      A: "A verb ending in -ed",
      B: "A verb form ending in -ing used as a noun",
      C: "An adjective describing a verb",
      D: "A linking verb"
    },
    correct: "B"
  },
  {
    question: "Which word means 'showing great attention to detail'?",
    options: {
      A: "Meticulous",
      B: "Magnanimous", 
      C: "Melancholy",
      D: "Malevolent"
    },
    correct: "A"
  },
  {
    question: "What is the antonym of 'ephemeral'?",
    options: {
      A: "Temporary",
      B: "Permanent",
      C: "Brief",
      D: "Fleeting"
    },
    correct: "B"
  },
  {
    question: "Which punctuation mark should be used before a list introduced by 'the following'?",
    options: {
      A: "Semicolon",
      B: "Comma",
      C: "Colon",
      D: "Period"
    },
    correct: "C"
  },
  {
    question: "What is the correct past participle of 'lie' (to recline)?",
    options: {
      A: "Lied",
      B: "Laid",
      C: "Lain",
      D: "Lay"
    },
    correct: "C"
  },
  {
    question: "Which literary device involves giving human characteristics to non-human things?",
    options: {
      A: "Anthropomorphism",
      B: "Personification",
      C: "Both A and B",
      D: "Neither A nor B"
    },
    correct: "C"
  },
  {
    question: "What does the prefix 'mal-' mean?",
    options: {
      A: "Good",
      B: "Bad",
      C: "Many",
      D: "Small"
    },
    correct: "B"
  },
  {
    question: "Which sentence uses the apostrophe correctly?",
    options: {
      A: "The dog's are barking loudly",
      B: "Its a beautiful day today",
      C: "The children's toys are scattered",
      D: "We sell apple's and orange's"
    },
    correct: "C"
  },
  {
    question: "What is the meaning of 'sanguine'?",
    options: {
      A: "Pessimistic",
      B: "Optimistic",
      C: "Angry",
      D: "Confused"
    },
    correct: "B"
  },
  {
    question: "Which word is a homophone of 'right'?",
    options: {
      A: "Write",
      B: "Wright",
      C: "Rite",
      D: "All of the above"
    },
    correct: "D"
  },
  {
    question: "What is the comparative form of 'good'?",
    options: {
      A: "Gooder",
      B: "More good",
      C: "Better",
      D: "Best"
    },
    correct: "C"
  },
  {
    question: "Which sentence contains a dangling modifier?",
    options: {
      A: "After studying all night, the test was easy",
      B: "After studying all night, I found the test easy",
      C: "The test was easy after studying all night",
      D: "I found the test easy after studying all night"
    },
    correct: "A"
  },
  {
    question: "What is the meaning of 'perfunctory'?",
    options: {
      A: "Done with great care",
      B: "Done as a duty without enthusiasm",
      C: "Done perfectly",
      D: "Done repeatedly"
    },
    correct: "B"
  },
  {
    question: "Which is the correct spelling?",
    options: {
      A: "Accomodate",
      B: "Acommodate",
      C: "Accommodate",
      D: "Acomodate"
    },
    correct: "C"
  },
  {
    question: "What is synecdoche?",
    options: {
      A: "A part representing the whole",
      B: "An exaggerated statement",
      C: "A direct comparison",
      D: "Repetition of vowel sounds"
    },
    correct: "A"
  },
  {
    question: "Which sentence uses 'farther' correctly?",
    options: {
      A: "We need to discuss this farther",
      B: "The library is farther down the street",
      C: "Let's take this conversation farther",
      D: "I can't go farther with this topic"
    },
    correct: "B"
  },
  {
    question: "What is the correct meaning of 'enormity'?",
    options: {
      A: "Large size",
      B: "Great wickedness",
      C: "Great importance",
      D: "Unusual appearance"
    },
    correct: "B"
  },
  {
    question: "Which word means 'existing in name only'?",
    options: {
      A: "Nominal",
      B: "Notorious",
      C: "Nefarious",
      D: "Negligible"
    },
    correct: "A"
  },
  {
    question: "What is the correct plural of 'criterion'?",
    options: {
      A: "Criterions",
      B: "Criteria",
      C: "Criterias",
      D: "Criterion"
    },
    correct: "B"
  },
  {
    question: "Which sentence demonstrates correct subject-verb agreement?",
    options: {
      A: "Neither of the students were present",
      B: "Either the teacher or the students is responsible",
      C: "Each of the books are interesting",
      D: "Neither of the students was present"
    },
    correct: "D"
  },
  {
    question: "What is cacophony in literature?",
    options: {
      A: "Pleasant-sounding words",
      B: "Harsh, discordant sounds",
      C: "Rhyming pattern",
      D: "Silent letters"
    },
    correct: "B"
  },
  {
    question: "Which word means 'truthfulness and accuracy'?",
    options: {
      A: "Veracity",
      B: "Vivacity",
      C: "Velocity",
      D: "Verbosity"
    },
    correct: "A"
  },
  {
    question: "What is the past tense of 'lead' (to guide)?",
    options: {
      A: "Lead",
      B: "Led",
      C: "Leaded",
      D: "Leader"
    },
    correct: "B"
  },
  {
    question: "Which literary device is used in 'The classroom was a zoo'?",
    options: {
      A: "Simile",
      B: "Metaphor",
      C: "Personification",
      D: "Hyperbole"
    },
    correct: "B"
  },
  {
    question: "What does 'etymology' study?",
    options: {
      A: "Insect behavior",
      B: "Word origins",
      C: "Plant classification",
      D: "Rock formations"
    },
    correct: "B"
  },
  {
    question: "Which sentence uses 'affect' correctly?",
    options: {
      A: "The rain will have no affect on our plans",
      B: "What affect will this have?",
      C: "The rain will affect our plans",
      D: "I hope this won't affect badly"
    },
    correct: "C"
  },
  {
    question: "What is the meaning of 'panacea'?",
    options: {
      A: "A minor problem",
      B: "A cure-all remedy",
      C: "A type of disease",
      D: "A medical specialist"
    },
    correct: "B"
  },
  {
    question: "Which is the correct superlative form of 'bad'?",
    options: {
      A: "Baddest",
      B: "More bad",
      C: "Most bad",
      D: "Worst"
    },
    correct: "D"
  },
  {
    question: "What is a malapropism?",
    options: {
      A: "Misuse of a word for a similar-sounding word",
      B: "Use of archaic language",
      C: "Repetition of phrases",
      D: "Incorrect grammar"
    },
    correct: "A"
  },
  {
    question: "Which punctuation is correct for this sentence: 'I have three favorite colors ___ red, blue, and green'?",
    options: {
      A: "Semicolon (;)",
      B: "Comma (,)",
      C: "Colon (:)",
      D: "Dash (—)"
    },
    correct: "C"
  },
  {
    question: "What does 'acquiesce' mean?",
    options: {
      A: "To refuse firmly",
      B: "To accept reluctantly",
      C: "To argue passionately",
      D: "To ignore completely"
    },
    correct: "B"
  },
  {
    question: "Which word is misspelled?",
    options: {
      A: "Necessary",
      B: "Separate",
      C: "Priviledge",
      D: "Definitely"
    },
    correct: "C"
  },
  {
    question: "What is the difference between 'imply' and 'infer'?",
    options: {
      A: "They mean the same thing",
      B: "Imply is to suggest, infer is to deduce",
      C: "Infer is to suggest, imply is to deduce",
      D: "Only one is a real word"
    },
    correct: "B"
  },
  {
    question: "Which sentence uses parallel structure correctly?",
    options: {
      A: "The job requires typing, filing, and to answer phones",
      B: "The job requires typing, filing, and answering phones",
      C: "The job requires to type, filing, and answering phones",
      D: "The job requires typing, to file, and phone answering"
    },
    correct: "B"
  },
  {
    question: "What is the meaning of 'perspicacious'?",
    options: {
      A: "Sweating profusely",
      B: "Having keen insight",
      C: "Being stubborn",
      D: "Acting nervously"
    },
    correct: "B"
  },
  {
    question: "Which sentence contains a split infinitive?",
    options: {
      A: "She decided to quickly run",
      B: "She decided to run quickly",
      C: "She quickly decided to run",
      D: "Quickly, she decided to run"
    },
    correct: "A"
  },
  {
    question: "What is the collective noun for a group of geese on water?",
    options: {
      A: "Flock",
      B: "Gaggle",
      C: "Skein",
      D: "Both B and C are correct"
    },
    correct: "B"
  },
  {
    question: "Which word means 'characterized by joking and good humor'?",
    options: {
      A: "Jocular",
      B: "Judicial",
      C: "Juvenile",
      D: "Jaunty"
    },
    correct: "A"
  },
  {
    question: "What is the correct way to show possession for a plural noun ending in 's'?",
    options: {
      A: "Add 's",
      B: "Add s'",
      C: "Add only an apostrophe",
      D: "Don't add anything"
    },
    correct: "C"
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
  iq:[
  {
    question: "What comes next in the sequence: 2, 6, 12, 20, 30, ?",
    options: {
      A: "40",
      B: "42",
      C: "44",
      D: "46"
    },
    correct: "B"
  },
  {
    question: "If all Bloops are Razzles and all Razzles are Lazzles, then:",
    options: {
      A: "All Bloops are Lazzles",
      B: "All Lazzles are Bloops",
      C: "Some Lazzles are Bloops",
      D: "No Bloops are Lazzles"
    },
    correct: "A"
  },
  {
    question: "What number should replace the question mark: 144, 121, 100, 81, 64, ?",
    options: {
      A: "45",
      B: "49",
      C: "36",
      D: "25"
    },
    correct: "B"
  },
  {
    question: "Which word does NOT belong: TRIANGLE, SQUARE, PENTAGON, CIRCLE, HEXAGON",
    options: {
      A: "Triangle",
      B: "Square", 
      C: "Circle",
      D: "Pentagon"
    },
    correct: "C"
  },
  {
    question: "If it takes 5 machines 5 minutes to make 5 widgets, how long does it take 100 machines to make 100 widgets?",
    options: {
      A: "100 minutes",
      B: "20 minutes",
      C: "5 minutes",
      D: "1 minute"
    },
    correct: "C"
  },
  {
    question: "What comes next: Z, Y, X, W, V, U, ?",
    options: {
      A: "T",
      B: "S",
      C: "R",
      D: "Q"
    },
    correct: "A"
  },
  {
    question: "Complete the analogy: Book is to Reading as Fork is to:",
    options: {
      A: "Eating",
      B: "Kitchen",
      C: "Cooking",
      D: "Food"
    },
    correct: "A"
  },
  {
    question: "What number comes next: 1, 4, 9, 16, 25, 36, ?",
    options: {
      A: "47",
      B: "48",
      C: "49",
      D: "50"
    },
    correct: "C"
  },
  {
    question: "If you rearrange the letters 'CIFAIPC' you get the name of a:",
    options: {
      A: "Country",
      B: "Animal",
      C: "Ocean",
      D: "City"
    },
    correct: "C"
  },
  {
    question: "What comes next in the pattern: 3, 7, 15, 31, 63, ?",
    options: {
      A: "127",
      B: "125",
      C: "124",
      D: "126"
    },
    correct: "A"
  },
  {
    question: "Which number is the odd one out: 16, 25, 36, 49, 64, 81",
    options: {
      A: "16",
      B: "25",
      C: "36",
      D: "None - all are perfect squares"
    },
    correct: "D"
  },
  {
    question: "Complete: CAT is to KITTEN as DOG is to:",
    options: {
      A: "BARK",
      B: "PUPPY",
      C: "BONE",
      D: "TAIL"
    },
    correct: "B"
  },
  {
    question: "What is the next number: 2, 5, 11, 23, 47, ?",
    options: {
      A: "94",
      B: "95",
      C: "96",
      D: "97"
    },
    correct: "B"
  },
  {
    question: "If RED = 18, BLUE = 21, then GREEN = ?",
    options: {
      A: "25",
      B: "27",
      C: "29",
      D: "31"
    },
    correct: "C"
  },
  {
    question: "Which shape comes next in the sequence if the pattern is: Circle, Square, Triangle, Circle, Square, ?",
    options: {
      A: "Circle",
      B: "Square",
      C: "Triangle",
      D: "Pentagon"
    },
    correct: "C"
  },
  {
    question: "A man lives on the 20th floor. Every morning he takes the elevator down to ground floor. When he comes back, he takes the elevator to the 10th floor and walks the rest, except on rainy days. Why?",
    options: {
      A: "He likes exercise",
      B: "The elevator is broken above 10th floor",
      C: "He's too short to reach the 20th floor button without umbrella",
      D: "He meets friends on 10th floor"
    },
    correct: "C"
  },
  {
    question: "What comes next: 1, 1, 2, 3, 5, 8, 13, ?",
    options: {
      A: "19",
      B: "20",
      C: "21",
      D: "22"
    },
    correct: "C"
  },
  {
    question: "If MONDAY is coded as 123456, then DAMON is coded as:",
    options: {
      A: "45213",
      B: "45123",
      C: "54123",
      D: "45231"
    },
    correct: "A"
  },
  {
    question: "Complete the series: AZ, BY, CX, DW, ?",
    options: {
      A: "EV",
      B: "FU",
      C: "GT",
      D: "EW"
    },
    correct: "A"
  },
  {
    question: "What is the missing number: 8, 27, 64, 125, ?",
    options: {
      A: "196",
      B: "216",
      C: "225",
      D: "256"
    },
    correct: "B"
  },
  {
    question: "Which word can be made from the letters of INTEGRAL?",
    options: {
      A: "TRIANGLE",
      B: "RELATING",
      C: "ALERTING",
      D: "All of the above"
    },
    correct: "D"
  },
  {
    question: "What number should replace ?: 7, 14, 28, 35, 70, ?",
    options: {
      A: "105",
      B: "140",
      C: "175",
      D: "210"
    },
    correct: "B"
  },
  {
    question: "If 2 + 3 = 10, 6 + 5 = 66, 1 + 4 = 5, then 3 + 7 = ?",
    options: {
      A: "70",
      B: "21",
      C: "30",
      D: "10"
    },
    correct: "C"
  },
  {
    question: "What comes next: O, T, T, F, F, S, S, E, ?",
    options: {
      A: "N",
      B: "T",
      C: "E",
      D: "I"
    },
    correct: "A"
  },
  {
    question: "Which number doesn't belong: 4, 6, 8, 9, 10, 12, 14, 15",
    options: {
      A: "9",
      B: "15",
      C: "Both A and B",
      D: "None"
    },
    correct: "C"
  },
  {
    question: "Complete: BIRD is to SKY as FISH is to:",
    options: {
      A: "SCALE",
      B: "WATER",
      C: "SWIM",
      D: "OCEAN"
    },
    correct: "B"
  },
  {
    question: "What is the next term: 1, 8, 27, 64, 125, ?",
    options: {
      A: "196",
      B: "216",
      C: "243",
      D: "256"
    },
    correct: "B"
  },
  {
    question: "If you have a 3-gallon jug and a 5-gallon jug, how can you measure exactly 4 gallons?",
    options: {
      A: "Fill 5-gallon, pour into 3-gallon, empty 3-gallon, pour remaining 2 gallons, fill 5-gallon again, pour into 3-gallon until full",
      B: "Fill both jugs completely",
      C: "Use only the 5-gallon jug",
      D: "It's impossible"
    },
    correct: "A"
  },
  {
    question: "What comes next: 100, 96, 88, 72, 40, ?",
    options: {
      A: "8",
      B: "24",
      C: "-24",
      D: "0"
    },
    correct: "C"
  },
  {
    question: "Complete the analogy: COLD is to HOT as NIGHT is to:",
    options: {
      A: "DARK",
      B: "MOON",
      C: "DAY",
      D: "SLEEP"
    },
    correct: "C"
  },
  {
    question: "What is the missing number in: 2, 6, 18, 54, ?",
    options: {
      A: "108",
      B: "162",
      C: "216",
      D: "324"
    },
    correct: "B"
  },
  {
    question: "Which letter comes next: B, D, F, H, J, ?",
    options: {
      A: "K",
      B: "L",
      C: "M",
      D: "N"
    },
    correct: "B"
  },
  {
    question: "If EARTH has 5 letters, MARS has 4 letters, how many letters does JUPITER have?",
    options: {
      A: "6",
      B: "7",
      C: "8",
      D: "9"
    },
    correct: "B"
  },
  {
    question: "What number continues the sequence: 11, 13, 17, 19, 23, ?",
    options: {
      A: "27",
      B: "29",
      C: "31",
      D: "33"
    },
    correct: "B"
  },
  {
    question: "Complete: FINGER is to HAND as LEAF is to:",
    options: {
      A: "GREEN",
      B: "TREE",
      C: "BRANCH",
      D: "FOREST"
    },
    correct: "C"
  },
  {
    question: "What is the next number: 3, 6, 11, 18, 27, ?",
    options: {
      A: "36",
      B: "38",
      C: "40",
      D: "42"
    },
    correct: "B"
  },
  {
    question: "If all roses are flowers, and some flowers are red, then:",
    options: {
      A: "All roses are red",
      B: "Some roses are red",
      C: "Some roses might be red",
      D: "No roses are red"
    },
    correct: "C"
  },
  {
    question: "What comes next: 1, 4, 2, 8, 3, 12, 4, ?",
    options: {
      A: "16",
      B: "5",
      C: "20",
      D: "8"
    },
    correct: "A"
  },
  {
    question: "Which word is the odd one out: OCEAN, RIVER, LAKE, MOUNTAIN, POND",
    options: {
      A: "Ocean",
      B: "River",
      C: "Mountain",
      D: "Pond"
    },
    correct: "C"
  },
  {
    question: "What replaces the ?: 5, 10, 9, 18, 17, 34, 33, ?",
    options: {
      A: "32",
      B: "66",
      C: "68",
      D: "34"
    },
    correct: "B"
  },
  {
    question: "Complete: BOOK is to LIBRARY as TOOL is to:",
    options: {
      A: "HAMMER",
      B: "WORKSHOP",
      C: "BUILD",
      D: "METAL"
    },
    correct: "B"
  },
  {
    question: "What number is missing: 7, 10, 16, 28, ?, 82",
    options: {
      A: "46",
      B: "52",
      C: "58",
      D: "64"
    },
    correct: "B"
  },
  {
    question: "If you fold a piece of paper in half 7 times, how many sections will you have?",
    options: {
      A: "64",
      B: "128",
      C: "256",
      D: "512"
    },
    correct: "B"
  },
  {
    question: "What comes next: M, V, E, M, J, S, U, ?",
    options: {
      A: "N",
      B: "P",
      C: "S",
      D: "T"
    },
    correct: "A"
  },
  {
    question: "Complete the pattern: 2, 3, 5, 7, 11, 13, ?",
    options: {
      A: "15",
      B: "17",
      C: "19",
      D: "21"
    },
    correct: "B"
  },
  {
    question: "If FLOWER is coded as 123456, then LOWER is:",
    options: {
      A: "13456",
      B: "23456",
      C: "12456",
      D: "13256"
    },
    correct: "A"
  },
  {
    question: "What is the next number: 1, 2, 4, 7, 11, 16, ?",
    options: {
      A: "20",
      B: "21",
      C: "22",
      D: "23"
    },
    correct: "C"
  },
  {
    question: "Which shape completes the pattern if: ○ △ □ ○ △ ?",
    options: {
      A: "○",
      B: "△",
      C: "□",
      D: "◇"
    },
    correct: "C"
  },
  {
    question: "What comes next: 144, 121, 100, 81, 64, 49, ?",
    options: {
      A: "25",
      B: "36",
      C: "16",
      D: "9"
    },
    correct: "B"
  },
  {
    question: "Complete: WATER is to ICE as LIQUID is to:",
    options: {
      A: "GAS",
      B: "VAPOR", 
      C: "SOLID",
      D: "STEAM"
    },
    correct: "C"
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
    "question": "If f(x) = x³ - 3x + 2, what is the value of f'(2)?",
    "options": {
      "A": "9",
      "B": "12",
      "C": "15",
      "D": "18"
    },
    "correct": "A"
  },
  {
    "question": "What is the sum of the infinite geometric series 1 + 1/3 + 1/9 + 1/27 + ...?",
    "options": {
      "A": "3/2",
      "B": "2/3",
      "C": "4/3",
      "D": "5/3"
    },
    "correct": "A"
  },
  {
    "question": "If log₂(x) + log₂(x+3) = 3, what is the value of x?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "5"
    },
    "correct": "A"
  },
  {
    "question": "What is the determinant of the matrix [[2, 3], [4, 5]]?",
    "options": {
      "A": "-2",
      "B": "2",
      "C": "-1",
      "D": "1"
    },
    "correct": "A"
  },
  {
    "question": "If sin(θ) = 3/5 and θ is in the second quadrant, what is cos(θ)?",
    "options": {
      "A": "4/5",
      "B": "-4/5",
      "C": "3/4",
      "D": "-3/4"
    },
    "correct": "B"
  },
  {
    "question": "What is the limit of (sin(x)/x) as x approaches 0?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "∞",
      "D": "undefined"
    },
    "correct": "B"
  },
  {
    "question": "If z = 3 + 4i, what is |z|²?",
    "options": {
      "A": "25",
      "B": "7",
      "C": "12",
      "D": "16"
    },
    "correct": "A"
  },
  {
    "question": "What is the coefficient of x⁵ in the expansion of (x + 2)⁷?",
    "options": {
      "A": "84",
      "B": "168",
      "C": "252",
      "D": "336"
    },
    "correct": "A"
  },
  {
    "question": "If f(x) = e^(x²), what is f'(x)?",
    "options": {
      "A": "2xe^(x²)",
      "B": "e^(x²)",
      "C": "x²e^(x²)",
      "D": "2e^(x²)"
    },
    "correct": "A"
  },
  {
    "question": "What is the area under the curve y = x² from x = 0 to x = 2?",
    "options": {
      "A": "8/3",
      "B": "4",
      "C": "6",
      "D": "8"
    },
    "correct": "A"
  },
  {
    "question": "If the roots of x² + bx + c = 0 are 2 and 3, what is the value of b + c?",
    "options": {
      "A": "1",
      "B": "-1",
      "C": "11",
      "D": "-11"
    },
    "correct": "A"
  },
  {
    "question": "What is the value of ∫₀^π sin(x) dx?",
    "options": {
      "A": "2",
      "B": "1",
      "C": "0",
      "D": "π"
    },
    "correct": "A"
  },
  {
    "question": "If A = [[1, 2], [3, 4]], what is A⁻¹?",
    "options": {
      "A": "[[-2, 1], [3/2, -1/2]]",
      "B": "[[4, -2], [-3, 1]]",
      "C": "[[-4, 2], [3, -1]]",
      "D": "[[2, -1], [-3/2, 1/2]]"
    },
    "correct": "A"
  },
  {
    "question": "What is the equation of the tangent line to y = x³ - 2x at x = 1?",
    "options": {
      "A": "y = x - 2",
      "B": "y = 2x - 3",
      "C": "y = x - 1",
      "D": "y = 3x - 4"
    },
    "correct": "A"
  },
  {
    "question": "If vectors u = (2, 3) and v = (1, -2), what is u · v?",
    "options": {
      "A": "-4",
      "B": "4",
      "C": "-2",
      "D": "8"
    },
    "correct": "A"
  },
  {
    "question": "What is the radius of convergence of the power series Σ(n=0 to ∞) xⁿ/n!?",
    "options": {
      "A": "∞",
      "B": "1",
      "C": "e",
      "D": "0"
    },
    "correct": "A"
  },
  {
    "question": "If P(A) = 0.6, P(B) = 0.4, and P(A ∩ B) = 0.2, what is P(A ∪ B)?",
    "options": {
      "A": "0.8",
      "B": "0.6",
      "C": "1.0",
      "D": "0.4"
    },
    "correct": "A"
  },
  {
    "question": "What is the general solution to the differential equation dy/dx = 2y?",
    "options": {
      "A": "y = Ce^(2x)",
      "B": "y = C + 2x",
      "C": "y = 2Ce^x",
      "D": "y = Ce^(x/2)"
    },
    "correct": "A"
  },
  {
    "question": "If f(x) = ln(x), what is the second derivative f''(x)?",
    "options": {
      "A": "-1/x²",
      "B": "1/x²",
      "C": "-1/x",
      "D": "1/x"
    },
    "correct": "A"
  },
  {
    "question": "What is the value of the double integral ∫₀¹∫₀¹ xy dxdy?",
    "options": {
      "A": "1/4",
      "B": "1/2",
      "C": "1/3",
      "D": "1"
    },
    "correct": "A"
  },
  {
    "question": "If the eigenvalues of a 2×2 matrix are 3 and -1, what is the trace of the matrix?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "-1",
      "D": "4"
    },
    "correct": "A"
  },
  {
    "question": "What is the Fourier series coefficient a₀ for f(x) = x on [-π, π]?",
    "options": {
      "A": "0",
      "B": "π",
      "C": "2π",
      "D": "π/2"
    },
    "correct": "A"
  },
  {
    "question": "If z₁ = 1 + i and z₂ = 2 - i, what is z₁z₂?",
    "options": {
      "A": "3 + i",
      "B": "2 + 2i",
      "C": "1 + 3i",
      "D": "3 - i"
    },
    "correct": "A"
  },
  {
    "question": "What is the arc length of the curve y = x^(3/2) from x = 0 to x = 1?",
    "options": {
      "A": "(8√13 - 8)/27",
      "B": "2/3",
      "C": "1",
      "D": "4/3"
    },
    "correct": "A"
  },
  {
    "question": "If the Taylor series of f(x) around x = 0 is x - x³/3! + x⁵/5! - ..., what is f(x)?",
    "options": {
      "A": "sin(x)",
      "B": "cos(x)",
      "C": "e^x",
      "D": "ln(1+x)"
    },
    "correct": "A"
  },
  {
    "question": "What is the value of the improper integral ∫₁^∞ 1/x² dx?",
    "options": {
      "A": "1",
      "B": "∞",
      "C": "2",
      "D": "1/2"
    },
    "correct": "A"
  },
  {
    "question": "If the parametric equations are x = t², y = t³, what is dy/dx in terms of t?",
    "options": {
      "A": "3t/2",
      "B": "2t/3",
      "C": "3t²/2t",
      "D": "t/2"
    },
    "correct": "A"
  },
  {
    "question": "What is the curl of the vector field F = (y, -x, 0)?",
    "options": {
      "A": "(0, 0, -2)",
      "B": "(0, 0, 2)",
      "C": "(2, 0, 0)",
      "D": "(0, 2, 0)"
    },
    "correct": "A"
  },
  {
    "question": "If u and v are orthogonal unit vectors in R³, what is |u + v|?",
    "options": {
      "A": "√2",
      "B": "1",
      "C": "2",
      "D": "0"
    },
    "correct": "A"
  },
  {
    "question": "What is the dimension of the solution space of the homogeneous system Ax = 0 if A is 3×5 with rank 2?",
    "options": {
      "A": "3",
      "B": "2",
      "C": "5",
      "D": "1"
    },
    "correct": "A"
  },
  {
    "question": "If f(x,y) = x²y + y³, what is ∂²f/∂x∂y?",
    "options": {
      "A": "2x",
      "B": "2y",
      "C": "x²",
      "D": "3y²"
    },
    "correct": "A"
  },
  {
    "question": "What is the period of the function f(x) = 3sin(2x) + 4cos(3x)?",
    "options": {
      "A": "2π",
      "B": "π",
      "C": "6π",
      "D": "π/3"
    },
    "correct": "A"
  },
  {
    "question": "If the characteristic polynomial of a matrix is λ² - 5λ + 6, what are the eigenvalues?",
    "options": {
      "A": "2 and 3",
      "B": "1 and 6",
      "C": "-2 and -3",
      "D": "5 and -1"
    },
    "correct": "A"
  },
  {
    "question": "What is the remainder when x⁴ + 3x² + 2 is divided by x² + 1?",
    "options": {
      "A": "4x² + 3",
      "B": "2x + 3",
      "C": "5",
      "D": "3x + 2"
    },
    "correct": "A"
  },
  {
    "question": "If the Laplace transform of f(t) is F(s) = 1/(s² + 4), what is f(t)?",
    "options": {
      "A": "(1/2)sin(2t)",
      "B": "sin(2t)",
      "C": "cos(2t)",
      "D": "e^(-2t)"
    },
    "correct": "A"
  },
  {
    "question": "What is the maximum value of f(x,y) = xy subject to x² + y² = 1?",
    "options": {
      "A": "1/2",
      "B": "1",
      "C": "√2/2",
      "D": "2"
    },
    "correct": "A"
  },
  {
    "question": "If the generating function for a sequence is 1/(1-2x), what is the nth term?",
    "options": {
      "A": "2ⁿ",
      "B": "n!",
      "C": "2n",
      "D": "n²"
    },
    "correct": "A"
  },
  {
    "question": "What is the residue of f(z) = 1/(z²(z-1)) at z = 0?",
    "options": {
      "A": "-1",
      "B": "1",
      "C": "0",
      "D": "2"
    },
    "correct": "A"
  },
  {
    "question": "If the variance of X is 4 and the variance of Y is 9, what is Var(X-Y) if X and Y are independent?",
    "options": {
      "A": "13",
      "B": "5",
      "C": "-5",
      "D": "36"
    },
    "correct": "A"
  },
  {
    "question": "What is the solution to the recurrence relation aₙ = 3aₙ₋₁ - 2aₙ₋₂ with a₀ = 1, a₁ = 2?",
    "options": {
      "A": "aₙ = 2ⁿ",
      "B": "aₙ = 3ⁿ",
      "C": "aₙ = n + 1",
      "D": "aₙ = 2ⁿ + 1"
    },
    "correct": "A"
  },
  {
    "question": "If f(z) = z³ - 2z + 1, how many zeros does f have in |z| < 1?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "0"
    },
    "correct": "A"
  },
  {
    "question": "What is the coefficient of x⁴y³ in the expansion of (x + y + z)⁷?",
    "options": {
      "A": "0",
      "B": "35",
      "C": "105",
      "D": "210"
    },
    "correct": "A"
  },
  {
    "question": "If the Green's function for d²y/dx² + y = 0 with y(0) = y(π) = 0 is G(x,ξ), what is ∫₀^π G(x,ξ)sin(ξ) dξ?",
    "options": {
      "A": "0",
      "B": "π/2",
      "C": "1",
      "D": "sin(x)"
    },
    "correct": "A"
  },
  {
    "question": "What is the chromatic polynomial of a complete graph K₄?",
    "options": {
      "A": "λ(λ-1)(λ-2)(λ-3)",
      "B": "λ⁴ - 6λ³ + 11λ² - 6λ",
      "C": "λ⁴",
      "D": "(λ-1)⁴"
    },
    "correct": "A"
  },
  {
    "question": "If the Hessian matrix of f(x,y) at (0,0) has eigenvalues 2 and -1, what type of critical point is (0,0)?",
    "options": {
      "A": "Saddle point",
      "B": "Local minimum",
      "C": "Local maximum",
      "D": "Cannot determine"
    },
    "correct": "A"
  },
  {
    "question": "What is the order of the differential equation y''' + sin(x)y' + y = e^x?",
    "options": {
      "A": "3",
      "B": "1",
      "C": "2",
      "D": "4"
    },
    "correct": "A"
  },
  {
    "question": "If the moment generating function of X is M(t) = e^(2t + 3t²), what is E[X]?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "6",
      "D": "5"
    },
    "correct": "A"
  },
  {
    "question": "What is the Jordan canonical form of the matrix [[3, 1], [0, 3]]?",
    "options": {
      "A": "[[3, 1], [0, 3]]",
      "B": "[[3, 0], [0, 3]]",
      "C": "[[3, 0], [1, 3]]",
      "D": "[[1, 3], [0, 1]]"
    },
    "correct": "A"
  },
  {
    "question": "If the power series Σ(n=1 to ∞) aₙxⁿ converges for |x| < R, what is the radius of convergence of Σ(n=1 to ∞) naₙxⁿ⁻¹?",
    "options": {
      "A": "R",
      "B": "R/2",
      "C": "2R",
      "D": "1/R"
    },
    "correct": "A"
  },
  {
    "question": "What is the number of ways to arrange the letters in MATHEMATICS?",
    "options": {
      "A": "4,989,600",
      "B": "11!/2!2!",
      "C": "39,916,800",
      "D": "2,494,800"
    },
    "correct": "A"
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
    // Contact tab
    document.getElementById('home-tab').addEventListener('click', (e) => {
      e.preventDefault();
      this.showSection('home');
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

  console.log('Saylani Entry Test Practice initialized successfully!');
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


