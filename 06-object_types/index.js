// interfaces
function showDetailsProduct(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " e seu pre\u00E7o \u00E9 R$ ").concat(product.value));
    if (product.isAvailable) {
        console.log("O produto est\u00E1 dispon\u00EDvel");
    }
}
var computer = {
    name: "Computer",
    value: 1000.0,
    isAvailable: true
};
showDetailsProduct(computer);
showDetailsProduct({ name: "Computer old", value: 500.0, isAvailable: false });
function showUserDetails(user) {
    console.log("O usu\u00E1rio ".concat(user.name, " tem seu email ").concat(user.email));
    if (user.role) {
        console.log("Seu perfil \u00E9 ".concat(user.role));
    }
}
showUserDetails({
    name: "Cláudio Santos",
    email: "claudio@sistnet.com.br",
    role: "admin"
});
showUserDetails({
    name: "Antonio Cláudio",
    email: "antonio@sistnet.com.br"
});
var Ka = {
    brand: "Ford",
    wheels: 5
};
var coord = {
    x: 10
};
coord.y = 15;
coord.z = 16;
console.log(coord);
var claudio = {
    name: "claudio",
    age: 47,
    profession: "Analista de Sistemas"
};
console.log(claudio);
var dalva = {
    name: "Antonio Claudio",
    age: 14,
    college: "Contato Farol",
    grade: 9
};
console.log(dalva);
// ReadOnly Array
var myArray = ["a", "b", "c", "d"];
myArray.forEach(function (item) {
    console.log("Letra: ".concat(item));
});
myArray = myArray.map(function (item) {
    return "Letra: ".concat(item);
});
console.log(myArray);
var randomNumbers = [12, 23, 35, 48, 51];
console.log(randomNumbers);
var user = ["Claudio", 47];
console.log(user);
user[0] = "Antonio";
user[1] = 14;
console.log(user);
// tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([2, 3]);
