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
