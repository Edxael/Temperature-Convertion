console.log("hello 1");

function toCels(){
    var inTemp = document.getElementById("num1").value;
    console.log("Inside toCels: ", inTemp );

    var total = (inTemp - (32))/(1.8);
    total = total.toFixed(2);

    document.getElementById("num2").value = total;
}

function toFahr(){
    var inTemp = document.getElementById("num1").value;
    console.log("inside toFahr: ", inTemp );

    var total = ((1.8)*inTemp)+32;
    total = total.toFixed(2);

    document.getElementById("num2").value = total;
}


function clean(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
