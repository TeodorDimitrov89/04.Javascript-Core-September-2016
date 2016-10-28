// function subtract() {
//     let firstNum = Number(document.getElementById("firstNumber").value);
//     let secondNum = Number(document.getElementById("secondNumber").value);
//     let resulDiv = document.getElementById('result');
//     let result = firstNum - secondNum;
//     resulDiv.textContent = result;
// }
function subtract() {
    let firstNum = Number($('#firstNumber').val());
    let secontNum =  Number($('#secondNumber').val())
    let resultDiv = $('#result');
    let result= firstNum-secontNum;
    resultDiv[0].textContent=result;
}
