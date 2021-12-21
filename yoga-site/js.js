// class User {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//   }
//   hello() {
//     console.log(`Hello ${this.name}`);
//   }
//   exit() {
//     console.log(`Bye ${this.name}`);
//   }
// }

// let person = new User('vitalik', 25);
// console.log(person.exit());

function showThis() {
  console.log(this);
}
showThis();