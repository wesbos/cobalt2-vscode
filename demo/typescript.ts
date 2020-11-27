// eslint-disabled
interface Shoe {
  size: number;
  name: string;
}

type Age = 1 | 2;

interface Food {
  type: 'fruit' | 'vegetable';
  name: string;
}

const myAge: Age = 2;

function generateSome<T>(howMany: number): T {
  return 100;
}

const myShoe = generateSome<Shoe>(10);

const banana: Food = {
  type: 'fruit',
  name: 'nanski'
}


export default async function Hello(name: Food): Promise<Food> {
  return banana;
}
console.log(myAge, banana)
