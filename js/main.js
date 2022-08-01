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

    alert("Bienvenido a JOSEPH´S PIZZA, " + nombre)
}

while (promocion){
    if(promocion === "no"){
        let salir = prompt("¿Estas seguro de querer salir? \n inserte un \n Si o  No").toLowerCase()
        if(salir === "no"){
            cuestionario()
            break
        }else{
            alert("Bienvenido a JOSEPH´S PIZZA, " + nombre)
            break
        }
    }else{
        cuestionario()
        break
    }
}