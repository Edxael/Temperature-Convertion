console.log("hello 1");

    // Function to convert from Fahrenheit to Celsius.
function toCels(){
    var inTemp = document.getElementById("num1").value;
    console.log("Inside toCels: ", inTemp );

    var total = (inTemp - (32))/(1.8);
    total = total.toFixed(2);

    document.getElementById("num2").value = total;
}
    // Funcion to convert from Celsius to Fahrenheit
function toFahr(){
    var inTemp = document.getElementById("num1").value;
    console.log("inside toFahr: ", inTemp );

    var total = ((1.8)*inTemp)+32;
    total = total.toFixed(2);

    document.getElementById("num2").value = total;
}


    // Function to clean the data in the user interface.
function clean(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
