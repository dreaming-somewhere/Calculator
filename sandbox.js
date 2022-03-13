const output = document.querySelector('.result-1')
const temp = document.querySelector('.result-0')
const currentOperator = document.querySelectorAll('.operation')
const buttons = document.querySelectorAll('.button')
const upd = document.querySelector('.upd')

let outputVar = 0
let tempVar = 0
let res = 0

currentOperator.innerText = ''
console.log('INITIALIZED VALUES')
console.log(`currentOperator: ${currentOperator.innerText}`)
console.log(`tempVar: ${tempVar}`)
console.log(`outputVar: ${outputVar}`)
console.log(`res: ${res}`)

upd.innerHTML += `<P>INITIALIZED VALUES</p>`
upd.innerHTML += `<P>Current Operator: ${currentOperator.innerText}</p>`
upd.innerHTML += `<P>Output Variable: ${outputVar}</p>`
upd.innerHTML += `<P>Temp Variable: ${tempVar}</p>`
upd.innerHTML += `<P>Result: ${res}</p>`
upd.innerHTML += `<br>`

buttons.forEach(button => {
    button.addEventListener('click', e => {
        switch (e.target.innerText) {
            case 'C':
                output.innerText = '0'
                temp.innerText = '0'
                res = '0'
                outputVar = '0'
                tempVar = '0'
                currentOperator.innerText = ''
                upd.innerText = ''
                upd.innerHTML += `<P>CLEARING THE VALUES</p>`
                upd.innerHTML += `<P>Current Operator: ${currentOperator.innerText}</p>`
                upd.innerHTML += `<P>Output Variable: ${outputVar}</p>`
                upd.innerHTML += `<P>Temp Variable: ${tempVar}</p>`
                upd.innerHTML += `<P>Result: ${res}</p>`
                upd.innerHTML += `<br>`
                console.log(`tempVar: ${tempVar}`)
                console.log(`outputVar: ${outputVar}`)
                console.log(`res: ${res}`)
                console.log(`currentOperator: ${currentOperator.innerText}`)
                break;
            case '←':
                if(output.innerText > '0'){
                    output.innerText = output.innerText.slice(0,-1)
                }
                if (output.innerText <= '0') {
                    output.innerText = 0
                }
                break;
            case '=':
                outputVar = output.innerText
                console.log('CALCULATING:')
                console.log('VALUES BEFORE THE CALCULATION')
                console.log(`currentOperator: ${currentOperator.innerText}`)
                console.log(`tempVar: ${tempVar}`)
                console.log(`outputVar: ${outputVar}`)
                console.log(`res: ${res}`)
                console.log(tempVar + currentOperator.innerText + outputVar)
                res = eval(tempVar + currentOperator.innerText + outputVar)
                console.log(res)
                upd.innerHTML += `<P>CALCULATING:</p>`
                upd.innerHTML += `<P>Current Operator: ${currentOperator.innerText}</p>`
                upd.innerHTML += `<P>Output Variable: ${outputVar}</p>`
                upd.innerHTML += `<P>Temp Variable: ${tempVar}</p>`
                upd.innerHTML += `<P>Result: ${res}</p>`
                upd.innerHTML += `<br>`
                outputVar = 0
                temp.innerText = 0
                tempVar = 0
                currentOperator.innerText = 0
                output.innerText = res
                console.log('VALUES AFTER THE CALCULATION')
                console.log(`currentOperator: ${currentOperator.innerText}`)
                console.log(`tempVar: ${tempVar}`)
                console.log(`outputVar: ${outputVar}`)
                console.log(`res: ${res}`)
                break;
            case '+':
                console.log('ADDITION OPERATON:')
                upd.innerHTML += `<P>ADDITION OPERATON:</p>`
                if (output.innerText === '0') {
                    return
                }

                else{
                    console.log('currentOperator took +')
                    currentOperator.innerText = '+'
                    outputVar = output.innerText
                    res = eval(tempVar + currentOperator.innerText + outputVar)
                    console.log(`currentOperator: ${currentOperator.innerText}`)
                    console.log(`tempVar: ${tempVar}`)
                    console.log(`outputVar: ${outputVar}`)
                    console.log(`res: ${res}`)
                    upd.innerHTML += `<P>Current Operator: ${currentOperator.innerText}</p>`
                    upd.innerHTML += `<P>Output Variable: ${outputVar}</p>`
                    upd.innerHTML += `<P>Temp Variable: ${tempVar}</p>`
                    upd.innerHTML += `<P>Result: ${res}</p>`
                    upd.innerHTML += `<br>`
                    temp.innerText = res
                    tempVar = res
                    output.innerText = '0'

                }
                break;
            case '-':
                console.log('SUBTRACTION OPERATON:')
                upd.innerHTML += `<P>SUBTRACTION OPERATON:</p>`
                if (output.innerText === '0') {
                    return
                }
                else{
                    if (tempVar === '0') {
                        alert('its zero')
                    }
                    outputVar = output.innerText
                    res = eval(tempVar + currentOperator.innerText + outputVar)
                    console.log('currentOperator took -')
                    currentOperator.innerText = '-'
                    console.log(`currentOperator: ${currentOperator.innerText}`)
                    console.log(`tempVar: ${tempVar}`)
                    console.log(`outputVar: ${outputVar}`)
                    console.log(`res: ${res}`)
                    upd.innerHTML += `<P>Current Operator: ${currentOperator.innerText}</p>`
                    upd.innerHTML += `<P>Output Variable: ${outputVar}</p>`
                    upd.innerHTML += `<P>Temp Variable: ${tempVar}</p>`
                    upd.innerHTML += `<P>Result: ${res}</p>`
                    upd.innerHTML += `<br>`
                    temp.innerText = res
                    tempVar = res
                    output.innerText = '0'
                }
                break;
            case 'x':
                console.log('MULTIPLICATION OPERATON:')
                upd.innerHTML += `<P>MULTIPLICATION OPERATON:</p>`
                if (output.innerText === '0') {
                    return
                }
                else{
                    outputVar = output.innerText
                    res = eval(tempVar + currentOperator.innerText + outputVar)
                    console.log('currentOperator took *')
                    currentOperator.innerText = '*'
                    console.log(`currentOperator: ${currentOperator.innerText}`)
                    console.log(`tempVar: ${tempVar}`)
                    console.log(`outputVar: ${outputVar}`)
                    console.log(`res: ${res}`)
                    temp.innerText = res
                    upd.innerHTML += `<P>Current Operator: ${currentOperator.innerText}</p>`
                    upd.innerHTML += `<P>Output Variable: ${outputVar}</p>`
                    upd.innerHTML += `<P>Temp Variable: ${tempVar}</p>`
                    upd.innerHTML += `<P>Result: ${res}</p>`
                    upd.innerHTML += `<br>`
                    tempVar = res
                    output.innerText = '0'
                }
                break;

            case '/':
                console.log('DIVISION OPERATON:')
                upd.innerHTML += `<P>DIVISION OPERATON:</p>`
                if (output.innerText === '0') {
                    return
                }
                else{
                    outputVar = output.innerText
                    res = eval(tempVar + currentOperator.innerText + outputVar)
                    console.log('currentOperator took /')
                    currentOperator.innerText = '/'
                    console.log(`currentOperator: ${currentOperator.innerText}`)
                    console.log(`tempVar: ${tempVar}`)
                    console.log(`outputVar: ${outputVar}`)
                    console.log(`res: ${res}`)
                    upd.innerHTML += `<P>Current Operator: ${currentOperator.innerText}</p>`
                    upd.innerHTML += `<P>Output Variable: ${outputVar}</p>`
                    upd.innerHTML += `<P>Temp Variable: ${tempVar}</p>`
                    upd.innerHTML += `<P>Result: ${res}</p>`
                    upd.innerHTML += `<br>`
                    temp.innerText = res
                    tempVar = res
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

// currentOperator.forEach(operator => {
//     operator.addEventListener('click', e => {
//         switch (operator.innerText) {
//             case '+':

//                 // outputVar = output.innerText
//                 break;
//                 case '-':
//                     console.log('SUB')
//                     res = eval(output.innerText + currentOperator.innerText + temp.innerText)
//                     console.log(`output is :${output.innerText}`) 
//                     console.log(`temp is :${temp.innerText}`)
//                     console.log(`res is:${res}`)
//                     if (res) {
//                         temp.innerText = res
//                     }
//                     res = temp.innerText
//                 break;
//                 case 'x':
//                     console.log('DIV')
//                     res = eval(output.innerText + currentOperator.innerText + temp.innerText)
//                     console.log(`output is :${output.innerText}`) 
//                     console.log(`temp is :${temp.innerText}`)
//                     console.log(`res is:${res}`)
//                     if (res) {
//                         temp.innerText = res
//                     }
//                     res = temp.innerText
//                 break;
//                 case '/':
//                     console.log('SUB')
//                     res = eval(output.innerText + currentOperator.innerText + temp.innerText)
//                     console.log(`output is :${output.innerText}`) 
//                     console.log(`temp is :${temp.innerText}`)
//                     console.log(`res is:${res}`)
//                     if (res) {
//                         temp.innerText = res
//                     }
//                     res = temp.innerText
//                 break;
//             default:
//                 break;
//         }
//     })
// });


