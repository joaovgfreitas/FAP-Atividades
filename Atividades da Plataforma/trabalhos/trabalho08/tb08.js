class Banco {
    constructor(conta, saldo, tipocon, agencia){
        this.conta = conta
        this.saldo = saldo
        this.tipocon = tipocon
        this.agencia = agencia
    }
    buscarsaldo(){
        return this.saldo
    }
    deposito(d){
        this.saldo = d + this.saldo
        return this.saldo
    }
    saque(s){
        this.saldo = s - this.saldo
        return this.saldo
    }
    numeroConta(){
        return this.conta
    }
}
let b1 = new Banco
b1.saldo = 1000
b1.conta = 1234

console.log("Saldo Atual:",b1.buscarsaldo());
console.log("Número da conta:",b1.numeroConta());
b1.deposito(500)
console.log("Novo saldo depois do deposito: ",b1.buscarsaldo())
b1.saque(200)
console.log("Saldo depois do Saque:",b1.buscarsaldo())