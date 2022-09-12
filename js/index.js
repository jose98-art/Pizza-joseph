function crearCards(articulos){
    return `
    <div class="card" id="card${articulos.id}">
     <div class="contentImage">
       <img id="${articulos.id}" src="${articulos.img}" alt="${articulos.nombre}">
       <p>${articulos.nombre}</p>
     </div>
     <div class="contentInfor" id="contentInfor">
      <p class="precio" id="precio">
       $ ${articulos.precio}
      </p>
      <button class="ver" id="ver${articulos.id}">
       ver
      </button>
       <button class="agregarCarrito" id="agregarCarrito${articulos.id}">
         <i class="fa-sharp fa-solid fa-cart-plus"></i>
       </button>
     </div>
    </div>`
}    

const renderizarCards = ()=>{
         fetch(url)
            .then((response) => response.json())
            .then((data) => {
                almacenar = data
                almacenar.forEach(articulos =>{
                    renderizarProducto += crearCards(articulos)
                })
                cajaCards.innerHTML = renderizarProducto
                botonAgregar()
                contadorProductos()
                verInfo()

            })
            .catch((error)=>{
                cajaCards.innerHTML = cargarError(error)
            })
}

function verInfo(){
    almacenar.forEach(prod =>{
        document.getElementById(`ver${prod.id}`).addEventListener('click', (e)=>{
            Swal.fire({
                imageUrl:prod.img,
                text:prod.descripcion,
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

const cargando = ()=>{
    Swal.fire({
        toast:true,
        title:'Obteniendo Datos ',
        showConfirmButton: false,
        didOpen:()=>{
            Swal.showLoading()
        },
        timer:2100,
    })
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(renderizarCards())
        }, 2100);
    })

}

const cargarError = ()=>{
    Swal.fire({
            toast:true,
            icon: 'error',
            title: 'Oops...',
            text: 'Error al cargar el servidor, intente mas tarde!',
        }
      )
}

function botonAgregar(){
    almacenar.forEach(prod =>{
        document.getElementById(`agregarCarrito${prod.id}`).addEventListener('click', ()=>{
            agregarCarrito(prod)
            contadorProductos()
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
        let prodFind = carrito.find((productoFind) => productoFind.id === prod.id)
        prodFind.cantidad++
    }
    presentandoCarrito()
    
}

function precioTotal(){
    const precioT =carrito.reduce((acc, {cantidad,precio}) => acc + cantidad * precio,0)
    totalPagar.innerText = precioT
    console.log(precioT)
}

function presentandoCarrito(){
    seMuestraProducto.innerHTML = ""
    carrito.forEach(prod =>{
        seMuestraProducto.innerHTML += ` <div class="articulos">
        <p>${prod.nombre}</p>
        <div class="precioUnitario">
          <span>${prod.precio}</span>
        </div>
        <p>${prod.cantidad}</p>
        <p class="eliminar" id="eliminar${prod.id}"><i class="fa-solid fa-trash-can"></i></p>
      </div>`
    })
    localStorage.setItem("carrito",JSON.stringify(carrito))
    precioTotal()
    eliminarProducto()   
    
}


    

function eliminarProducto(){
    carrito.forEach(element =>{
        document.getElementById(`eliminar${element.id}`).addEventListener('click',(e)=>{
            console.log(e.target)
            carrito = carrito.filter((productosFilter) => productosFilter.id !== element.id)
            presentandoCarrito()
            contadorProductos()
            alertEliminar()
        })
    })
}

function datosInput(){
    var valuarInputs = document.querySelectorAll(".datos")
    datosValuar = [].map.call(valuarInputs, (datosInput)=>{
        arrayInput.push(datosInput.value)
        mostramosDatos()
    })
    console.table(arrayInput)

    
}

function mostramosDatos(){
    arrayInput.innerHTML =""
    arrayInput.forEach(() =>{
        cardInfor.innerHTML = `
        <h1>Datos</h1>
        <span>Datos del usuario</span>
        <p>Nombre: ${arrayInput[0]}</p>
        <p>Apellido: ${arrayInput[1]}</p>
        <p>Correo electrónico: ${arrayInput[2]}</p>
        <p>Cel: ${arrayInput[3]}</p>
        <span>Domicilio de entrega</span>
        <p>Calle: ${arrayInput[4]}</p>
        <p>CP: ${arrayInput[5]}</p>
        <p>Colonia: ${arrayInput[6]}</p>
        <p>Estado: ${arrayInput[7]}</p>
        <p>Municipio: ${arrayInput[8]}</p>
        <span>Forma de pago</span>
        <p>Num Tarjeta: ${arrayInput[9]}</p>
        <p>Nombre: ${arrayInput[10]}</p>
        <p>Fecha: ${arrayInput[11]}</p>
        <p>CVV: ${arrayInput[12]}</p>
       
                                `
    })
    localStorage.setItem("datos",JSON.stringify(arrayInput))
   
}

const procesandoCompra = ()=>{
    Swal.fire({
        toast:true,
        title:'PROCESANDO COMPRA',
        showConfirmButton: false,
        didOpen:()=>{
            Swal.showLoading()
        },
        timer:2100,
    })
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(eliminarCarrito())
        }, 2100);
    })
}

function eliminarCarrito(){
    cardInfor.innerHTML =""
    carrito.length = 0
    localStorage.clear("datos")
    presentandoCarrito()
    contadorProductos()
    alerExito()
}

function alerExito(){
    Swal.fire({
        toast:true,
        icon:'success',
        text:'COMPRA EXITOSA',
        showConfirmButton: false,
        timer:3000,
    })
}

function alertEliminar(){
    Swal.fire({
        toast:true,
        icon:'success',
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 1000,
        text:'Eliminado',
    })
}

function alertAgregar(){
    Swal.fire({
        toast:true,
        icon:'success',
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 1000,
        text:'Agregado al carrito',
    })
}

function contadorProductos(){
    contadorCarrito.innerText = carrito.length
}

presentandoCarrito()
mostramosDatos()
cargando()
