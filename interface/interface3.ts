interface Person3 {
  name: string;
  age?: number;
  // 어떤 이름의 Property가 와도 상관없음
  [index: string]: any;
}

function hello3(person: Person3): void {
  console.log(`안녕하세요 ${person.name} 입니다.`);
}

const p31: Person3 = {
  name: 'FDong',
  age: 30,
};

const p32: Person3 = {
  name: 'FDongFDong',
  systers: ['F', 'D', 'O'],
};
const p33: Person3 = {
  name: 'Kim',
  father: p31,
  mother: p32,
};

hello3(p33);
