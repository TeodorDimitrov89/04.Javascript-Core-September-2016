let robot=(function () {
    let obj = {
        protein:0,
        carbohydrate:0,
        fat:0,
        flavour:0
    };
    return function solve(input) {
        let commands = input.split(' ');
        let restock='';
        if(commands[0]=='restock') {
            obj[commands[1]] += Number(commands[2]);
            return 'Success';
        }
        else if(commands[0]=='report') {
            return `protein=${obj.protein} carbohydrate=${obj.carbohydrate} fat=${obj.fat} flavour=${obj.flavour}`;

        }
        else if(commands[0]=='prepare') {
            let success = checkIngredients(commands[1],commands[2]);
            if(success == true) {return 'Success';}
            else{ return success;}
        }


        function checkIngredients(ingredients,quantity) {
            switch(ingredients) {
                case 'apple':
                    obj['carbohydrate']-= Number(quantity);
                    obj['flavour']-= 2 * Number(quantity);
                    if(obj['carbohydrate']<0) {
                        return `Error: not enough carbohydrate in stock`;
                    }
                    else if(obj['flavour'] < 0) {
                        return `Error: not enough flavour in stock`;
                    }
                    return true;
                    break;
                case 'coke':
                    obj['carbohydrate']-= 10 * Number(quantity);
                    obj['flavour']-= 20 * Number(quantity);
                    if(obj['carbohydrate'] < 0) {
                        // return console.log(`Error: not enough carbohydrate in stock`);
                        return (`Error: not enough carbohydrate in stock`);
                    }
                    else if(obj['flavour'] < 0) {
                        // return console.log(`Error: not enough flavour in stock`);
                        return (`Error: not enough flavour in stock`);
                    }
                    return true;
                    break;
                case 'burger':
                    obj['carbohydrate']-= 5 * Number(quantity);
                    obj['flavour']-= 3 * Number(quantity);
                    obj['fat']-= 7 * Number(quantity);
                    if(obj['carbohydrate'] < 0) {
                        return (`Error: not enough carbohydrate in stock`);
                    }
                    else if (obj['flavour'] < 0) {
                        return (`Error: not enough flavour in stock`);
                    }
                    else if(obj['fat'] < 0) {
                        return (`Error: not enough fat in stock`);
                    }
                    return true;
                    break;
                case 'omelet':
                    obj['protein']-= 5 * Number(quantity);
                    obj['flavour']-=Number(quantity);
                    obj['fat']-= Number(quantity);
                    if(obj['protein'] < 0) {
                        return (`Error: not enough protein in stock`);
                    }
                    else if (obj['flavour'] < 0) {
                        return (`Error: not enough flavour in stock`);
                    }
                    else if(obj['fat'] < 0) {
                        return (`Error: not enough fat in stock`);
                    }
                    return true;
                    break;
                case 'cheverme':
                    obj['protein']-= 10 * Number(quantity);
                    obj['carbohydrate']-= 10 * Number(quantity);
                    obj['flavour']-=10*Number(quantity);
                    obj['fat']-= 10*Number(quantity);

                    if(obj['protein'] < 0) {
                        return (`Error: not enough protein in stock`);
                    }
                    else if (obj['carbohydrate'] < 0) {
                        return (`Error: not enough carbohydrate in stock`);
                    }else if (obj['flavour'] < 0) {
                        return (`Error: not enough flavour in stock`);
                    }
                    else if(obj['fat'] < 0) {
                        return (`Error: not enough fat in stock`);
                    }
                    return true;
                    break;
            }
        }
    }

}());

console.log(robot("prepare cheverme 1"));
console.log(robot("restock protein 10"));
console.log(robot("prepare cheverme 1"));
console.log(robot("restock carbohydrate 10"));
console.log(robot("prepare cheverme 1"));
console.log(robot("restock fat 10"));
console.log(robot("prepare cheverme 1"));
console.log(robot("restock flavour 10"));
console.log(robot("prepare cheverme 1"));
console.log(robot("report"));

// console.log((robot('restock flavour 50')));
// console.log(robot('prepare coke 4'));
// console.log(robot('report'));



// robot("prepare cheverme 1")
// robot("restock protein 10")
// robot("prepare cheverme 1")
// robot("restock carbohydrate 10")
// robot("prepare cheverme 1")
// robot("restock fat 10")
// robot("prepare cheverme 1")
// robot("restock flavour 10")
// robot("prepare cheverme 1")
// robot("report")

// console.log((robot('restock carbohydrate 10')));
// console.log((robot('restock flavour 10')));
// console.log((robot('prepare apple 1')));
// console.log((robot('restock fat 10')));
// console.log((robot('prepare burger 1')));
// console.log((robot('report')));