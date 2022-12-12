'use strict';

let mainResult = document.querySelector('.result-final'),
    tempResult = document.querySelector('.result .result-temporary');

function input() {
    const numbers = document.querySelectorAll('[data-number]');
    let input = '';

    numbers.forEach(e => e.addEventListener('click', e => {

        input += e.target.textContent;
        
        tempResult.textContent = input;
    }));
}

input();

function backSpace() {
    const backSpace = document.querySelector('[data-back]');

    backSpace.addEventListener('click', () => {
        let input = tempResult.textContent;

        tempResult.textContent = input.slice(0, -1);
    });
}

backSpace();

function deleteLastNumber() {
    const deleteNumber = document.querySelector('[data-delete]');
    let input = tempResult.textContent;

    deleteNumber.addEventListener('click', () => {
        input = '';

        tempResult.textContent = input;        
    });
}

deleteLastNumber();

function clearAll() {
    const clearAll = document.querySelector('[data-clear]');

    clearAll.addEventListener('click', () => {
        let input = '';

        tempResult.textContent = input; 
        mainResult.textContent = input; 
    });
}

clearAll();
