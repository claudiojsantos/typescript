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

// Tipo de Objetos

function coordinates(coor: { x: number; y: number }) {
  console.log(`coordinate x: ${coor.x}`);
  console.log(`coordinate y: ${coor.y}`);
}

const coordenadas = { x: 213, y: 554 };

coordinates(coordenadas);

// argumentos opcionais

function showNumbers(a: number, b: number, c?: number): void {
  console.log(`A: ${a}`);
  console.log(`B: ${b}`);

  if (c) {
    console.log(`C: ${c}`);
  }
}

showNumbers(1, 2, 3);
showNumbers(1, 2);

// maneira correta de validar argumentos

function advancedGreetings(firstName: string, lastName?: string): string {
  if (lastName !== undefined) {
    return `Olá ${firstName} ${lastName}, tudo bem?`;
  }

  return `Olá ${firstName}, tudo bem?`;
}

console.log(advancedGreetings("Cláudio", "Santos"));
console.log(advancedGreetings("Antonio"));

// union type

function showBalance(balance: number | string) {
  console.log(`O saldo atual é R$ ${balance}`);
}

showBalance(1200);
showBalance("1200");

const values: Array<number | string | boolean> = [1, "2", false];

console.log(values);

// validando union type
function showRole(role: string | boolean) {
  if (typeof role === "boolean") {
    return `Usuário não aprovado`;
  }

  return `Perfil de Usuário: ${role}`;
}

console.log(showRole(false));
console.log(showRole("Admin"));

// type alias
type ID = string | number;

function showCod(cod: ID) {
  console.log(`O código é ${cod}`);
}

showCod(1);
showCod("2");
showCod("3000");
