// Generics

function showText<T>(arg: T): string {
  return `O texto é: ${arg}`;
}

console.log(showText("Claudio"));
console.log(showText(5));
console.log(showText(["casa", "carro"]));
console.log(showText(true);

