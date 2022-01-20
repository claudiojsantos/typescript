// interfaces

interface Product {
  name: string;
  value: number;
  isAvailable: boolean;
}

function showDetailsProduct(product: Product): void {
  console.log(
    `O nome do produto é ${product.name} e seu preço é R$ ${product.value}`
  );

  if (product.isAvailable) {
    console.log(`O produto está disponível`);
  }
}

const computer = {
  name: "Computer",
  value: 1000.0,
  isAvailable: true,
};

showDetailsProduct(computer);
showDetailsProduct({ name: "Computer old", value: 500.0, isAvailable: false });

// optional parameter interfaces

interface User {
  name: string;
  email: string;
  role?: string;
}

function showUserDetails(user: User): void {
  console.log(`O usuário ${user.name} tem seu email ${user.email}`);

  if (user.role) {
    console.log(`Seu perfil é ${user.role}`);
  }
}

showUserDetails({
  name: "Cláudio Santos",
  email: "claudio@sistnet.com.br",
  role: "admin",
});

showUserDetails({
  name: "Antonio Cláudio",
  email: "antonio@sistnet.com.br",
});

// read-only

interface Car {
  brand: string;
  readonly wheels: number;
}

const Ka: Car = {
  brand: "Ford",
  wheels: 5,
};

// Ka.wheels = 4; // dont permitted

// index signature

interface CoordObject {
  [index: string]: number;
}

const coord: CoordObject = {
  x: 10,
};

coord.y = 15;

coord.z = 16;

console.log(coord);

// extending interfaces

interface Pessoa {
  name: string;
  age: number;
}

interface Profession extends Pessoa {
  profession: string;
}

const claudio: Profession = {
  name: "claudio",
  age: 47,
  profession: "Analista de Sistemas",
};

console.log(claudio);

interface College {
  college: string;
  grade: number;
}

// intersection Types
type PeopleWithCollege = Pessoa & College;

const dalva: PeopleWithCollege = {
  name: "Antonio Claudio",
  age: 14,
  college: "Contato Farol",
  grade: 9,
};

console.log(dalva);

// ReadOnly Array

let myArray: ReadonlyArray<string> = ["a", "b", "c", "d"];

myArray.forEach((item) => {
  console.log(`Letra: ${item}`);
});

myArray = myArray.map((item) => {
  return `Letra: ${item}`;
});

console.log(myArray);

// tuplas

type fiveNumbers = [number, number, number, number, number];

const randomNumbers: fiveNumbers = [12, 23, 35, 48, 51];

console.log(randomNumbers);

type nameAge = [string, number];

const user: nameAge = ["Claudio", 47];

console.log(user);

user[0] = "Antonio";
user[1] = 14;

console.log(user);

// tuplas com readonly

function showNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([2, 3]);
