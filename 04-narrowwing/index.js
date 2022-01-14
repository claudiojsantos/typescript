// type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        var result = parseFloat(a) + parseFloat(b);
        console.log(result);
    }
    else if (typeof a === "number" && typeof b === "number") {
        var result = a + b;
        console.log(result);
    }
    else {
        console.log("Imposs\u00EDvel de calcular");
    }
}
sum("12", "21");
sum(14, 19.32);
sum("10", 20);
