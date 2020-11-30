interface Shoe {
  size: number;
  name: string;
}

interface Food {
  type: 'fruit' | 'vegetable';
  name: string;
}

type Age = 1 | 2;

const myAge: Age = 2;
const myShoe: Shoe = { size: 10, name: 'Airmax' };

function generateSome<T>(howMany: number): T {
  return 100;
}

const myShoes = generateSome<Shoe>(10);

const banana: Food = {
  type: 'fruit',
  name: 'nanski'
}


export default async function Hello(name: Food): Promise<Food> {
  return banana;
}

console.log(myAge, myShoe, myShoes);

