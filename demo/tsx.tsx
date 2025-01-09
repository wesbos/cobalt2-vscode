interface Shoe {
  size: number;
  name: string;
}

interface Food {
  type: 'fruit' | 'vegetable';
  name: string;
}

function generateSome<T>(howMany: number): T {
  return {
    size: 10,
    name: 'wes',
  };
}

const unusedVariable;

export default async function unreachableCode() {
  return 10;
}

const myShoe = generateSome<Shoe>(10);

const banana: Food = {
  type: 'fruit',
  name: 'Banana',
};
