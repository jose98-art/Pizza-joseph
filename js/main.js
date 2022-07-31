let nombre = prompt("¡Ingrese su nombre!, para tener una pizza personalizada")
alert("¡Te damos la bienvenida a JOSEPH´s PIZZA,  "+ nombre.toUpperCase() + "!")
let promocion =  prompt("¡Hay una promocion que no te la puedes perder! \n ¿Quieres participar? '\n inserte un 'si'o 'no' " )
let promocion2 = promocion.toLowerCase()

function preguntas(){
    
        let pregunta = parseInt(prompt("¡Ingresa tu número de la suerte para ver la promo!, elige entre el 1 y 5"))
        console.log(darPromo(pregunta))
        alert("Bienvenido a JOSEPH´S PIZZA, " + nombre.toUpperCase())


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
    
}

while (promocion2){
    if(promocion2 == "no"){
        let pregunta3 = prompt("quieres salir?")
        let pregunt = pregunta3.toLowerCase()
        if(pregunt === "no"){
            preguntas()
            break
        }else{
            alert("Bienvenido a JOSEPH´S PIZZA, " + nombre.toUpperCase())
            break
        }
        
    }else{
        preguntas()
        break
    }
}