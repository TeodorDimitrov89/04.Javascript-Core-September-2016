 function solve() {
     class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;

        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
           // return  `${this.constructor.name}(name:${this.name},email:${this.email})`
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            // //Teacher (name: {name}, email:{email}, {subject})
            // return super.toString().slice(0,-1) + `subject:${this.subject})`
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, subject: ${this.subject})`;

        }
    }
    class Student extends Person {
        constructor(name, email,course) {
            super(name, email);
            this.course = course;
        }

        toString() {

            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, course: ${this.course})`;

            // return super.toString().slice(0,-1) + `course:${this.course})`
        }
    }

    return {Person,Teacher,Student}
}
let p = new Person("Pesho", "pesho@mail.bg");
console.log(p.toString());

let t = new Teacher("ff", "@mail.bg", "math");
console.log(t.toString());

let s = new Student("Dragan", "gragan@mail.bg", "info");
console.log(s.toString());