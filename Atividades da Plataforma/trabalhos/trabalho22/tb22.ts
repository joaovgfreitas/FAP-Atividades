abstract class Creator {
    public abstract factoryMethod(): Product;
    public someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: o codigo criador funcionou com ${product.operation()}`;
    }
}
class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}
class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}
interface Product {
    operation(): string;
}
class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Resultado de ConcreteProduct1}';
    }
}
class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Resultado de ConcreteProduct2}';
    }
}
function clientCode(creator: Creator) {
    console.log('Client: Ainda está funcionando.');
    console.log(creator.someOperation());
    
}
console.log('App: funcionou com ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');
console.log('App: funcionou com ConcreteCreator2.');
clientCode(new ConcreteCreator2());