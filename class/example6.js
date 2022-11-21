"use strict";
class Person7 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = 'FDong';
        this.country = 'Korea';
    }
    hello() {
        // readonly를 사용하였기 때문에 변경할 수 없음
        // this.country = 'China'
    }
}
const p7 = new Person7('Fdong', 30);
console.log(p7.name);
// readonly를 사용하였기 때문에 변경할 수 없음
// p7.name = 'FDDD';
console.log(p6.name);
