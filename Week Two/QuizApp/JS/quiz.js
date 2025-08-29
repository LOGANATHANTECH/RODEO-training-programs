const userName = localStorage.getItem("userName");

const quizData = [
    {
        question: "What is the capital of France?",
        options: {
            option1: "Berlin",
            option2: "Madrid",
            option3: "Paris",
            option4: "Lisbon"
        },
        answer: "option3"
    },
    {
        question: "Which language is used for web development?",
        options: {
            option1: "Python",
            option2: "HTML",
            option3: "Java",
            option4: "C++"
        },
        answer: "option2"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: {
            option1: "Charles Dickens",
            option2: "William Shakespeare",
            option3: "Mark Twain",
            option4: "Jane Austen"
        },
        answer: "option2"
    }
];

const questionTitle = document.getElementById("question-title");
const quizForm = document.getElementById("quiz-form");
const nextBtn = document.getElementById("next-btn");
const resultDiv = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion(index) {
    const q = quizData[index];
    questionTitle.textContent = `${index + 1}. ${q.question}`;
    Object.keys(q.options).forEach(id => {
        const label = quizForm.querySelector(`label[for=${id}]`);
        label.textContent = q.options[id];
        quizForm.querySelector(`#${id}`).checked = false;
    });
    nextBtn.disabled = true;
    resultDiv.textContent = "";
}

quizForm.addEventListener("change", () => {
    nextBtn.disabled = false;
    resultDiv.textContent = "";
});

nextBtn.addEventListener("click", () => {
    const selectedOption = quizForm.option.value;
    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }
    if (selectedOption === quizData[currentQuestionIndex].answer) {
        score++;
        resultDiv.style.color = "green";
        resultDiv.textContent = "Correct!";
    } else {
        resultDiv.style.color = "red";
        resultDiv.textContent = "Wrong!";
    }
    nextBtn.disabled = true;

    currentQuestionIndex++;
    if (currentQuestionIndex === quizData.length) {
        setTimeout(() => {
            questionTitle.textContent = `Quiz completed! Your score: ${score} / ${quizData.length}`;
            quizForm.style.display = "none";
            resultDiv.textContent = "";
        }, 1000);
    } else {
        setTimeout(() => {
            loadQuestion(currentQuestionIndex);
            resultDiv.textContent = "";
        }, 300);
    }
});

// start and Initial load
loadQuestion(currentQuestionIndex);