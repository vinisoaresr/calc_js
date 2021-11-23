var memory = '';


var button = document.getElementsByClassName('button');
for (let i=0; i < button.length; i++){
    button[i].addEventListener('click', inputMemory);
}


function inputMemory(value){
    console.log(value)
    if (isNaN(memory)){   /// Verifica se não é número (AC, +, -, Div, Percent, etc.) para não alterar o estado do display ('0')
        printDisplay('')
    }
    
    if (isNaN(value.path[0].id) === true){
        if (value.path[0].id === "AC" ){
            console.log('chamar função AC')
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
            somar(memory);
            console.log('chamar função times');
        }
        
        else if(value.path[0].id === "minus" ){
            somar(memory);
            console.log('chamar função minus');
        }
        
        else if(value.path[0].id === "plus" ){
            somar(memory);
            console.log('chamar função plus');
        }
    }

    if (isNaN(value.path[0].value) === false){
        let str_value = String(value.path[0].value);
        memory = memory + str_value;
        console.log(memory);
        printDisplay(memory);
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

// Função para o botão AC (limpa o display com uma string vazia)
function AC(){
    memory = '0';
    printDisplay(memory);
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
    memory = ''
    printDisplay(memory);
}