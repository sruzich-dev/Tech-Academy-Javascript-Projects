
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; // Variable Declared with Ternary Operator with conditional
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// FUNCTION WITH INPUT AND TERNARY OPERATOR

function vote_age() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age => 18) ? "You are old enough":"You are not old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote!";
}
// Constructor function using keywords: "new" "this"

function Cat(Age, Breed, Location) {
    this.Cat_Age = Age;
    this.Cat_Breed = Breed;
    this.Cat_Location = Location;
}

var Whiskers = new Cat("2 year old", "Calico", "Tennesse");
var Patches = new Cat("8 month old", "Tabby", "California");
var Mulligan = new Cat("5 year old", "Black", "Texas");

function adoptFunction(){
    document.getElementById("New_and_This").innerHTML = "Whiskers is a " + Whiskers.Cat_Age + " " + Whiskers.Cat_Breed + 
    " cat that is located in " + Whiskers.Cat_Location + ".";
}

//  Nested  Count Function
function count_Function() {
    document.getElementById("nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 1;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
