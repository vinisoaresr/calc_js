var memory = '';

var button = document.getElementsByClassName('button');

for (let i=0; i < button.length; i++){
    button[i].addEventListener('click', input_memory);
}

function input_memory(value){
    if (isNaN(memory)){
        print_display('')
    }
    
    if (isNaN(value.path[0].value) === true){
        if (value.path[0].value === "AC" ){
            AC();
            console.log('chamar função AC')
        }
        else if(value.path[0].value === "%" ){
            console.log('chamar função percent')
        }
        else if(value.path[0].value === "+" ){
            somar(memory);
            console.log('chamar função soma()');
        }
    }

    if (isNaN(value.path[0].value) === false){
        let str_value = String(value.path[0].value);
        memory = memory + str_value;
        console.log(memory);
        print_display(memory);
    }
}

function print_display(value){
    let display = document.getElementById('display');
    display.innerHTML = value;
}

function AC(){
    memory = ''
    print_display(memory);
}

function somar(input){
    print_display('');
    let valor_anterior = undefined;

    if  (valor_anterior === undefined){
        valor_anterior = input
        print_display(valor_anterior);
        return
    }
    else{
        print_display(input+valor_anterior)
        return input + valor_anterior;
    }
}

function subtrair(input){
    memory = ''
    print_display(memory);
}