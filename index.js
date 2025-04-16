
let x  = document.getElementById('contentDisplay');


function one(){
    let currentValue = x.value;
    x.value = currentValue + "1";
}
function two(){
   let currentValue = x.value;
    x.value = currentValue +"2"
}
function three(){
   let currentValue = x.value;
    x.value = currentValue +"3"
}
function four(){
    let currentValue = x.value;
    x.value = currentValue +"4"
}
function five(){
    let currentValue = x.value;
    x.value = currentValue +"5"
}
function six(){
    let currentValue = x.value;
    x.value = currentValue +"6"
}
function seven(){
    let currentValue = x.value;
    x.value = currentValue +"7"
}
function eight(){
    let currentValue = x.value;
    x.value = currentValue +"8"
}
function nine(){
    let currentValue = x.value;
    x.value = currentValue +"9"
}
function zero(){
    let currentValue = x.value;
    x.value = currentValue +"0"
}
function sum(){
    let currentValue = x.value;
    x.value = currentValue +"+"
}
function substract(){
   let currentValue = x.value;
    x.value = currentValue +"-"
}
function multiply(){
    let currentValue = x.value;
    x.value = currentValue +"*"
}
function divide(){
    let currentValue = x.value;
    x.value = currentValue +"/"
}
function leftBracket(){
    let currentValue = x.value;
    x.value = currentValue +"("
}
function rightBracket(){
    let currentValue = x.value;
    x.value = currentValue +")"
}
function allClear(){
    x.value = ""

}

function backspace(){
  let currentValue = x.value;
  if (currentValue.length > 0)
     { let newValue = currentValue.slice(0, -1);
        x.value =newValue;
}}








function enter() {
    let currentValue = x.value; // e.g., "5-6"
    try {
        // Use eval() to calculate the result of the string expression
        let result = eval(currentValue);

        // Check if the result is a valid number (not Infinity, NaN)
        if (isFinite(result)) {
            x.value = result; // Display the calculated result (e.g., -1)
        } else {
            x.value = "Error"; // Handle cases like division by zero
        }
    } catch (error) {
        // Handle errors if the expression is invalid (e.g., "5++6")
        console.error("Calculation error:", error);
        x.value = "Error";
    }
}