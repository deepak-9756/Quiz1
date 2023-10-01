const Questions =[
    {
        
        'Q':'CSS stands for -',
        'a':'Color and style sheets',
        'b':'Cascade style sheets',
        'c':'Cascading style sheets',
        'd':'None of the above',
        'ans':'c',
    },

    {
        'Q':'Which of the following is the correct syntax for referring the external style sheet?',
        'a':"<'style src = example.css'>",
        'b':'<style src = "example.css">',
        'c':'<stylesheet> example.css </sheet>',
        'd':'<link rel="stylesheet" type="text/css" href="example.css">',
        'ans':'d',
    },

    {
        'Q':'The property in CSS used to change the background color of an element is -',
        'a':'bgcolor',
        'b':'color',
        'c':'background-color',
        'd':'All of the above',
        'ans':'c',
    },
    {
        'Q':'The HTML attribute used to define the internal stylesheet is -',
        'a':'<style>',
        'b':'style',
        'c':'<link>',
        'd':'<script>',
        'ans':'a'
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