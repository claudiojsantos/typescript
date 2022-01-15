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

// verify if value exists

function operations(values: number[], operation?: string | undefined) {
  if (operation) {
    if (operation === "sum") {
      const sum = values.reduce((ant, act) => ant + act, 0);
      console.log(sum);
    } else if (operation === "multiply") {
      const multiply = values.reduce((ant, act) => ant * act);
      console.log(multiply);
    }
  } else {
    console.log("Defined a type operation");
  }
}

operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 6], "multiply");
