const {
    soyUnaVariableNoDefinida,
    comoEsElAmorDeElla,
    pertenecesAlBootcampDeReact,
    unNumero,
    otroNumero,
    miNombreEs,    
    unObjeto,
    unArreglo,
    unArregloDeObjetos,
    unObjetoConPropiedadArray,
    unaFuncion,
    unaFuncionQueRetorneUnArray,
    unaFuncionQueRetorneUnArrayDeObjetos,
    unaFuncionQueRetorneUnObjetoDeObjetos,
    unaFuncionQueRetorneUnObjetoConPropiedadMuchoTexto,
    unaFuncionQueRetorneUnObjetoConPropiedadMuchoTextoYValorTuNombre,
    unaFuncionQueRetorneUnObjetoConPropiedadArrayEnLaPrimeraPosicionTieneOtroObjetoConPropiedadMuchoMasTextoConValorTuNombre,
    stapPlis,
} = require('../EjercitacionParte1.js');


describe('Tipos de datos primitivos', function(){
    it(" 'soyUnaVariableNoDefinida' debe ser undefined", function(){
        expect(soyUnaVariableNoDefinida).toBe(undefined)
    })
    it(" 'comoEsElAmorDeElla' debe ser null", function(){
        expect(comoEsElAmorDeElla).toBe(null)
    })
    it(" 'pertenecesAlBootcampDeReact' debe ser booleano", function(){
        expect(typeof pertenecesAlBootcampDeReact).toBe('boolean')
    })
    it(" 'unNumero' debe ser unNumero", function(){
        expect(typeof unNumero).toBe('number')
    })
    it(" 'otroNumero' debe ser otroNumero diferente al numero anterior", function(){
        expect(typeof otroNumero).toBe('number')
        expect(otroNumero).not.toBe(unNumero)
    })
    it(" 'miNombreEs' Deberia ser un string", function(){
        expect(typeof miNombreEs).toBe('string');
    })
    it(" 'unObjeto' Deberia ser unObjeto", function(){
        expect(typeof unObjeto).toBe('object');
        expect(unObjeto.length).toBe(undefined);
    })
    it(" 'unArreglo' Deberia ser un unArreglo", function(){
        expect(typeof unArreglo).toBe('object')
        expect(unArreglo.length).toBeGreaterThanOrEqual(0);
    })
    it(" 'unArregloDeObjetos' Deberia ser unArregloDeObjetos", function(){
        expect(typeof unArregloDeObjetos).toBe('object')
        expect(unArregloDeObjetos.length).toBeGreaterThan(0);
        unArregloDeObjetos.forEach((elemento, i)=> {
                expect(typeof elemento).toBe('object')
        })
    })
    it(" 'unObjetoConPropiedadArray' Deberia ser un Objeto Con Una Propiedad 'array' que es un arreglo", function(){
        expect(typeof unObjetoConPropiedadArray).toBe('object');
        expect(typeof unObjetoConPropiedadArray.array).toBe('object');
        expect(unObjetoConPropiedadArray.array.length).toBeGreaterThanOrEqual(0)
    })
    it(" 'unaFuncion' Deberia ser una funcion", function(){
        expect(typeof unaFuncion).toBe('function');
    })
    it(" 'unaFuncionQueRetorneUnArray' Deberia ser una funcion que retorne un Array", function(){
        expect(typeof unaFuncionQueRetorneUnArray).toBe('function');
        expect(typeof unaFuncionQueRetorneUnArray()).toBe('object');
        expect(unaFuncionQueRetorneUnArray().length).toBeGreaterThanOrEqual(0)
    })
    it(" 'unaFuncionQueRetorneUnArrayDeObjetos' Deberia ser una funcion que retorne un Array de objetos", function(){
        expect(typeof unaFuncionQueRetorneUnArrayDeObjetos).toBe('function');
        expect(typeof unaFuncionQueRetorneUnArrayDeObjetos()).toBe('object');
        expect(unaFuncionQueRetorneUnArrayDeObjetos().length).toBeGreaterThan(0)
        unaFuncionQueRetorneUnArrayDeObjetos().forEach((elemento, i)=> {
                expect(typeof elemento).toBe('object')
        })
    })
    it(" 'unaFuncionQueRetorneUnObjetoDeObjetos' Deberia ser una funcion que retorne un Objeto de objetos", function(){
        expect(typeof unaFuncionQueRetorneUnObjetoDeObjetos).toBe('function');
        expect(typeof unaFuncionQueRetorneUnObjetoDeObjetos()).toBe('object');
        Object.values(unaFuncionQueRetorneUnObjetoDeObjetos()).forEach((elemento)=>{
            expect(typeof elemento).toBe('object')
        })
        
    })
    it(" 'unaFuncionQueRetorneUnObjetoConPropiedadMuchoTexto' Deberia ser una funcion que retorne un Objeto con una propiedad 'muchoTexto'", function(){
        expect(typeof unaFuncionQueRetorneUnObjetoConPropiedadMuchoTexto).toBe('function');
        expect(typeof unaFuncionQueRetorneUnObjetoConPropiedadMuchoTexto()).toBe('object');
        expect(unaFuncionQueRetorneUnObjetoConPropiedadMuchoTexto().muchoTexto).not.toBe(undefined)
    })
    it(" 'unaFuncionQueRetorneUnObjetoConPropiedadMuchoTextoYValorTuNombre' Deberia ser una funcion que retorne un Objeto con una propiedad 'muchoTexto' y valor 'tu nombre'", function(){
        expect(typeof unaFuncionQueRetorneUnObjetoConPropiedadMuchoTextoYValorTuNombre).toBe('function');
        expect(typeof unaFuncionQueRetorneUnObjetoConPropiedadMuchoTextoYValorTuNombre()).toBe('object');
        expect(unaFuncionQueRetorneUnObjetoConPropiedadMuchoTextoYValorTuNombre().muchoTexto).not.toBe(undefined)
        expect(unaFuncionQueRetorneUnObjetoConPropiedadMuchoTextoYValorTuNombre().muchoTexto).toBe('tu nombre')
    })
    it(" 'unaFuncionQueRetorneUnObjetoConPropiedadArrayEnLaPrimeraPosicionTieneOtroObjetoConPropiedadMuchoMasTextoConValorTuNombre' Deberia ser una funcion que retorne un Objeto con una propiedad 'array' el cual es una arreglo, cuya primera posicion, es un objeto con una propiedad 'muchoMasTexto' y valor tu nombre", function(){
        expect(typeof unaFuncionQueRetorneUnObjetoConPropiedadArrayEnLaPrimeraPosicionTieneOtroObjetoConPropiedadMuchoMasTextoConValorTuNombre).toBe('function');
        expect(typeof unaFuncionQueRetorneUnObjetoConPropiedadArrayEnLaPrimeraPosicionTieneOtroObjetoConPropiedadMuchoMasTextoConValorTuNombre()).toBe('object');
        expect(typeof unaFuncionQueRetorneUnObjetoConPropiedadArrayEnLaPrimeraPosicionTieneOtroObjetoConPropiedadMuchoMasTextoConValorTuNombre().array).toBe('object')
        expect(unaFuncionQueRetorneUnObjetoConPropiedadArrayEnLaPrimeraPosicionTieneOtroObjetoConPropiedadMuchoMasTextoConValorTuNombre().array.length).toBeGreaterThanOrEqual(0);
        expect(typeof unaFuncionQueRetorneUnObjetoConPropiedadArrayEnLaPrimeraPosicionTieneOtroObjetoConPropiedadMuchoMasTextoConValorTuNombre().array[0]).toBe('object');
        expect( unaFuncionQueRetorneUnObjetoConPropiedadArrayEnLaPrimeraPosicionTieneOtroObjetoConPropiedadMuchoMasTextoConValorTuNombre().array[0].muchoMasTexto).not.toBe(undefined);
        expect( unaFuncionQueRetorneUnObjetoConPropiedadArrayEnLaPrimeraPosicionTieneOtroObjetoConPropiedadMuchoMasTextoConValorTuNombre().array[0].muchoMasTexto).not.toBe("tu nombre");
        
    })
    it(" 'stapPlis'?", function(){
        expect(stapPlis).toBe(false)
    })


})


