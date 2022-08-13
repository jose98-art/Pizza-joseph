const tabla = document.getElementById("cuerpo")
const total = document.getElementById("pagarTotal")
const productos = []
const IVA = 1.16

class Pizzas{
    constructor( articulo, descripcion, precio, cantidad){
        this.articulo = articulo
        this.descripcion = descripcion
        this.precio = precio
        this.cantidad = cantidad
    }
    precioFinal(){
        return parseFloat(((this.precio + this.precio) * IVA).toFixed())        
    }
}
productos.push(new Pizzas("HAWAIANA", "PIÑA,\nQUESO,\nJAMÓN",250,2))
productos.push(new Pizzas("MEXICANA", "CHILE,\nQUESO,\nCARNE,\nJITOMATE,\nCEBOLLA",290,2))
productos.push(new Pizzas("PEPPERONI", "PEPPERONI,QUESO",190,1))
productos.push(new Pizzas("COCA-COLA", "1L",25,3))
productos.push(new Pizzas("PURE PAPA", "250 GRAMOS",60,3))

function cargarTablaProductos(){
    const cuerpo = document.getElementById("cuerpo")
    productos.forEach(producto =>{
        cuerpo.innerHTML += `<tr>
                                <td>${producto.articulo}</td>
                                <td>${producto.descripcion}</td>
                                <td>${producto.precio}</td>
                                <td>${producto.cantidad}</td>
                                <td>${producto.precioFinal()}</td>
                            </tr>`          
    })
}
cargarTablaProductos()
totalCarrito()
function totalCarrito(){
    let calcular = productos.reduce((acc, producto) => acc + producto.precioFinal(),0)
    total.innerHTML = "$ "+ calcular
}
