// output variables

const output = document.querySelector('.result-1')
const temp = document.querySelector('.result-0')
let tempRes

// buttons variables

const buttons = document.querySelectorAll('.button')


buttons.forEach(button => {
    button.addEventListener('click', e => {
        switch (e.target.innerText) {
            case 'C':
                output.innerText = '0'
                break;
            case '←':
                if(output.innerText > '0'){
                    output.innerText = output.innerText.slice(0,-1)
                }
                break;
            case '+':
                temp.innerText += output.innerText
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