function Somar1(){
    let n1, n2, s1
    n1 = 1
    n2 = 2
    s1 = n1 + n2
    console.log("Soma 1:",s1)
}
Somar1()
const Somar2 = (n3 = 3, n4 = 4) => {
    let s2 = n3 + n4
    return s2;
}
console.log("Soma 2:",Somar2())

function Somar3(n5, n6){
    let s2 = n5 + n6;
    return s2
}
console.log("Soma 3:",Somar3(5, 6))