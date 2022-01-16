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
