function printName(person: { name: string; age?: number }) {
  console.log(person.name);
}

const person1 = { name: "John Doe", age: 30 };
const person2 = { name: "Jane Doe" };

printName(person1);
printName(person2);