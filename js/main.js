let nombre = prompt("¡Ingrese su nombre!, para tener una pizza personalizada")
alert("¡Te damos la bienvenida a joseph´sPIZZA,  "+ nombre + "!")
let promocion = prompt("¡Hay una promocion que no te la puedes perder! '\n' ¿Quieres participar? '\n' inserte un 'si'o 'no' " )

if (promocion === "si"){
    let pregunta = parseInt(prompt("¡Ingresa tu número de la suerte para ver la promo!, elige entre el 1 y 5"))
       console.log(darPromo(pregunta))

    function darPromo(pregu){
        switch(pregu){
            case 1:
                return alert("La promo consiste en la compra de una Pizza grande te llevas una gaseso mediana ¡Gratis! ")
            case 2:
                return alert("la promo consiste en la compra de dos Pizzas grandes te llevas una gaseosa grande ¡Gratis!")
            case 3:
                return alert("la promo consiste en la compra de dos Pizzas Medianas te llevas una gaseosa mediana ¡Gratis!")
            case 4:
                return alert("la promo consiste en la compra de tres Pizzas grandes te llevas dos gaseosa grande ¡Gratis!")
            case 5:
                return alert("la promo consiste en la compra de dos Pizzas chicas te llevas una gaseosa mediana ¡Gratis!")
            default:
                return alert("¡Suerte para la proxima!")
        }
    }
}else{
    alert("¡Gracias por su visita!")
}
alert("¡Bienvenido  " + nombre + " !")