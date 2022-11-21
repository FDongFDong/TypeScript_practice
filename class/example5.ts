class Person6 {
  public constructor(private _name: string, private age: number) {}
  get name() {
    console.log('get');
    return this._name + ' Kim';
  }
  set name(n: string) {
    console.log('set');
    this._name = n;
  }
}

const p6: Person6 = new Person6('Fdong', 30);
console.log(p6.name); // get을 하는 함수 = getter
p6.name = 'FDDD'; // set을 하는 함수 = setter
console.log(p6.name);
