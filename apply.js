const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    fullNameWithInfo: function (city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}

const person1 = {
    firstName: "Mary",
    lastName: "Doe"
}

let result1 = person.fullName.call(person1);
console.log(result1)

let result2 = person.fullNameWithInfo.call(person1, "Oslo", "Norway");
console.log(result2)

const add = x => x + 1;
const sub = x => x - 2;
const mul = x => x * 2;
// const res = add(mul(3));
// console.log(res)

const compose = (...args) => x => args.reduceRight((acc, func) => func(acc), x);

const result = compose(add, sub, mul);
console.log(result(2));