
// type of operator
document.write(typeof 2);

// type coercion
document.write(" 5" + 2);

// NaN (Not A Number) example with Boolean 
function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('This is a string');
}

// true isNaN method
function string() {
    document.getElementById("hello").innerHTML = isNaN("Hello");
}
// false: isNaN method
function number() {
    document.getElementById("seven").innerHTML = isNaN(7);
}

// Negative infinity
document.write(-3E310);
// Boolean logic (True/false) comparison
document.write(9 > 2);

//Console.Log() method
/*
The console.log method can be used to display data in the console within the browser
*/

console.log(2+2);

//False, Console.log method Boolean logic
console.log(2 > 3);

// Boolean utilizing == false
console.log(3 == 5);

// Boolean utilizing == true
console.log(5 == 5);
// === True
console.log( 4 === 4);
// === False
console.log(4 === "5");
// === False
console.log(4 === "4");
// === False
console.log(4 === 5);

// And operator &&
document.write(4 > 3 && 4 > 2); //True

// Not operator  !
function not_function() { 
    document.getElementById("no").innerHTML = !(5 > 6);     // True
}

// Or operator  ||
function or_function() { 
    document.getElementById("or").innerHTML = (5 > 6 || 5 > 3);     // True
}