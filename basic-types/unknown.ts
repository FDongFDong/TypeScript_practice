declare const maybe: unknown;

// unknown은 aNumber에 바로 할당할 수 없는 타입이다.
// const aNumber: number = maybe;

if (maybe === true) {
  // 런타임에서 maybe는 boolean이어야지만 해당 구문을 탈 수 있으므로 boolean 타입으로 나온다.
  // 런타임에서 타입을 정해주는 것을 타입가드라고 하며 타입가드를 통해서 한정시켜 쓸수있는게 unknown이다.
  const aBoolean: boolean = maybe;

  // const aString: string = maybe;
}

if (typeof maybe === 'string') {
  const aString: string = maybe;
  // const aBoolean: boolean = maybe;
}
