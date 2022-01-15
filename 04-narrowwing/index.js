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
// verify if value exists
function operations(values, operation) {
    if (operation) {
        if (operation === "sum") {
            var sum_1 = values.reduce(function (ant, act) { return ant + act; }, 0);
            console.log(sum_1);
        }
        else if (operation === "multiply") {
            var multiply = values.reduce(function (ant, act) { return ant * act; });
            console.log(multiply);
        }
    }
    else {
        console.log("Defined a type operation");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 6], "multiply");
