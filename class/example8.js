"use strict";
class Person8 {
    hello() {
        console.log('안녕하세요', Person8.CITY);
    }
    change() {
        Person8.CITY = 'Busan';
    }
}
Person8.CITY = 'Seoul';
const p8 = new Person8();
p8.hello();
const p9 = new Person8();
p9.hello();
p8.change();
p9.hello();
