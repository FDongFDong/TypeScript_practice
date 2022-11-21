// extends를 통해 타입을 더 추가해줄 수 있다.
class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends('Fdong');
new PersonExtends(30);
new PersonExtends(true);
