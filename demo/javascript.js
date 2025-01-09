export default async function unreachableCode() {
  return 10;
}

const age = 100;
const myObj = {
  prop: 12,
  nested: {
    prop: 100
  },
  initialAge: age,
  age,
}


const age = 100;

const wes = {
  age: 100,
  name: `Wes`
}

console.log(wes.cool);
console.log(wes.cool);

console.log(wes.age);
console.log(wes.doesNotExist);


const usedAge = 200;
console.log(usedAge);

// This is a single line comment

/**
 * This is a multi-line comment with JSDoc
 * @param {string} name
 * @returns {string}
 */

/**
 * @typedef {Object} Person
 * @property {string} name
 * @property {number} age
 * @property {string} [job]
 */

/**
 * @type {Person}
 */
const person = {
  name: `Wes`,
  age: 100,
}

console.log(person.age);
console.log(person.doesNotExist);
