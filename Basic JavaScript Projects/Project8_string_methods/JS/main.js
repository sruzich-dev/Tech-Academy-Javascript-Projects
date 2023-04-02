
// string function using Concat() method
function sentence() {
    var part_1 = "This is a "
    var part_2 = "concatenated "
    var part_3 = "string."
    var complete_sentence = part_1.concat(part_2, part_3);
    document.getElementById("string").innerHTML = complete_sentence;
}

// slice() Method
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var section = Sentence.slice(0, 8);
    document.getElementById("slice").innerHTML = section;
}

// UpperCase() Method
    let text = "Hello World!";
    let result = text.toUpperCase();
    document.getElementById("uppercase").innerHTML = result;

// search() Method
    let search_sentence = "Ow now brown cow"
    let position = search_sentence.search("now");

    document.getElementById("search").innerHTML = position;

//    toString() Number Method
function string_method() {
    var x = 199;
    document.getElementById("numbers_to_string").innerHTML = x.toString();
}

//toPrecision() Number Method
function precision_method() {
    var z = 123456789.10111213141516;
    document.getElementById("precision").innerHTML = z.toPrecision(10);
}

// Fixed() Method
let num = 1.11111;
let n = num.toFixed(3);

document.getElementById("fixed").innerHTML = n;

// valueOf() Method
let hello = "Hello World";
let  value = text.valueOf();

document.getElementById("value").innerHTML = value;

