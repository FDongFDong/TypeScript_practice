"use strict";
class Person6 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        console.log('get');
        return this._name + ' Kim';
    }
    set name(n) {
        console.log('set');
        this._name = n;
    }
}
const p6 = new Person6('Fdong', 30);
console.log(p6.name); // get을 하는 함수 = getter
p6.name = 'FDDD'; // set을 하는 함수 = setter
console.log(p6.name);
