//  A classe Singleton define o método "getInstance" que dá acesso ao cliente

//  A única instância do singleton.
class Singleton {
    private static instance: Singleton;
    /*
        O construtor singleton sempre deve ser privado para previnir novas
        chamadas com o operador "new"
     */
    private constructor() { }

    /*
        O método estatico controla o acesso da instancia singleton

      This implementation let you subclass the Singleton class while keeping
      just one instance of each subclass around.
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    public someBusinessLogic() {
    }
}

/*
  The client code.
 */
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