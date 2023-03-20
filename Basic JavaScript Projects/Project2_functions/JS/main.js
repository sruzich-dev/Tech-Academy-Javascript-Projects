
/*--This function concatenates 2 variables to form 2 sentences on a button when clicked, uses document.getElementbyId to locate where the string will appear--*/
function My_First_Function() {
    var str = "This is my first function!";
    var txt = " Hello!";
    document.getElementById("Button_Text").innerHTML = str + txt;
}

/* This function concatenates 2 strings to form a sentence on a button when clicked, uses document.getElementbyId to locate where the strings will appear*/
function Another_Function() {
    var sentence = "This is a lesson";
    sentence += " a about functions.";
    document.getElementById("Concatenate").innerHTML = sentence;
}
