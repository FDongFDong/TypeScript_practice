"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name}이고 나이는 ${this._age}`);
    }
}
// const x1 = new Parent('FDong', 30);
// x1.print();
class Child extends Parent {
}
const x2 = new Child('Son', 5);
x2.print();
