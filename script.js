const button = document.getElementById("button");
button.addEventListener("click",()=>{
    myFunction();
})

function myFunction(){
    var eggAmount = document.getElementById("eggInput");
    var flourAmount = document.getElementById("flourInput");
    var milkAmount = document.getElementById("milkInput");
    let eggInt = eggAmount.value
    let flourInt = flourAmount.value
    let milkInt = milkAmount.value
    //console.log(eggAmount.value)
    //console.log(flourAmount.value)
    //console.log(milkAmount.value)
    const eggMin = 1;
    const flourMin = 200;
    const milkMin = 100;
    
    var eggBlin = (eggInt / eggMin);
    var flourBlin = (flourInt / flourMin);
    var milkBlin = (milkInt / milkMin);

    var blinAmount = Math.min(eggBlin, flourBlin, milkBlin);
    //console.log(blinAmount)
    document.getElementById("endResult").innerHTML = "You have supplies to make " + blinAmount + " blins." ;
}

var darkCount = 1;  

document.getElementById("dark").onclick = function () { 

    var b0 = document.getElementById("html");
    var b1 = document.getElementById("body");
    var b2 = document.getElementById("text");
    var b3 = document.getElementById("endResult");   

    darkCount+=1
    if (darkCount % 2 == 0){
        console.log("dark");
        b1.style.background = "black";
        b0.style.background = "black";
        b2.style.color = "white";
        b3.style.color = "white";

}    
    else  {
        console.log("white");
        b1.style.background = "white";
        b0.style.background = "white";
        b2.style.color = "black";
        b3.style.color = "black";
    }
    
}