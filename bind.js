//пример создания связанной функции
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    display: function () {
        let fullname = this.fullName();
        console.log(fullname)
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
console.log(fullName())

let display = person.display.bind(person);
setTimeout(display, 3000);
setTimeout(() => person.display(), 4000)

//пример частичной функции
function list() {
    return Array.prototype.slice.call(arguments);
}

list(1, 2, 3);// [1, 2, 3]
let leadingThirtysevenList = list.bind(undefined, 37);

leadingThirtysevenList(); // [37]
leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]
