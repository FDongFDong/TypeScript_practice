interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}
// interface란 내용을 바탕으로 class로 만든다.
class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요 ${this.name}입니다.`);
  }
}

//class 또한 타입처럼 사용가능
const person: IPerson1 = new Person('FDONG');
person.hello();
