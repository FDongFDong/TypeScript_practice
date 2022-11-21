interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: 'FDong',
  age: 30,
};

type Keys = keyof IPerson;

function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
  return obj[key];
}
function setProp(
  obj: IPerson,
  key: keyof IPerson,
  value: string | number
): void {
  obj[key] = value;
}
