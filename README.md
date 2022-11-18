# typescript_practice

- [typescript_practice](#typescript_practice)
  - [Type Annotation](#type-annotation)
  - [Type](#type)
  - [Primitive Type](#primitive-type)
    - [boolean](#boolean)
    - [number](#number)
    - [string](#string)
    - [symbol](#symbol)
    - [Undefined & Null](#undefined--null)
  - [object](#object)
  - [Array](#array)
  - [tuple](#tuple)
  - [any](#any)
  - [unknown](#unknown)
  - [never](#never)
  - [void](#void)
  - [타입 시스템](#타입-시스템)
    - [타입 스크립트의 타입 시스템](#타입-스크립트의-타입-시스템)
___
## Type Annotation
> [type_annotation.ts](https://github.com/FDongFDong/typescript_practice/blob/main/type_annotation/test.ts)

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
> [boolean.ts](https://github.com/FDongFDong/typescript_practice/blob/main/basic-types/boolean.ts)
### number 
> [number.ts](https://github.com/FDongFDong/typescript_practice/blob/main/basic-types/number.ts)
- 모든 숫자는 부동 소수점 값
- 16진수 2진수 8진수 모두 지원
- NaN 지원
- 1_000_000 

### string
> [string.ts](https://github.com/FDongFDong/typescript_practice/blob/main/basic-types/string.ts)
- string 형식 사용
- 큰따옴표, 작은따옴표

Template String
- 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
- backtick 기호에 둘러쌓여 있다
- `${expr}

### symbol
> [symbol.ts](https://github.com/FDongFDong/typescript_practice/blob/main/basic-types/symbol.ts)

- ECMAScript 2015의 symbol
- new Symbol로 사용할 수 없다
- Symbol을 함수로 사용해서 symbol 타입을 만들 수 있다.
- Primitive type의 값을 담아서 사용한다.
- 고유하고 수정불가능한 값으로 만들어준다.
- 주로 접근 제어하는데 많이 쓰인다.

### Undefined & Null
> [null.ts](https://github.com/FDongFDong/typescript_practice/blob/main/basic-types/null.ts)

- undefined와 null은 각각 undifiend 및 null을 가진다.
- void와 마찬가지로 그자체로는 유용하지 않다.
- 둘다 소문자만 존재한다.
- number 타입에 null 또는 undefined를 할당할 수 있다.
  - 컴파일 옵션 --strictNullChecks를 사용하면 null과 undefined는 void나 자기 자신들에게만 할당할 수 있다.
    - 이 경우 null과 undefined를 할당할 수 있게하려면 union type을 이용해야한다.
- JavaScript
  - Null
    - null이라는 값으로 할당된 것을 null이라고 한다.
    - 사용할 준비가 덜 된 상태
    - null이라는 타입은 null이라는 값만 가질 수 있다.
    - 런타임에서 typeof 연산자를 이용하면 object이다.
  - undefined
    - 값을 할당하지 않을 변수는 undefined라는 값을 가진다.
    - 무언가 아예 준비가 되지 않은 상태
    - object의 property가 없을 때도 undefined
    - 런타임에서 typeof 연산자를 이용해서 알아내면 undefined이다.
___
## object
> [object.ts](https://github.com/FDongFDong/typescript_practice/blob/main/basic-types/object.ts)

- primitive type이 아닌 것을 나타내고 싶을 때 사용하는 타입
- object literal
  ```javascript
  const person1 = {name: 'FDong', age: 30};
  // person1은 object 타입이 아니다.[타입스크립트 기준]
  // person1은 "{name: 'FDong', age: 30}" 타입이다.
  ```

## Array
> [Array.ts](https://github.com/FDongFDong/typescript_practice/blob/main/basic-types/array.ts)
- JavaScript에서 객체
- 사용방법
  - Array\<Type>
  - 타입[]

___
## tuple
> [tuple.ts](https://github.com/FDongFDong/typescript_practice/blob/main/basic-types/tuple.ts)
- 순서, 타입, 길이가 정해져 있다.
___
## any
> [any.ts](https://github.com/FDongFDong/typescript_practice/blob/main/basic-types/any.ts)

- 어떤 타입이여도 상관이 없다.
- 최대한 쓰지 않아야한다.
  - 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문이다.
  - 컴파일 옵션 중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있다. 
    - nolmplicitAny
- 개체를 통해 전파된다.
  - 결국 타입 안정성을 잃는 대가로 온다.  
___

## unknown
>[unknown.ts](https://github.com/FDongFDong/typescript_practice/blob/main/basic-types/unknown.ts)
- any 보다 Type-safe한 타입
  - any와 같이 아무거나 할당할 수 있다.
  - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나 타입을 확정해주지 않으면 다른곳에 할당할 수 없고 사용할 수 없다.
- unknown 타입을 사용하면 runtime error를 줄일 수 있다.
- 모르는 변수의 타입을 묘사해야할 수도 있다.
  - 이 경우 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로 unknown 타입을 제공한다.

___
## never
>[never.ts]()

- never 타입은 모든 타입의 subtype이며 모든 타입에 할당할 수 있다.
- 하지만 never에는 어떤것도 할당할 수 없다.
- any 조차도 never에게 할당할 수 없다.
- 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다.
___
## void
>[void.ts]()
- 어떤 타입도 가지지 않는 빈 상태
- 일반적으로 변수에다가 사용하지 않고 값을 반환하지 않는 undefined 리턴 할 때 사용한다.
- JavaScript/TypeScript에서는 undefiend라는 값이 있기 때문에 잘 사용하지 않는다.
___
## 타입 시스템
- 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
- 컴파일러가 자동으로 타입을 추론하는 시스템
  
### 타입 스크립트의 타입 시스템
- 타입을 명시적으로 지정할 수 있다.
- 타입을 명시적으로 지정하지 않으면, 타입스크립트 컴파일러가 자동으로 타입을 추론
- noImplicitAny 옵션
  - 타입을 명시적으로 지정하지 않은 경우 타입스크립트가 추론 중 'any'라고 판단하게 되면, 컴파일 에러를 발생시켜 명시적으로 지정도하도록 유도한다.
- strictNullChecks 옵션
  - 모든 타입에 자동으로 포함되어 있는 'null'과 'undefined'를 제거해줍니다.
- noImplicitReturns 옵션
  - 함수 내에서 모든 코드가 값을 리턴하지 않으면 컴파일 에러를 발생시킨다.