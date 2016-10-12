function rotateArray(array) {
    let k = array.pop();
    for (let i = 0; i < k%array.length; i++) {
        let lastNum = array.pop();
        array.unshift(lastNum);
    }

    console.log(array.join(' '));
}

rotateArray(["1","2","3","4","2"]);

// rotateArray([
//     "Banana",
//     "Orange",
//     "Coconut",
//     "Apple",
//     "15"
// ]);