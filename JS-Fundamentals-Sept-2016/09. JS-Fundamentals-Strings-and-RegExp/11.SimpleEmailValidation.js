function isValidEmail(input) {
    let pattern = /\b[A-Za-z\d]+@[a-z]+\.[a-z]+\b/;
    let email = input[0];
    let result = pattern.test(email);
    if (result) {
        console.log("Valid");
    }
    else {
        console.log("Invalid");
    }

}
isValidEmail(["valid@email.bg"]);
isValidEmail(["invalid@emai1.bg"]);
