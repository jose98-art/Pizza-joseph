const pizzasCargar = [
    {id:1, img:"./image/pizzaMargarita.jpg", nombre:"Margarita", precioG: 180, precioCh:210,},
    {id:2, img:"./image/pizzaPepperoni.jpg", nombre:"Pepperoni",  precioG: 00,  precioCh:00,},
    {id:3, img:"./image/pizzaCuatroQuesos.jpg", nombre:"Cuatro Quesos",  precioG: 00, precioCh:00,},
    {id:4, img:"./image/pizzaChampi.jpg", nombre:"Champiñon",  precioG: 00,  precioCh:00,},
    {id:5, img:"./image/pizzaMarinera.jpg", nombre:"Marinera",  precioG: 00,  precioCh:00,},
    {id:6, img:"./image/pizzaNapolitao.jpg", nombre:"Napolitana",  precioG: 00,  precioCh:00,},
    {id:7, img:"./image/pizzaNYQ.jpeg", nombre:"Neoyorquina",  precioG: 00,  precioCh:00,},
    {id:8, img:"./image/pzzafugazza.jpg", nombre:"Fugazza",  precioG: 00,  precioCh:00,},
    {id:9, img:"./image/pizzaCuatroEstaciones.jpg", nombre:"Cuatro Estaciones",  precioG: 00,  precioCh:00,},
    {id:10, img:"./image/hawaiana.jpg",nombre:"Hawaiana",  precioG: 00,  precioCh:00,}
]
const ensaladasCargar = [
    {id:1, img:"./image/ensaladaCaprese.jpg", nombre:"Caprese", precioG: 180, precioCh:210,},
    {id:2, img:"./image/ensaladaCesar.jpg", nombre:"Cesar",  precioG: 00,  precioCh:00,},
    {id:3, img:"./image/ensaladaColeslaw.jpg", nombre:"Coleslaw",  precioG: 00, precioCh:00,},
    {id:4, img:"./image/ensaladaGrega.jpg", nombre:"Grega",  precioG: 00,  precioCh:00,},
    {id:5, img:"./image/ensaladaMixta.jpg", nombre:"Mixta",  precioG: 00,  precioCh:00,},
    {id:6, img:"./image/ensaladaNicoise.jpg", nombre:"Nicoise",  precioG: 00,  precioCh:00,},
    {id:7, img:"./image/ensaladaPanzanella.jpg", nombre:"Panzanella",  precioG: 00,  precioCh:00,},
    {id:8, img:"./image/ensaladaRusa.jpg", nombre:"Rusa",  precioG: 00,  precioCh:00,},
    {id:9, img:"./image/ensaladaTabule.jpg", nombre:"Tabule",  precioG: 00,  precioCh:00,},
    {id:10, img:"./image/ensaladaWaldorf.jpg",nombre:"Waldorf",  precioG: 00,  precioCh:00,}
]
const sodasCargar = [
    {id:1, img:"./image/rCoca.jpg", nombre:"", precioG: 180, precioCh:210,},
    {id:2, img:"./image/rFanta.jpg", nombre:"",  precioG: 00,  precioCh:00,},
    {id:3, img:"./image/rPepper.jpg", nombre:"",  precioG: 00, precioCh:00,},
    {id:4, img:"./image/rPepsi.jpg", nombre:"",  precioG: 00,  precioCh:00,},
    {id:5, img:"./image/rSprite.jpg", nombre:"",  precioG: 00,  precioCh:00,}
]
const alitasCargar = [
    {id:1, img:"./image/alitasAjillo.jpg", nombre:"", precioG: 180, precioCh:210,},
    {id:2, img:"./image/alitasBuffalo.jpg", nombre:"",  precioG: 00,  precioCh:00,},
    {id:3, img:"./image/alitasCitricos.jpg", nombre:"",  precioG: 00, precioCh:00,},
    {id:4, img:"./image/alitasCurry.jpg", nombre:"",  precioG: 00,  precioCh:00,},
    {id:5, img:"./image/alitasDeshuesadas.jpg", nombre:"",  precioG: 00,  precioCh:00,},
    {id:6, img:"./image/alitasSoja.jpg", nombre:"",  precioG: 00,  precioCh:00,}
]
const postresCargar = [
    {id:1, img:"./image/pGelato.png", nombre:"", precioG: 180, precioCh:210,},
    {id:2, img:"./image/pMilHojas.jpg", nombre:"",  precioG: 00,  precioCh:00,},
    {id:3, img:"./image/pPanaCotta.jpg", nombre:"",  precioG: 00, precioCh:00,},
    {id:4, img:"./image/pTarta.jpg", nombre:"",  precioG: 00,  precioCh:00,},
    {id:5, img:"./image/pTiramisu.jpg", nombre:"",  precioG: 00,  precioCh:00,},
    {id:6, img:"./image/pPatafrola.jpg", nombre:"",  precioG: 00,  precioCh:00,}
]

const agregarProductoPizza = document.getElementById('pizzas')
pizzasCargar.forEach((producto) =>{
    agregarProductoPizza.innerHTML += `
                                <div class="producPizza">
                                    <div class="imagen">
                                            <img src=${producto.img} alt="N">
                                    </div>
                                    <div class="nombrePizza">
                                        <h5>${producto.nombre}</h5>
                                    </div>
                                    <div class="iforma">
                                        <div class="contePrecio">
                                                <p class="precio">G $ ${producto.precioG}</p>
                                                <button class="buttonAgregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
                                        <div class="contePrecio">
                                            <p class="precio">CH $ ${producto.precioCh}</p>
                                            <button class="buttonAgregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
                                    </div>
                                </div>`
})

const agregarProductoEnsalada = document.getElementById('ensalada')
ensaladasCargar.forEach((producto) =>{
    agregarProductoEnsalada.innerHTML += `
                                <div class="producEnsalada">
                                    <div class="imagen">
                                            <img src=${producto.img} alt="N">
                                    </div>
                                    <div class="nombreEnsalada">
                                        <h5>${producto.nombre}</h5>
                                    </div>
                                    <div class="iforma">
                                        <div class="contePrecio">
                                                <p class="precio">G $ ${producto.precioG}</p>
                                                <button class="buttonAgregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
                                        <div class="contePrecio">
                                            <p class="precio">CH $ ${producto.precioCh}</p>
                                            <button class="buttonAgregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
                                    </div>
                                </div>`
})

const agregarProductoSoda = document.getElementById('soda')
sodasCargar.forEach((producto) =>{
    agregarProductoSoda.innerHTML += `
                                <div class="producSoda">
                                    <div class="imagen">
                                            <img src=${producto.img} alt="N">
                                    </div>
                                    <div class="nombreSoda">
                                        <h5>${producto.nombre}</h5>
                                    </div>
                                    <div class="iforma">
                                        <div class="contePrecio">
                                                <p class="precio">G $ ${producto.precioG}</p>
                                                <button class="buttonAgregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
                                        <div class="contePrecio">
                                            <p class="precio">CH $ ${producto.precioCh}</p>
                                            <button class="buttonAgregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
                                    </div>
                                </div>`
})

const agregarProductoAlita = document.getElementById('alitas')
alitasCargar.forEach((producto) =>{
    agregarProductoAlita.innerHTML += `
                                <div class="producAlita">
                                    <div class="imagen">
                                            <img src=${producto.img} alt="N">
                                    </div>
                                    <div class="nombreAlita">
                                        <h5>${producto.nombre}</h5>
                                    </div>
                                    <div class="iforma">
                                        <div class="contePrecio">
                                                <p class="precio">G $ ${producto.precioG}</p>
                                                <button class="buttonAgregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
                                        <div class="contePrecio">
                                            <p class="precio">CH $ ${producto.precioCh}</p>
                                            <button class="buttonAgregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
                                    </div>
                                </div>`
})

const agregarProductoPostre = document.getElementById('postre')
postresCargar.forEach((producto) =>{
    agregarProductoPostre.innerHTML += `
                                <div class="producPostre">
                                    <div class="imagen">
                                            <img src=${producto.img} alt="N">
                                    </div>
                                    <div class="nombrePostre">
                                        <h5>${producto.nombre}</h5>
                                    </div>
                                    <div class="iforma">
                                        <div class="contePrecio">
                                                <p class="precio">G $ ${producto.precioG}</p>
                                                <button class="buttonAgregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
                                        <div class="contePrecio">
                                            <p class="precio">CH $ ${producto.precioCh}</p>
                                            <button class="buttonAgregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
                                    </div>
                                </div>`
})

function registroUsuario(){
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

const cards = document.getElementById("cardUsuario")

function crearCards(){
    cards.innerHTML = ""
    datosCompletos.forEach(dat =>{
        cards.innerHTML = ` 
        <div class="icono"><i class="fa-solid fa-user-large"></i></div>
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

btnGenerar.addEventListener('click',registroUsuario)
btnGuardar.addEventListener('click',guardarDatosUsuario)
crearCards()