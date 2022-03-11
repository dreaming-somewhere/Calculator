// output variables

const output = document.querySelector('.result-1')
const temp = document.querySelector('.result-0')
let currentOperator
// buttons variables

const buttons = document.querySelectorAll('.button')


buttons.forEach(button => {
    button.addEventListener('click', e => {
        switch (e.target.innerText) {
            case 'C':
                output.innerText = '0'
                temp.innerText = '0'
                break;
            case '←':
                if(output.innerText > '0'){
                    output.innerText = output.innerText.slice(0,-1)
                }
                break;
            case '+':
                currentOperator = '+'
                if (output.innerText === '0') {
                    return
                }
                else{
                    temp.innerText = output.innerText + '+'
                    output.innerText = '0'    
                }
                break;
            case '-':
                currentOperator = '-'
                if (output.innerText === '0') {
                    return
                }
                else{
                    temp.innerText = output.innerText + '-'
                    output.innerText = '0'    
                }
                break;
            case 'x':
                currentOperator = 'x'
                if (output.innerText === '0') {
                    return
                }
                else{
                    temp.innerText = output.innerText + 'x'
                    output.innerText = '0'    
                }
                break;
            case '/':
                currentOperator = '-'
                if (output.innerText === '0') {
                    return
                }
                else{
                    temp.innerText = output.innerText + '/'
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
        switch (currentOperator) {
            case '+':
                let res
                res = output.innerText + temp.innerText
                console.log(`output is:${output.innerText}`) // what the fuck did i jsut do
                console.log(`temp is:${temp.innerText}`)
                console.log(`res is:${res}`)
                break;
        
            default:
                break;
        }
    })
});

