function captureTheNumbers(input) {
    // Variant A

    // let text =input.join('');
    // let pattern=/[0-9]+/g;
    // let numbers = text.match(pattern);
    // console.log(numbers.join(' '));


    // Variant B

    // let result =[];
    // let pattern=/[0-9]+/g;
    // let text='';
    // for (let i = 0; i < input.length; i++) {
    //     text+=input[i];
    // }
    // let match = '';
    // while (match=pattern.exec(text)) {
    //     result.push(match[0]);
    // }
    // console.log(result.join(' '));


    // Variant C
    
    // let pattern = /(\d+)/g;
    // let result = [];
    // for (let num of input) {
    //     pattern = /(\d+)/g;
    //     let exec = pattern.exec(num);
    //     while (exec) {
    //         result.push(exec[1]);
    //         exec = pattern.exec(num);
    //     }
    //
    // }
    // console.log(result.join(' '));

}
captureTheNumbers(
    [
        "The300",
        "What is that?",
        "I think it’s the 3rd movie.",
        "Lets watch it at 22:45"
    ]
);

