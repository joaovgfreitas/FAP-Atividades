const vet = require('lodash');
const pri = [23, 9, 4, 45]
const seg = [7, 12]
const arraysDivididos = vet.chunk(pri, Math.ceil(pri.length / 2));
const resultado = arraysDivididos.map(array => vet.concat(array, seg));
console.log(resultado);