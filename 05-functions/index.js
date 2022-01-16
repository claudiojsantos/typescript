// void
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
