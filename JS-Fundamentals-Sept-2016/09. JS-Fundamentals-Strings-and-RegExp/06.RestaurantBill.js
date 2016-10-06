function restaurantBill(input) {
    // let product=[];
    // for (let i = 0; i < input.length; i+=2) {
    //     product.push(input[i]);
    // }
    // let sum =0;
    // for (let i = 1; i < input.length; i+=2) {
    //     sum+=Number(input[i]);
    // }
    // console.log("You purchased " + product.join(', ')+" for a total sum of " + sum);

    let items = input.filter(x=>!Number(x));
    let sum = input.filter(x=>Number(x)).map(Number).reduce((a,b)=>a+b);
    console.log(`You purchased ${items.join(', ')} for a total sum of ${sum}`);

}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);