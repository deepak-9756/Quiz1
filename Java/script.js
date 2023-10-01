const Questions =[
    {
        'Q':'Which of the following option leads to the portability and security of Java?',
        'a':'Bytecode is executed by JVM',
        'b':'The applet makes the Java code secure and portable',
        'c':'Use of exception handling',
        'd':'Dynamic binding between objects',
        'ans':'a',
    },

    {
        'Q':'The \u0021 article referred to as a',
        'a':'Unicode escape sequence',
        'b':'Octal',
        'c':'Hexadecimal',
        'd':'Line feed',
        'ans':'a',
    },

    {
        'Q':'Which of the following is not a Java features?',
        'a':'Dynamic',
        'b':'Architecture Neutral',
        'c':'Use of pointers',
        'd':'Object-oriented',
        'ans':'c',
    },
    {
        'Q':' _____ is used to find and fix bugs in the Java programs.',
        'a':'JVM',
        'b':'JDB',
        'c':'JDK',
        'd':'JRE',
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