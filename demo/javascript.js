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
