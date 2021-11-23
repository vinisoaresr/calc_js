var valueMemoryNew = '',
    valueMemoryOld = '';

var button = document.getElementsByClassName('button');
for (let i=0; i < button.length; i++){
    button[i].addEventListener('click', inputvalueMemoryNew);
}

//função provisória
function inputvalueMemoryNew(value){
    console.log(value)
    if (isNaN(valueMemoryNew)){   // Verifica se não é número (ac, +, -, Div, Percent, etc.) para não alterar o estado do display ('0')
        printDisplay('')
    }
    
    if (isNaN(value.path[0].id) === true){
        if (value.path[0].id === "ac" ){
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
            somar(valueMemoryNew);
            console.log('chamar função times');
        }
        
        else if(value.path[0].id === "minus" ){
            somar(valueMemoryNew, valueMemoryOld);
            console.log('chamar função minus');
        }
        
        else if(value.path[0].id === "plus" ){
            somar(valueMemoryNew);
            console.log('chamar função plus');
        }
    }

    if (isNaN(value.path[0].id) === false){ //Verifica se é número e printa no display
        let valueNumberInput = String(value.path[0].id);
        valueMemoryNew += valueNumberInput;
        printDisplay(valueMemoryNew);
    }
}


function main(){
    console.log('função main()')
}



// OK - FUNCIONANDO
function printDisplay(value){  // Função que recebe um parâmetro para imprimir no display 
    let display = document.getElementById('display');
    display.innerHTML = value;
}

// Função para o botão ac (limpa o display com uma string vazia)
function ac(){
    valueMemoryNew = '0';
    printDisplay(valueMemoryNew);
}

function plus(input){
    printDisplay('');
    let valor_anterior = undefined;

    if  (valor_anterior === undefined){
        valor_anterior = input
        printDisplay(valor_anterior);
        return
    }
    else{
        printDisplay(input+valor_anterior)
        return input + valor_anterior;
    }
}

function minus(input){
    valueMemoryNew = ''
    printDisplay(valueMemoryNew);
}