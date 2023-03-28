
// function with object and array
function dictionary() {
    var Cars = {
        Color: ["red", "black", "white"],
        Type: ["truck", "van", "jeep"],
        Transmission: ["automatic", "manual"]
    };
    /*
    Type of car @ index 2 (jeep) in array will be deleted 
    and show as "undefined" 
    */
    delete (Cars.Type[2]);
    document.getElementById("Type").innerHTML = (Cars.Type[2]);
    // Displays index 1 of Transmission property array in function
    document.getElementById("Transmission").innerHTML = (Cars.Transmission[1]);
}
