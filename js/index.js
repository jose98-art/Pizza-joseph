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
      <button class="ver" id="ver">
       ver
      </button>
       <button class="agregarCarrito" id="agregarCarrito${articulos.id}">
         <i class="fa-sharp fa-solid fa-cart-plus"></i>
       </button>
     </div>
    </div>`
}    

const renderizarCards = async ()=>{
    await fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                almacenar = data
                almacenar.forEach(articulos =>{
                    renderizarProducto += crearCards(articulos)
                })
                cajaCards.innerHTML = renderizarProducto
            })
            .catch((error)=>{
                cajaCards.innerHTML = cargarError(error)
            })
            botonAgregar()
}

const cargando = ()=>{
    Swal.fire({
        toast:true,
        title:'Obteniendo Datos ',
        showConfirmButton: false,
        didOpen:()=>{
            Swal.showLoading()
        },
        timer:2500,
    })
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(renderizarCards())
        }, 2500);

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
        seMuestraProducto.innerHTML += ` <div class="articulos">
        <p>${prod.nombre}</p>
        <div class="precioUnitario">
          <span>${prod.precio}</span>
          <span>Total</span>
        </div>
        <p>${prod.cantidad}</p>
        <p class="eliminar" id="eliminar${prod.id}"><i class="fa-solid fa-trash-can"></i></p>
      </div>`
    })
    localStorage.setItem("carrito",JSON.stringify(carrito))
    
    
}
    
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

cargando()
