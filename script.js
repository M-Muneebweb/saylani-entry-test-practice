// ==================== Mobile Menu Toggle ====================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks && !e.target.closest('.nav-wrapper')) {
        navLinks.classList.remove('active');
    }
});

// ==================== FAQ Accordion ====================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Toggle current item
        item.classList.toggle('active');
    });
});

// ==================== Quiz Functionality ====================
let currentSubject = '';
let questions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;

// Start Test Function (called from index.html)
function startTest(subject) {
    localStorage.setItem('selectedSubject', subject);
    window.location.href = 'mcqs.html';
}

// Go Back Function
function goBack() {
    window.location.href = 'index.html';
}

// Go to Home Function
function goToHome() {
    window.location.href = 'index.html';
}

// Retry Quiz Function
function retryQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    loadQuiz();
}

// Load Quiz on mcqs.html page
if (window.location.pathname.includes('mcqs.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        currentSubject = localStorage.getItem('selectedSubject');
        if (!currentSubject) {
            window.location.href = 'index.html';
            return;
        }
        loadQuestions();
    });
}

// Load Questions from JSON file
async function loadQuestions() {
    try {
        const response = await fetch('mcqs.json');
        const data = await response.json();
        
        // Get questions for selected subject
        questions = data[currentSubject] || [];
        
        if (questions.length === 0) {
            document.getElementById('quizContent').innerHTML = `
                <div style="text-align: center; padding: 60px 20px;">
                    <i class="fas fa-exclamation-circle" style="font-size: 4rem; color: #ef4444; margin-bottom: 20px;"></i>
                    <h3>No questions available for this subject</h3>
                    <button onclick="goBack()" style="margin-top: 20px;" class="subject-btn">
                        <i class="fas fa-arrow-left"></i> Go Back
                    </button>
                </div>
            `;
            return;
        }
        
        loadQuiz();
    } catch (error) {
        console.error('Error loading questions:', error);
        document.getElementById('quizContent').innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <i class="fas fa-exclamation-circle" style="font-size: 4rem; color: #ef4444; margin-bottom: 20px;"></i>
                <h3>Error loading questions</h3>
                <p>Please make sure mcqs.json file exists in the same directory.</p>
                <button onclick="goBack()" style="margin-top: 20px;" class="subject-btn">
                    <i class="fas fa-arrow-left"></i> Go Back
                </button>
            </div>
        `;
    }
}

// Load Quiz Interface
function loadQuiz() {
    // Update subject name
    const subjectNames = {
        'english': 'English',
        'islamiat': 'Islamiat',
        'math': 'Mathematics',
        'iq': 'IQ Test',
        'computer': 'Computer',
        'general_knowledge': 'General Knowledge'
    };
    
    document.getElementById('quizSubject').textContent = subjectNames[currentSubject] || currentSubject;
    document.getElementById('totalQuestions').textContent = questions.length;
    
    // Hide loading, show question box
    document.getElementById('quizContent').style.display = 'none';
    document.getElementById('questionBox').style.display = 'block';
    document.getElementById('resultsBox').style.display = 'none';
    
    displayQuestion();
}

// Display Current Question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update progress
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    
    // Display question
    document.getElementById('questionText').textContent = `${currentQuestionIndex + 1}. ${question.question}`;
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });
}

// Select Option
function selectOption(selectedIndex) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        btn.classList.remove('selected');
        if (index === selectedIndex) {
            btn.classList.add('selected');
        }
    });
    
    userAnswers[currentQuestionIndex] = selectedIndex;
}

// Next Question
function nextQuestion() {
    // if (userAnswers[currentQuestionIndex] === undefined) {
    //     alert('Please select an answer before proceeding.');
    //     return;
    // }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    // Calculate score
    score = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });
    
    const percentage = Math.round((score / questions.length) * 100);
    const incorrectCount = questions.length - score;
    
    // Hide question box, show results
    document.getElementById('questionBox').style.display = 'none';
    document.getElementById('resultsBox').style.display = 'block';
    
    // Update score display
    document.getElementById('scorePercentage').textContent = percentage + '%';
    document.getElementById('scoreFraction').textContent = `${score}/${questions.length}`;
    document.getElementById('correctCount').textContent = score;
    document.getElementById('incorrectCount').textContent = incorrectCount;
    
    // Animate score circle
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (percentage / 100) * circumference;
    document.getElementById('scoreCircle').style.strokeDashoffset = offset;
    
    // Display detailed results
    displayDetailedResults();
}

// Display Detailed Results with Explanations
function displayDetailedResults() {
    const container = document.getElementById('detailedResultsContainer');
    container.innerHTML = '';
    
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        const resultItem = document.createElement('div');
        resultItem.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        resultItem.innerHTML = `
            <div class="result-question">
                ${index + 1}. ${question.question}
            </div>
            <div class="result-answer">
                <strong>Your answer:</strong> ${question.options[userAnswer] || 'Not answered'}
                ${isCorrect ? '<i class="fas fa-check-circle" style="color: #10b981; margin-left: 8px;"></i>' : '<i class="fas fa-times-circle" style="color: #ef4444; margin-left: 8px;"></i>'}
            </div>
            ${!isCorrect ? `
                <div class="result-answer">
                    <strong>Correct answer:</strong> ${question.options[question.correct]}
                    <i class="fas fa-check-circle" style="color: #10b981; margin-left: 8px;"></i>
                </div>
            ` : ''}
            <div class="result-explanation">
                <strong>Explanation:</strong> ${question.explanation}
            </div>
        `;
        
        container.appendChild(resultItem);
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .subject-card');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});
