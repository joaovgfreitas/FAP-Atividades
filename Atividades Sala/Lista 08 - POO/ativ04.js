class Calculadora {
    constructor(n1, n2){
        this.n1 = n1
        this.n2 = n2
    }
    soma(){
        let s = this.n1 + this.n2
        return s
    } 
    subtracao(){
        let sub = this.n1 - this.n2
        return sub;
    }
    multiplicacao(){
        let mul = this.n1 * this.n2
        return mul
    }
    divisao(){
        let div = this.n1/this.n2
        return div;
    }
}
let c1 = new Calculadora(10, 2)
console.log("Soma:",c1.soma())
console.log("Subtracao:",c1.subtracao())
console.log("Multiplicacao:",c1.multiplicacao())
console.log("Divisao:",c1.divisao())