const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-btn")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
   currentQuestionIndex++
   setNextQuestion() 
})

function startQuiz(){
    console.log("started");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide");
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)    
    })
    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    }
    else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")

}

const questions = [
    {
        question: "What is an Array?",
        answers: [
            {text: "A group of values stored in a paticular order", correct: true},
            {text: "A light beam that comes from the sky.", correct: false}
        ]
    },
    {
        question: "What is the minimum amount of hours you should spend coding per-week to succeed?",
        answers: [
            {text: "10", correct: false},
            {text: "50", correct: false},
            {text: "35", correct: true},
            {text: "20", correct: false},           
        ]
    },
    {
        question: "What does HTML mean?",
        answers: [
            {text: "How To Make Lanterns", correct: false},
            {text: "Hyper Text Mark-up Language", correct: true},
            {text: "Horizon Text Mark-up Language", correct: false},
            {text: "Hyper Text Mark-up Laptop", correct: false},
        ]
    }
]