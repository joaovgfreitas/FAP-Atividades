interface Galinha {
    cacarejar(): void;
    bicar(): void;
  }
  
  class GalinhaComum implements Galinha {
    cacarejar(): void {
      console.log("Cocoricó!");
    }
  
    bicar(): void {
      console.log("Galinhas bicam no chão.");
    }
  }
  
  interface Pato {
    grasnar(): void;
    voar(): void;
  }
  
  class PatoComum implements Pato {
    grasnar(): void {
      console.log("Quack!");
    }
  
    voar(): void {
      console.log("Patos voam alto.");
    }
  }
  
  class AdaptadorPato implements Galinha {
    private pato: Pato;
  
    constructor(pato: Pato) {
      this.pato = pato;
    }
  
    cacarejar(): void {
      this.pato.grasnar();
    }
  
    bicar(): void {
      console.log("Patos não bicam, mas podem grasnar.");
    }
  }
  
  class AdaptadorPatoDemo {
    static main(): void {
      const galinha: Galinha = new GalinhaComum();
      const pato: Pato = new PatoComum();
  
      console.log("A Galinha comum faz:");
      galinha.cacarejar();
      galinha.bicar();
  
      console.log("\nO Pato comum faz:");
      pato.grasnar();
      pato.voar();
  
      const adaptadorPato: Galinha = new AdaptadorPato(pato);
      
      console.log("\nUsando o AdaptadorPato para fazer o Pato soar como uma Galinha:");
      adaptadorPato.cacarejar();
      adaptadorPato.bicar();
    }
  }
  
  AdaptadorPatoDemo.main();