function subtract() {
    let firstNum = Number($('#firstNumber').val());
    let secontNum =  Number($('#secondNumber').val())
    let resultDiv = $('#result');
    let result= firstNum-secontNum;
    resultDiv[0].textContent=result;
}
