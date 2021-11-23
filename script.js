// Variáveis globais do tipo STRING
var valueMemory = '',
    valueMemoryOld = '';

// Variáveis globais do tipo INT
var newNumber,
    oldNumber,
    plusNumber;

var button = document.getElementsByClassName('button');
for (let i=0; i < button.length; i++){
    button[i].addEventListener('click', inputValue);
}

//função provisória
function inputValue(value){
    
    if (isNaN(value.path[0].id) === true){
        if (value.path[0].id === "AC" ){
            ac();
            console.log('chamar função ac')
        }

        else if(value.path[0].id === "plus_minus" ){
            console.log('chamar função plusMinus')
        }
        
        else if(value.path[0].id === "percent" ){
            console.log('chamar função percent')
        }

        else if(value.path[0].id === "divided_by" ){
            console.log('chamar função dividedBy');
        }

        else if(value.path[0].id === "times" ){
            somar(valueMemory);
            console.log('chamar função times');
        }
        
        else if(value.path[0].id === "minus" ){
            console.log('chamar função minus');
        }
        
        else if(value.path[0].id === "plus" ){
            plus(valueMemory);
            console.log('chamar função plus');
        }
    }

    if (isNaN(value.path[0].value) === false){ //Verifica se é número e printa no display
        let valueNumberInput = String(value.path[0].value);
        
        let zeroToTheLeft = true;
        if (valueMemory === '0' && zeroToTheLeft){
            valueMemory = '';
            zeroToTheLeft = false;
            console.log('zerei')
        }

        valueMemory += valueNumberInput;
        printDisplay(valueMemory);
    }
}



//function main(){
//    console.log('função main()')
//}



// OK - FUNCIONANDO
function printDisplay(value){  // Função que recebe um parâmetro para imprimir no display 
    let display = document.getElementById('display');
    display.innerHTML = value;
}

// Função para o botão ac (limpa o display com a string '0')
function ac(){
    valueMemory = '0';
    valueMemoryOld = '0';
    newNumber = 0;
    oldNumber = 0;
    plusNumber = 0;
    printDisplay(valueMemory);
}

function plus(valueInput){
    printDisplay('0');

    newNumber = Number(valueInput);
    if (oldNumber === '' || oldNumber === 0 || oldNumber === undefined){
        oldNumber = newNumber;
        valueMemory = '0';
        return 
    } 
    else {
        plusNumber = newNumber + oldNumber;
        printDisplay(plusNumber);
        return plusNumber;
    }
}

function minus(input){
    valueMemory = ''
    printDisplay(valueMemory);
}


// É zero à esquerda? Remove
//function isItLeadingZero(value){
//    let zeroToTheLeft = true;
//
//    if (value === '0' && zeroToTheLeft){
//
//        return true;
//
//        valueMemory = '';
//        zeroToTheLeft = false;
//        console.log('zerei')
//    }
//    return valueNew
//}