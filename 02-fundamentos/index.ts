let num1: number = 10;
console.log(num1);
console.log(typeof num1);

let num2: number = 13.435544;
console.log(num2);
console.log(typeof num2);
console.log(num2.toPrecision(4));

// Strings

let firstName: string = "Cláudio";
let lastName: string = "Santos";

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

console.log(firstName + " " + lastName);

console.log(typeof firstName);

// Boolean

let a: boolean = true;

console.log(a);
console.log(typeof a);

// Annotation and Inference

const annt: string = "Teste"; // Annotation

const inf = 3; // Inference

console.log(typeof annt);
console.log(typeof inf);
