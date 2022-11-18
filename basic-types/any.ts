function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny('리턴');

// 리턴이 any로 달려있으면 제약이 주어지지 않는다.
// 어떤 타입이여도 상관이 없다.
any1.toString();

let looselyTyped: any = {};

// 개체를 통해 전파된다.
// d 또한 any 타입이 된다.
const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
  const a = obj.num;
  const b = a + 1; // b도 any
  return b;
}

// c도 any
const c = leakingAny({ num: 0 });
c.indexOf('0');
