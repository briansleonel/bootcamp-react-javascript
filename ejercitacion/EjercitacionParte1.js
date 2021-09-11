//Completa los valores de la variables que se encuentran a continuacion reemplazando el valor undefined, por los "TIPOS DE DATOS PRIMITIVOS", para pasar los Test propuestos.

const soyUnaVariableNoDefinida = undefined;

const comoEsElAmorDeElla = null;

const pertenecesAlBootcampDeReact = true;

const unNumero = 1;

const otroNumero = 4;

const miNombreEs = "Brian";

const unObjeto = {};

const unArreglo = [];

const unArregloDeObjetos = [{}, {}];

const unObjetoConPropiedadArray = { array: [] };

const unaFuncion = () => {};

const unaFuncionQueRetorneUnArray = () => [];

const unaFuncionQueRetorneUnArrayDeObjetos = () => [{}, {}];

const unaFuncionQueRetorneUnObjetoDeObjetos = function () {
  return {
    obj1: {},
    obj2: {},
  };
};

const unaFuncionQueRetorneUnObjetoConPropiedadMuchoTexto = function() {
    return {muchoTexto : "muchotexto"}
};

const unaFuncionQueRetorneUnObjetoConPropiedadMuchoTextoYValorTuNombre =
  function() {
    return {
        muchoTexto : "tu nombre"
    }
  };

const unaFuncionQueRetorneUnObjetoConPropiedadArrayEnLaPrimeraPosicionTieneOtroObjetoConPropiedadMuchoMasTextoConValorTuNombre =
  function() {
      return {
          array : [{
              muchoMasTexto : "Brian"
          }]
      }
  };

const stapPlis = false;

// NO MODIFIQUES NADA DE AQUI ABAJO ↓↓↓↓↓↓↓↓↓
module.exports = {
  soyUnaVariableNoDefinida,
  comoEsElAmorDeElla,
  pertenecesAlBootcampDeReact,
  unNumero,
  miNombreEs,
  otroNumero,
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
};
