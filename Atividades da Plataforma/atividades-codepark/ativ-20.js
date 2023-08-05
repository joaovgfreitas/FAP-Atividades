/*Crie uma lista encadeada em que cada elemento representa uma pessoa.
Ela precisa conter informações como nome, idade e referência ao filho dela.*/
class No {
    constructor(nome){
        this.nome = nome
        this.idade = idade
        this.proximo = null
    }
}
class ListaLigada {
    constructor(){
        this.cabeca = null
    }
    addFirst(nome){
        const newNo = new No(nome);
        newNo.proximo = this.cabeca;
        this.cabeca = newNo;
    }
    addLast(nome){
        const newNo = new No(nome);
        if (!this.cabeca){
            this.cabeca = newNo;
        }else {
            let current = this.cabeca
            while (current.proximo){
                current = current.proximo
            }
            current.proximo = newNo
        }
    }
    removeFirst(){
        if (!this.cabeca){
            return null
        }
        const removedNo = this.cabeca
        this.cabeca = this.cabeca.proximo
        removedNo.proximo = null
        return removedNo.nome;
    }
    removeLast(){
        if (!this.cabeca){
            return null;
        }
        if (!this.cabeca.proximo){
            const removedNo = this.cabeca;
            this.cabeca = null
            return removedNo.nome;
        }
        let current = this.cabeca;
        let previous = null;
        while (current.proximo){
            previous = current;
            current = current.proximo;
        }
        previous.proximo = null
        return current.nome;
    }
    search (nome){
        let current = this.cabeca;
        while(current){
            if (current.nome === nome){
                return current;
            }
            current = current.proximo
        }
        return null
    }
    size(){
        let count = 0;
        let current = this.cabeca;
        while(current){
            count++;
            current = current.proximo;
        }
        return count;
    }
}