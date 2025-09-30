// Global variables
let currentSubject = '';
let questions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.subject-card, .stat-box, .faq-item, .content-card');
    elementsToAnimate.forEach(el => observer.observe(el));

    // Initialize test if on mcqs page
    if (window.location.pathname.includes('mcqs.html')) {
        initializeTest();
    }
});

// Start test function
function startTest(subject) {
    currentSubject = subject;
    localStorage.setItem('currentSubject', subject);
    window.location.href = 'mcqs.html';
}

// Initialize test
async function initializeTest() {
    const subject = localStorage.getItem('currentSubject');
    if (!subject) {
        window.location.href = 'index.html';
        return;
    }

    currentSubject = subject;

    // Update subject title
    const subjectTitle = document.getElementById('subjectTitle');
    if (subjectTitle) {
        subjectTitle.textContent = formatSubjectName(subject) + ' Test';
    }

    // Load questions from JSON
    try {
        const response = await fetch('mcqs.json');
        const data = await response.json();

        if (data[subject]) {
            questions = data[subject];
            userAnswers = new Array(questions.length).fill(null);
            currentQuestionIndex = 0;

            // Update total questions
            const totalQuestionsEl = document.getElementById('totalQuestions');
            if (totalQuestionsEl) {
                totalQuestionsEl.textContent = questions.length;
            }

            displayQuestion();
        } else {
            alert('No questions available for this subject.');
            window.location.href = 'index.html';
        }
    } catch (error) {
        console.error('Error loading questions:', error);
        alert('Error loading questions. Please try again.');
        window.location.href = 'index.html';
    }
}

// Format subject name
function formatSubjectName(subject) {
    const names = {
        'english': 'English',
        'islamiat': 'Islamiat',
        'math': 'Mathematics',
        'iq': 'IQ',
        'computer': 'Computer',
        'general': 'General Knowledge'
    };
    return names[subject] || subject;
}

// Display current question
function displayQuestion() {
    const question = questions[currentQuestionIndex];

    // Update question text
    const questionText = document.getElementById('questionText');
    if (questionText) {
        questionText.textContent = `Q${currentQuestionIndex + 1}. ${question.question}`;
    }

    // Update current question number
    const currentQuestionEl = document.getElementById('currentQuestion');
    if (currentQuestionEl) {
        currentQuestionEl.textContent = currentQuestionIndex + 1;
    }

    // Update progress bar
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = progress + '%';
    }

    // Display options
    const optionsList = document.getElementById('optionsList');
    if (optionsList) {
        optionsList.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            if (userAnswers[currentQuestionIndex] === index) {
                optionDiv.classList.add('selected');
            }
            optionDiv.innerHTML = `
                <input type="radio" name="answer" id="option${index}" value="${index}" 
                    ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}>
                <label for="option${index}">${option}</label>
            `;

            optionDiv.addEventListener('click', function() {
                selectOption(index);
            });

            optionsList.appendChild(optionDiv);
        });
    }

    // Update navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) {
        prevBtn.disabled = currentQuestionIndex === 0;
    }

    if (nextBtn) {
        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.textContent = 'Submit';
            nextBtn.classList.add('btn-submit');
        } else {
            nextBtn.textContent = 'Next';
            nextBtn.classList.remove('btn-submit');
        }
    }
}

// Select option
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;

    // Update visual selection
    const options = document.querySelectorAll('.option');
    options.forEach((opt, idx) => {
        if (idx === optionIndex) {
            opt.classList.add('selected');
            opt.querySelector('input').checked = true;
        } else {
            opt.classList.remove('selected');
            opt.querySelector('input').checked = false;
        }
    });
}

// Previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Next question
function nextQuestion() {
    if (currentQuestionIndex === questions.length - 1) {
        submitTest();
    } else {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Submit test
function submitTest() {
    // Calculate score
    score = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });

    // Hide MCQ container
    const mcqContainer = document.getElementById('mcqContainer');
    if (mcqContainer) {
        mcqContainer.classList.add('hidden');
    }

    // Show result container
    const resultContainer = document.getElementById('resultContainer');
    if (resultContainer) {
        resultContainer.classList.remove('hidden');
        displayResults();
    }
}

// Display results
function displayResults() {
    const percentage = Math.round((score / questions.length) * 100);

    // Update score display
    document.getElementById('scorePercentage').textContent = percentage;
    document.getElementById('correctCount').textContent = score;
    document.getElementById('wrongCount').textContent = questions.length - score;
    document.getElementById('totalCount').textContent = questions.length;

    // Display detailed answers
    const answersReview = document.getElementById('answersReview');
    answersReview.innerHTML = '<h3>Review Your Answers</h3>';

    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;

        reviewItem.innerHTML = `
            <div class="review-header">
                <span class="review-number">Question ${index + 1}</span>
                <span class="review-status">${isCorrect ? '✓ Correct' : '✗ Wrong'}</span>
            </div>
            <p class="review-question">${question.question}</p>
            <div class="review-answers">
                ${userAnswer !== null ? `
                    <p><strong>Your answer:</strong> ${question.options[userAnswer]}</p>
                ` : `
                    <p><strong>Your answer:</strong> Not answered</p>
                `}
                ${!isCorrect ? `
                    <p><strong>Correct answer:</strong> ${question.options[question.correct]}</p>
                ` : ''}
            </div>
            <div class="review-explanation">
                <p><strong>Explanation:</strong> ${question.explanation}</p>
            </div>
        `;

        answersReview.appendChild(reviewItem);
    });
}

// Restart test
function restartTest() {
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    score = 0;

    // Hide result container
    const resultContainer = document.getElementById('resultContainer');
    if (resultContainer) {
        resultContainer.classList.add('hidden');
    }

    // Show MCQ container
    const mcqContainer = document.getElementById('mcqContainer');
    if (mcqContainer) {
        mcqContainer.classList.remove('hidden');
    }

    displayQuestion();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Go home
function goHome() {
    localStorage.removeItem('currentSubject');
    window.location.href = 'index.html';
}
