# typescript_practice

- [typescript_practice](#typescript_practice)
  - [Type Annotation](#type-annotation)
  - [Type](#type)
  - [Primitive Type](#primitive-type)
    - [boolean](#boolean)
    - [number](#number)
    - [string](#string)
    - [symbol](#symbol)

## Type Annotation
> (type_annotation.ts)[]

타입을 지정해주는 것
- : {type}
  - : string
  - : number 
  - ...

___
## Type
- Boolean
- Number
- String
- Null
- Undefined
- Symbol
- Array : object 형
- Any, Void, Never, Unknown
- Enum
- Tuple : object 형

---
## Primitive Type
오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
- boolean
- number
- string
- symbol
- null
- undefined

TypeScript의 Primitive Type은 모두 소문자이다.

### boolean
> (boolean.ts)[]
### number 
> (number.ts)[]
- 모든 숫자는 부동 소수점 값
- 16진수 2진수 8진수 모두 지원
- NaN 지원
- 1_000_000 

### string
> (string.ts)[]
- string 형식 사용
- 큰따옴표, 작은따옴표

Template String
- 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
- backtick 기호에 둘러쌓여 있다
- `${expr}

### symbol
> (symbol.ts)[]

- ECMAScript 2015의 symbol
- new Symbol로 사용할 수 없다
- Symbol을 함수로 사용해서 symbol 타입을 만들 수 있다.
- Primitive type의 값을 담아서 사용한다.
- 고유하고 수정불가능한 값으로 만들어준다.
- 주로 접근 제어하는데 많이 쓰인다.