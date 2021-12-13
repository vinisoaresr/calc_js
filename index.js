
const lastStateOperation = {
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