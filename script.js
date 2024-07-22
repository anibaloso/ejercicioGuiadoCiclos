/**
 * @param {Number} numero
 */


let numero = Number(prompt("ingrese un numero para calcular "));
let factorial = 1
let i = null;
const calculo = function (numero) {
    if (numero >= 21) {
        alert("numero fuera del rango ");
    } else {
        for (i = 1; i <= numero; i++) {
            console.log(i + " x " + numero + " = " + numero * i);
        }
        for (i = 1; i <= numero; i++) {
            factorial *= i;
            console.log("Factorial de " + i + " es : " + factorial)
        }
        return calculo;
    }
        

}

calculo(numero);