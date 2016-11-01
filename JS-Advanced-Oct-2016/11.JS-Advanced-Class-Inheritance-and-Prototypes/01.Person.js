function solve() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.name} ${this.email}`
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return super.toString() + this.subject
        }
    }
    return {Person,Teacher}
}
let p = new Person("Pesho", "pesho@mail.bg");
console.log(p.toString());

let t = new Teacher("ff", "@mail.bg", " math");
console.log(t.toString());