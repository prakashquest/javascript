// A closure is a function having access to the parent scope, even after the parent function has closed.
// https://www.w3schools.com/js/js_function_closures.asp

var addusingclosure = (function () {
    var counter = 0;

    return function () {

        counter += 1;

        var txtcounter = document.getElementById('txtcounter');
        txtcounter.value = counter.toString();

        return counter;
    };
})();