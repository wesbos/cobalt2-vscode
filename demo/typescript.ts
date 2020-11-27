interface Shoe {
  size: number;
  name: string;
}

type Age = 1 | 2;

interface Food {
  type: 'fruit' | 'vegetable';
  name: string;
}

const myAge: Age = 100;

function generateSome<T>(howMany: number): T {
  return {
    size: 10,
    name: 'wes',
  };
}

const myShoe = generateSome<Shoe>(10);

const banana: Food = {
  type: 'fruit',
}

document.querySelector('a.hey')

export default async function Hello(name: Food): Food {
  console
}
