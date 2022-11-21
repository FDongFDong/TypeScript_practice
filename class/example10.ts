class Parent {
  constructor(protected _name: string, private _age: number) {}
  public print(): void {
    console.log(`이름은 ${this._name}이고 나이는 ${this._age}`);
  }
  protected printName(): void {
    console.log(this._name, this._age);
  }
}

// const x1 = new Parent('FDong', 30);
// x1.print();

class Child extends Parent {
  // protect도 오버라이드
  // public _name = 'Mark';
  public gender = 'male';
  // 생성자도 오버라이드
  constructor(age: number) {
    // super를 먼저 호출해줘야한다.
    super('FDONG', age);
    this.printName();
  }
}

// const x2 = new Child('Son', 5);
const x2 = new Child(5);
x2.print();
