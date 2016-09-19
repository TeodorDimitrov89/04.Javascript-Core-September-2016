"use strict";
function countLetter(input) {
    let text = input[0];
    let letter = input[1];
    let counter = 0;
    for(let i=0;i<text.length;i++) {
        if(letter == text[i]) {
            counter++;
        }
    }
    console.log(counter)
}

countLetter(['elllbwl','l']);