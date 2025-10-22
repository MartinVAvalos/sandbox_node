// EDIT OBJECT

// add a new person to the people array and edit John since he had a birthday
// finally add a new field called loggedIn to each person and set it to false

// Bonus
// Make a clone of people
const people = [
    {name: "John",age: 25,city: "New York"},
    {name: "Jane",age: 30,city: "Chicago"},
    {name: "Michael",age: 45,city: "Los Angeles"}
];

// add new person
people.push({name: "Peter",age: 22,city: "Los Angeles"})

// edit john. had b-day
people.find(person => person.name==="John").age++;

// add loggedIn. default false
people.map(person => person.loggedIn = false);

// Make a clone of people
const clone = structuredClone(people);

console.log("people", people)
console.log("clone", clone)
console.log(clone === people);

// console.log(people.filter(person => person.name !== "Michael"));

// const deleteIndex = people.findIndex(person => person.name === "Michael");
// people.splice(deleteIndex, 1);
// console.log(people);

const temp = people.filter(person => person.name !== "Michael");
// people = [...temp];
people.splice(0, people.length);
for (let index = 0; index < temp.length; index++) {
    people[index] = temp[index];
}
console.log(people);