let extensible = (function solve() {
    let id = 0;
    return class Extensible {
        constructor() {
            this.id = id++;
        }
        extend(template) {
            for (let prop in template) {
                if (typeof template[prop] == 'function') {
                    Extensible.prototype[prop]=template[prop]
                }
                else{
                    this[prop] = template[prop];
                }
            }
        }
    }
}());

let ex = new extensible();
let ex1 = new extensible();
let ex2 = new extensible();
let ex3= new extensible();
let ex4= new extensible();
console.log(ex.id);
console.log(ex4.id);




// function solve() {
//     let obj = Object.create({});
//     obj.extend = function (template) {
//         for (let prop in template) {
//             if (typeof template[prop] == 'function') {
//                 Object.getPrototypeOf(obj)[prop] = template[prop]
//             }
//             else{
//                 obj[prop] = template[prop];
//             }
//         }
//     };
//     return obj;
// }
