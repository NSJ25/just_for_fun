document.addEventListener("DOMContentLoaded", function () {
    const totalQuestions = 52;
    let correctAnswers = 0;
    let questionsOrder = [];

    // Générer un ordre aléatoire pour les questions
    for (let i = 1; i <= totalQuestions; i++) {
        questionsOrder.push(i);
    }
    questionsOrder = questionsOrder.sort(() => Math.random() - 0.5);

    // Afficher les questions dans l'ordre aléatoire
    const quizContainer = document.getElementById('quizForm');
    questionsOrder.forEach(questionNumber => {
        const questionDiv = document.getElementById(`Question${questionNumber}`);
        if (questionDiv) {
            quizContainer.appendChild(questionDiv);
        }
    });

    function checkReponse(questionNumber) {
        const question = document.getElementById(`Question${questionNumber}`);
        const inputs = question.querySelectorAll('input[type="radio"]');
        let feedback = document.getElementById(`feedback${questionNumber}`);
        let correct = false;

        inputs.forEach(input => {
            if (input.checked) {
                if (input.classList.contains("vrai")) {
                    feedback.innerHTML = "<span style='color: green;'>Correct</span>";
                    correct = true;
                    correctAnswers++;
                } else {
                    feedback.innerHTML = "<span style='color: red;'>Incorrect</span>";
                }
            }
        });

        // Disable the "Vérifie" button and show the "Suivant" button
        question.querySelector('button[onclick^="checkReponse"]').style.display = "none";
        question.querySelector(`button#nextBouton${questionNumber}`).style.display = "inline-block";

        updateSuccessRate();

        // Ajouter une animation de feedback
        feedback.classList.add('feedback-animation');

        // Ajouter un son de feedback
        const audio = new Audio(correct ? 'sounds/correct.mp3' : 'sounds/incorrect.mp3');
        audio.play();
    }

    function prochaineQuestion(questionNumber) {
        document.getElementById(`Question${questionNumber}`).style.display = "none";
        const nextQuestionIndex = questionsOrder.indexOf(questionNumber) + 1;
        if (nextQuestionIndex < totalQuestions) {
            const nextQuestionNumber = questionsOrder[nextQuestionIndex];
            document.getElementById(`Question${nextQuestionNumber}`).style.display = "block";
            updateProgressBar(nextQuestionIndex + 1, totalQuestions);
        }
    }

    function updateProgressBar(questionNumber, totalQuestions) {
        const progressBar = document.getElementById('progressBar');
        const progress = (questionNumber / totalQuestions) * 100;
        progressBar.style.width = progress + '%';
        progressBar.textContent = Math.round(progress) + '%';
    }

    function updateSuccessRate() {
        const successRate = document.getElementById('successRate');
        const rate = (correctAnswers / totalQuestions) * 100;
        successRate.textContent = Math.round(rate) + '%';
    }

    function calculerResultat() {
        const score = (correctAnswers / totalQuestions) * 100;
        const resultMessage = document.getElementById('resultMessage');
        if (score >= 84) {
            resultMessage.innerHTML = `<span style='color: green;'>Bravo, vous avez réussi avec un score de ${Math.round(score)}% !</span>`;
        } else {
            resultMessage.innerHTML = `<span style='color: red;'>Vous avez échoué avec un score de ${Math.round(score)}%. Essayez encore !</span>`;
        }

        document.getElementById('result').style.display = "block";
    }

    // Initialize the first question
    document.getElementById(`Question${questionsOrder[0]}`).style.display = "block";
    updateProgressBar(1, totalQuestions);

    // Attach event listeners to "Vérifie" and "Suivant" buttons
    for (let i = 1; i <= totalQuestions; i++) {
        document.querySelector(`button[onclick="checkReponse(${i})"]`).addEventListener("click", function () {
            checkReponse(i);
        });
        document.querySelector(`button[onclick="prochaineQuestion(${i})"]`).addEventListener("click", function () {
            prochaineQuestion(i);
        });
    }

    // Attach event listener to "Réinitialiser" button
    document.getElementById('resetButton').addEventListener('click', function () {
        calculerResultat();
        setTimeout(() => {
            location.reload();
        }, 5000); // Recharger la page après 5 secondes
    });

    // Lazy loading des questions
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadQuestion(entry.target.dataset.questionId);
            }
        });
    });

    // Sauvegarder la progression
    function saveProgress() {
        const progress = {
            currentQuestion: currentQuestionNumber,
            answers: userAnswers,
            score: currentScore
        };
        localStorage.setItem('quizProgress', JSON.stringify(progress));
    }

    // Validation côté client
    function validateInput(input) {
        const sanitizedInput = DOMPurify.sanitize(input);
        return sanitizedInput;
    }
});


// je modifie le code pour ajouter des fonctionnalités  