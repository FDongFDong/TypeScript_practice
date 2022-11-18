function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error('failed');
}
// 무한 반복하면 리턴하지 않으므로
function infiniteLoop(): never {
  while (true) {}
}

let a: string = 'hello';

if (typeof a !== 'string') {
  // 잘못된 타입을 넣는 실수를 막을 수 있다.
  a; // never
}

declare const b: string | number;
if (typeof b !== 'string') {
  // string이 아니면 number이기 때문에
  b; // number
}

// 조건부 타입.
type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
type ObjectIndexable = Indexable<{}>; // never
// const b: Indexable<{}> never 값을 할당하려해서 Error
