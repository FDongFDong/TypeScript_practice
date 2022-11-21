abstract class AbstractPerson {
  protected _name: string = 'FDong';

  abstract setName(name: string): void;
}

// new를 사용할 수 없음
// new AbstractPerson();

class PersonTest extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const pp = new PersonTest();
pp.setName('dd');
