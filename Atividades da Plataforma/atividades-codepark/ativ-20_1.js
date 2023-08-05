class ListNode {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.next = null                
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}
function size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}
function clear() {
    this.head = null;
}
function getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}
function getFirst() {
    return this.head;
}
let pessoa1 = new ListNode("Maria", 48)
let pessoa2 = new ListNode("Pedro", 18)
pessoa1.next = pessoa2
let list = new LinkedList(pessoa1)
console.log(pessoa1)
let mae1 = new ListNode("Raquel", 52)
let filho1 = new ListNode("Joao", 22)
mae1.next = filho1
let list1 = new LinkedList(filho1)
console.log(mae1)