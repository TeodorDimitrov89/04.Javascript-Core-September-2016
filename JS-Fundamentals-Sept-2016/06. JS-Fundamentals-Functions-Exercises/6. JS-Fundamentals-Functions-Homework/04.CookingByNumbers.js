function cookingByNumber(input) {
    let num = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        input[0]=num;
        switch (input[i]) {
            case "chop" :
                num=input[0]/2;
                break;

            case "dice" :
                num=Math.sqrt(input[0]);
                break;
            case "spice" :
                num=input[0]+1;
                break;
            case "bake" :
                num=input[0]*3;
                break;
            case "fillet" :
                num=input[0]-0.20*(input[0]);
                break;
        }
        console.log(num);
    }

}
cookingByNumber([9, dice, spice, chop, bake, fillet]);
