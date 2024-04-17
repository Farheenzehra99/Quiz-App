const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "Which of the following is NOT a JavaScript keyword?",
        a: "var",
        b: "let",
        c: "const",
        d: "for",
        correct: "c",
    },
    {
       question:" What is the return value of the pop() method in JavaScript arrays?",
       a: "The removed element",  
       b: "The new length of the array after removal",
       c: "An array containing the removed elements",
       d: "Undefined",
       correct: "d",
    },
    {
        question:"In JavaScript, an array can be created using the?",
        a: "Array() constructor",
        b: "[] literals",
        c: "Both of the above",
        d: "None of the above",
        correct: "a",
    },
{
    question: "What does the splice() method do in JavaScript arrays?",
    a: "Adds one or more elements to the beginning of an array and returns the new length of the array",
    b: "Removes elements from an array and, if necessary, inserts new elements in their place",
    c: "Returns a shallow copy of a portion of an array into a new array object",
    d:  "Removes the last element from the array",
     correct: "b",
},
{
    question: "Which method do you use to add elements to the end of an array?",
    a: "add()",
    b: "push()",
    c: "append()",
    d: "concat()",
    correct: "b",
},
{
    question: "Which method do you use to remove elements from an array?",
    a: "pop()",
    b: "shift()",
    c: "splice()",
    d: "remove()",
    correct: "c",
}
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})