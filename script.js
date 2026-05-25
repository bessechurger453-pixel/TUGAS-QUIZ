// ================================================
//   THEME 3: QUIZ BOWL - JAVASCRIPT
// ================================================

// ================================================
// PAGE DETECTION
// ================================================

// When page loads, check if this is quiz.html with a category
window.addEventListener('load', function() {
    if (window.location.pathname.includes('quiz.html') || window.location.href.includes('quiz.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        
        // If category exists, auto-start it
        if (category && quizCategories[category]) {
            selectCategory(category);
        }
    }
});

// Check if register page elements exist
if (document.getElementById('registerForm')) {
    initRegisterPage();
}


// ================================================
// QUIZ DATA - Questions by Category
// ================================================
const quizCategories = {
    biology: {
        title: "🌱 Biology Quiz",
        questions: [
            {
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Mitochondria", "Ribosome", "Vacuole"],
                answer: 1
            },
            {
                question: "What gas do plants absorb during photosynthesis?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                answer: 2
            },
            {
                question: "How many bones does an adult human body have?",
                options: ["196", "206", "216", "186"],
                answer: 1
            },
            {
                question: "Which organ pumps blood throughout the body?",
                options: ["Lungs", "Brain", "Heart", "Liver"],
                answer: 2
            },
            {
                question: "A relation between 2 species with one benefited but one stayed neutral is?",
                options: ["Parasitism", "Amensalisme", "Competition", "Commensalisme"],
                answer: 3
            },
            {
    "question": "Which organelle is known as the powerhouse of the cell because it generates most of the chemical energy?",
    "options": ["Nucleus", "Ribosome", "Mitochondrion", "Golgi Apparatus"],
    "answer": 2
  },
  {
    "question": "What is the primary pigment used by plants to absorb light during photosynthesis?",
    "options": ["Chlorophyll", "Carotenoid", "Hemoglobin", "Melanin"],
    "answer": 0
  },
  {
    "question": "Which molecule carries the genetic instructions used in the growth, development, functioning, and reproduction of all known living organisms?",
    "options": ["RNA", "DNA", "Protein", "Lipid"],
    "answer": 1
  },
  {
    "question": "What is the process of cell division that results in four daughter cells each with half the number of chromosomes of the parent cell?",
    "options": ["Mitosis", "Meiosis", "Binary Fission", "Cytokinesis"],
    "answer": 1
  },
  {
    "question": "Which blood cells are primarily responsible for defending the body against pathogens and infections?",
    "options": ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"],
    "answer": 1
  }
        ]
    },
    chemistry: {
        title: "⚗️ Chemistry Quiz",
        questions: [
            {
                question: "What is the chemical symbol for water?",
                options: ["WO", "H2O", "HO2", "W2O"],
                answer: 1
            },
            {
                question: "Which element is a Noble Gas?",
                options: ["Oxygen", "Nitrogen", "Neon", "Carbon"],
                answer: 2
            },
            {
                question: "What is the most abundant element in the universe?",
                options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon"],
                answer: 1
            },
            {
                question: "What is the pH of pure water?",
                options: ["5", "7", "9", "11"],
                answer: 1
            },
            {
                question: "What does HCl stand for?",
                options: ["Hydrogen Chloride", "Helium Chlorine", "Hydro Compound", "Hydrogen Carbon"],
                answer: 0
            },
            {
                question: "Which of the following elements has the highest electronegativity?",
                options: ["Sodium (Na)", "Chlorine (Cl)", "Oxygen (O)", "Fluorine (F)"],
                answer: 3
            },
            {
                question: "What is the molecular geometry of a carbon dioxide ($\text{CO}_2$) molecule?",
                options: ["Linear", "Bent", "Trigonal Planar", "Tetrahedral"],
                answer: 0
            },
            {
                question: "According to the Brønsted-Lowry definition, what is a substance that accepts a proton ($\text{H}^+$)?",
                options: ["Acid", "Base", "Salt", "Neutral"],
                answer: 1
            },
            {
                question: "If a sample of gas occupies 2.0 liters at 1.0 atm of pressure, what will its volume be if the pressure is increased to 4.0 atm at a constant temperature?",
                options: ["0.5 liters", "1.0 liter", "2.0 liters", "4.0 liters"],
                answer: 0
            },
            {
                question: "Which type of chemical bond involves the sharing of electron pairs between atoms?",
                options: ["Ionic Bond", "Covalent Bond", "Metallic Bond", "Hydrogen Bond"],
                answer: 1
            }
        ]
    },
    physics: {
        title: "⚡ Physics Quiz",
        questions: [
            {
                question: "What is the SI unit of force?",
                options: ["Kilogram", "Newton", "Joule", "Watt"],
                answer: 1
            },
            {
                question: "What is the speed of light?",
                options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
                answer: 0
            },
            {
                question: "What planet is closest to the Sun?",
                options: ["Venus", "Earth", "Mars", "Mercury"],
                answer: 3
            },
            {
                question: "What is the SI unit of energy?",
                options: ["Watt", "Newton", "Joule", "Kilogram"],
                answer: 2
            },
            {
                question: "What is the acceleration due to gravity on Earth?",
                options: ["5.8 m/s²", "9.8 m/s²", "12.5 m/s²", "15.2 m/s²"],
                answer: 1
            },
            {
                question: "Which type of chemical bond involves the sharing of electron pairs between atoms?",
                options: ["Ionic Bond", "Covalent Bond", "Metallic Bond", "Hydrogen Bond"],
                answer: 1
            },
            {
    "question": "Which of the following laws states that for every action, there is an equal and opposite reaction?",
    "options": ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Universal Gravitation"],
    "answer": 2
  },
  {
    "question": "What is the SI unit of electric current?",
    "options": ["Volt", "Ampere", "Ohm", "Watt"],
    "answer": 1
  },
  {
    "question": "What term describes the tendency of an object to resist any change in its state of motion?",
    "options": ["Inertia", "Velocity", "Acceleration", "Momentum"],
    "answer": 0
  },
  {
    "question": "Which type of electromagnetic radiation has the shortest wavelength?",
    "options": ["Infrared waves", "Radio waves", "Ultraviolet rays", "Gamma rays"],
    "answer": 3
  }
        
        ]
    }
};

let questions = [];


// ================================================
// QUIZ PAGE - Variables & Setup
// ================================================
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;
let answered = false;
let selectedCategory = null;




// ================================================
// SELECT CATEGORY
// ================================================
function selectCategory(category) {
    selectedCategory = category;
    questions = quizCategories[category].questions;
    
    // Hide category card (on quiz.html)
    const categoryCard = document.getElementById('categoryCard');
    if (categoryCard) {
        categoryCard.classList.add('d-none');
    }
    
    // Show quiz section if it exists (on homepage)
    const quizSection = document.getElementById('quizSection');
    if (quizSection) {
        quizSection.classList.remove('d-none');
    }
    
    // Show quiz elements
    document.getElementById('quizHeader').classList.remove('d-none');
    document.getElementById('progressBar').classList.remove('d-none');
    document.getElementById('quizCard').classList.remove('d-none');
    
    // Update title and total questions
    document.getElementById('quizTitle').textContent = quizCategories[category].title;
    document.getElementById('totalQuestions').textContent = questions.length;
    
    // Reset quiz and load first question
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}


// ================================================
// LOAD QUESTION
// ================================================
function loadQuestion() {

    // TODO: Reset state
    answered = false;
    timeLeft = 30;
    clearInterval(timer);

    // TODO: Get the current question object
    const q = questions[currentQuestion];

    // TODO: Update the question number display
    document.getElementById('questionNumber').textContent = currentQuestion + 1;

    // TODO: Update question text
    document.getElementById('questionText').textContent = q.question;

    // TODO: Update progress bar width
    const progress = ((currentQuestion) / questions.length) * 100;
    document.getElementById('quizProgress').style.width = progress + '%';

    // TODO: Clear previous options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    // TODO: Create a button for each answer option
    q.options.forEach(function(option, index) {
        const btn = document.createElement('button');
        btn.className = 'btn option-btn';
        btn.textContent = option;

        // TODO: Add click event to check answer
        btn.addEventListener('click', function() {
            checkAnswer(index);
        });

        optionsContainer.appendChild(btn);
    });

    // TODO: Start the timer
    startTimer();
}


// ================================================
// TIMER
// ================================================
function startTimer() {
    // Update display immediately
    document.getElementById('timerDisplay').textContent = '⏱️ ' + timeLeft + 's';

    // TODO: Use setInterval to count down every second
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('timerDisplay').textContent = '⏱️ ' + timeLeft + 's';

        // TODO: If time runs out, move to next question
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (!answered) {
                // Time's up — highlight correct answer in green
                highlightCorrect();
                setTimeout(nextQuestion, 1500);
            }
        }

        // ★ STUDENT TASK: Make the timer turn red when below 10 seconds!
        if (timeLeft <= 10) {
            document.getElementById('timerDisplay').classList.add('text-danger');
        } else {
            document.getElementById('timerDisplay').classList.remove('text-danger');
        }

    }, 1000);
}


// ================================================
// CHECK ANSWER
// ================================================
function checkAnswer(selectedIndex) {
    // Prevent answering twice
    if (answered) return;
    answered = true;
    clearInterval(timer);

    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');

    // TODO: Check if selected answer is correct
    if (selectedIndex === q.answer) {
        // TODO: Correct - add green class and increase score
        buttons[selectedIndex].classList.add('correct');
        score++;
    } else {
        // TODO: Wrong - add red to selected, green to correct
        buttons[selectedIndex].classList.add('wrong');
        buttons[q.answer].classList.add('correct');
    }

    // TODO: Wait 1.5 seconds then go to next question
    setTimeout(nextQuestion, 1500);
}


// ================================================
// HIGHLIGHT CORRECT ANSWER (when time runs out)
// ================================================
function highlightCorrect() {
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    if (buttons[q.answer]) {
        buttons[q.answer].classList.add('correct');
    }
}


// ================================================
// NEXT QUESTION
// ================================================
function nextQuestion() {
    currentQuestion++;

    // TODO: Check if quiz is finished
    if (currentQuestion >= questions.length) {
        showResults();
    } else {
        loadQuestion();
    }
}


// ================================================
// SHOW RESULTS
// ================================================
function showResults() {
    // Hide quiz elements, show result card
    document.getElementById('quizHeader').classList.add('d-none');
    document.getElementById('progressBar').classList.add('d-none');
    document.getElementById('quizCard').classList.add('d-none');
    document.getElementById('resultCard').classList.remove('d-none');

    // TODO: Display the final score
    document.getElementById('finalScore').textContent = score + '/' + questions.length;

    // TODO: Show different messages based on score
    const percentage = (score / questions.length) * 100;

    if (percentage === 100) {
        document.getElementById('resultIcon').textContent = '🏆';
        document.getElementById('resultTitle').textContent = 'Perfect Score!';
        document.getElementById('resultMessage').textContent = 'Outstanding! You got everything right!';
    } else if (percentage >= 60) {
        document.getElementById('resultIcon').textContent = '😊';
        document.getElementById('resultTitle').textContent = 'Good Job!';
        document.getElementById('resultMessage').textContent = 'Keep practicing to get a perfect score!';
    } else {
        document.getElementById('resultIcon').textContent = '📚';
        document.getElementById('resultTitle').textContent = 'Keep Studying!';
        document.getElementById('resultMessage').textContent = 'Review your notes and try again!';
    }

    console.log('Quiz complete! Score:', score + '/' + questions.length);
}


// ================================================
// RESTART QUIZ
// ================================================
function restartQuiz() {
    // Reset all variables
    currentQuestion = 0;
    score = 0;
    answered = false;
    clearInterval(timer);

    // Hide quiz and results
    document.getElementById('quizHeader').classList.add('d-none');
    document.getElementById('progressBar').classList.add('d-none');
    document.getElementById('quizCard').classList.add('d-none');
    document.getElementById('resultCard').classList.add('d-none');
    
    // Show category card (on quiz.html)
    const categoryCard = document.getElementById('categoryCard');
    if (categoryCard) {
        categoryCard.classList.remove('d-none');
    }
    
    selectedCategory = null;
}


// ================================================
// REGISTER PAGE - Form Validation
// ================================================
function initRegisterPage() {

    const registerForm = document.getElementById('registerForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('fullName').value.trim();
            const schoolId = document.getElementById('schoolId').value.trim();
            const grade = document.getElementById('grade').value.trim();
            const category = document.getElementById('category').value;

            let isValid = true;

            // TODO: Validate each field
            [
                { id: 'fullName', value: name },
                { id: 'schoolId', value: schoolId },
                { id: 'grade', value: grade },
                { id: 'category', value: category }
            ].forEach(function(field) {
                if (field.value === '') {
                    document.getElementById(field.id).classList.add('is-invalid');
                    isValid = false;
                } else {
                    document.getElementById(field.id).classList.remove('is-invalid');
                    document.getElementById(field.id).classList.add('is-valid');
                }
            });

            if (isValid) {
                document.getElementById('successAlert').classList.remove('d-none');
                registerForm.reset();
                registerForm.querySelectorAll('.form-control, .form-select').forEach(function(el) {
                    el.classList.remove('is-valid', 'is-invalid');
                });
                window.scrollTo(0, 0);

                // ★ STUDENT TASK: Log the registered student info to console
                console.log('Registered:', { name, schoolId, grade, category });
            }
        });
    }
}
