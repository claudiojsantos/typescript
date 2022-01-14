let numeros: number[] = [1, 2, 3, 4, 5];

console.log(numeros);
console.log(numeros[2]);

numeros.push(6);
console.log(numeros);

numeros.reverse();
console.log(numeros);

console.log(typeof numeros);

// Array 2

let numbers: Array<number> = [100, 200, 300, 400];

numbers.push(500);
console.log(numbers);

numbers.reverse();
console.log(numbers);

numbers.pop();
console.log(numbers);

// Any

let arr1: any[] = [1, 2, "a", "b", [], { name: "Claudio" }, true];

console.log(arr1);

arr1.push([20, 30, 40]);

console.log(arr1);

// Parametros Tipados

function soma(a: number, b: number) {
  console.log(a + b);
}

soma(12, 34);

// tipo de retorno de função

function boasvindas(name: string): string {
  return `Olá ${name}`;
}

console.log(boasvindas("Cláudio"));
