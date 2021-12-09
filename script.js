// Variáveis globais
var valueInMemory = '',
    newNumber = 0,
    oldNumber = 0,
    resultCalc = 0,
    valueDisplay = 0,
    inputValue,
    button;

// IMPLEMENTAR FUNÇÕES PARA CADA BOTÃO
const buttonCommand = {
    clearEntry(){ // PRECISA TESTAR
        console.log('Chamando função clearEntry');
        valueInMemory = '';
        newNumber = oldNumber = resultCalc = 0;

        return resultCalc
    },
    moreOrLess() {
        console.log('Chamando função moreOrLess')
    },
    percent(){
        console.log('Chamando função percent')
    },
    dividedBy(){
        console.log('Chamando função dividedBy')
    },
    multiplication(){
        console.log('Chamando função multiplication')
    },
    subtract() {
        console.log('Chamando função subtract')

        if (oldNumber == 0){
            oldNumber = newNumber;
            newNumber = 0;
            valueInMemory = '0';
            return valueInMemory
        }
        resultCalc = newNumber - oldNumber;
        oldNumber = resultCalc;
        newNumber = 0;
        valueInMemory = '0';
        return resultCalc
    },
    addUp() { // PRECISA TESTAR
        console.log('Chamando função addUp')

        if (oldNumber == 0){
            oldNumber = newNumber;
            newNumber = 0;
            valueInMemory = '0';
            return valueInMemory
        }
        resultCalc = newNumber + oldNumber;
        oldNumber = resultCalc;
        newNumber = 0;
        valueInMemory = '0';
        return resultCalc
    },
    equals(){
        console.log('Chamando função equals')

    },
    dot(){
        console.log('Chamando função dot')
    },
    zero(){
        console.log('Chamando função zero')
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


// OK - FUNCIONANDO (FUNÇÃO QUE LÊ OS BOTÕES E CHAMA AS RESPECTIVAS FUNÇÕES)
function checkInputValue(value){
    inputValue = value.path[0].id

    if (isNaN(inputValue)){
        const calcNow = buttonCommand[inputValue];
        resultCalc = calcNow(newNumber, oldNumber);
        printDisplay(resultCalc);
    }
    else {
        valueInMemory += String(value.path[0].value);
        newNumber = Number(valueInMemory)
        printDisplay(valueInMemory);
    }
}

// OK - FUNCIONANDO (FUNÇÃO P/ ESCREVER NO "DISPLAY")
function printDisplay(value){  // Função que recebe um parâmetro para imprimir no display 
    let display = document.getElementById('display');

    if (typeof(value) == 'string'){
        valueDisplay = cleanNumber(value)
    }
    else {
        valueDisplay = value;
    }
    display.innerHTML = valueDisplay;
}

// OK - FUNCIONANDO (FUNÇÃO P/ RETIRAR ZERO A ESQ. OBS: SÓ RECEBE VALOR COMO STRING)
function cleanNumber(value) {
    if (value == '0'){
        return value
    }
    else {
        let newValue = value.replace(/^0+/, '');
        return newValue
    }
}
