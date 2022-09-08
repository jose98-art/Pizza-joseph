// btnSumar.addEventListener('click', (e)=>{
//     numero++
//     contador.innerHTML = numero
//     console.log(e.target)
// })
// btnRestar.addEventListener('click', (e)=>{
//     if(numero == 0){}
//     else{
//         numero--
//         contador.innerHTML = numero
//     }
//     console.log(e.target)
// })

verCarrito.addEventListener('click',()=>{
    ventanaCarrito.classList.add('ver')
})
cerrarCarrito.addEventListener('click',()=>{
    ventanaCarrito.classList.remove('ver')
})