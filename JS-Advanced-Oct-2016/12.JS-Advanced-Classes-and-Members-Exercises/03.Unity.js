class Rat {
    constructor(name) {
        this.name = name;
        this.arrayRat = [];
    }
    unite(otherRat) {
        //проверявам дали обекта който ми е даден е с еднакъв клас на този който съм създал
        //instanceof
        if(otherRat instanceof Rat) {
            this.arrayRat.push(otherRat);
        }
    }
    getRats() {
        return this.arrayRat
    }
    toString() {
        let rat = '';
        rat+=`${this.name}\n`;
        for (let r of this.arrayRat) {
            rat+=`##${r.name}\n`
        }
        return rat;
    }
}


let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
