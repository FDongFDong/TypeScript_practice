class Person2 {
  name: string = 'FDong';
  age: number;
  constructor(age?: number) {
    if (age === undefined) {
      this.age = 30;
    } else {
      this.age = age;
    }
  }
}

const p2: Person2 = new Person2(30);
const p3: Person2 = new Person2();
console.log(p1);
