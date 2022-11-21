function helloString(messgae: string): string {
  return messgae;
}

function helloNumber(message: number): number {
  return message;
}

function hello(message: any): any {
  return message;
}

console.log(hello('FDong'));
console.log(hello(1));

function helloGeneric<T>(message: T): T {
  return message;
}
console.log(helloGeneric('FDong').length);
console.log(helloGeneric(39));
console.log(helloGeneric(true));
