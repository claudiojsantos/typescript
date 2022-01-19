// void

function withoutReturn(): void {
  console.log("Function without return");
}

withoutReturn();

// callback as argument

function greetings(name: string): string {
  return `Welcome ${name}`;
}

function preGreetings(f: (name: string) => string, userName: string): void {
  const greet = f(userName);

  console.log(greet);
}

preGreetings(greetings, "Cláudio");
preGreetings(greetings, "Antonio");
preGreetings(greetings, "Aldo");

// Generics

function viewFirstElement<T>(array: T[]) {
  return array[0];
}

console.log(viewFirstElement([1, 2, 3, 4]));
console.log(viewFirstElement(["a", "b", "c", "d"]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

console.log(mergeObjects({ nome: "claudio" }, { idade: 47 }));

// contraints in generics

function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

console.log(biggestNumber(10, 5));
console.log(biggestNumber("7", "13"));

// type arguments

function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ["a", "b", "c", "d"]));

// optional arguments

function formalGrettings(name: string, greet?: string): string {
  if (greet) {
    return `Olá ${greet} ${name}`;
  }

  return `Olá ${name}`;
}

console.log(formalGrettings("Claudio"));
console.log(formalGrettings("Antonio", "Dr."));

// default arguments

function sum(a: number, b = 5): number {
  return a + b;
}

console.log(sum(5));
console.log(sum(5, 6));

// unknown

function doSomething(x: unknown) {
  if (typeof x === "number") {
    console.log("X é um número");
  } else if (Array.isArray(x)) {
    console.log(x[0]);
  }
}

doSomething(34);
doSomething(["a", "b", "c"]);
doSomething([1, 2, 3]);
