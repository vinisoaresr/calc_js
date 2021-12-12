// Variáveis globais
var inputString = '',
    latestValue = 0,
    oldestValue = 0,
    resultCalc = 0,
    inputValue = '',
    lastStateCalc = '',
    button;

// IMPLEMENTAR FUNÇÕES PARA CADA BOTÃO
const buttonCommand = {
    clearEntry(){ // PRECISA TESTAR
        console.log('Chamando função clearEntry');
        inputString = '';
        latestValue = oldestValue = resultCalc = 0;

        return resultCalc
    },
    moreOrLess() {
        console.log('Chamando função moreOrLess')
        resultCalc = latestValue - (latestValue * 2);
        lastStateCalc = resultCalc;
        inputString = resultCalc;
        return resultCalc
    },
    percent(){
        console.log('Chamando função percent')
        lastStateCalc = 'percent';

        resultCalc = latestValue/100;
        latestValue = resultCalc;
        inputString = resultCalc;
        return resultCalc
    },
    dividedBy(){
        console.log('Chamando função dividedBy')
        lastStateCalc = 'dividedBy';

        if (oldestValue == 0){
            oldestValue = latestValue;
            latestValue = 0;
            inputString = '0';
            return inputString
        }
        else { 
            resultCalc = oldestValue / latestValue;
            oldestValue = resultCalc;
            latestValue = 0;
            inputString = '0';
            return resultCalc
        }
    },
    multiplication(){
        console.log('Chamando função multiplication')
        lastStateCalc = 'multiplication';

        if (oldestValue == 0){
            oldestValue = latestValue;
            latestValue = 0;
            inputString = '0';
            return inputString
        }
        else { 
            resultCalc = oldestValue * latestValue;
            oldestValue = resultCalc;
            latestValue = 0;
            inputString = '0';
            return resultCalc
        }
    },
    subtract() {
        console.log('Chamando função subtract')
        lastStateCalc = 'subtract';

        if (oldestValue == 0){
            oldestValue = latestValue;
            latestValue = 0;
            inputString = '0';
            return inputString
        }
        else { 
            resultCalc = oldestValue - latestValue;
            oldestValue = resultCalc;
            latestValue = 0;
            inputString = '0';
            return resultCalc
        }
    },
    addUp() { // PRECISA TESTAR
        console.log('Chamando função addUp')
        lastStateCalc = 'addUp';

        if (oldestValue == 0){
            oldestValue = latestValue;
            latestValue = 0;
            inputString = '0';
            return inputString
        }

        else { 
            resultCalc = oldestValue + latestValue;
            oldestValue = resultCalc;
            latestValue = 0;
            inputString = '0';
            return resultCalc
        }
    },
    equals(){
        console.log('Chamando função equals')

        resultCalc = buttonCommand[lastStateCalc](latestValue, oldestValue);
        return resultCalc
    },
    dot(){
        console.log('Chamando função dot')
        inputString = inputString+'.';
        printDisplay(inputString)
        latestValue = Number(inputString);
        return latestValue
    },
}

window.onload = main();
function main(){
    button = document.getElementsByClassName('button');
    for (let i=0; i < button.length; i++){
        button[i].addEventListener('click', checkInputValue);
    }
}

// OK (FUNÇÃO QUE LÊ OS BOTÕES E CHAMA AS RESPECTIVAS FUNÇÕES)
function checkInputValue(value){
    inputValue = value.path[0].id

    if (isNaN(inputValue)){
        resultCalc = buttonCommand[inputValue](latestValue, oldestValue);
        printDisplay(resultCalc);
    }
    else {
        inputString += String(value.path[0].value);
        latestValue = Number(inputString)
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
