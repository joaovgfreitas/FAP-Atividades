const n = document.querySelector("#nome")
const m = document.querySelector("#mensa")
const t = document.querySelector("#tempo")
const r = document.querySelector("#resultado")
function simule(){
    let res;
    res = m.value*(((1 + (0.517/100)) ** t.value) -1)/(0.517/100)
    window.alert("Olá "+n.value+", juntando R$"+m.value+" todo mês, você terá R$"+res.toFixed(2)+" em "+t.value+" meses");
    r.innerHTML = `<h2>Olá ${n.value}, juntando R$ ${m.value} todo mês, você terá R$${res.toFixed(2)} em ${t.value} meses </h2>`
}