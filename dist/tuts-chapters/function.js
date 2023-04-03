"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
let loginUser = (name, email, isPaid = true) => { };
addTwo(5);
getUpper("h");
signUpUser("hamesh", "hamesh@gmail.com", true);
loginUser("hamesh", "hamesh@gmail.com");
function getValue(myValue) {
    if (myValue > 5) {
        return true;
    }
    return "200 OK";
}
const getHello = (s) => {
    return "";
};
const heros = ["thor", "spiderman", "ironman"];
const heroAndNumbers = [1, 2, "ironman"];
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
