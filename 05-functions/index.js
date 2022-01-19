// void
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function withoutReturn() {
    console.log("Function without return");
}
withoutReturn();
// callback as argument
function greetings(name) {
    return "Welcome ".concat(name);
}
function preGreetings(f, userName) {
    var greet = f(userName);
    console.log(greet);
}
preGreetings(greetings, "Cláudio");
preGreetings(greetings, "Antonio");
preGreetings(greetings, "Aldo");
// Generics
function viewFirstElement(array) {
    return array[0];
}
console.log(viewFirstElement([1, 2, 3, 4]));
console.log(viewFirstElement(["a", "b", "c", "d"]));
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
console.log(mergeObjects({ nome: "claudio" }, { idade: 47 }));
// contraints in generics
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(10, 5));
console.log(biggestNumber("7", "13"));
// type arguments
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], ["a", "b", "c", "d"]));
// optional arguments
function formalGrettings(name, greet) {
    if (greet) {
        return "Ol\u00E1 ".concat(greet, " ").concat(name);
    }
    return "Ol\u00E1 ".concat(name);
}
console.log(formalGrettings("Claudio"));
console.log(formalGrettings("Antonio", "Dr."));
// default arguments
function sum(a, b) {
    if (b === void 0) { b = 5; }
    return a + b;
}
console.log(sum(5));
console.log(sum(5, 6));
// unknown
function doSomething(x) {
    if (typeof x === "number") {
        console.log("X é um número");
    }
    else if (Array.isArray(x)) {
        console.log(x[0]);
    }
}
doSomething(34);
doSomething(["a", "b", "c"]);
doSomething([1, 2, 3]);
// never
function showError(msg) {
    throw new Error(msg);
}
showError("Ocorreu algum erro");
