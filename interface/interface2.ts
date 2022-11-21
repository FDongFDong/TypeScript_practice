// name은 항상 있고 age는 있을수도 없을수도 있는 형태
interface Person2 {
  name: string;
  age?: number;
}

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name}`);
}

hello2({ name: 'FDong', age: 30 });
hello2({ name: 'FDongFDong' });
