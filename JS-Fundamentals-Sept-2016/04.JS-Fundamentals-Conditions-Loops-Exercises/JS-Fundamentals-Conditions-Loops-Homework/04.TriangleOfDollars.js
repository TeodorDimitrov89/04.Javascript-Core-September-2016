function triangleOfDollars(input) {
    let n = Number(input[0]);
    //Variant1
    let line ='';
    for (let row = 1; row <= n ; row++) {
        line+='$';
        console.log(line);
    }

    //Variant2
    // for (let row = 0; row <= n ; row++) {
    //     console.log("$".repeat(row));
    // }

    //Variant3
    
    // for (let row = 0; row <= n ; row++) {
    //     console.log(new Array(row+1).join("$"));
    // }
}
triangleOfDollars(['4']);
