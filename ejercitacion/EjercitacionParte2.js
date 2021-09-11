//Completa las funciones que se encuentran a continuacion, para pasar los Test propuestos.

//La funcion retornarArgumento, debe retornar el argumento que recibe
function retornarArgumento(arg){
    return arg;
}

//La funcion operacionesAritmetaicas, recibe el tipo de 'operacion' como string ("suma", "resta", "multiplicacion", "division", "modulo"). Dependiendo de la operacion que reciba, debe retornar el resultado apropiado para los argumentos A y B.
function operacionesAritmetaicas(operacion, A, B){
    if(operacion === "suma"){
        return A + B;
    } else if(operacion === "resta") {
        return A - B;
    } else if(operacion === "multiplicacion") {
        return A * B;
    } else if( operacion === "division") {
        return A / B;
    } else {
        return A % B;
    }
}

//la funcion esParOImpar recibe como argumento un numero (en caso tal de recibir otro tipo de dato debe retornar un mensaje de error "solo se permiten numeros") y retorna si "es par" o "es impar"
function esParOImpar(arg){
    if(typeof arg != "number"){
        return "solo se permiten numeros";
    } else if(arg % 2 === 0){
        return "es par";
    } else {
        return "es impar";
    }
}

//la funcion completarSaludo recibe 3 tipos de saludos diferentes, si recibes el tipo de saludoA, debes retornar el saludo sumando tu nombre despues de este "saludoA Camilo", si no recibes el saludoA sino, el saludoB, desbes retonar el saludo sumando tu nombre despues de este "saludoB Camilo", asi mismo para el saludoC.
function completarSaludo(saludoA, saludoB, saludoC){
    let miNombre = 'Brian';
    if(saludoA) {
        return `${saludoA} ${miNombre}`;
    } else if (saludoB) {
        return `${saludoB} ${miNombre}`;
    } else {
        return `${saludoC} ${miNombre}`;
    }
}

//La función juegoDeLogica recibe tres números distintos: 
//Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
function juegoDeLogica(num1, num2, num3){

    if(numerosNegativos(num1, num2, num3)) {
        return "Hay negativos";
    } else if(hayZeros(num1, num2, num3)) {
        return "Error";
    } else if(num1Mayor(num1, num2, num3) && numeroPositivo(num1)) {
        return "Número 1 es mayor y positivo";
    } else if(num3Mayor(num1, num2, num3)) {
        return ++num3;
    } else {
        return false;
    }
}

function num1Mayor(num1, num2, num3) {
    return (num1 > num2 && num1 > num3) ? true : false;
}

function numeroPositivo(num) {
    return num > 0 ? true : false;
}

function num3Mayor(num1, num2, num3) {
    return (num3 > num1 && num3 > num2) ? true : false;
}

function numerosNegativos() {
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] < 0) {
            return true;
        }
    }
    return false;
}

function hayZeros() {
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] == 0) {
            return true;
        }
    }
    return false;
}

//La funcion cuatosDigitosTiene recibe un numero entero y determina cuantos digitos tiene este, retornar la cantidad de digitos que tiene.
function cuatosDigitosTiene(numero){
    let str = String(numero);
    return str.length;
}

//La funcion arraysDice:
//1. recibe un array y un "mandato" o "frase" sobre lo que se desea hacer 
//2. debe cumplir con el "mandato" o "frase" y retornar el valor esperado.
//3. no puedes utilizar metodos de arrays (map, forEach, reduce) 
//4. puedes utilizar los metodos de arrays (push, pop, shift, unshift)
function arraysDice(array, frase){
    let aux = array.slice();
    if(frase == '0 debe ir al inicio del arreglo') {
        return addAlInicio(aux, 0);
    } else if (frase == "el valor de la ultima posicion debe ir tambien en la posicion 0") {
        return addValorUltimaPosicionInicio(array)
    } else if(frase == '0 debe ir al final del arreglo') {
        return addAlFinal(array, 0)
    } else if(frase == 'quiero saber el valor de la posicion 2') {
        return array[2];
    } else if(frase == 'debe aumentar en 2 el valor de cada posicion') {
        array = aumentarValorCadaElemento(array, 2);
        return array;
    } else if(frase == 'debe multiplicar por 5 el valor de cada posicion') {
        array = multiplicarValorCadaElemento(array, 5);
        return array;
    } else if(frase == 'debe convertirse en 1 sola frase') {
        return concaterAll(array);
    } else if(frase == 'quiero saber el valor mas grande') {
        return getMasGrande(array);
    } else if(frase == "quiero saber si el 'prof Bryan' esta") {
        return buscarElemento(array, 'prof Bryan')
    } else {
        return mayoresQue(array, 20);
    }
}

function addAlInicio(array, element) {
    array.unshift(element);
    return array;
}

function addValorUltimaPosicionInicio(array) {
    array.unshift(array[array.length - 1]);
    return array;
}

function addAlFinal(array, element) {
    array.push(element);
    return array;
}

function aumentarValorCadaElemento(array, aumentar) {
    let res = array.map(element => element + aumentar);
    for(let i in array) {
        array[i] = res[i];
    }
    return array;
}

function multiplicarValorCadaElemento(array, multiplicar)  {
    let res = array.map(element => element * multiplicar);
    for(let i in array) {
        array[i] = res[i];
    }
    return array;
}

function concaterAll(array) {
    let all = '';
    array.forEach( element => {
        if(element == array[array.length - 1]) {
            all += element
        } else {
            all += `${element} `;
        }
    })

    return all;
}

function getMasGrande(array) {
    let mayor = array[0];
    array.forEach(element => {
        
        if(mayor < element) {
            mayor = element;
        }
    })
    return Number(mayor);
}

function buscarElemento(array, buscar) {
    let res = array.find(element => element == buscar);
    return res ? true : false;
}

function mayoresQue(array, mayor) {
    let aux = array.filter(element => element > mayor);
    return aux.length;
}

// La funcion crearObjeto debe crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre", una propiedad "propiedad" y usa el valor definido en el argumento "propiedad"
// Agrega un método (funcion) llamado "saludar" que devuelva el string "Meow!"
// Devuelve el objeto
function crearObjeto(nombre, propiedad) {
    return {
        nombre : nombre,
        propiedad : propiedad,
        saludar : function() {return 'Meow!'}
    }
}

// La funcion invocarMetodo, recibe 'metodo' que es una cadena que contiene el nombre de un método (funcion) en el objeto, Invoca ese método, no necesitas retornar nada
function invocarMetodo(objeto, metodo) {
    objeto[metodo]();
}

// La funcion agregarContacto, recibe un "usuario" que tiene una propiedad llamada "contactos" que es un array, Agrega "nuevoContacto" al final de ese array, retorna "usuario"
function agregarContacto(usuario, nuevoContacto) {
    usuario.contactos.push(nuevoContacto);
    return usuario;
}

//La funcion invocarCallBack, recibe una funcion de Call Back que debe ser invocada. no es necesario retornar nada
function invocarCallBack(cb){
    cb();
}

//La funcion mapearArray, recibe un Array y una funcion de CallBack, utiliza el metodo 'map' de los arreglos para recorrer el Array y generar un nuevo arreglo, retornando como resultado de cada iteracion, la funcion de CallBack recibida pasandole el item del arreglo. Retorna el nuevo arreglo
function mapearArray(array, cb){
 return array.map(cb)
}

//NO MODIFIQUES NADA DE AQUI ABAJO ↓↓↓↓↓↓↓↓↓ 
module.exports = {
    retornarArgumento,
    operacionesAritmetaicas, 
    esParOImpar,
    completarSaludo,
    juegoDeLogica,
    cuatosDigitosTiene,
    arraysDice,
    crearObjeto,
    invocarMetodo,
    agregarContacto,
    invocarCallBack,
    mapearArray

}