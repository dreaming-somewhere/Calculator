// output variables

const output = document.querySelector('.result-1')
const temp = document.querySelector('.result-0')
let tempRes

// buttons variables

const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
    button.addEventListener('click', e => {
        output.innerText += e.target.innerText
    })
});