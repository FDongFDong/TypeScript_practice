class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
  // 비동기적인 처리는 다른 함수로
  async init() {}
}

const p1 = new Person('FDong');

console.log(p1);
