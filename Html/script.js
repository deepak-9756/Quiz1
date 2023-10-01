const Questions =[
    {
        'Q':'The correct sequence of HTML tags for starting a webpage is -',
        'a':'Head, Title, HTML, body',
        'b':'HTML, Body, Title, Head',
        'c':'HTML, Title, Style, Body',
        'd':'HTML, Head, Title, Body',
        'ans':'d',
    },

    {
        'Q':'Which of the following tag is used for inserting the largest heading in HTML?',
        'a':'<h3>',
        'b':'<h1>',
        'c':'<h5>',
        'd':'<h6>',
        'ans':'b',
    },

    {
        'Q':'How to create an unordered list (a list with the list items in bullets) in HTML?',
        'a':'<ul>',
        'b':'<ol>',
        'c':'<li>',
        'd':'<i>',
        'ans':'a',
    },
    {
        'Q':'Which character is used to represent the closing of a tag in HTML?',
        'a':'\\',
        'b':'!',
        'c':'/',
        'd':'.',
        'ans':'c',
    }
]

let Index = 0;
let Qlength = Questions.length;
let right =0,wrong = 0;

let aList = document.querySelectorAll('.aList');
let ques = document.getElementById('ques');
let a1 = document.getElementById('r1');
let a2 = document.getElementById('r2');
let a3 = document.getElementById('r3');
let a4 = document.getElementById('r4');
let btn = document.getElementById('btn');

endQuiz = ()=>{
    document.getElementById('form').innerHTML = `<h2> Thanks For Join This Quiz</h2>
    <h2>Score</h2>
    <h1>${right}</h1>`;
    
}
const loadQuestion = ()=>{
    if(Index == Qlength)
        endQuiz();
    reset()
    ques.innerHTML = `${Index+1}. ${Questions[Index].Q}`;
    aList[0].nextElementSibling.innerText =   Questions[Index].a;
    aList[1].nextElementSibling.innerText =   Questions[Index].b;
    aList[2].nextElementSibling.innerText =   Questions[Index].c;
    aList[3].nextElementSibling.innerText =   Questions[Index].d;
}

getAnswer = ()=>{
    let ans;
    aList.forEach((input) => {
        if(input.checked)
            ans = input.value;
    });
    return ans;
}
inc = ()=>{
    let val = getAnswer();
    if(val == Questions[Index].ans)
        right++;
    else    
        wrong++;

    Index=Index+1;
    loadQuestion();
}

reset = ()=>{
    aList.forEach((input) => {
        input.checked = false;
    });
}
btn.addEventListener('click',inc)
loadQuestion();