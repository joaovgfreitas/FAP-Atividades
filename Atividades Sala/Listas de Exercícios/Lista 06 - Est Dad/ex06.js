let pedidos = [
    {'id': 420, 'nome': 'Dener', 'alimento': 'Sandubão de Bacon', 'bebida':'Suco de Limão'},
    {'id': 33, 'nome': 'Isabel', 'alimento': 'Sandubão de Picanha', 'bebida':'Refrigerante'}
];
const pedido = pedidos.find(pronto => pronto.id == 33)
console.log(pedido)