function helloArray<T>(message: T[]): T {
  return message[0];
}
// function helloArray<string>(message: string[]): string
helloArray(['Hello', 'World']);
function helloArray<string | number>(message: (string | number)[]): string | number
helloArray(['Hello', 5]);

function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

// function helloTuple<string, string>(message: [string, string]): string
helloTuple(['Hello', 'World']);
// function helloTuple<string, number>(message: [string, number]): string
helloTuple(['Hello', 5]);
