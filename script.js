'use strict';

const calcData = [
    'AC',
    'C',
    '%',
    'Back',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '+/-',
    '0',
    ',',
    '='
];

const calcParent = document.querySelector('.calc');
let i = 0;

const btns = document.createElement('div');
btns.classList.add('calc-btns');
calcParent.append(btns);

function addBtn(n) {

    while (i < n) {
        const btn = document.createElement('button');
        btn.classList.add('calc-btn');
        btn.setAttribute(`id`, `${calcData[i]}`);
        btn.textContent = calcData[i];
        btns.append(btn);

        i++;
    }
}

addBtn(20);

const output = document.createElement('div'),
      resultTemporary = document.createElement('div'),
      resultFinal = document.createElement('div');
      
output.classList.add('result');
resultTemporary.classList.add('result-temporary');
resultTemporary.textContent = '525,432';
resultFinal.classList.add('result-final');
resultFinal.textContent = '24234254';

calcParent.prepend(output);
output.prepend(resultTemporary);
output.append(resultFinal);

let curInput = '';

calcParent.addEventListener('click', (e) => {
    curInput += e.target.getAttribute('id');
    resultTemporary.textContent = curInput;

    
    console.log(curInput);
});

const resultBtn = document.getElementById('=');

resultBtn.addEventListener('click', () => {
    let result = curInput;
    resultFinal.textContent = result;
});