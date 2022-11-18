const person1 = { name: 'FDong', age: 30 };

const person2 = Object.create({ name: 'FDong', age: 30 });
// const person3 = Object.create(30);

let obj: object = {};

obj = { name: 'FDong' };

obj = [{ name: 'FDong' }];

// obj = 30; // error

// obj = "FDong"  // error

// obj = true;  // error

// obj = 100n;  // error

// obj = Symbol();  // error

// obj = null;  // error

// obj = undefined;  // error

declare function create(o: object | null): void;
// primitive 타입은 받지 않겠다는 제약사항을 걸어두기 위함

create({ prop: 0 });

create(null);

// create(30); // Error

// create('string'); // Error

// create(false); // Error

// create(undefined); // Error

// Object.create(0); // Error
