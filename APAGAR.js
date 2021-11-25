


meuArray = [11,2,4,4,5,6,10,8,-12]

function diagonalDifference(arr) {
 
    var sum1 = 0,
        sum2 = 0,
        sumTotal = 0,
        qntdArray = 0,
        qntdAtual = 0;
    
    qntdArray = arr[0][0]; // recebe 3 p.ex.
                    
    while (0 < qntdArray){
        sum1 += arr[qntdArray][qntdArray-1]
        qntdArray --;
    } //ok
    
    qntdAtual = arr[0][0];

    while (qntdAtual > 0){
        sum2 += arr[qntdAtual][qntdArray]
        qntdAtual --;
        qntdArray ++;
    }

    sumTotal = sum2 - sum1;
    return sumTotal;
}

console.log (diagonalDifference(meuArray))