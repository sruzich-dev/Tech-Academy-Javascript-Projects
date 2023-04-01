
// Global scope Variable
var Q = 2;
function multiply() {
    document.write("<br>", 1 * Q + "<br>");
}

// Local scope Variable
function add() {
    var R = 3;
    document.write( R + 1);
}
multiply();
add();

//  If/ Else statement Date Method Time of day function Greeting
function get_Time() {
    if (new Date().getHours() < 12) {
        document.getElementById("greeting").innerHTML = "Good Morning!";
    }
    else (new Date().getHours() >= 12); {
        document.getElementById("greeting").innerHTML = "Good Afternoon!";
    }
}

// getMonth() Method using array to name month
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date("2023-05-01");
    let month = months[d.getMonth()];
    document.getElementById("month").innerHTML = month;

// If/ Else input text function

function year_Born() {
	Year= document.getElementById("age").value;
	if (Year <= 2002) {
		Admission= "Welcome! Enjoy the show!";
	}
	else {
		Admission= "You must be 21 or older to attend this Event!";
	}
	document.getElementById("output").innerHTML = Admission;
}

// Else/ If Statement Time function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

// Use console.log() method to debug javascript error
var a = 2;
function add(){
    var b = 1;
    var c = a + b;
    console.log(c);
}
