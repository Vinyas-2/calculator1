// Display value on screen
function dis(value){
    document.getElementById("result").value += value;

}

// Clear the calculator screen

function clr(){
    document.getElementById("result").value ="";

}

// Solve / calculate the expression

function solve(){
    let expression = document.getElementById("result").value;

try{
    // Evaluate expression
    let result = eval(expression);

    //handle undefined  or invalid result


    //Handle undefined or invalid result
    if(result === undefined){
        document.getElementById("result").value="";

    }
    else{
        document.getElementById("result").value = result;

    }
}

    catch (error) {
        //If any reeor occur
        alert("Invalid Expression");
        document.getElementById("result").value = "";
    }



}
