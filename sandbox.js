const output = document.querySelector('.result-1')
const temp = document.querySelector('.result-0')
const currentOperator = document.querySelectorAll('.operation')
const buttons = document.querySelectorAll('.button')
let outputVar = 0
let tempVar = 0
let res = 0

buttons.forEach(button => {
    button.addEventListener('click', e => {
        switch (e.target.innerText) {
            case 'C':
                output.innerText = '0'
                temp.innerText = '0'
                currentOperator.innerText = ''
                res = '0'
                outputVar = '0'
                tempVar = '0'
                console.log(`tempVar: ${tempVar}`)
                console.log(`outputVar: ${outputVar}`)
                console.log(`res: ${res}`)
                console.log(`currentOperator: ${currentOperator.innerText}`)
                break;
            case '←':
                if(output.innerText > '0'){
                    output.innerText = output.innerText.slice(0,-1)
                }
                break;
            case '+':
                currentOperator.innerText = '+'
                if (output.innerText === '0') {
                    return
                }
                else if(tempVar){
                    outputVar = output.innerText
                    res = eval(outputVar + currentOperator.innerText + tempVar)
                    console.log(`tempVar: ${tempVar}`)
                    console.log(`outputVar: ${outputVar}`)
                    console.log(`res: ${res}`)
                    console.log(`currentOperator: ${currentOperator.innerText}`)
                    temp.innerText = res
                    output.innerText = '0'
                    return
                }
                else{
                    tempVar = output.innerText
                    temp.innerText = output.innerText + currentOperator.innerText
                    console.log(tempVar)
                    output.innerText = '0'  
                }
                break;
            case '-':
                currentOperator.innerText = '-'
                if (output.innerText === '0') {
                    return
                }
                else{
                    temp.innerText = output.innerText
                    output.innerText = '0'

                }
            case 'x':
                currentOperator.innerText = 'x'
                if (output.innerText === '0') {
                    return
                }
                else{
                    temp.innerText = output.innerText
                    output.innerText = '0'

                }
                break;
            case '/':
                currentOperator.innerText = '/'
                if (output.innerText === '0') {
                    return
                }
                else{
                    temp.innerText = output.innerText
                    output.innerText = '0'    
                }
                break;
            case '.':
                if(output.innerText === '0'){
                    output.innerText += e.target.innerText
                }
                else if(output.innerText.includes('.')){
                    return

                }
                else{
                    output.innerText += e.target.innerText
                }
                break;
            default:
                if (output.innerText === '0') {
                    output.innerText = e.target.innerText
                }
                else{
                    output.innerText += e.target.innerText
                }
                break;

        }
    })
});

currentOperator.forEach(operator => {
    operator.addEventListener('click', e => {
        switch (operator.innerText) {
            case '+':
                console.log('ADD')
                // outputVar = output.innerText
                break;
                case '-':
                    console.log('SUB')
                    res = eval(output.innerText + currentOperator.innerText + temp.innerText)
                    console.log(`output is :${output.innerText}`) 
                    console.log(`temp is :${temp.innerText}`)
                    console.log(`res is:${res}`)
                    if (res) {
                        temp.innerText = res
                    }
                    res = temp.innerText
                break;
                case 'x':
                    console.log('DIV')
                    res = eval(output.innerText + currentOperator.innerText + temp.innerText)
                    console.log(`output is :${output.innerText}`) 
                    console.log(`temp is :${temp.innerText}`)
                    console.log(`res is:${res}`)
                    if (res) {
                        temp.innerText = res
                    }
                    res = temp.innerText
                break;
                case '/':
                    console.log('SUB')
                    res = eval(output.innerText + currentOperator.innerText + temp.innerText)
                    console.log(`output is :${output.innerText}`) 
                    console.log(`temp is :${temp.innerText}`)
                    console.log(`res is:${res}`)
                    if (res) {
                        temp.innerText = res
                    }
                    res = temp.innerText
                break;
            default:
                break;
        }
    })
});


