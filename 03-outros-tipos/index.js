var numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[2]);
numeros.push(6);
console.log(numeros);
numeros.reverse();
console.log(numeros);
console.log(typeof numeros);
// Array 2
var numbers = [100, 200, 300, 400];
numbers.push(500);
console.log(numbers);
numbers.reverse();
console.log(numbers);
numbers.pop();
console.log(numbers);
// Any
var arr1 = [1, 2, "a", "b", [], { name: "Claudio" }, true];
console.log(arr1);
arr1.push([20, 30, 40]);
console.log(arr1);
// Parametros Tipados
function soma(a, b) {
    console.log(a + b);
}
soma(12, 34);
// tipo de retorno de função
function boasvindas(name) {
    return "Ol\u00E1 ".concat(name);
}
console.log(boasvindas("Cláudio"));
// Tipo de Objetos
function coordinates(coor) {
    console.log("coordinate x: ".concat(coor.x));
    console.log("coordinate y: ".concat(coor.y));
}
var coordenadas = { x: 213, y: 554 };
coordinates(coordenadas);
// argumentos opcionais
function showNumbers(a, b, c) {
    console.log("A: ".concat(a));
    console.log("B: ".concat(b));
    if (c) {
        console.log("C: ".concat(c));
    }
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// maneira correta de validar argumentos
function advancedGreetings(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1 ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    }
    return "Ol\u00E1 ".concat(firstName, ", tudo bem?");
}
console.log(advancedGreetings("Cláudio", "Santos"));
console.log(advancedGreetings("Antonio"));
// union type
function showBalance(balance) {
    console.log("O saldo atual \u00E9 R$ ".concat(balance));
}
showBalance(1200);
showBalance("1200");
var values = [1, "2", false];
console.log(values);
// validando union type
function showRole(role) {
    if (typeof role === "boolean") {
        return "Usu\u00E1rio n\u00E3o aprovado";
    }
    return "Perfil de Usu\u00E1rio: ".concat(role);
}
console.log(showRole(false));
console.log(showRole("Admin"));
function showCod(cod) {
    console.log("O c\u00F3digo \u00E9 ".concat(cod));
}
showCod(1);
showCod("2");
showCod("3000");
function showCoordinates(coord) {
    console.log("x: ".concat(coord.x, ", y: ").concat(coord.y, ", z: ").concat(coord.z));
}
var pontos = {
    x: 10,
    y: 20,
    z: 30
};
showCoordinates(pontos);
// Literal Types
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o escolhida foi ".concat(direction));
}
showDirection("up");
