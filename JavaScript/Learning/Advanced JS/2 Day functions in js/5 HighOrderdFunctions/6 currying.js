// Curring in Js
function add(a) {
    return function (b) {
        return function (c) {
            return b ** a;
        }
    }
}
console.log(add(1)(2)(3));