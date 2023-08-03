/*Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.
Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade. */
let animal = [
/*Lobo    */["Lobo", "Canis Lupus", 3],
/*Cachorro*/["Cachorro", "Canis lupus familiaris", 6],
/*Tigre   */["Tigre", "Panthera tigris", 4],
/*Gato    */["Gato", "Felis catus", 8]
];
for (let i = 0; i < animal.length; i++){
    for(let j = 0; j < animal[i].length; j++){
        console.log(animal[i][j]);
    }
} 
//console.log(animal)