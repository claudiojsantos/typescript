// type guard

function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    let result = parseFloat(a) + parseFloat(b);

    console.log(result);
  } else if (typeof a === "number" && typeof b === "number") {
    let result = a + b;

    console.log(result);
  } else {
    console.log(`Impossível de calcular`);
  }
}

sum("12", "21");
sum(14, 19.32);
sum("10", 20);
