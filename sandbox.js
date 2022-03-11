const output = document.querySelector('.result-1')
const temp = document.querySelector('.result-0')
const currentOperator = document.querySelectorAll('.operation')
const buttons = document.querySelectorAll('.button')
let res

buttons.forEach(button => {
    button.addEventListener('click', e => {
        switch (e.target.innerText) {
            case 'C':
                output.innerText = '0'
                temp.innerText = '0'
                currentOperator.innerText = ''
                res = ''
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
                else{
                    if (res) {
                        temp.innerText = res
                    }
                    else{
                        temp.innerText = output.innerText + currentOperator.innerText
                    }
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
                additionRes = output.innerText + temp.innerText
                console.log(additionRes)
                console.log(output.innerText)
                console.log(temp.innerText)
                break;
                case '-':
                    console.log('SUB')
                    res = eval(output.innerText + currentOperator.innerText + temp.innerText)
                    console.log(`output is :${output.innerText}`) // what the fuck did i jsut do
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
                    console.log(`output is :${output.innerText}`) // what the fuck did i jsut do
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
                    console.log(`output is :${output.innerText}`) // what the fuck did i jsut do
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