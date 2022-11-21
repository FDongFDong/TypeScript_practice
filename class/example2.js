"use strict";
class Person2 {
    constructor(age) {
        this.name = 'FDong';
        if (age === undefined) {
            this.age = 30;
        }
        else {
            this.age = age;
        }
    }
}
const p2 = new Person2(30);
const p3 = new Person2();
console.log(p1);
