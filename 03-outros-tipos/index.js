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
