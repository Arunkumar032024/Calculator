// take input value from the display input field 
var display = document.querySelector('input[name="display"]');


// define a function which name is inputValue(val) that take a input from the user and add value to the input field 
function inputValue(val){
    display.value += val;
}

// define a function which name is resetValue() that reset the value of input field whenever user click on reset button 
function resetValue(){
    display.value = "";
}

// define a evaluateResult() function which evaluate the value of input field when the user is click on equal button 
function evaluateResult(){
    try{
        display.value = eval(display.value);
    }catch(e){
        alert("Invalid or unexpected operation");
        display.value = "";
    }
    
}

// define a deleteValue() function which delete a last digit from the input value when user click on del button 
function deleteValue(){
    display.value = display.value.substring(0, display.value.length -1);
}


