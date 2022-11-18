// void로 추론된다.
function returnVoid(message: string) {
  console.log(message);
}
// void
function returnVoid2(message: string) {
  return;
}

// r의 타입은 void
const r = returnVoid('리턴이 없음');
