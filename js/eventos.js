btnAbrirMenu.addEventListener('click', () =>{
    ocultarP.classList.add("active")
    ocultarF.classList.add("active")
} )

btnVerMenuPizza.addEventListener('click', () =>{
    menuPizza.classList.add("activeDos")
})

const btnCerrarMenu = document.getElementById("btnCerras")

btnCerrarMenu.addEventListener('click', (e) =>{
    menuPizza.classList.remove("activeDos")
})

btnVerMenuEnsalada.addEventListener('click',()=>{
    menuEnsalada.classList.add("activeDos")
})
btnCerrasEnsa.addEventListener('click',()=>{
    menuEnsalada.classList.remove("activeDos")
})
btnVerMenuSoda.addEventListener('click',()=>{
    menuSoda.classList.add("activeDos")
})
btnCerrasSod.addEventListener('click',()=>{
    menuSoda.classList.remove("activeDos")
})
btnVerMenuAlita.addEventListener('click',()=>{
    menuAlita.classList.add("activeDos")
})
btnCerrasAli.addEventListener('click',()=>{
    menuAlita.classList.remove("activeDos")
})
btnVerMenuPostre.addEventListener('click',()=>{
    menuPostre.classList.add("activeDos")
 })
 btnCerrasPos.addEventListener('click',()=>{
    menuPostre.classList.remove("activeDos")
 })

 btnAbrirFormulario.addEventListener('click', () =>{
    formulario.classList.add("activeDos")
 })

btnCerrarFormulario.addEventListener('click', ()=>{
    formulario.classList.remove("activeDos")
   
})

abrirRegistr.addEventListener('click',()=>{
    formulario.classList.add("activeDos")
})

btnAbrirCard.addEventListener('click',()=>{
    cardCerrar.classList.add("activeDos")
})
btnCerrarCard.addEventListener('click',()=>{
    cardCerrar.classList.remove("activeDos")
})


verCarrito.addEventListener('click', ()=>{
    carritoCards.classList.add("activeDos")
})

cerrarCarrito.addEventListener('click',()=>{
    carritoCards.classList.remove("activeDos")
} )

