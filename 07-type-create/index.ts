// Generics

function showText<T>(arg: T): string {
  return `O texto é: ${arg}`;
}

console.log(showText("Claudio"));
console.log(showText(5));
console.log(showText(["casa", "carro"]));
console.log(showText(true));

// Constraints in Generics

function showNameProduct<T extends { name: string }>(obj: T) {
  return `O nome do produto é ${name}`;
}

const myObj = { name: "Carro", cor: "vermelho" };

showNameProduct(myObj);

// Interfaces with generics

interface MyObject<T, U, V> {
  name: string;
  wheels: T;
  engine: U;
  color: V;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.4, color: "white" };
const myPen: Pen = {
  name: "Bic",
  wheels: false,
  engine: false,
  color: "black",
};

console.log(myCar);
console.log(myPen);

// type parameters

function getSomekey<T, k extends keyof T>(obj: T, key: k) {
  return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
  hd: "8TB",
  ram: "16GB",
};

console.log(getSomekey(server, "ram"));

// keyof type operator

type Character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, key: C): string {
  return `${obj[key]}`;
}

const myChar: Character = {
  name: "Cláudio",
  age: 47,
  hasDriveLicense: true,
};

console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
console.log(showCharName(myChar, "hasDriveLicense"));

// typeof type operators
const userName: string = "Cláudio";

const userName2: typeof userName = "Antonio";

type x = typeof userName2;

const userName3: x = "Aldo";
