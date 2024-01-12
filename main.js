function checkInputs(){
    const inputs = document.querySelectorAll('.form-control input')
    inputs.forEach(input =>{
        if(input.value.trim() === ""){
         setErrorFor(input, "Este campo é obrigatorio")
        }
        else{
            setSucessFor(input)
        }
    })
}
function setErrorFor(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = message
    small.style.visibility = 'visible'
}
function setSucessFor(input){
    const formControl = input.parentElement
    formControl.className = 'form-control sucess'
}
 function removeError(input){
    const formControl =input.parentElement;
    formControl.className = 'form-control';;
    const small = formControl.querySelector('small');
    small.innerText = "";
    small.style.visibility = "hidden"

 }
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form').addEventListener('submit', function(e){
        e.preventDefault()
        window.location.reload()
        checkInputs()
    } )
})

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById("form")
    const passwordInput =  document.getElementById("password")
    const passwordInputConfirmation = document.getElementById("password-confirmation")
    const smallColorido = document.getElementsById("colirido-small")
    if(passwordInput.value !== passwordInputConfirmation.value ){
        smallColorido.innerText = "As senhas tem que ser iguais"
    }
    else{
        smallColorido.innerText = " "
    }
})
const inputs = document.querySelectorAll('.form-control input');
inputs.forEach(input =>{
input.addEventListener('blur', checkInputs)
input.addEventListener('focus', function (){
    removeError(input)
})
})



