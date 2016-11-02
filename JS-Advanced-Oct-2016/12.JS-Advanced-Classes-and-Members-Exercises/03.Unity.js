class Rat {
    constructor(name) {
        this.name = name;
        this.ratsArray = [];
    }
    unite(givenObject) {
        //проверявам дали обекта който ми е даден е с еднакъв клас на този който съм създал
        //instanceof
        if(givenObject instanceof Rat) {
            this.ratsArray.push(givenObject);
        }
    }
    getRats() {
        return this.ratsArray;
    }
    toString() {
        let str = '';

        for (let rat of this.ratsArray) {
            console.log(rat);
            // this.ratsArray.map(.join('##')
        }
        return this.ratsArray.join(',');
    }
}
let rat = new Rat('Pesho');
let rat1 = new Rat('Pesho');
(rat.unite(rat1));
(rat.getRats());
(rat.toString());
// console.log(rat.unite(rat1));
// console.log(rat.getRats());
// console.log(rat.toString());