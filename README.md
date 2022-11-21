# typescript_practice

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
  - [Structural Type System, Nominal Type System](#structural-type-system-nominal-type-system)
  - [Type Compatibility](#type-compatibility)
  - [Type Alias](#type-alias)
    - [Aliasing Primitive](#aliasing-primitive)
    - [Aliasing Union Type](#aliasing-union-type)
    - [Aliasing Tuple](#aliasing-tuple)
    - [Aliasing Function](#aliasing-function)
  - [Compilation Context](#compilation-context)
    - [compileOnSave](#compileonsave)
    - [extends](#extends)
    - [files, include, exclude](#files-include-exclude)
    - [compileOptions - typeRoots, types](#compileoptions---typeroots-types)
    - [compileOptions - target, lib](#compileoptions---target-lib)
    - [compileOptions - outDir, outFile, rootDir](#compileoptions---outdir-outfile-rootdir)
    - [compileOptions - strict](#compileoptions---strict)
  - [Interface](#interface)
    - [optional property1](#optional-property1)
    - [optional property2](#optional-property2)
    - [function in interface](#function-in-interface)
    - [class implements interface](#class-implements-interface)
    - [interface extends interface](#interface-extends-interface)
    - [function interface](#function-interface)
    - [Readonly interface Properties](#readonly-interface-properties)
    - [type alias vs interface](#type-alias-vs-interface)
  - [Class](#class)
    - [constructor & initialize](#constructor-initialize)
    - [접근 제어자](#접근-제어자)
    - [initialization in constructor parameters](#initialization-in-constructor-parameters)
    - [Getters, Setters](#getters-setters)
    - [readonly properties](#readonly-properties)
    - [index signatures in class](#index-signatures-in-class)
    - [static properties & methods](#static-properties-methods)
    - [singletons](#singletons)
    - [상속](#상속)
    - [abstract classes](#abstract-classes)
 - [Generic](#generic)
    - [generic Array, Tuple](#generic-array-tuple)
    - [generic Function](#generic-function)
    - [generic class](#generic-class)
    - [generic-with-extends](#generic-with-extends)
  
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
___
## Structural Type System, Nominal Type System

- Structural Type System(TypeScript)
  - 구조가 같으면 같은 타입이다.

- Nominal Type System
  - 구조가 같아도 이름이 다르면 다른 타입이다.

___ 
## Type Compatibility


- 같거나 서브 타입인 경우 할당이 가능하다. -> 공변
- 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다 -> 반경
  ```typescript
  let sub_type1: 1 = 1;
  let super_type1: number = sub_type1;
  // sub_type1 = super_type1; // Error

  let sub_type2: number[] = [1];
  let super_type2: object = sub_type2; // sub_type2는 Array이다. Array도 object이기 때문에 가능
  // sub_type2 = super_type2; //Error

  let sub_type3: [number, number] = [1, 2]; // tuple
  let super_type3: number[] = sub_type3;
  // sub_type3 = super_type3; // Error

  let sub_type4: number = 1;
  let super_type4: any = sub_type4;
  sub_type4 = super_type4; // any는 에러를 발생시키지 않고 아무거나 할당가능

  let sub_type5: never = 0 as never;
  let super_type5: number = sub_type5;
  // sub_type5 = super_type5; // Error

  class Animal {}
  class Dog extends Animal {
    eat() {}
  }

  let sub_type6: Dog = new Dog();
  let super_type6: Animal = sub_type6;
  // sub_type6 = super_type6; // Error
  ```
___
## Type Alias
- Interface랑 비슷하지만 다르다
- 기타 직접 작성해야하는 타입을 다른 이름으로 지정할 수 있다.
- 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것은 아니다.

### Aliasing Primitive
```typescript
  type MyStingType = string;
  const str = 'world';
  let myStr: MyStingType = 'Hello';
  myStr = str;
```

### Aliasing Union Type
```typescript
  let person: string | number = 0;
  person = 'FDong';

  type StringOrNumber = string | number;

  let another: StringOrNumber = 0;
  another = "DongDong"
```

### Aliasing Tuple
```typescript
  let person: [string, number] = ['FDong', 30];
  type PersonTuple = [string, number];
  let another: PersonTuple = ['FDong', 30];
```

### Aliasing Function
```typescript
  type EatType = (food: string) => void;
```

___
## Compilation Context

### compileOnSave
- true / false (default false)
- vs2015 / TypeScript 1.8.4 이상이 저장 시 컴파일 시켜준다.
- tsconfig.json
  ```json
    {
      "compileOnSave": true,
    }
  ```
### extends
- 다른 파일을 상속받거나 추가해서 사용할 때
- 파일(상대) 경로명: string
- tsconfig.json
  ```json
  {
    "extends": "./base.json",
  }
  ```
- base.json
  ```json
  {
    "compilerOptions" :{
      "strict" : true
    }
  }
  ```

### files, include, exclude
- 어떤 파일, 디렉터리를 컴파일 할 것인지를 정하는 설정
- files, include 속성이 tsconfig안에 없으면 모든 파일을 컴파일하려한다.
- files
  - 상대/절대 경로의 리스트 배열
  - exclude 보다 강하기 때문에 exclude로 설정한 파일도 무시한다.
- include, exclude
  - glob 패턴
  - include
    - exclude보다 약하다
  - exclude
    - 설정 안하면 4가지(node_modules, bower_components, jspm_packages, \<outDir>)를 default로 제외한다.
    - \<outDir>은 항상 제외한다.

### compileOptions - typeRoots, types

- @types
  - 내장 type definition 시스템
  - 설정을 하지 않으면
    - node_modules/@types 라는 모든 경로를 찾아서 사용
  - typeRoots를 사용하면
    - 배열 안에 들어있는 경로들 아래서만 가져온다
  - types를 사용하면
    - 배열 안의 모듈 혹은 ./node_modules/@types/ 안의 모듈 이름에서 찾아온다.
    - [] 빈 배열을 넣는다는 것은 이 시스템을 사용하지 않겠다는 의미
  - typeRoots와 types를 같이 사용하지 않는다.
  
### compileOptions - target, lib
- target
  - 빌드를 어떤 버전으로 할것인지
  - 지정하지 않으면 es3
- lib
  - 기본 type definition 라이브러리를 어떤 것을 사용할 것인지
  - lib를 지정하지 않을 때
    - target이 'es3'이고 디폴트로 lib.d.ts를 사용한다
    - target이 'es5'이면 디폴트로 dom, es5, scripthost를 사용한다
    - target이 'es6'이면 디폴트로 dom, es6, dom.iterable, scripthost를 사용한다.
  - lib를 지정하면 그 lib 배열로만 라이브러리를 사용한다.
    - 빈 [] => 'no definition found ...'

### compileOptions - outDir, outFile, rootDir

- outDir
  - 설정한 파일 경로로 컴파일된 결과물이 나온다.
- outFile
- rootDir
  - 타입스크립트 파일의 가장 상단 기준으로 컴파일하여 결과물이 계층적으로 출력된다.

### compileOptions - strict

- 모든 type을 checking 한다.
  - --noImplicitAny
    - 명시적이지 않게 any 타입을 사용하여, 표현식과 선언에 사용하면 에러를 발생
    - 타입스크립트가 추론을 실패한 경우 any가 맞으면 any라고 지정
    - 아무것도 쓰지 않으면 에러를 발생
    - 이 오류를 해결하면 any라고 지정되어 있지 않은 경우는 any가 아닌것
  - --noImplicitThis
    - 명시적이지 않게 any 타입을 사용하여 this 표현식에 사용하면 에러를 발생시킨다.
  
     ```typescript
      function noImplicitThisTestFunc(this, name: string, age: number){
        this.name = name;
        this.age = age;
        return this;
      }
     ```
    
     - 첫번째 매개변수 자리에 this를 놓고 this에 대한 타입을 어떤것이라도 표현하지 않으면 오류를 발생시킨다.
     - Javascript에서는 매개변수에 this를 넣으면 이미 예약된 키워드라 SyntaxError을 발생시킨다.
     - call / apply / bind와 같이 this를 대체하여 함수 콜을 하는 용도로 사용
     - this를 any로 명시적으로 지정하는 것은 합리적이다.
  - --strictNullChecks
    - null 및 undefined 값이 모든 유형의 도메인에 속하지 않으며, 그 자신을 타입으로 가지거나 any일 경우에만 할당이 가능
    - undefined에 void 할당 가능
    - 적용하지 않으면
      - 모든 타입은 null, undefined 값을 가질 수 있다.
      - string 타입을 지정해도 null 혹은 undefined 값을 할당할 수 있다.
    - 적용하면 
      - 모든 타입은 null, undefined 값을 가질 수 없고, 가지려면 union type을 이용해서 직접 명시해야 한다.
      - any 타입은 null과 undefined를 가진다. 
  - --strictFunctionTypes
  - --strictPropertyInitialization
    - 정의도지 않은 클래스의 속성이 생성자에서 초기화되었는지 확인한다.
  - --strictBindCallApply
    - bind, call, apply에 대한 더 엄격한 검사 수행
  - --alwaysStrict
  
___

## Interface

> [interface1.ts](https://github.com/FDongFDong/typescript_practice/blob/main/interface/interface1.js)

타입을 만들어내는 방식

### optional property1

> [interface2.ts](https://github.com/FDongFDong/typescript_practice/blob/main/interface/interface2.js)

```typescript
  // name은 항상 있고 age는 있을수도 없을수도 있는 형태
  interface Person2 {
    name: string;
    age?: number;
  }
```

### optional property2

> [interface3.ts](https://github.com/FDongFDong/typescript_practice/blob/main/interface/interface3.js) 

### function in interface

> [interface4.ts](https://github.com/FDongFDong/typescript_practice/blob/main/interface/interface4.js)

### class implements interface

> [interface5.ts](https://github.com/FDongFDong/typescript_practice/blob/main/interface/interface5.js)

### interface extends interface

> [interface6.ts](https://github.com/FDongFDong/typescript_practice/blob/main/interface/interface6.js)

### function interface

> [interface7.ts](https://github.com/FDongFDong/typescript_practice/blob/main/interface/interface7.js)

### readonly interface Properties

> [interface8.ts](https://github.com/FDongFDong/typescript_practice/blob/main/interface/interface8.js)

### type alias vs interface

- function

  ```typescript
    // type alias
    type EatType = (food: string) => void;

    // interface
    interface IEat {
      (food: string): void;
    }
  ```

- array

  ```typescript
    // type alias
    type PersonList = string[];

    // interface
    interface IPersonList {
      [index: number]: string;
    }
  ```

- intersection

  ```typescript
    interface ErrorHandling {
      success: boolean;
      error?: {message: string};
    }

    interface ArtistsData {
      artists: {name: string}[];
    }

    // type alias
    type ArtistsResponseType = ArtistsData & ErrorHandling;

    // interface
    interface IArtistsResponse extends ArtistsData, ErrorHandling {}

    let art: ArtistsResponseType;
    let iar: IArtistsResponse;
  ```

- union types

  ```typescript
    interface Bird {
      fly(): void;
      layEggs(): void;
    }
    interface Fish {
      swim(): void;
      layEggs(): void;
    }

    type PetType = Bird | Fish;

    interface IPet extends PetType{} // Error
    class Pet implements PetType {} // Error
  ```
- Interface - Declaration Merging

  ```typescript
    interface MergingInterface {
      a : string;
    }
    interface MergingInterface {
      b: string;
    }
    // 선언이 합쳐친다.
    let mi: MergingInterface;
    
  ```
___
## Class

> [example.ts](https://github.com/FDongFDong/typescript_practice/blob/main/class/example.js)

- object를 만드는 blueprint
- TypeScript에서는 클래스도 사용자가 만드는 타입의 하나
- class 키워드를 이용하여 클래스를 만들 수 있다.
- class 이름은 보통 대문자를 이용한다.
- new를 이용하여 class를 통해 object를 만들 수 있다.
- constructor를 이용하여 object를 생성하면서 값을 전달할 수 있다.
- this를 이용해서 만들어진 object를 가리킬 수 있다.
- JS로 컴파일 시 es5의 경우 function으로 변경된다.

### constructor, initialize

> [exampe2.ts](https://github.com/FDongFDong/typescript_practice/blob/main/class/example2.js)

- 생성자에 async를 쓸 수 없다.
- 생성자 함수가 없으면 디폴트 생성자가 불린다.
- 생성자가 하나라도 있으면 디폴트 생성자는 사라진다.
- strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야 한다.
- 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 !를 붙여서 위험을 표현한다.
- 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined이다.

### 접근 제어자
>[example3.ts](https://github.com/FDongFDong/typescript_practice/blob/main/class/example3.js)

- public, private, protected가 있다.
- 설정하지 않으면 public
- 클래스 내부의 모든 곳에 설정 가능하다.
- private으로 설정하면 클래스 외부에서 접근불가능
- 자바스크립트에서는 private를 지원하지 않아 프로퍼티나 메서드 이름앞에 _를  붙여서 표현했다. 

### initialization in constructor parameters
> [example4.ts](https://github.com/FDongFDong/typescript_practice/blob/main/class/example4.js)

### getters, setters
> [example5.ts](https://github.com/FDongFDong/typescript_practice/blob/main/class/example5.js)

### readonly properties
> [example6.ts](https://github.com/FDongFDong/typescript_practice/blob/main/class/example6.js)
- readonly가 설정되면 내부 외부에서 모두 수정할 수 없다.

### index signatures in class
> [example7.ts](https://github.com/FDongFDong/typescript_practice/blob/main/class/example7.js)
- 동적으로 properties가 들어오는 경우 고려해볼맘ㄴ하다.
### static properties, methods
> [example8.ts](https://github.com/FDongFDong/typescript_practice/blob/main/class/example8.js)
### singletons
> [example9.ts](https://github.com/FDongFDong/typescript_practice/blob/main/class/example9.js)

### 상속
> [example10.ts](https://github.com/FDongFDong/typescript_practice/blob/main/class/example10.js)

### abstract classes
> [example11.ts](https://github.com/FDongFDong/typescript_practice/blob/main/class/example11.js)

___

## Generic
>[generic1.ts](https://github.com/FDongFDong/typescript_practice/blob/main/generic/generic1.ts)
>[generic2.ts](https://github.com/FDongFDong/typescript_practice/blob/main/generic/generic2.ts)

### generic Array, Tuple
>[generic3.ts](https://github.com/FDongFDong/typescript_practice/blob/main/generic/generic3.ts)

### generic Function
>[generic4.ts](https://github.com/FDongFDong/typescript_practice/blob/main/generic/generic4.ts)

### generic Class
>[generic5.ts](https://github.com/FDongFDong/typescript_practice/blob/main/generic/generic5.ts)

### generic with extends
>[generic6.ts]<https://github.com/FDongFDong/typescript_practice/blob/main/generic/generic6.ts>

