//creamoas las variables las cuales vamos a usar
var numero = parseInt(prompt("Ingrese el número:"));
var sumaDivisores = 0;

//lo usaremos para que tenga separación
document.write(numero + "<br>");

//hacemos las condicionales
if (isNaN(numero) || numero <= 0) {

    //en el caso de que alguien ingrese un numero negativo este le dira que ponga un positivo
    document.write("Por favor, ingrese un número entero positivo.");
} else {
    //indicamos los parametros que tiene que seguir
    for (var i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }

    }
    //impriminos el resultado el cual se va a mostrar al usuario
    if (sumaDivisores === numero) {
        document.write("El número es perfecto.");
    } else {
        document.write("El número no es perfecto.");
    }
}