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
