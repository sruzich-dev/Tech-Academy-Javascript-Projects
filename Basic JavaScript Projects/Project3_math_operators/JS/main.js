// function with multiplication operator
function multiplication_Function() {
    var multiplication = 9 * 6;
    document.getElementById("product").innerHTML = "9 * 6 = " + multiplication;
}
// function with division operator
function division_Function() {
    var division = 9 / 3;
    document.getElementById("quotient").innerHTML = "9 / 3 = " + division;
}
// function with multiple operators
function simple_Math_Function() {
    var basicMath = (1 + 1) * 3 / 2 -2;
    document.getElementById("simple_math").innerHTML = "(1 + 1) * 3 / 2 - 2 = " + basicMath;
}
// Modulus function
function modulus_function() {
    var remainder_division = 36 % 5;
    document.getElementById("remainder").innerHTML = "When you divide 36 by 5 you have a reainder of: " + remainder_division;
}
// Negation Operator
function negation_Operator(){
    var x = 2;
    document.getElementById("Math").innerHTML = -x;
}
// Increment function
function increment_function() {
    var y = 10;
    y++;
    document.write(y);
}
// Decrement function
function decrement_function() {
    var t = 8;
    t--;
    document.write(t);
}
// Math Random function
window.alert(Math.random() * 5);
// Math Object round method
window.alert(Math.round(5.5));