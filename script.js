const people = [
  { firstName: "Alice", lastName: "Johnson", age: 28 },
  { firstName: "Bob", lastName: "Smith", age: 34 },
  { firstName: "Charlie", lastName: "Brown", age: 22 },
  { firstName: "Diana", lastName: "Garcia", age: 40 }
];

function logNames(array) {
  array.forEach(person => { // This method loops through every item (object) in the array.//
    console.log(person.firstName + " " + person.lastName +" "+"Age"person.age);
  });
}

logNames(people)


