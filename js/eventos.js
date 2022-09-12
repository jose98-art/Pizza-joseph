verCarrito.addEventListener('click',()=>{
    ventanaCarrito.classList.add('ver')
})

cerrarCarrito.addEventListener('click',()=>{
    ventanaCarrito.classList.remove('ver')
})

btnPagar.addEventListener('click', ()=>{
    if(carrito.length > 0){
        formulario.classList.add("activeDos")
    }else{
        Swal.fire({
            icon:'warning',
            toast:true,
            text:'No tienes productos que comprar',
            timer:2000,
            showConfirmButton: false,
        })
    }
    
})

btnGuardar.addEventListener('click', ()=>{
    datosInput()
    formulario.classList.remove("activeDos")
    btnContinuar.style.display ="block"
})


btnContinuar.addEventListener('click',()=>{
    if(carrito.length > 0  && arrayInput.length > 0){
        procesandoCompra()
        return new Promise((resolve)=>{
            setTimeout(() =>{
                resolve(ventanaCarrito.classList.remove('ver'))
            },3000)
        })

    }else if(carrito.length == 0 || arrayInput.length == 0 ){
        Swal.fire({
            icon:'warning',
            toast:true,
            text:'Por favor verifica tus productos en el carrito o que el formulario este lleno',
            timer:2200,
            showConfirmButton: false,
        })
        
    }

})




