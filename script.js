// Variáveis globais do tipo STRING
var valueInput = '',
    valueInputOld = '',
    newNumber = 0,
    oldNumber = 0,
    plusNumber = 0;

// OK
const buttonCommand = {
    clearEntry(){
        console.log('Chamado função clearEntry')
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
    },
    equals(){
        console.log('Chamado função equals')
    },
    dot(){
        console.log('Chamado função dot')
    },
    zero(){
        console.log('Chamado função zero')
    }
}

var button = document.getElementsByClassName('button');
for (let i=0; i < button.length; i++){
    button[i].addEventListener('click', inputValue);
}

// TEMP
function inputValue(value){
    const inputValue = value.path[0].id

    if (isNaN(inputValue)){
        const calcNow = buttonCommand[inputValue];
        calcNow(newNumber, oldNumber);
    }
    else {
        let valueNumberInput = String(value.path[0].value);

        let zeroToTheLeft = true;
        if (valueInput === '0' && zeroToTheLeft){
            valueInput = '';
            zeroToTheLeft = false;
            console.log('zerei')
        }
        valueInput += valueNumberInput;
        printDisplay(valueInput);
    }
}

// OK - FUNCIONANDO
function printDisplay(value){  // Função que recebe um parâmetro para imprimir no display 
    let display = document.getElementById('display');
    display.innerHTML = value;
}

// TEMP
function ac(){
    valueInput = '0';
    valueInputOld = '0';
    newNumber = 0;
    oldNumber = 0;
    plusNumber = 0;
    printDisplay(valueInput);
}

// TEMP
function plus(valueInput){
    printDisplay('0');

    newNumber = Number(valueInput);
    if (oldNumber === '' || oldNumber === 0 || oldNumber === undefined){
        oldNumber = newNumber;
        valueInput = '0';
        return 
    } 
    else {
        plusNumber = newNumber + oldNumber;
        printDisplay(plusNumber);
        return plusNumber;
    }
}


// É zero à esquerda? Remove
//function isItLeadingZero(value){
//    let zeroToTheLeft = true;
//
//    if (value === '0' && zeroToTheLeft){
//
//        return true;
//
//        valueInput = '';
//        zeroToTheLeft = false;
//        console.log('zerei')
//    }
//    return valueNew
//}