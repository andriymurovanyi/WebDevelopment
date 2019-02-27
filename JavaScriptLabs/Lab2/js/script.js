function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

let army = {};

console.log(isEmpty(army)); // true

army["Student"] = "Welcome!";

console.log(isEmpty(army));