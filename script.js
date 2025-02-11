const questions = {
    CN: [
        { q: 'What is the full form of CN?', options: ['Computer Network', 'Control Network', 'Common Network', 'Circuit Network'], answer: 0 },
        { q: 'Which protocol is used to send email?', options: ['SMTP', 'HTTP', 'FTP', 'IMAP'], answer: 0 },
        { q: 'Which device forwards data packets between computer networks?', options: ['Router', 'Switch', 'Hub', 'Repeater'], answer: 0 },
        { q: 'What does TCP stand for?', options: ['Transmission Control Protocol', 'Transmission Control Packet', 'Total Control Protocol', 'Transfer Control Protocol'], answer: 0 },
        { q: 'Which layer of the OSI model is responsible for routing?', options: ['Network', 'Data Link', 'Transport', 'Application'], answer: 0 },
        { q: 'Which protocol is used for secure communication over the internet?', options: ['HTTPS', 'HTTP', 'FTP', 'SMTP'], answer: 0 },
        { q: 'What does IP stand for?', options: ['Internet Protocol', 'Internal Protocol', 'Intermediate Protocol', 'International Protocol'], answer: 0 },
        { q: 'Which device connects multiple networks together?', options: ['Router', 'Switch', 'Hub', 'Repeater'], answer: 0 },
        { q: 'Which layer of the OSI model provides error-free communication?', options: ['Data Link', 'Physical', 'Network', 'Transport'], answer: 3 },
        { q: 'What does LAN stand for?', options: ['Local Area Network', 'Large Area Network', 'Line Area Network', 'Loop Area Network'], answer: 0 }
    ],
    OS: [
        { q: 'What is an Operating System?', options: ['Software', 'Hardware', 'Firmware', 'Network'], answer: 0 },
        { q: 'Which of the following is not an operating system?', options: ['Linux', 'Windows', 'Oracle', 'MacOS'], answer: 2 },
        { q: 'Which OS is known for its command line interface?', options: ['MS-DOS', 'Windows', 'Linux', 'MacOS'], answer: 0 },
        { q: 'Which OS is used in smartphones?', options: ['Android', 'Windows', 'Linux', 'Unix'], answer: 0 },
        { q: 'What is the main function of an OS?', options: ['Manage hardware resources', 'Provide entertainment', 'Run antivirus', 'Control the internet'], answer: 0 },
        { q: 'Which part of the OS is responsible for managing memory?', options: ['Memory Manager', 'File System', 'Scheduler', 'Kernel'], answer: 0 },
        { q: 'What does GUI stand for?', options: ['Graphical User Interface', 'Graphical Unit Interface', 'General User Interface', 'Generic User Interface'], answer: 0 },
        { q: 'Which is a Linux distribution?', options: ['Ubuntu', 'Windows', 'MacOS', 'iOS'], answer: 0 },
        { q: 'What does multitasking mean in OS?', options: ['Running multiple tasks simultaneously', 'Running one task at a time', 'Running without user interaction', 'Running with high speed'], answer: 0 },
        { q: 'Which OS feature ensures users do not interfere with each other’s tasks?', options: ['Security', 'Multitasking', 'Multithreading', 'Networking'], answer: 0 }
    ],
    DBMS: [
        { q: 'What does DBMS stand for?', options: ['Database Management System', 'Database Management Software', 'Data Backup Management System', 'Data Business Management System'], answer: 0 },
        { q: 'Which of the following is not a type of database?', options: ['Relational', 'NoSQL', 'Hierarchical', 'DNS'], answer: 3 },
        { q: 'Which language is used to query databases?', options: ['SQL', 'HTML', 'CSS', 'XML'], answer: 0 },
        { q: 'Which of the following is a NoSQL database?', options: ['MongoDB', 'MySQL', 'Oracle', 'PostgreSQL'], answer: 0 },
        { q: 'What is the purpose of a primary key in a database?', options: ['Uniquely identify a record', 'Encrypt data', 'Join tables', 'Store data'], answer: 0 },
        { q: 'Which command is used to retrieve data from a database?', options: ['SELECT', 'INSERT', 'DELETE', 'UPDATE'], answer: 0 },
        { q: 'What is a foreign key?', options: ['A key used to link two tables', 'A unique identifier', 'A special character in a key', 'A primary key'], answer: 0 },
        { q: 'Which operation is not part of CRUD?', options: ['Update', 'Delete', 'Create', 'Run'], answer: 3 },
        { q: 'Which DBMS is developed by Microsoft?', options: ['SQL Server', 'MySQL', 'PostgreSQL', 'Oracle'], answer: 0 },
        { q: 'What does ACID stand for in DBMS?', options: ['Atomicity, Consistency, Isolation, Durability', 'Accuracy, Consistency, Integration, Durability', 'Atomicity, Currency, Isolation, Data', 'Accuracy, Currency, Isolation, Durability'], answer: 0 }
    ],
    OOPS: [
        { q: 'What does OOPS stand for?', options: ['Object-Oriented Programming System', 'Object-Oriented Programming Structure', 'Object-Oriented Process System', 'Object-Oriented Protocol System'], answer: 0 },
        { q: 'Which of the following is not a feature of OOPS?', options: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Compilation'], answer: 3 },
        { q: 'What is encapsulation?', options: ['Wrapping data and functions together', 'Inheritance', 'Polymorphism', 'Hiding data'], answer: 0 },
        { q: 'What is inheritance?', options: ['Acquiring properties of another class', 'Polymorphism', 'Encapsulation', 'Overloading'], answer: 0 },
        { q: 'What is polymorphism?', options: ['Many forms', 'Encapsulation', 'Inheritance', 'Overriding'], answer: 0 },
        { q: 'What is an object in OOPS?', options: ['Instance of a class', 'A function', 'A variable', 'An operator'], answer: 0 },
        { q: 'What is a class in OOPS?', options: ['Blueprint for objects', 'An object', 'A variable', 'A function'], answer: 0 },
        { q: 'Which of the following is a type of inheritance?', options: ['Single', 'Double', 'Triple', 'Multiple'], answer: 0 },
        { q: 'What is method overloading?', options: ['Methods with same name but different parameters', 'Methods with same name and same parameters', 'Methods with different names', 'None of the above'], answer: 0 },
        { q: 'What is method overriding?', options: ['Method in child class with same name and parameters as in parent class', 'Method in child class with different name', 'Method in parent class with different name', 'None of the above'], answer: 0 }
    ],
    DSA: [
        { q: 'What is an Algorithm?', options: ['A step-by-step procedure', 'A coding language', 'A hardware device', 'A software application'], answer: 0 },
        { q: 'Which of the following is a linear data structure?', options: ['Array', 'Binary Tree', 'Graph', 'Hash Table'], answer: 0 },
        { q: 'What is the worst-case time complexity of binary search?', options: ['O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)'], answer: 0 },
        { q: 'Which data structure uses LIFO?', options: ['Stack', 'Queue', 'Tree', 'Graph'], answer: 0 },
        { q: 'Which sorting algorithm has the best average case time complexity?', options: ['Merge Sort', 'Bubble Sort', 'Insertion Sort', 'Selection Sort'], answer: 0 },
        { q: 'What does DFS stand for?', options: ['Depth First Search', 'Depth Find Search', 'Depth Fast Search', 'Depth First Sort'], answer: 0 },
        { q: 'Which of the following is not a divide and conquer algorithm?', options: ['Quick Sort', 'Merge Sort', 'Bubble Sort', 'Binary Search'], answer: 2 },
        { q: 'Which data structure is used in breadth-first search?', options: ['Queue', 'Stack', 'Heap', 'Array'], answer: 0 },
        { q: 'What is a linked list?', options: ['A linear collection of data elements', 'A hierarchical collection of data elements', 'A set of pointers', 'None of the above'], answer: 0 },
        { q: 'What is the best-case time complexity of bubble sort?', options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(1)'], answer: 0 }
    ],
    Programming: [
        { q: 'Which language is known as the mother of all languages?', options: ['C', 'Python', 'Java', 'Fortran'], answer: 3 },
        { q: 'Which language is used for web development?', options: ['JavaScript', 'C', 'Python', 'Java'], answer: 0 },
        { q: 'Which language is used for scientific computing?', options: ['Python', 'JavaScript', 'Java', 'HTML'], answer: 0 },
        { q: 'Which of the following is not a programming language?', options: ['HTML', 'Python', 'Java', 'C++'], answer: 0 },
        { q: 'What does IDE stand for?', options: ['Integrated Development Environment', 'Integrated Design Environment', 'Internal Development Environment', 'Internal Design Environment'], answer: 0 },
        { q: 'Which language is primarily used for Android app development?', options: ['Java', 'Python', 'HTML', 'C'], answer: 0 },
        { q: 'Which language is known for its simplicity?', options: ['Python', 'C++', 'Java', 'Assembly'], answer: 0 },
        { q: 'Which of the following is a compiled language?', options: ['C', 'Python', 'JavaScript', 'HTML'], answer: 0 },
        { q: 'What is the main advantage of using high-level programming languages?', options: ['Easier to read and write', 'Faster execution', 'Direct hardware interaction', 'Lower memory usage'], answer: 0 },
        { q: 'Which of the following is a low-level programming language?', options: ['Assembly', 'Python', 'JavaScript', 'Java'], answer: 0 }
    ]
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(category) {
    currentQuiz = questions[category];
    currentQuestionIndex = 0;
    score = 0;
    document.querySelector('.categories').style.display = 'none';
    document.querySelector('.quiz-section').style.display = 'block';
    document.querySelector('#resultSection').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    document.querySelector('#question').innerText = question.q;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.innerText = question.options[index];
    });
}

function selectOption(index) {
    if (index === currentQuiz[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector('#questionContainer').style.display = 'none';
    document.querySelector('#resultSection').style.display = 'block';
    document.querySelector('#result').innerText = `You scored ${score} out of ${currentQuiz.length}`;
}

function retryQuiz() {
    document.querySelector('#questionContainer').style.display = 'block';
    document.querySelector('#resultSection').style.display = 'none';
    document.querySelector('.categories').style.display = 'flex';
    document.querySelector('.quiz-section').style.display = 'none';
}
