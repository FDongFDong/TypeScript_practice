class GenericPerson<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new GenericPerson('FDong', 30);
// 미리 정의할 수도 있음
new GenericPerson<string, number>('DONG', 30);
