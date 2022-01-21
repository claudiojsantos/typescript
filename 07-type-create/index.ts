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
