const cajaCards = document.getElementById("productos")
const verCarrito = document.getElementById("verCarrito")
const cerrarCarrito = document.getElementById("btnCerrarCarrito")
const ventanaCarrito = document.getElementById("carritoCards")
const seMuestraProducto = document.getElementById("seMuestraProducto")
const formulario = document.getElementById("overlay")
const btnCerrarFormulario = document.getElementById("brn-cerrar-popup")
const btnGuardar = document.getElementById("btnDatos")
const btnContinuar = document.getElementById("continuar")
const cardInfor = document.getElementById("date")
const contadorCarrito = document.getElementById("contador")
const totalPagar = document.getElementById("total")
const btnPagar = document.getElementById("btnPagar")
const contador = document.getElementById("contar")
const btnSumar = document.getElementById("incr")
const btnRestar = document.getElementById("decr")

const url = "../json/productos.json"
let numero = 0
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
let almacenar =  []
let renderizarProducto = ""
let arrayInput =  []

const registro = document.getElementById("verCard")

registro.addEventListener('click',()=>{
    formulario.classList.add("activeDos")

})