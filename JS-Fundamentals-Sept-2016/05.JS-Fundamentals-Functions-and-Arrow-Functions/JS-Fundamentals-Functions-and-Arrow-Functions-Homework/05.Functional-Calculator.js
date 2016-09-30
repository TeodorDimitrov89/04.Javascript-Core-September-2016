function functionalCalculator([num1, num2, op]) {
    [num1, num2] = [num1, num2].map(Number);

    let calc = function(num1,num2,op) {return op(num1,num2)};
    let add = function(num1,num2) {return num1 + num2};
    let subtract = function (num1,num2) {return num1 - num2};
    let divide = function(num1,num2) {return num1 / num2};
    let multi = function(num1,num2) {return num1 * num2};
    switch(op) {
        case "+":
            return calc(num1, num2, add);
            break;
        case "-":
            return calc(num1,num2,subtract);
            break;
        case "/":
            return calc(num1,num2,divide);
            break;
        case "*":
            return calc(num1,num2,multi);
            break;
    }
}

console.log(functionalCalculator(['2', '4', '*']));
