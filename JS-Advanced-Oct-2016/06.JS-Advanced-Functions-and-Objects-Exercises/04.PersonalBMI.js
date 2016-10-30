function result(input) {
    let name = arguments[0];
    let age = arguments[1];
    let weight = Number(arguments[2]);
    let height = Number(arguments[3]) / 100;
    let BMI = weight / (height * height);
    let status = checkStatus(BMI);

    return (function () {
        if (status === "obese") {
            return {
                name: name,
                personalInfo: {
                    age: age,
                    weight: Math.round(weight),
                    height: Math.round(height * 100)
                },
                BMI: Math.round(BMI),
                status: status,
                recommendation:'admission required'
            };
        }
        else {
            return {
                name: name,
                personalInfo: {
                    age: age,
                    weight: Math.round(weight),
                    height: Math.round(height * 100)
                },
                BMI: Math.round(BMI),
                status: status
            };
        }
    })();


    function checkStatus(bmi) {
        let status = '';
        if (bmi < 18.5) {
            status = "underweight";
        }
        else if (bmi >= 18.5 && bmi < 25) {
            status = "normal";
        }
        else if (bmi >= 25 && bmi < 30) {
            status = "overweight"
        }
        else {
            status = "obese";
        }
        return status;
    }
}
console.log(result("Honey Boo Boo", 9, 57, 137));
console.log(result("Honey Boo Boo", 29, 75, 182));
