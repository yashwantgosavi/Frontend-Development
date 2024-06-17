// IIFE (immediately invoked function expression)
(function () {
    console.log("IIFE");
})();



(function () {
    console.log("hello");
    (function () {
        console.log("fardin");
    }
    )();
}
)();