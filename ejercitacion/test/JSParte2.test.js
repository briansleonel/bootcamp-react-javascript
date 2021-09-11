const {
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
} = require('../EjercitacionParte2.js');

describe('Funciones JavaScript', function(){
    it("'retornarArgumento', Deberia retornar el mismo argumento que recibe", function(){
        expect(retornarArgumento("un argumento")).toBe("un argumento");
        expect(retornarArgumento(1)).toBe(1);
        expect(retornarArgumento({argumento: "el argumento"})).toEqual({argumento: "el argumento"});
    })
    it("'operacionesAritmetaicas', Deberia retornar el valor apropiado al realizar la operacion entre A y B.La operacion es recibida como argumento", function(){
        expect(operacionesAritmetaicas('suma', 1, 2)).toBe(3);
        expect(operacionesAritmetaicas('suma', 1000, 2000)).toBe(3000);
        expect(operacionesAritmetaicas('suma', 1111, 2222)).toBe(3333);
        expect(operacionesAritmetaicas('multiplicacion', 1, 2)).toBe(2);
        expect(operacionesAritmetaicas('multiplicacion', 2, 2)).toBe(4);
        expect(operacionesAritmetaicas('multiplicacion', 100, 100)).toBe(10000);
        expect(operacionesAritmetaicas('resta', 1, 2)).toBe(-1);
        expect(operacionesAritmetaicas('resta', 1, 1)).toBe(0);
        expect(operacionesAritmetaicas('resta', -10, 1)).toBe(-11);
        expect(operacionesAritmetaicas('division', 7, 0)).toBe(Infinity);
        expect(operacionesAritmetaicas('division', 10, 2)).toBe(5);
        expect(operacionesAritmetaicas('division', 20, 2)).toBe(10);
        expect(operacionesAritmetaicas('modulo', 10, 2)).toBe(0);
        expect(operacionesAritmetaicas('modulo', 11, 2)).toBe(1);
    })
    it("'esParOImpar', Deberia decidir si el numero recibido es Par o Impar, si recibe un tipo de datos diferente debe enviar el mensaje de error apropiado", function(){
        expect(esParOImpar(2)).toBe('es par');
        expect(esParOImpar(21)).toBe('es impar');
        expect(esParOImpar(180)).toBe('es par');
        expect(esParOImpar(181)).toBe('es impar');
        expect(esParOImpar('181')).toBe("solo se permiten numeros");
        expect(esParOImpar('string')).toBe("solo se permiten numeros");
    })
    it("'completarSaludo', Deberia retonar el saludo recibido sumando tu nombre al final de este!", function(){
        expect(completarSaludo("Hola", undefined, undefined).length).toBeGreaterThanOrEqual(6);
        expect(completarSaludo("Hola", undefined, undefined)).toEqual(expect.stringContaining("Hola"));
        expect(completarSaludo(undefined, "Hello", undefined).length).toBeGreaterThanOrEqual(6);
        expect(completarSaludo(undefined, "Hello", undefined)).toEqual(expect.stringContaining("Hello"));
        expect(completarSaludo(undefined, undefined, "Bonjour").length).toBeGreaterThanOrEqual(6);
        expect(completarSaludo(undefined, undefined, "Bonjour")).toEqual(expect.stringContaining("Bonjour"));
    })
    it("'juegoDeLogica', Deberia retornar el resultado correcto para cada caso!", function(){
        expect(juegoDeLogica(50, 2, 15)).toBe('Número 1 es mayor y positivo');
        expect(juegoDeLogica(80, -1, 2)).toBe('Hay negativos');
        expect(juegoDeLogica(1, 3, 10)).toBe(11);
        expect(juegoDeLogica(1, 0, 10)).toBe('Error');
        expect(juegoDeLogica(10, 30, 6)).toBe(false);
    })
    it("'cuatosDigitosTiene', Deberia retornar la cantidad de digitos que tiene el numero que ingresa como argumento", function(){
        expect(cuatosDigitosTiene(2)).toBe(1);
        expect(cuatosDigitosTiene(1212121212)).toBe(10);
        expect(cuatosDigitosTiene(121212)).toBe(6);
        expect(cuatosDigitosTiene(12)).toBe(2);
        expect(cuatosDigitosTiene(1212121212121212)).toBe(16);
    })
    it("'arraysDice', debe cumplir con el 'mandato' o 'frase' y retornar el valor esperado", function(){
        var array1 = [1,2,3,4,5]
        var array2 = ['1','2','3','4','5']
        var array3 = ['prof Vero', 'prof Camilo', 'prof Mauro']
        var array4 = ['prof Vero', 'prof Bryan', 'prof Mauro']
        expect(arraysDice(array1, "0 debe ir al inicio del arreglo")).toEqual([0,1,2,3,4,5])
        expect(arraysDice(array2, "0 debe ir al inicio del arreglo")).toEqual([0,'1','2','3','4','5'])
        expect(arraysDice(array3, "0 debe ir al inicio del arreglo")).toEqual([0,'prof Vero','prof Camilo', 'prof Mauro'])
        expect(arraysDice(array1, "el valor de la ultima posicion debe ir tambien en la posicion 0")).toEqual([5,1,2,3,4,5]);
        expect(arraysDice(array2, "el valor de la ultima posicion debe ir tambien en la posicion 0")).toEqual(['5','1','2','3','4','5']);
        expect(arraysDice(array3, "el valor de la ultima posicion debe ir tambien en la posicion 0")).toEqual(['prof Mauro','prof Vero','prof Camilo', 'prof Mauro']);
        expect(arraysDice(array1, "0 debe ir al final del arreglo")).toEqual([5,1,2,3,4,5,0])
        expect(arraysDice(array2, "0 debe ir al final del arreglo")).toEqual(['5','1','2','3','4','5',0])
        expect(arraysDice(array3, "0 debe ir al final del arreglo")).toEqual(['prof Mauro','prof Vero','prof Camilo', 'prof Mauro',0])
        expect(arraysDice(array1, "quiero saber el valor de la posicion 2")).toBe(2)
        expect(arraysDice(array2, "quiero saber el valor de la posicion 2")).toBe('2')
        expect(arraysDice(array3, "quiero saber el valor de la posicion 2")).toBe('prof Camilo')
        expect(arraysDice(array1, "debe aumentar en 2 el valor de cada posicion")).toEqual([7,3,4,5,6,7,2])
        expect(arraysDice(array1, "debe multiplicar por 5 el valor de cada posicion")).toEqual([35,15,20,25,30,35,10])
        expect(arraysDice(array3, "debe convertirse en 1 sola frase")).toBe('prof Mauro prof Vero prof Camilo prof Mauro 0')
        expect(arraysDice(array1, "quiero saber el valor mas grande")).toEqual(35)
        expect(arraysDice(array2, "quiero saber el valor mas grande")).toEqual(5)
        expect(arraysDice(array3, "quiero saber si el 'prof Bryan' esta")).toBe(false)
        expect(arraysDice(array4, "quiero saber si el 'prof Bryan' esta")).toBe(true)
        expect(arraysDice(array1, "quiero saber cuantos valores son mayores a 20")).toEqual(4)
    }) 
    it("'crearObjeto', Debe crear un nuevo objeto, con el nombre y la propiedad recibidos, un metodo con nombre 'saludar', y retornar el objeto", function(){
        expect(crearObjeto('gato', 1).nombre).toBe('gato');
        expect(crearObjeto('gatito', 2).propiedad).toBe(2);
        expect(crearObjeto('gatito', 3).nombre).toBe('gatito');
        expect(crearObjeto('gatote', 4).propiedad).toBe(4);
        expect(crearObjeto('gatote', 5).saludar()).toBe('Meow!');
        expect(crearObjeto('gatototote', 6).saludar()).toBe('Meow!');
    })
    it("'invocarMetodo', Debe invocar el 'metodo', del 'objeto' recibido, no necesita retornar nada", function(){
        const objeto = {
            valor: 0,
            aumento: function() {
            this.valor++;
            },
        }
        invocarMetodo(objeto, 'aumento');
        expect(objeto.valor).toBe(1);
    })
    it("'agregarContacto', Debe agregar un nuevo contacto a la propiedad 'contactos', del usuario recibido. Usuario es un objeto, contactos es un arreglo. Retornar el objeto usuario", function(){
        const usuario = {
            contactos: ['gato', 'gatotote', 'gatototote'],
        };
        const nuevoContacto = 'donGato';
        expect(agregarContacto(usuario, nuevoContacto).contactos.pop()).toBe('donGato');
    })
    it("'invocarCallBack', Debe invocar la funcion de CB recibida, no es necesario que retorne nada", function(){
        const cb = jest.fn();
		invocarCallBack(cb);
        expect(cb).toHaveBeenCalled();
    })
    it("'mapearArray', Debe utilizar el metodo 'map' para recorrer el arreglo, crear un nuevo arreglo, donde cada iteracion retorna la funcion de CallBack recibida pasandole el item del arreglo. Retorna el nuevo arreglo", function(){
        const test = mapearArray([1, 2, 3, 4, 5], num => num * num)
		expect(test).toEqual([1, 4, 9, 16, 25]);
    })


})

