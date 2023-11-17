class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "senha123"; 
  
    private constructor() {}
  
    public static getInstance(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    public acessarBaseSecreta(senha: string): void {
      if (senha === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta.");
      } else {
        console.log("Acesso negado. Senha incorreta.");
      }
    }
  }
const agenteSecreto = SistemaSeguranca.getInstance();
  
agenteSecreto.acessarBaseSecreta("senha123"); 
agenteSecreto.acessarBaseSecreta("senhaErrada"); 