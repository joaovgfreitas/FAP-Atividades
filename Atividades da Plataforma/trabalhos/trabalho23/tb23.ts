class Prototype {
    public primitive: any;
    public component: object;
    public circularReference: ComponentWithBackReference;

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}
function clientCode() {
    const p1 = new Prototype();
    p1.primitive = 245;
    p1.component = new Date();
    p1.circularReference = new ComponentWithBackReference(p1);

    const p2 = p1.clone();
    if (p1.primitive === p2.primitive) {
        console.log('Campos primitivos foram carregados para um clone');
    } else {
        console.log('Campos primitivos não foram copiados.');
    }
    if (p1.component === p2.component) {
        console.log('Componente não foi clonado.');
    } else {
        console.log('Componente clonado');
    }

    if (p1.circularReference === p2.circularReference) {
        console.log('Componente com referencia não foi clonado.');
    } else {
        console.log('Componente com referencia foi clonado.');
    }

    if (p1.circularReference.prototype === p2.circularReference.prototype) {
        console.log('Componente com referencia NÃO está ligado ao objeto original.');
    } else {
        console.log('Componente com referencia está ligado ao objeto original.');
    }
}

clientCode();