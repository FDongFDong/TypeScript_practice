"use strict";
// class -> object
class Students {
    constructor() {
        this.makr = 'male';
    }
}
const a = new Students();
a.mark = 'male';
a.jade = 'male';
console.log(a);
const b = new Students();
b.chloe = 'female';
b.alex = 'female';
console.log(b);
