"use strict";
console.log(Symbol('FDong') === Symbol('FDong'));
// false
const sym1 = Symbol();
//  고유한 형태의 값
const object1 = {
    sym: 'value',
};
console.log(object1['sym']); //접근 가능
const sym2 = Symbol();
//  고유한 형태의 값
const object2 = {
    [sym2]: 'value',
};
// 접근 불가능
// console.log(object2['sym2']);
// 접근 가능
console.log(object2[sym2]);
