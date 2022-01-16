// type guard
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Instance of
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
function greetingsUser(user) {
    if (user instanceof SuperUser) {
        console.log("Welcome ".concat(user.name, ". View your credentials?"));
    }
    else if (user instanceof User) {
        console.log("Welcome ".concat(user.name));
    }
}
var john = new User("john");
var paul = new SuperUser("paul");
console.log(john);
console.log(paul);
greetingsUser(john);
greetingsUser(paul);
// operador in
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var toto = new Dog("toto");
var file = new Dog("file", "Yorkshire");
function showDetailsDog(dog) {
    if ("breed" in dog) {
        console.log("A ra\u00E7a de ".concat(dog.name, " \u00E9 ").concat(dog.breed));
    }
    else {
        console.log("A ra\u00E7a de ".concat(dog.name, " \u00E9 SRD"));
    }
}
showDetailsDog(toto);
showDetailsDog(file);
