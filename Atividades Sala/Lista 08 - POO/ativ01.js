class aluno {
    constructor(matricula, nome, nota1, nota2, notatrab){
    this.matricula = matricula
    this.nome = nome
    this.nota1 = nota1
    this.nota2 = nota2
    this.notatrab = notatrab
    }
    media(){
    const m = ((this.nota1*2.5) + (this.nota2*2.5) + (this.notatrab*2))/7;
    return m;
}
    final(){
        if (this.m<7){
            let nrest = 10 - this.m;
            return nrest; 
        }else {
            return 0;
        } 
    } 
} 
const a1 = new aluno(25419, "joao", 6, 7, 8);
console.log("Media do aluno:",a1.media().toFixed(2));
console.log("Precisa de",a1.final(),"para passar")