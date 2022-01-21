// Generics
function showText(arg) {
    return "O texto \u00E9: ".concat(arg);
}
console.log(showText("Claudio"));
console.log(showText(5));
console.log(showText(["casa", "carro"]));
console.log(showText(true));
// Constraints in Generics
function showNameProduct(obj) {
    return "O nome do produto \u00E9 ".concat(name);
}
var myObj = { name: "Carro", cor: "vermelho" };
showNameProduct(myObj);
