// take input value from the display input field 
var display = document.querySelector('input[name="display"]');
const progress = document.querySelector('#progress');
const container = document.querySelector('.container');
const input = document.querySelector('.display input');
const btns = document.querySelector('.buttons');
const history = document.querySelector('.history');
const displayDiv = document.querySelector('.display');
const btnsInput = document.querySelectorAll('.buttons input');
const reset = document.querySelector('#reset');
const del = document.querySelector('#del');
const equal = document.querySelector('#equal');
var operation;

progress.addEventListener('click', () => {
    if(progress.value > 33 && progress.value < 67){
        container.style.background = "#00224d";
        displayDiv.style.background = "#5d0e41";
        btns.style.background = "#5d0e41";
        history.style.background = "#5d0e41";
        btnsInput.forEach(btnInput => {
            btnInput.style.background = "#ff204e";
            btnInput.style.color = "#fff";
        });
        reset.style.background = "#00224d";
        del.style.background = "#00224d";
        equal.style.background = "#a0153e";
        progress.style.background = "#5d0e41";
    }else if(progress.value > 66 && progress.value < 101){
        container.style.background = "#7aa2e3";
        displayDiv.style.background = "#6ad4dd";
        btns.style.background = "#6ad4dd";
        history.style.background = "#6ad4dd";
        btnsInput.forEach(btnInput => {
            btnInput.style.background = "#f8f6f3";
            btnInput.style.color = "#000";
        });
        reset.style.background = "#7aa2e3";
        reset.style.color = "#fff";
        del.style.background = "#7aa2e3";
        del.style.color = "#fff";
        equal.style.background = "#97e7e1";
        progress.style.background = "#6ad4dd";
    }else{
        container.style.background = "#453f78";
        displayDiv.style.background = "#795458";
        btns.style.background = "#795458";
        history.style.background = "#795458";
        btnsInput.forEach(btnInput => {
            btnInput.style.background = "#ffc94a";
            btnInput.style.color = "#000";
        });
        reset.style.background = "#453f78";
        reset.style.color = "#fff";
        del.style.background = "#453f78";
        del.style.color = "#fff";
        equal.style.background = "#c08b5c";
        equal.style.color = "#fff";
    }
});




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
        if(display.value !== ""){
            operation = display.value;
            display.value = eval(display.value);
            addHistory();
        }else{
            alert("Please enter the operation!");
        }
    }catch(e){
        alert("Invalid or unexpected operation");
        display.value = "";
    }
    
}

// define a deleteValue() function which delete a last digit from the input value when user click on del button 
function deleteValue(){
    display.value = display.value.substring(0, display.value.length -1);
}


// clear history button
let clearHistory = document.querySelector("#del-history");
clearHistory.addEventListener('click',() => {
    removeDate();
})

// to add show history container button functionality
let historyBtn = document.querySelector('#show-history');
historyBtn.addEventListener('click', () => {
    if(history.classList.contains('show-history')){
        history.classList.remove('show-history');
        clearHistory.style.visibility = 'hidden';
    }else{
        history.classList.add('show-history');
        clearHistory.style.visibility = 'visible';
    }     
});

// history container data saving
function addHistory(){
    let p = document.createElement('p');    
    p.innerHTML = operation + " = " + display.value;
    history.appendChild(p);
    setData();
}



// local storage functionality
function setData(){
    localStorage.setItem('data', history.innerHTML);
}

function getData(){
    history.innerHTML = localStorage.getItem('data');
}
getData();

function removeDate(){
    localStorage.clear();
    history.innerHTML = "";
}


