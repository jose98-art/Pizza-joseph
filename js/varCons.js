const btnAbrirMenu = document.getElementById("ocultar")
const ocultarP = document.getElementById("portada")
const ocultarF = document.getElementById("footerPortada")
const btnVerMenuPizza = document.getElementById("verPizza")
const menuPizza = document.getElementById("menuPizza")
const contPizzas = document.getElementById("pizzas")
const btnVerMenuEnsalada = document.getElementById("verEnsalada")
const btnVerMenuSoda = document.getElementById("verSodas")
const btnVerMenuAlita = document.getElementById("verAlitas")
const btnVerMenuPostre = document.getElementById("verPostre")
const btnCerrasEnsa = document.getElementById("btnCerrasEnsa")
const btnCerrasSod = document.getElementById("btnCerrasSod")
const btnCerrasAli = document.getElementById("btnCerrasAli")
const btnCerrasPos = document.getElementById("btnCerrasPos")
const menuEnsalada = document.getElementById("menuEnsalda")
const menuSoda = document.getElementById("menuSoda")
const menuAlita = document.getElementById("menuAlitas")
const menuPostre = document.getElementById("menuPostre")
const abrirRegistr = document.getElementById("registro") 
const btnAbrirFormulario = document.getElementById("btnAbrirFormulario")
const btnCerrarFormulario = document.getElementById("brn-cerrar-popup")
const formulario = document.getElementById("overlay") 
const verRegistro = document.getElementsByName("registro")
const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const telef = document.getElementById("telef")
const direccion  = document.getElementById("direccion")
const btnGenerar = document.getElementById("capturar")

const btnAbrirCard = document.getElementById("verCard")
const btnCerrarCard = document.getElementById("btnCerrarCard")
const cardCerrar = document.getElementById("cards")

const btnGuardar = document.getElementById("guardar")

let datosCompletos = JSON.parse(localStorage.getItem("datos")) || []

var carrito = []

