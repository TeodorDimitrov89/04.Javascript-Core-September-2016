function quadraticEquation([a,b,c]) {
    [a, b, c] = [a, b, c].map(Number);

    let d = Math.pow(b,2) - 4 * a * c;
    let x1,x2 = 0;
    if(d > 0) {
        x1=(-b + Math.sqrt(d))/(2*a);
        x2=(-b - Math.sqrt(d))/(2*a);
        if(x1 > x2) {
            console.log(`${x2}\n${x1}`);
        }
        else {
            console.log(`${x1}\n${x2}`);
        }
    }
    else if (d==0) {
        x1=-b/(2*a);
       console.log(x1);
    }
    else {
        console.log("No");
    }
}

// quadraticEquation(['6', '11', '-35']);
quadraticEquation(['1', '-12', '36']);
