class Person7 {
  public readonly name: string = 'FDong';
  private readonly country: string = 'Korea';
  public constructor(private _name: string, private age: number) {}
  hello() {
    // readonly를 사용하였기 때문에 변경할 수 없음
    // this.country = 'China'
  }
}

const p7: Person7 = new Person7('Fdong', 30);
console.log(p7.name);
// readonly를 사용하였기 때문에 변경할 수 없음
// p7.name = 'FDDD';
console.log(p6.name);
