class Person3 {
  public name: string = 'FDong';
  public age: number;

  public constructor(age?: number) {
    if (age === undefined) this.age = 20;
    else {
      this.age = age;
    }
  }
  public async init() {}
}

class Person4 {
  private name: string = 'FDong';
  private age: number;

  private constructor(age?: number) {
    if (age === undefined) this.age = 20;
    else {
      this.age = age;
    }
  }
  private async init() {}
}
