const formData = new FormData(document.querySelector('form'))
const inputValue = formData.get("symbols")

function a(){
    document.getElementById('symbols').checked = true ? console.log(inputValue) : none
}