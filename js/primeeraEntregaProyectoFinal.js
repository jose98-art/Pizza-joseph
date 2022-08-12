const carrito = []
const stock = ["HAWAIANA", "MOZZARELLA", "MEXICANA", "PEPPERONI","4 QUESOS","AMERICANA"]
class ProductosCarro{
    constructor(id, pizza, precio, tamano){
        this.id = id
        this.pizza = pizza
        this.precio = precio
        this.tamano = tamano
    }
    precioIva(){
        return parseFloat((this.precio * IVA).toFixed(2))
    }
    
}
carrito.push(new ProductosCarro(1, "HAWAIANA", 250, "CHICA"))
carrito.push(new ProductosCarro(2, "MOZZARELLA", 375, "GRANDE"))
carrito.push(new ProductosCarro(3, "MEXICANA", 280,"GRANDE"))
carrito.push(new ProductosCarro(4, "PEPPERONI",180, "CHICA"))


function calcularCarrito(){
    let suma = carrito.reduce((acc, producto)=> acc + producto.precioIva(), 0)
    console.log("Total a pagar: $ ", suma, "\n los prcio a pagar incluye el IVA")
}
function buscarProducto(){
    let busca = prompt("Busca tu pizza: ").toUpperCase()
    const resultado = stock.filter(producto => producto.includes(busca))
    console.log(resultado)
}
function mostrarProducto(){
    carrito.forEach(carrito => {
        console.log(carrito)
    })
}


let verCarro = prompt("Quieres checar tu carrito de compras?\nIngresa un si o no").toLowerCase()

if(verCarro === "si"){
    mostrarProducto()
    calcularCarrito()
}
let buscar = prompt("Quieres buscar un producto en especial?\nIngresa un si o no")
if(buscar === "si") {
    buscarProducto()
}
