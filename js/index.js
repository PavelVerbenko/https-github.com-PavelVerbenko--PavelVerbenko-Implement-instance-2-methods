// Class definition
class User {
	// your code
  constructor(firstName, lastName, age) {
    this.firstName =  firstName;
    this.lastName = lastName;
    this.age = age;
  }

   getFullName() {
     return `${this.firstName} ${this.lastName}`
  }

  getInitials() {
    return `${this.firstName[0]}${this.lastName[0]}`
  }

  canVote() {
    return this.age >= 18;
  }
}


// Class usage
const sam = new User("Sam", "Blue", 49);
console.log(sam.getFullName());
console.log(sam.getInitials());
console.log(sam.canVote());

const charlie = new User("Charlie", "Doe", 13);
console.log(charlie.getFullName());
console.log(charlie.getInitials());
console.log(charlie.canVote());