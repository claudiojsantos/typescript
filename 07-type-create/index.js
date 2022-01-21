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
var myCar = { name: "Fusca", wheels: 4, engine: 1.4, color: "white" };
var myPen = {
    name: "Bic",
    wheels: false,
    engine: false,
    color: "black"
};
console.log(myCar);
console.log(myPen);
// type parameters
function getSomekey(obj, key) {
    return "A chave ".concat(key, " est\u00E1 presente no objeto e tem o valor de ").concat(obj[key]);
}
var server = {
    hd: "8TB",
    ram: "16GB"
};
console.log(getSomekey(server, "ram"));
function showCharName(obj, key) {
    return "".concat(obj[key]);
}
var myChar = {
    name: "Cláudio",
    age: 47,
    hasDriveLicense: true
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
console.log(showCharName(myChar, "hasDriveLicense"));
// typeof type operators
var userName = "Cláudio";
var userName2 = "Antonio";
var userName3 = "Aldo";
var newTruck = { km: 10000, kg: 5000, description: "teste" };
function showKm(km) {
    console.log("O ve\u00EDculo tem a km de ".concat(km));
}
showKm(newTruck.km);
var myVar = 5;
