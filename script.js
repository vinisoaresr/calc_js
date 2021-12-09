// Variáveis globais
var statusCalc = true,
    valueInMemory = '',
    newNumber = 0,
    oldNumber = 0,
    resultCalc= 0,
    inputValue,
    button;

// IMPLEMENTAR FUNÇÕES PARA CADA BOTÃO
const buttonCommand = {
    clearEntry(){
        console.log('Chamado função clearEntry');
        valueInMemory = '';
        newNumber = oldNumber = resultCalc = 0;
        statusCalc = true;

        return resultCalc
    },
    moreOrLess() {
        console.log('Chamado função moreOrLess')
    },
    percent(){
        console.log('Chamado função percent')
    },
    dividedBy(){
        console.log('Chamado função dividedBy')
    },
    multiplication(){
        console.log('Chamado função multiplication')
    },
    subtract() {
        console.log('Chamado função subtract')
    },
    addUp() {
        console.log('Chamado função addUp')

        if (statusCalc){
            statusCalc = false
            oldNumber = newNumber;
            newNumber = 0;
            valueInMemory = '0';
            return valueInMemory
        }

        return newNumber + oldNumber
    },
    equals(){
        console.log('Chamado função equals')

    },
    dot(){
        console.log('Chamado função dot')
    },
    zero(){
        console.log('Chamado função zero')
        valueInMemory += 0;
        return valueInMemory 
    }
}

window.onload = main();
function main(){
    button = document.getElementsByClassName('button');
    for (let i=0; i < button.length; i++){
        button[i].addEventListener('click', checkInputValue);
    }
}


// TEMP
function checkInputValue(value){
    inputValue = value.path[0].id

    if (isNaN(inputValue)){
        const calcNow = buttonCommand[inputValue];
        resultCalc = calcNow(newNumber, oldNumber);
        printDisplay(resultCalc);
    }
    else {
        valueInMemory += String(value.path[0].value);
        newNumber += Number(valueInMemory)
        printDisplay(valueInMemory);
    }
}

// OK - FUNCIONANDO
function printDisplay(value){  // Função que recebe um parâmetro para imprimir no display 
    let display = document.getElementById('display');
    display.innerHTML = value;
}

//FUNÇÃO P/ RETIRAR ZERO A ESQ.
// let zeroToTheLeft = true;
// if (valueInput === '0' && zeroToTheLeft){
//     valueInput = '';
//     zeroToTheLeft = false;
//     console.log('zerei')
// }
// valueInput += valueNumberInput;