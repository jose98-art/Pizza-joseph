let nombre = prompt("¡Ingrese su nombre!, para tener una pizza personalizada").toUpperCase()
alert("¡Te damos la bienvenida a JOSEPH´S PIZZA,  "+ nombre + "!")
let promocion = prompt("¡Hay una promocion que no te la puedes perder! \n ¿Quieres participar? \n inserte un \n Si  o  No " ).toLowerCase()

function cuestionario(){
    let pregunta = parseInt(prompt("¡Ingresa tu número de la suerte para ver la promo!, elige entre el 1 y 10!"))
     switch(pregunta){
        case 1:
        case 6:
            alert("La promo consiste en la compra de una Pizza grande te llevas una gaseso mediana ¡Gratis! ")
            break
        case 2:
        case 7:
            alert("La promo consiste en la compra de dos Pizzas grandes te llevas una gaseosa grande ¡Gratis!")
            break
        case 3:
        case 8:
            alert("La promo consiste en la compra de dos Pizzas medianas te llevas una gaseosa mediana ¡Gratis!")
            break
        case 4:
        case 9:
            alert("La promo consiste en la compra de tres Pizzas grandes te llevas dos gaseosa grande ¡Gratis!")
            break
        case 5:
        case 10:
            alert("La promo consiste en la compra de dos Pizzas chicas te llevas una gaseosa mediana ¡Gratis!")
            break
        default:
            alert("¡Suerte para la proxima!")
    }

}

while (promocion){
    if(promocion === "no"){
        let salir = prompt("¿Estas seguro de querer salir? \n inserte un \n Si o  No").toLowerCase()
        if(salir === "no"){
            cuestionario()
            break
        }else{
            break
        }
    }else{
        cuestionario()
        break
    }
}

class Producto {
    constructor(pizza, precio, tamaño) {
        this.pizza = pizza
        this.precio = precio
        this.tamaño = tamaño
    }
    precioConIva(unidad) {
        if(uni == 1){
            let precioFinal = this.precio * IVA * unidad
            alert ( "$" + precioFinal)
        }else if(unidad == 2){
            let precioFinal2 = this.precio2 * IVA * unidad
            alert( "$" + precioFinal2)
        }
        
        
    }
}

function compras(){
    let escoje = prompt("Escoje tu pizza:  \n 1) Hawaiana \n 2) Pepperoni \n 3) Mexicana \n 4) Americana \n 5) 4 Quesos ")
    let tam = parseInt(prompt("Ingresa el numero de tamaño del tu pizza: \n1) Grande \n2) Chica "))
    let unidad = prompt("¿Cuantas unidades desaa?")
    
    if(tam === 1){
        let total1 = pizza1.precio * unidad
        alert("Tu cuenta es de: $ " + total1)
    }else if(tam === 2){
        let total1 = pizza2.precio * unidad
        alert("Tu cuenta es de: $ " + total1)
    }
    else if(tam === 3){
        let total1 = pizza3.precio * unidad
        alert("Tu cuenta es de: $ " + total1)
    }
    else if(tam === 4){
        let total1 = pizza4.precio * unidad
        alert("Tu cuenta es de: $ " + total1)
    }else if(tam === 5){
        let total1 = pizza5.precio * unidad
        alert("Tu cuenta es de: $ " + total1)
    }else{
        alert("No seleccionaste nada")
    }
}


const pizza1 = new Producto("Hawaiana" , 99  , " Chica o Grande ")
const pizza2 = new Producto("Pepperoni", 110 , " Chica o Grande ")
const pizza3 = new Producto("Mexicana" , 170 , " Chica o Grande ")
const pizza4 = new Producto("Americana", 160 , " Chica o Grande ")
const pizza5 = new Producto("4 Quesos" , 350 , " Chica o Grande ")
const IVA = 1.16

let menu = prompt("¿Quieres ver el menu?\nIngresa un si o no ").toLowerCase()
if(menu === "si"){
    menuPizza()
}
function menuPizza(){ 
    let tipoDePizza = parseInt(prompt("Ingresa el numero de la pizza que deseas:  \n 1) Hawaiana \n 2) Pepperoni \n 3) Mexicana \n 4) Americana \n 5) 4 Quesos"  ))
    while (tipoDePizza !== 0){
        switch(tipoDePizza){
            case 1:
                alert("Pizza: \n" + pizza1.pizza +"\nPrecio unitario:  \n" +"$ "+ (pizza1.precio * IVA).toFixed() + "\nTamaño a escojer:\n" + pizza1.tamaño + "\n \nTodos nuestros precios incluyen IVA")
                break ;
            case 2:
                alert("Pizza: \n" + pizza2.pizza +"\nPrecio unitario:  \n" +"$ "+ (pizza2.precio * IVA).toFixed() + "\nTamaño a escojer:\n" + pizza2.tamaño + "\n \nTodos nuestros precios incluyen IVA")
                break;
            case 3:
                alert("Pizza: \n" + pizza3.pizza +"\nPrecio unitario:  \n" +"$ "+ (pizza3.precio * IVA).toFixed() + "\nTamaño a escojer:\n" + pizza3.tamaño + "\n \nTodos nuestros precios incluyen IVA")
                break;
            case 4:
                alert("Pizza: \n" + pizza4.pizza +"\nPrecio unitario:  \n" +"$ "+ (pizza4.precio * IVA).toFixed() + "\nTamaño a escojer:\n" + pizza4.tamaño + "\n \nTodos nuestros precios incluyen IVA")
                break;
            case 5:
                alert("Pizza: \n" + pizza5.pizza +"\nPrecio unitario:  \n" +"$ "+ (pizza5.precio * IVA).toFixed() + "\nTamaño a escojer:\n" + pizza5.tamaño + "\n \nTodos nuestros precios incluyen IVA")
                break;
            default:

        }tipoDePizza=parseInt(prompt("Ingresa el numero de la pizza que deseas:  \n 1) Hawaiana \n 2) Pepperoni \n 3) Mexicana \n 4) Americana \n 5) 4 Quesos \n o inserte un 0 para salir"  ))


    }
}
let comprar = prompt("¿Desea comprar?").toLowerCase()
if(comprar === "si"){
    compras()
}

class Direccion{
    constructor(iden, calle, colonia, cuidad, cel){
        this.iden = iden
        this.calle = calle
        this.colonia = colonia
        this.cuidad = cuidad
        this.cel = cel
    }
}

function crearId(iden){
    for(let i = 1; i <= iden ; i++ ){
        console.log(i)
    }
    return parseInt(Math.random() * 100000)
}

const direcciones = []

function agregarDireccion(){
    let iden = crearId()
    let calle = prompt("ingresa su calle")
    let colonia =prompt("Ingrese su colonia:")
    let lugar = prompt("ingrese su cuidad")
    let numer = parseInt(prompt("ingrese su numeo telefonico"))
        direcciones.push(new Direccion(iden, calle, colonia, lugar, numer))
        console.table(direcciones)
}

function sustituir(){
    let reemplas = prompt("¿Quieres sustituir sus dato?, \nIngresa un si o no").toLowerCase()
    if(reemplas === "si"){
        alert("¡ingrese sus nuevos datos!")
            agregarDireccion()
        
    }else{
        alert("!Su pedido esta en camino¡")
    }
}

let derec = prompt("¿Quiere agregar una direccion para futuras entregas?\nIngresa un si o no").toLowerCase()
if (derec === "si"){
    agregarDireccion()
    sustituir()
}else{
    alert("Bienvenido a JOSEPH´S PIZZA, " + nombre)
}