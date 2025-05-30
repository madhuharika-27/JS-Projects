var quizdata=[
    {
        question: 'Which framework belongs to javascript?',
        a:'.net',
        b:'flask',
        c:'react',
        d:'django',
        correct: 'c'
    },

    {
        question: 'Which is not a programming language?',
        a:'html',
        b:'python',
        c:'java',
        d:'C++',
        correct: 'a'
    },

    {
        question: 'Which is not a framework?',
        a:'javascript',
        b:'angular',
        c:'react',
        d:'django',
        correct: 'a'
    },

    {
        question: 'CSS stands for?',
        a:'Cascading sheet of style',
        b:'Cascading style sheet',
        c:'Cascading style state',
        d:'none',
        correct: 'a'
    }
]

var quiz=document.getElementById('quiz')
var answer=document.querySelectorAll('.answer')
var Question=document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')

var submitbtn=document.getElementById('submit')

var currentquestion=0
var quizscore=0

loadQuiz()

function loadQuiz()
{
    deselect()
    Question.innerHTML=quizdata[currentquestion].question
    option_a.innerText=quizdata[currentquestion].a
    option_b.innerText=quizdata[currentquestion].b
    option_c.innerText=quizdata[currentquestion].c
    option_d.innerText=quizdata[currentquestion].d
}
function deselect()
{
    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click',()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedoption=answer.id
        }

    })
    if(selectedoption==quizdata[currentquestion].correct)
    {
        quizscore+=1  
    }
    currentquestion+=1
    
    if(currentquestion==quizdata.length)
    {
        document.getElementById('quiz').innerHTML=`<h1>You have answered ${quizscore} correctly out of ${quizdata.length}</h1>`
    }
    else{
        loadQuiz()
    }

})