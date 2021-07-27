
function que(){
    var number = document.getElementById('number').value;

    var sqrt_of_number = Math.sqrt(number);
    
    
    if(Number.isInteger(sqrt_of_number) == true){
        document.getElementById('sq').innerHTML = "The number is square of " + sqrt_of_number; 
    }
    else{
        document.getElementById('sq').innerHTML = "The number is not a perfect square";
    }

    var cbrt_of_number = Math.cbrt(number);

    if(Number.isInteger(cbrt_of_number) == true){
        document.getElementById('cube').innerHTML = "The number is cube of " + cbrt_of_number;
    }
    else{
        document.getElementById('cube').innerHTML = "The number is not a perfect cube";
    }
}