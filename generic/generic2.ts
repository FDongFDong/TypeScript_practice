function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

// 타입 직접 넣기
helloBasic<string, number>('FDong', 30);
helloBasic(30, 30);
