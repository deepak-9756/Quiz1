const Questions =[
    {
        'Q':'C++ language was developed by ___.',
        'a':'Dennis Rechard',
        'b':'Dennis M. Ritchie',
        'c':'Bjarne Stroustrup',
        'd':'Anders Hejlsberg',
        'ans':'c',
    },

    {
        'Q':'In which year, the name of the language was changed from "C with Classes" to C++?',
        'a'  : '1979',
        'b'  : '1972',
        'c'  : '1983',
        'd'  : '1986',
        'ans':'c',
    },

    {
        'Q':'C++ follows ___.',
        'a':'Top-Down Design approach',
        'b':'Bottom-Up Design approach',
        'c':'Both of the above',
        'd':'None of the above.',
        'ans':'b',
    },
    {
        'Q':'C++ is a ___.',
        'a':'High-level language',
        'b':'Medium level language',
        'c':'Low-level language',
        'd':'None of the above',
        'ans':'b',
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
    aList[0].nextElementSibling.innerHTML =   Questions[Index].a;
    aList[1].nextElementSibling.innerHTML =   Questions[Index].b;
    aList[2].nextElementSibling.innerHTML =   Questions[Index].c;
    aList[3].nextElementSibling.innerHTML =   Questions[Index].d;
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