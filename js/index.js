const btnGuardar = document.querySelector("#capturar")

btnGuardar.addEventListener("click",Capturar)

const datosInput = document.getElementsByClassName("datos"),arrayGuardar = []
function Capturar(){
    for(var i = 0; i <datosInput.length; i++){
        arrayGuardar[i]= datosInput[i].value
        const inprimir = document.querySelector(".cards")
        inprimir.innerHTML += `<p>${datosInput[i].value}</p>`
       
    }
}