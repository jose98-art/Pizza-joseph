const agregarProductoPizza = document.getElementById('pizzas')
function crearCardsPizza(){
    pizzasCargar.forEach((producto) =>{
        agregarProductoPizza.innerHTML += `
                                    <div class="producPizza">
                                        <div class="imagen">
                                                <img id="btnVerImg${producto.id}" src=${producto.img} alt="N">
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
            agregarCarrito(prod)
            alertAgregar()
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
    presentandoCarrito()
}

function presentandoCarrito(){
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

function borrarProducto(){
    carrito.forEach(prod =>{
        document.getElementById(`eliminar${prod.id}`).addEventListener('click', ()=>{
            carrito = carrito.filter((productosFilter) => productosFilter.id !== prod.id)
            presentandoCarrito()
            alertEliminar()
        })
    })
}
function verInfoPizza(){
    pizzasCargar.forEach(prod =>{
        document.getElementById(`btnVerImg${prod.id}`).addEventListener('click', (e)=>{
            Swal.fire({
                imageUrl:prod.img,
                html:'<p class="swal-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum placeat non alias iste inventore doloremque earum? Minima sequi non ad et voluptatem? Pariatur autem esse quis tempora laboriosam possimus non.</p>',
                width:'70%',
                padding:'10px 10px 30px 10px',
                allowOutsideClick:false,
                alowEscapekey:false,
                allowEnterkey:false,
                stopkeydownPropagation:false,
                confirmButtonColor: '#000',
                confirmButtonText: 'Salir',
            })
        })
    })
}


presentandoCarrito()
crearCardsPizza()
verInfoPizza() 
botonAgregar()


const agregarProductoEnsalada = document.getElementById('ensalada')
function crearCardsEnsalada(){
    ensaladasCargar.forEach((producto) =>{
        agregarProductoEnsalada.innerHTML += `
                                    <div class="producEnsalada">
                                        <div class="imagen">
                                                <img id="btnVerImgEnsalada${producto.id}" src=${producto.img} alt="N">
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
            agregarCarritoEnsalada(prod)
            alertAgregar()
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
        <p class="eliminar" id="eliminarEnsa${prod.id}"><i class="fa-solid fa-trash-can"></i></p>
      </div>`
    })
    localStorage.setItem("carrito",JSON.stringify(carrito))
    borrarProductoEnsa()
    contadorYlocal()
}

function borrarProductoEnsa(){
    carrito.forEach(prod =>{
        document.getElementById(`eliminarEnsa${prod.id}`).addEventListener('click', ()=>{
            console.log("click",prod)
            carrito = carrito.filter((productosFilter) => productosFilter.id !== prod.id)
            agregarEnsaladaCarrito()
            alertEliminar()
    })
    })
}

function verInfoEnsalda(){
    ensaladasCargar.forEach(prod =>{
        document.getElementById(`btnVerImgEnsalada${prod.id}`).addEventListener('click', (e)=>{
            Swal.fire({
                imageUrl:prod.img,
                html:'<p class="swal-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum placeat non alias iste inventore doloremque earum? Minima sequi non ad et voluptatem? Pariatur autem esse quis tempora laboriosam possimus non.</p>',
                width:'70%',
                padding:'10px 10px 30px 10px',
                allowOutsideClick:false,
                alowEscapekey:false,
                allowEnterkey:false,
                stopkeydownPropagation:false,
                confirmButtonColor: '#000',
                confirmButtonText: 'Salir',
            })
        })
    })
}


agregarEnsaladaCarrito()
crearCardsEnsalada()
verInfoEnsalda()
agregarEnsalada()

const agregarProductoSoda = document.getElementById('soda')
function crearCardsSodas (){
    sodasCargar.forEach((producto) =>{
        agregarProductoSoda.innerHTML += `
                                    <div class="producSoda">
                                        <div class="imagen">
                                                <img id="btnVerImgSoda${producto.id}" src=${producto.img} alt="N">
                                        </div>
                                        <div class="nombreSoda">
                                            <h5>${producto.nombre}</h5>
                                        </div>
                                        <div class="iforma">
                                            <div class="contePrecio">
                                                    <p class="precio">$ ${producto.precio}</p>
                                                    <button id="agregarSodas${producto.id}" class="buttonAgregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                            </div>
                                           
                                        </div>
                                    </div>`
    })
}

function agregarSoda(){
    sodasCargar.forEach(prod =>{
        document.getElementById(`agregarSodas${prod.id}`).addEventListener('click', ()=>{
            agregarCarritoSoda(prod)
            alertAgregar()
        })
    })
}

function agregarCarritoSoda(prod){
    let existe = carrito.some((productoSome) => productoSome.id === prod.id)
    if (existe === false){
        prod.cantidad = 1
        carrito.push(prod)
    }else{
        let prodFind = carrito.find((productoFind) => productoFind.id == prod.id)
        prodFind.cantidad++
    }
    agreagarSodaCarrito()
}

function agreagarSodaCarrito(){
    seMuestraProducto.innerHTML = ""
    carrito.forEach(prod =>{
        seMuestraProducto.innerHTML += ` 
        <div class="articulos">
        <p>${prod.nombre}</p>
        <p>${prod.precio}</p>
        <p>${prod.cantidad}</p>
        <p class="eliminar" id="eliminarSoda${prod.id}"><i class="fa-solid fa-trash-can"></i></p>
      </div>`
    })
    localStorage.setItem("carrito",JSON.stringify(carrito))
    borrarProductSoda()
    contadorYlocal()
    
}

function borrarProductSoda(){
    carrito.forEach(prod =>{
        document.getElementById(`eliminarSoda${prod.id}`).addEventListener('click', ()=>{
            console.log("click",prod)
            carrito = carrito.filter((productosFilter) => productosFilter.id !== prod.id)
            agreagarSodaCarrito()
            alertEliminar()
    })
    })
}

function verInfoSoda(){
    sodasCargar.forEach(prod =>{
        document.getElementById(`btnVerImgSoda${prod.id}`).addEventListener('click', (e)=>{
            Swal.fire({
                imageUrl:prod.img,
                html:'<p class="swal-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum placeat non alias iste inventore doloremque earum? Minima sequi non ad et voluptatem? Pariatur autem esse quis tempora laboriosam possimus non.</p>',
                width:'70%',
                padding:'10px 10px 30px 10px',
                allowOutsideClick:false,
                alowEscapekey:false,
                allowEnterkey:false,
                stopkeydownPropagation:false,
                confirmButtonColor: '#000',
                confirmButtonText: 'Salir',
            })
        })
    })
}


agreagarSodaCarrito()
crearCardsSodas()
verInfoSoda()
agregarSoda()

const agregarProductoAlita = document.getElementById('alitas')
function crarCardsAlitas(){
    alitasCargar.forEach((producto) =>{
        agregarProductoAlita.innerHTML += `
                                    <div class="producAlita">
                                        <div class="imagen">
                                                <img id="btnVerImgAlitas${producto.id}" src=${producto.img} alt="N">
                                        </div>
                                        <div class="nombreAlita">
                                            <h5>${producto.nombre}</h5>
                                        </div>
                                        <div class="iforma">
                                            <div class="contePrecio">
                                                    <p class="precio"> $ ${producto.precio}</p>
                                                    <button id="agregarAlitas${producto.id}" class="buttonAgregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                            </div>
                                           
                                        </div>
                                    </div>`
    })
}

function agregarAliatas(){
    alitasCargar.forEach(prod =>{
        document.getElementById(`agregarAlitas${prod.id}`).addEventListener('click', ()=>{
            agregarAlitasCarrito(prod)
            alertAgregar()
        })
    })
}

function agregarAlitasCarrito(prod){
    let existe = carrito.some((productoSome) => productoSome.id === prod.id)
    if (existe === false){
        prod.cantidad = 1
        carrito.push(prod)
    }else{
        let prodFind = carrito.find((productoFind) => productoFind.id == prod.id)
        prodFind.cantidad++
    }
    agreagarAlitasCarrito()
}

function agreagarAlitasCarrito(){
    seMuestraProducto.innerHTML = ""
    carrito.forEach(prod =>{
        seMuestraProducto.innerHTML += ` 
        <div class="articulos">
        <p>${prod.nombre}</p>
        <p>${prod.precio}</p>
        <p>${prod.cantidad}</p>
        <p class="eliminar" id="eliminarAlita${prod.id}"><i class="fa-solid fa-trash-can"></i></p>
      </div>`
    })
    localStorage.setItem("carrito",JSON.stringify(carrito))
    borrarProductoAlita()
    contadorYlocal()
    
}

function borrarProductoAlita(){
    carrito.forEach(prod =>{
        document.getElementById(`eliminarAlita${prod.id}`).addEventListener('click', ()=>{
            console.log("click",prod)
            carrito = carrito.filter((productosFilter) => productosFilter.id !== prod.id)
            agreagarAlitasCarrito()
            alertEliminar()
    })
    })
}

function verInfoAlita(){
    alitasCargar.forEach(prod =>{
        document.getElementById(`btnVerImgAlitas${prod.id}`).addEventListener('click', (e)=>{
            Swal.fire({
                imageUrl:prod.img,
                html:'<p class="swal-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum placeat non alias iste inventore doloremque earum? Minima sequi non ad et voluptatem? Pariatur autem esse quis tempora laboriosam possimus non.</p>',
                width:'70%',
                padding:'10px 10px 30px 10px',
                allowOutsideClick:false,
                alowEscapekey:false,
                allowEnterkey:false,
                stopkeydownPropagation:false,
                confirmButtonColor: '#000',
                confirmButtonText: 'Salir',
            })
        })
    })
}


agreagarAlitasCarrito()
crarCardsAlitas()
verInfoAlita()
agregarAliatas()

const agregarProductoPostre = document.getElementById('postre')
function crearCardsPostre(){
    postresCargar.forEach((producto) =>{
        agregarProductoPostre.innerHTML += `
                                    <div class="producPostre">
                                        <div class="imagen">
                                                <img id="btnVerImgPostre${producto.id}" src=${producto.img} alt="N">
                                        </div>
                                        <div class="nombrePostre">
                                            <h5>${producto.nombre}</h5>
                                        </div>
                                        <div class="iforma">
                                            <div class="contePrecio">
                                                    <p class="precio"> $ ${producto.precio}</p>
                                                    <button id="agregarPostre${producto.id}" class="buttonAgregar"><i class="fa-solid fa-cart-shopping"></i></button>
                                            </div>
                                           
                                        </div>
                                    </div>`
    })
}

function agregarPostre(){
    postresCargar.forEach(prod =>{
        document.getElementById(`agregarPostre${prod.id}`).addEventListener('click', ()=>{
            agregarPostreCarrito(prod)
            alertAgregar()
        })
    })
}

function agregarPostreCarrito(prod){
    let existe = carrito.some((productoSome) => productoSome.id === prod.id)
    if (existe === false){
        prod.cantidad = 1
        carrito.push(prod)
    }else{
        let prodFind = carrito.find((productoFind) => productoFind.id == prod.id)
        prodFind.cantidad++
    }
    agreagarPostreCarrito()
}

function agreagarPostreCarrito(){
    seMuestraProducto.innerHTML = ""
    carrito.forEach(prod =>{
        seMuestraProducto.innerHTML += ` 
        <div class="articulos">
        <p>${prod.nombre}</p>
        <p>${prod.precio}</p>
        <p>${prod.cantidad}</p>
        <p class="eliminar" id="eliminarPostre${prod.id}"><i class="fa-solid fa-trash-can"></i></p>
      </div>`
    })
    localStorage.setItem("carrito",JSON.stringify(carrito))
    borrarProductoPostre()
    contadorYlocal()
    
}

function borrarProductoPostre(){
    carrito.forEach(prod =>{
        document.getElementById(`eliminarPostre${prod.id}`).addEventListener('click', ()=>{
            carrito = carrito.filter((productosFilter) => productosFilter.id !== prod.id)
            agreagarPostreCarrito()
            alertEliminar()
    })
    })
}

function verInfoPostre(){
    postresCargar.forEach(prod =>{
        document.getElementById(`btnVerImgPostre${prod.id}`).addEventListener('click', (e)=>{
            Swal.fire({
                imageUrl:prod.img,
                html:'<p class="swal-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum placeat non alias iste inventore doloremque earum? Minima sequi non ad et voluptatem? Pariatur autem esse quis tempora laboriosam possimus non.</p>',
                width:'70%',
                padding:'10px 10px 30px 10px',
                allowOutsideClick:false,
                alowEscapekey:false,
                allowEnterkey:false,
                stopkeydownPropagation:false,
                confirmButtonColor: '#000',
                confirmButtonText: 'Salir',
            })
        })
    })
}


agreagarPostreCarrito()
crearCardsPostre()
verInfoPostre()
agregarPostre()

function alertEliminar(){
    Swal.fire({
        toast:true,
        icon:'success',
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1500,
        text:'Eliminado',
    })
}
function alertAgregar(){
    Swal.fire({
        toast:true,
        icon:'success',
        position: 'top-start',
        showConfirmButton: false,
        timer: 1500,
        text:'Agregado al carrito',
    })
}

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

function contadorYlocal(){
    contador.innerText = carrito.length
    totalPagar.innerText = carrito.reduce((acc, prod)=>acc+(prod.precio * prod.cantidad),0)
}

btnGuardar.addEventListener('click',guardarDatosUsuario)

crearCards()
