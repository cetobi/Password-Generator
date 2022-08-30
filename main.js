let slider = document.getElementById("myRange");
let output = document.getElementById("number");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
} 

function createPassword() {
    const regex = /^(?=(?:.*?[A-Z]){3})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;

    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const symbols = '!@#$%&*_-+=[]{}<>.;:?^~'.split('')
    const password = []
    const valueRange = slider.value

    const up = document.getElementById('uppercase')
    const low = document.getElementById('lowercase')
    const num = document.getElementById('numbers')
    const sym = document.getElementById('symbols')

    if(!up.checked && !low.checked && !num.checked && !sym.checked){
        document.querySelector('h1').innerHTML = 'É necessário marcar uma opção!'
    }else{
        document.querySelector('h1').innerHTML = 'Password Generator'
        //while(!regex.exec(password)){
            for(let i=0; i<valueRange; i++){
                let caracter = Math.floor(Math.random()*(9-0)+0)
                password.push(caracter)
            }
        //}
        document.getElementById('password').value = password.join('')
    }
}

function btnCopy(){
    const copyText = document.getElementById('password').value
    navigator.clipboard.writeText(copyText)
}

document.getElementById('btnCopy').onclick = function(){btnCopy()}
document.getElementById('btnGenerate').onclick = function(){createPassword()}