let x: [string, number];

// 항상 순서, 타입, 길이가 맞아야한다.
x = ['hello', 30];

// x = [10, "hi"]; // Error
// x[3] = "world" // Error
x[0] = 'time';
x[1] = 20;

const person: [string, number] = ['FDong', 30];

// 구조분해할당
const [first, second] = person;
