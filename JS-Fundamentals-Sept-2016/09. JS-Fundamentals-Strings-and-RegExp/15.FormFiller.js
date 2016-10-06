function formFill(input) {
    let text = [];
    for (let i = 3; i < input.length; i++) {
        text.push(input[i]);
    }
    let name = input[0];
    let email = input[1];
    let telephone = input[2];
    let userPattern = new RegExp("(<![A-Za-z]+!>)", "g");
    let emailPattern = /(<@[A-Za-z]+@>)/g;
    let telephonePattern = /(<\+[A-Za-z]+\+>)/g;
    for (let letter of text) {
        letter = letter.replace(userPattern, name);
        letter = letter.replace(emailPattern, email);
        letter = letter.replace(telephonePattern,telephone);
        console.log(letter);
    }
}

formFill(
    [
        "Pesho",
        "pesho@softuni.bg",
        "90-60-90",
        "Hello, <!username!>!",
        "Welcome to your Personal profile.",
        "Here you can modify your profile freely.",
        "Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)",
        "Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)",
        "Your current phone number is: <+number+>. Would you like to change that? (Y/N)"
    ]);