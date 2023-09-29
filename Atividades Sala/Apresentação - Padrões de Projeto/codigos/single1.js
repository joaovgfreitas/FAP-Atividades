// A classe Singleton define o método "getInstance" que dá acesso ao cliente
class Singleton {
    private static instance: Singleton;
    private constructor() { } // O construtor singleton sempre deve ser privado para previnir novas
    // O método estatico controla o acesso da instancia 
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    /*
      Finally, any singleton should define some business logic, which can be
      executed on its instance.
     */
    public someBusinessLogic() {
    }
}
 
function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log("Singleton funciona, ambas variáveis tem a mesma intância.");
    } else {
        console.log("Erro!, variáveis tem instâncias diferentes.");
    }
}
clientCode();