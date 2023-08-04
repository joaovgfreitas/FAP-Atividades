const numeros = [0, 1, 2, 3, 4, 5]
const par = numeros.filter(n =>{
    return n % 2 == 0;
})
console.log(par)
const impar = numeros.filter(n =>{
    return n % 2 !== 0;
})
console.log(impar)