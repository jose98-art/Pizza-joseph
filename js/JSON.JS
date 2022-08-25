const btnGenerar = document.querySelector("#capturar")
const btnGuardar = document.querySelector("#borrar")
const cards = document.querySelector(".cards")
var btnAbrirPopup = document.getElementById("btn-abrir-popup")
var overley = document.getElementById("overlay")
var popup = document.getElementById("popup")
var btnCerrarPopup = document.getElementById("brn-cerrar-popup");

const nombre = document.querySelector("#nombre")
const correo = document.querySelector("#correo")
const telef = document.querySelector("#telef")
const direccion  = document.querySelector("#direccion")
let datosCompletos = JSON.parse(localStorage.getItem("datos")) || []

btnAbrirPopup.addEventListener("click",()=>{
    overley.classList.add('active')
})
btnCerrarPopup.addEventListener("click",()=>{
    overley.classList.remove('active')
})

btnGenerar.addEventListener('click',numeroUsuario)
btnGuardar.addEventListener('click',guardarDatosUsuario)

function numeroUsuario(){
    nombre.value = ""
    correo.value = ""
    telef.value = ""
    direccion.value = ""
    nombre.focus()
}

function guardarDatosUsuario(){
    if(nombre.value != "" && correo.value != "" && telef.value != "" && direccion.value != "" && nombre.value != ""){
        const datosUsuario ={
            nombre: nombre.value,
            correo: correo.value,
            telef: telef.value,
            direccion: direccion.value,
        }
        datosCompletos.push(datosUsuario)
        localStorage.setItem("datos", JSON.stringify(datosCompletos))
    }
    crearCards()
}

function crearCards(){
    cards.innerHTML = ""
    datosCompletos.forEach(dat =>{
        cards.innerHTML = ` <div class="icono"><i class="fa-solid fa-user-large"></i></div>
                    <div class="date">
                        <h1 id="nombreUsuario">${dat.nombre}</h1>
                    </div>

                    <div class="date">
                        <h1>Datos:</h1>
                            <p id="emailCard">Correo: ${dat.correo}</p>
                            <p id="numeroCard">Cel: ${dat.telef}</p>        
                            <p id="numeroCard">Direccion: ${dat.direccion}</p>        
                    </div>` 
    })
    
}
crearCards()