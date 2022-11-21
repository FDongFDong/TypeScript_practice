"use strict";
function hello3(person) {
    console.log(`안녕하세요 ${person.name} 입니다.`);
}
const p31 = {
    name: 'FDong',
    age: 30,
};
const p32 = {
    name: 'FDongFDong',
    systers: ['F', 'D', 'O'],
};
const p33 = {
    name: 'Kim',
    father: p31,
    mother: p32,
};
hello3(p33);
