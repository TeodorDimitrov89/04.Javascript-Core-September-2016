function triangleArea(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let sp = Number((a+b+c)/2);
    let area = Math.sqrt(sp*(sp-a)*(sp-b)*(sp-c));
    console.log(area);
}

triangleArea(['2','3.5','4']);
