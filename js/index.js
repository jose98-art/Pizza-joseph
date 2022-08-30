const agregarProductoPizza = document.getElementById('pizzas')
function crearCardsPizza(){
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
                                                    <p class="precio"> $ ${producto.precio}</p>
                                                    <button id="btnAgregar${producto.id}" class="buttonAgregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                            </div>
                                        
                                        </div>
                                    </div>`
    })
}

function botonAgregar(){
    pizzasCargar.forEach(prod =>{
        document.getElementById(`btnAgregar${prod.id}`).addEventListener('click', ()=>{
            console.log(prod)
            agregarCarrito(prod)
        })
    })
}

function agregarCarrito(prod){
    let existe = carrito.some((productoSome) => productoSome.id === prod.id)
    if (existe === false){
        prod.cantidad = 1
        carrito.push(prod)
    }else{
        let prodFind = carrito.find((productoFind) => productoFind.id == prod.id)
        prodFind.cantidad++
    }
    // carrito.push(prod)
    console.log(carrito)
    presentandoCarrito()
}

function presentandoCarrito(prod){
    seMuestraProducto.innerHTML = ""
    carrito.forEach(prod =>{
        seMuestraProducto.innerHTML += ` 
        <div class="articulos">
        <p>${prod.nombre}</p>
        <p>${prod.precio}</p>
        <p>${prod.cantidad}</p>
        <p class="eliminar" id="eliminar${prod.id}"><i class="fa-solid fa-trash-can"></i></p>
      </div>`
    })
    localStorage.setItem("carrito",JSON.stringify(carrito))
    borrarProducto()
    contadorYlocal()
    
}

function contadorYlocal(){
    contador.innerText = carrito.length
    totalPagar.innerText = carrito.reduce((acc, prod)=>acc+(prod.precio * prod.cantidad),0)
}

function borrarProducto(){
    carrito.forEach(prod =>{
        document.getElementById(`eliminar${prod.id}`).addEventListener('click', ()=>{
            console.log("click",prod)
            carrito = carrito.filter((productosFilter) => productosFilter.id !== prod.id)
            presentandoCarrito()
            

    })
    }
    )
}

presentandoCarrito()
crearCardsPizza()
botonAgregar() 


const agregarProductoEnsalada = document.getElementById('ensalada')
function crearCardsEnsalada(){
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
                                                    <p class="precio"> $ ${producto.precio}</p>
                                                    <button id="agregarEnsalada${producto.id}" class="buttonAgregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                            </div>
                                           
                                        </div>
                                    </div>`
    })
}

function agregarEnsalada(){
    ensaladasCargar.forEach(prod =>{
        document.getElementById(`agregarEnsalada${prod.id}`).addEventListener('click',()=>{
            console.log(prod)
            agregarCarritoEnsalada(prod)
        })
    })
}

function agregarCarritoEnsalada(prod){
    let existe = carrito.some((productoSome) => productoSome.id === prod.id)
    if (existe === false){
        prod.cantidad = 1
        carrito.push(prod)
    }else{
        let prodFind = carrito.find((productoFind) => productoFind.id == prod.id)
        prodFind.cantidad++
    }
    console.log(carrito)
    agregarEnsaladaCarrito()
}
function agregarEnsaladaCarrito(){
    seMuestraProducto.innerHTML = ""
    carrito.forEach(prod =>{
        seMuestraProducto.innerHTML += ` 
        <div class="articulos">
        <p>${prod.nombre}</p>
        <p>${prod.precio}</p>
        <p>${prod.cantidad}</p>
        <p class="eliminar" id="eliminar${prod.id}"><i class="fa-solid fa-trash-can"></i></p>
      </div>`
    })
    localStorage.setItem("carrito",JSON.stringify(carrito))
    borrarProducto()
    contadorYlocal()
}


crearCardsEnsalada()
agregarEnsalada()


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
                                                <p class="precio">G $ ${producto.precio}</p>
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
                                                <p class="precio">G $ ${producto.precio}</p>
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
                                                <p class="precio">G $ ${producto.precio}</p>
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

btnGuardar.addEventListener('click',guardarDatosUsuario)
crearCards()