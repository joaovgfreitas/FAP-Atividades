class Banco {
    constructor(nome, conta, saldo){
        this.nome = nome
        this.conta = conta
        this.saldo = saldo
    }
    cadastrar(){
       this.nome = prompt("Digite seu nome: ")
       this.conta = Math.random().toFixed(4)
       this.saldo = Number(prompt("Digite quanto vai depositar:"))
    }
    
    excluir(){
        
    }
    
    mostrar(){
        console.log("Seu nome:",this.nome);
        console.log("Sua conta:",this.conta)
        console.log("Saldo:",this.saldo)
    }
}
var p1;
function menu(){
    console.log("\0\nDigite 1 para abrir uma conta")
    console.log("Digite 2 para exlcuir a conta")
    console.log("Digite 3 para mostrar dados da conta")
    console.log("Digite 0 para sair do menu")
    let m = prompt("");
    while (m != 0){
        if (m==1){
            p1 = new Banco()
            p1.cadastrar()
            menu();
        }else if(m==2){
            
        }else if(m==3){
            p1.mostrar()
            menu();
        }
    }
}
menu();