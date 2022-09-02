const up = document.getElementById('uppercase')
const low = document.getElementById('lowercase')
const num = document.getElementById('numbers')
const sym = document.getElementById('symbols')

let slider = document.getElementById("myRange");
let output = document.getElementById("number");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
} 

//Função para gerar a senha
function createPassword() {
    let password = [], regex
    const valueRange = slider.value

    const upChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const lowChar = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const numChar = '0123456789'.split('')
    const symChar = '!@#$%*()_+^&}{:;?.'.split('')

    if(!up.checked && !low.checked && !num.checked && !sym.checked){
        document.querySelector('h1').innerHTML = 'É necessário marcar uma opção!'
    }else{
        document.querySelector('h1').innerHTML = 'Password Generator' 

        if (up.checked && low.checked && num.checked && sym.checked) {
            regex = /^(?=(?:.*?[a-z]){1})(?=(?:.*?[A-Z]){3})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
            while (!regex.exec(password.join(''))) {
                password = gerarArray(upChar, lowChar, numChar, symChar)
            }
        }//UPPERCASE,LOWERCASE,NUMBERS,SYMBOLS

        else if (up.checked && low.checked && num.checked) {
            regex = /^(?=(?:.*?[a-z]){1})(?=(?:.*?[A-Z]){2})(?=(?:.*?[0-9]){2})(?!.*\s)[0-9a-zA-Z]*$/;
            while (!regex.exec(password.join(''))) {
                password = gerarArray(upChar, lowChar, numChar)
            }
        }//UPPERCASE,LOWERCASE,NUMBERS

        else if (up.checked && low.checked && sym.checked) {
            regex = /^(?=(?:.*?[a-z]){1})(?=(?:.*?[A-Z]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
            while (!regex.exec(password.join(''))) {
                password = gerarArray(upChar, lowChar, symChar)
            }
        }//UPPERCASE,LOWERCASE,SYMBOLS

        else if (up.checked && num.checked && sym.checked) {
            regex = /^(?=(?:.*?[A-Z]){2})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
            while (!regex.exec(password.join(''))) {
                password = gerarArray(upChar, numChar, symChar)
            }
        }//UPPERCASE,NUMBERS,SYMBOLS

        else if (low.checked && num.checked && sym.checked) {
            regex = /^(?=(?:.*?[a-z]){2})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
            while (!regex.exec(password.join(''))) {
                password = gerarArray(lowChar, numChar, symChar)
            }
        }//LOWERCASE,NUMBERS,SYMBOLS

        else if (up.checked && low.checked) {
            regex = /^(?=(?:.*?[a-z]){2})(?=(?:.*?[A-Z]){2})(?!.*\s)[0-9a-zA-Z]*$/;
            while (!regex.exec(password.join(''))) {
                password = gerarArray(upChar, lowChar)
            }
        }//UPPERCASE,LOWERCASE

        else if (up.checked && num.checked) {
            regex = /^(?=(?:.*?[A-Z]){2})(?=(?:.*?[0-9]){2})(?!.*\s)[0-9a-zA-Z]*$/;
            while (!regex.exec(password.join(''))) {
                password = gerarArray(upChar, numChar)
            }
        }//UPPERCASE,NUMBERS

        else if (up.checked && sym.checked) {
            regex = /^(?=(?:.*?[A-Z]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
            while (!regex.exec(password.join(''))) {
                password = gerarArray(upChar, symChar)
            }
        }//UPPERCASE,SYMBOLS

        else if (low.checked && num.checked) {
            regex = /^(?=(?:.*?[a-z]){2})(?=(?:.*?[0-9]){2})(?!.*\s)[0-9a-zA-Z]*$/;
            while (!regex.exec(password.join(''))) {
                password = gerarArray(lowChar, numChar)
            }
        }//LOWERCASE,NUMBERS

        else if (low.checked && sym.checked) {
            regex = /^(?=(?:.*?[a-z]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
            while (!regex.exec(password.join(''))) {
                password = gerarArray(lowChar, symChar)
            }
        }//LOWERCASE,SYMBOLS

        else if (num.checked && sym.checked) {
            regex = /^(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){2})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
            while (!regex.exec(password.join(''))) {
                password = gerarArray(numChar, symChar)
            }
        }//NUMBERS,SYMBOLS

        else if (up.checked) {
            password = gerarArray(upChar)
        }
        else if (low.checked) {
            password = gerarArray(lowChar)
        }
        else if (num.checked) {
            password = gerarArray(numChar)
        }
        else if (sym.checked) {
            password = gerarArray(symChar)
        }
              
        document.getElementById('password').value = password.join('')
        difficultPassword()
    }
    
    //Função para gerar o array da senha, com base nos caracteres selecionados
    function gerarArray(arr1, arr2 = [], arr3 = [], arr4 = []) {
        let arr = arr1.concat(arr2, arr3, arr4)
        let vetor = []

        for (i = 0; i < valueRange; i++) {
            let index = Math.floor(Math.random() * arr.length)
            vetor.push(arr[index])
        }
        return vetor
    }
}

//Função para copiar a senha gerada
function btnCopy(){
    const copyText = document.getElementById('password').value
    navigator.clipboard.writeText(copyText)
}

//Função para verificar a dificuldade da senha
function difficultPassword(){
    const valueRange = slider.value
    const inputArray = Array.from(document.querySelectorAll('input[type=checkbox]'))
    const spanLevel = Array.from(document.querySelectorAll('.lvl'))
    let check = 0

    for(i=0; i<4; i++){
        if(inputArray[i].checked){
            check++
        }
    }


    if(check === 4 || check > 1 && valueRange >= 15){
        document.getElementById('difficult').innerHTML = 'HARD'
        spanLevel.forEach((item) => {
            item.classList.add('expose')
        })
    }
    else if(check === 1 || check < 3 && valueRange < 10){
        document.getElementById('difficult').innerHTML = 'EASY'
        spanLevel.forEach((item) => {
            item.classList.remove('expose')
        })
        spanLevel[0].classList.add('expose')
    }
    else{
        document.getElementById('difficult').innerHTML = 'MEDIUM'
        spanLevel.forEach((item) => {
            item.classList.remove('expose')
        })
        spanLevel[0].classList.add('expose')
        spanLevel[1].classList.add('expose')
    }
}

document.getElementById('btnCopy').onclick = function(){btnCopy()}
document.getElementById('btnGenerate').onclick = function(){createPassword()}

