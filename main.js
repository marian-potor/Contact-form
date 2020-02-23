var fields = document.querySelectorAll('.textInputs');
var radioButtons = document.getElementsByClassName('radioButtons')
var errorAlert = document.getElementById('errorAlert')
var button = document.getElementById('submit');
button.addEventListener("click", submitForm);

function submitForm(){
    let selectedRadio;
    let allTextInput = [];
    let errorCount = 0;
//evaluate radio buttons
    for (let i = 0; i < (radioButtons.length - 1); i++) {
        if (radioButtons[i].checked == true){
            selectedRadio = radioButtons[i].labels[0].innerHTML;
        }
        else if(radioButtons[i+1].checked == true){
            selectedRadio = radioButtons[i+1].labels[0].innerHTML;;
        }
    }
//display errors if buttons not selected
    if (selectedRadio == undefined){
        document.getElementById('radioContainer').className = "error";
    }else{
        document.getElementById('radioContainer').className = "";
    }
//evaluate text inputs and display errors if needed
    for (let i = 0; i < fields.length; i++) {
        if ((fields[i].value == "") || (fields[i].value == " ")){
            fields[i].className = "textInputs error";
            errorCount = -1;
        }else{
            fields[i].className = "textInputs";
            errorCount = errorCount + 1;
        }
        allTextInput[i] = fields[i].placeholder + ": " + fields[i].value;
    }
//generate error message
    errorAlert.className = "errorFeedback"
    errorAlert.innerHTML = "";
    if (selectedRadio == undefined){
        errorAlert.innerHTML = errorAlert.innerHTML + " No option selected.";
    }
    if (errorCount != fields.length){
        errorAlert.innerHTML = errorAlert.innerHTML + " Field empty.";
    }
//if no errors are found send data - display in console - else display error message
    if ((selectedRadio != undefined) && (errorCount == fields.length)){
        errorAlert.hidden = false;
        errorAlert.className = "successFeedback";
        errorAlert.innerHTML = "Thank you for contacting us, " + fields[0].value;
        console.log('Gender: ' + selectedRadio);
        for (let i = 0; i < allTextInput.length; i++) {
            console.log(allTextInput[i]);
        }
    }else{
        errorAlert.hidden = false;
    }
}
