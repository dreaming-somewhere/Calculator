// output variables

const output = document.querySelector('.result-1')
const temp = document.querySelector('.result-0')
let tempRes

// buttons variables

const buttons = document.querySelectorAll('.number')


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
                    if(!output.innerText){
                        output.innerText= '0'
                    }
                }
                break;
            case '+':
                if (!output.innerText) {
                    temp.innerText = output.innerText
                }
                else{
                    temp.innerText += output.innerText
                }
                break;
            default:
                if (output.innerText === '0') {
                    output.innerText = e.target.innerText
                }
                else{
                    if (e.target.textContent === '.' && output.innerText.includes('.')) {
                        return
                    }
                    output.innerText += e.target.innerText
                }
                break;
        }
    })
});