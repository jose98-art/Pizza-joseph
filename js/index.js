const btnGuardar = document.querySelector("#capturar")
var btnAbrirPopup = document.getElementById("btn-abrir-popup")
var overley = document.getElementById("overlay")
var popup = document.getElementById("popup")
var btnCerrarPopup = document.getElementById("brn-cerrar-popup");
btnGuardar.addEventListener("click",Capturar)


const datosInput = document.getElementsByClassName("datos"),arrayGuardar = []
function Capturar(){
    for(var i = 0; i < datosInput.length; i++){
        arrayGuardar[i]= datosInput[i].value
        localStorage.setItem(arrayGuardar, datosInput)
        const inprimir = document.querySelector(".cards")
        inprimir.innerHTML = ` <div class="icono"><i class="fa-solid fa-user-large"></i></div>
                                <div class="date">
                                    <h1 id="nombreUsuario">${datosInput[0].value}</h1>
                                </div>

                                <div class="date">
                                    <h1>Datos:</h1>
                                        <p id="emailCard">Correo: ${datosInput[1].value}</p>
                                        <p id="numeroCard">Cel: ${datosInput[2].value}</p>        
                                </div>

                                <div class="date">
                                    <h1>Direccion:</h1>
                                    <p id="ciudadCard">Ciudad: ${datosInput[3].value}</p>
                                    <p id="calleCard">Calle: ${datosInput[4].value}</p>
                                    <p id="coloniaCard">Colonia: ${datosInput[5].value}</p>
                                    <p id="codigoCard">CP: ${datosInput[6].value}</p>
                                    <p id="numCard">NumExt: ${datosInput[7].value}</p>
                                </div>` 
    }
}

btnAbrirPopup.addEventListener("click",()=>{
    overley.classList.add('active')
})
btnCerrarPopup.addEventListener("click",()=>{
    overley.classList.remove('active')
})
