// "Length" Method
let text = "Hello World!";
let length = text.length;

document.getElementById("demo").innerHTML = length;

// for Loop function with array
var Animals = ["Cat", "Dog", "Parrot"];
var content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Animals.length; Y++) {content += Animals[Y] + "<br>";
    }

    document.getElementById("pets").innerHTML = content;
}

// Function with "Array"
function array_Function() {
    var numbers = [];
    numbers [0] = 0;
    numbers [1] = 1;
    numbers [2] = 2;
    numbers [3] = 3;
    numbers [4] = 4;
    document.getElementById("array").innerHTML = "The next number in this array is " + numbers[2] + ".";
}

// Function utilizing "Const" keyword
function constant_function() {
    const Student = {name: "Jack", grade: "10th", gpa: "3.78"};
    Student.name = "James";
    Student.grade = "10th";
    Student.gpa = "3.29";
    document.getElementById("Constant").innerHTML = "Student " + Student.name + " is in " + Student.grade + " grade and has a " + Student.gpa + " grade point average.";
}

// "let" Keyword
var L = 2;
document.write(L);
{
    let L = 3;
    document.write(L);
}
document.write(L);

// "return" statement
function return_function() {
    return Math.PI;
}
document.getElementById("return").innerHTML = return_function();

// Object using "let" keyword'
let dinner = {
    diet: "Paleo",
    main_dish: "Dry-aged steak",
    side_dish: "sweet potatos",
    drink: "Topo Chico mineral water",
    description : function() {
        return "The special of the day features " + this.diet + " diet items including: " + this.main_dish + " with a side of " + this.side_dish + " and served with an ice-cold " + this.drink + " drink."
    }
};
document.getElementById("menu_item").innerHTML = dinner.description();

// Loop function with "break" statement
// 1st for loop is labeled "Loop1"
let word = "";
Loop1:
for (let R = 0; R < 3; R++) {
    word += R + "<br>";
// 2nd for loop is labeled "Loop2"
Loop2:
    for (let R = 10; R < 15; R++) {
    word += R + "<br>";
    if (R === 12) break Loop1;
    }
}
document.getElementById("break").innerHTML = word;

// Loop function with "continue" statement
let cont = "";
for (let X = 0; X < 5; X++) {
  if (X === 3) continue;
  cont += X + "<br>";
}
document.getElementById("continue").innerHTML= cont;

// "While" loop
let ten = "";
let W = 0;
while (W < 10) {
  ten += "<br>The number is " + W;
  W++;
}
document.getElementById("while").innerHTML = ten;
