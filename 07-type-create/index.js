// Generics
function showText(arg) {
    return "O texto \u00E9: ".concat(arg);
}
console.log(showText("Claudio"));
console.log(showText(5));
console.log(showText(["casa", "carro"]));
console.log(showText(true));
