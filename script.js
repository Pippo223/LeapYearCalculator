
//Prevent the listed keys from altering the input 
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

function getInput() {
    let inputVal = document.getElementById("year").value
    if (inputVal >= 1582) {
        if (inputVal % 4 === 0) {
            if(inputVal%100 !== 0) {
                document.getElementById("msg1").innerHTML = "Divisible by 4 and not divisible by 100" 
                document.getElementById("msg2").innerHTML = inputVal + " Is a Leap Year"
                document.getElementById("msg2").style.color = "blue"
            }
            else {
                if(inputVal%400 === 0)
                {
                    document.getElementById("msg1").innerHTML = "Divisible by 4 and divisible by 100 but also divisible by 400" 
                    document.getElementById("msg2").innerHTML = inputVal+ " Is a Leap Year"
                    document.getElementById("msg2").style.color = "blue"
                }
                else {
                    document.getElementById("msg1").innerHTML = "Divisible by 4 divisible by 100 \n not divisible by 400" 
                    document.getElementById("msg2").innerHTML = inputVal+ " Is NOT a Leap Year"
                    document.getElementById("msg2").style.color = "red"
                }
            }
        }
        else {
            document.getElementById("msg1").innerHTML = "Not divisible by 4" 
            document.getElementById("msg2").innerHTML = inputVal+ " Is NOT a Leap Year"
            document.getElementById("msg2").style.color = "red"
        }
        
    }
    else {
        document.getElementById("msg1").innerHTML = "Enter a year from 1582 onwards"
        document.getElementById("msg2").innerHTML = "" 
    }

}