// Variáveis globais
var inputString = '',
    inputValue = '',
    lastStateCalc = '',
    newValue = 0,
    oldValue = 0,
    resultCalc = 0,
    button;


window.onload = main();
function main(){
    button = document.getElementsByClassName('button');
    for (let i=0; i < button.length; i++){
        button[i].addEventListener('click', checkInputValue);
    }
}


// IMPLEMENTAR FUNÇÕES PARA CADA BOTÃO
const buttonCommand = {
    clearEntry(){
        console.log('Chamando função clearEntry');
        inputString = '0';
        lastStateCalc = '';
        newValue = oldValue = resultCalc = 0;
        return inputString
    },
    moreOrLess(newValue, oldValue) {
        console.log('Chamando função moreOrLess')
        resultCalc = Number(newValue) - (Number(newValue) * 2);
        lastStateCalc = resultCalc;
        inputString = String(resultCalc);
        return resultCalc
    },
    percent(newValue, oldValue){
        console.log('Chamando função percent')
        lastStateCalc = 'percent';

        resultCalc = newValue/100;
        newValue = resultCalc;
        inputString = resultCalc;
        return resultCalc
    },
    dividedBy(newValue, oldValue){
        console.log('Chamando função dividedBy')

        resultCalc = oldValue / newValue;
        return resultCalc
    },
    multiplication(newValue, oldValue){
        console.log('Chamando função multiplication')
        resultCalc = oldValue * newValue;
        return resultCalc
        
    },
    subtract(newValue, oldValue) {
        console.log('Chamando função subtract')
        resultCalc = oldValue - newValue;
        return resultCalc
    },
    addUp(newValue, oldValue) { 
        console.log('Chamando função addUp')
        resultCalc = oldValue + newValue;
        return resultCalc
    },
    equals(newValue, oldValue){
        console.log('Chamando função equals')

        if (lastStateCalc == ''){
            return
        }
        else {
            resultCalc = buttonCommand[lastStateCalc](newValue, oldValue);
            return resultCalc
        }
    },
    dot(newValue, oldValue){
        console.log('Chamando função dot')
        inputString = inputString+'.';
        printDisplay(inputString)
        newValue = Number(inputString);
        return newValue
    },
}


const lastOperation = {
    clearEntry(value) {
        console.log('lastStateCalc = clearEntry')
        return 'clearEntry';
    },
    moreOrLess(value) {
        console.log('lastStateCalc = moreOrLess')
        return 'moreOrLess';
    },
    percent(){
        console.log('lastStateCalc = percent')
        return 'percent';
    },
    dividedBy(){
        console.log('lastStateCalc = dividedBy')
        return 'dividedBy';
    },
    multiplication(){
        console.log('lastStateCalc = multiplication')
        return 'multiplication';
    },
    subtract() {
        console.log('lastStateCalc = subtract')
        return 'subtract';
    },
    addUp() {
        console.log('lastStateCalc = addUp')
        return 'addUp';
    },
    equals(){
        console.log('lastStateCalc = equals')
        return 'equals';
    },
    dot(){
        console.log('lastStateCalc = dot')
        return 'dot';
    },
}


// OK (FUNÇÃO QUE LÊ OS BOTÕES E CHAMA AS RESPECTIVAS FUNÇÕES)
function checkInputValue(value){
    inputValue = value.path[0].id

    if (isNaN(inputValue)){//SE É
        if (inputValue != 'clearEntry' || inputValue != 'equals'){
            resultCalc = buttonCommand[inputValue](newValue, oldValue);
            lastStateCalc = lastOperation[inputValue]();

            oldValue = resultCalc;
            newValue = 0;
            inputString = '0';
        }
        else if (inputValue = 'equals'){
            resultCalc = buttonCommand['equals'](newValue, oldValue);
            oldValue = resultCalc;
            newValue = 0;
            inputString = '0';    
        }
        else{
            resultCalc = buttonCommand['clearEntry']();
        }
        printDisplay(resultCalc);
    }
    else { //SE É NÚMERO
        inputString += String(value.path[0].value);
        newValue = Number(inputString)
        printDisplay(inputString);
    }
}

// OK (FUNÇÃO P/ ESCREVER NO "DISPLAY")
function printDisplay(value){
    var valueDisplay = 0;
    let display = document.getElementById('display');

    if (typeof(value) == 'string'){
        valueDisplay = cleanNumber(value)
    }
    else {
        valueDisplay = value;
    }
    display.innerHTML = valueDisplay;
}

// OK (FUNÇÃO P/ RETIRAR ZERO A ESQ. OBS: SÓ RECEBE VALOR COMO STRING)
function cleanNumber(value) {
    if (value == '0'){
        return value
    }
    else {
        let newValue = value.replace(/^0+/, '');
        return newValue
    }
}
