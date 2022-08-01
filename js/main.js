let nombre = prompt("¡Ingrese su nombre!, para tener una pizza personalizada")
alert("¡Te damos la bienvenida a JOSEPH´S PIZZA,  "+ nombre.toUpperCase() + "!")
let promocion =  prompt("¡Hay una promocion que no te la puedes perder! \n ¿Quieres participar? \n inserte un \n Si \n o \n No " )
let promocion2 = promocion.toLowerCase()

function preguntas(){
    
        let pregunta = parseInt(prompt("¡Ingresa tu número de la suerte para ver la promo!, elige entre el 1 y 10"))
        console.log(darPromo(pregunta))
        alert("Bienvenido a JOSEPH´S PIZZA, " + nombre.toUpperCase())


        function darPromo(pregu){
            switch(pregu){
                case 1:
                case 6:
                    return alert("La promo consiste en la compra de una Pizza grande te llevas una gaseso mediana ¡Gratis! ")
                case 2:
                case 7:
                    return alert("La promo consiste en la compra de dos Pizzas grandes te llevas una gaseosa grande ¡Gratis!")
                case 3:
                case 8:
                    return alert("La promo consiste en la compra de dos Pizzas medianas te llevas una gaseosa mediana ¡Gratis!")
                case 4:
                case 9:
                    return alert("La promo consiste en la compra de tres Pizzas grandes te llevas dos gaseosa grande ¡Gratis!")
                case 5:
                case 10:
                    return alert("La promo consiste en la compra de dos Pizzas chicas te llevas una gaseosa mediana ¡Gratis!")
                default:
                    return alert("¡Suerte para la proxima!")
            }


        }
    
}

while (promocion2){
    if(promocion2 == "no"){
        let pregunta3 = prompt("¿Estas seguro de querer salir? \n inserte un \n Si \n o \n  No")
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