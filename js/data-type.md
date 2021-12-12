# Javascript : 데이터 타입

자바스크립트의 모든 값은 데이터 타입(줄여서 타입이라고도 표현)을 갖는다.

ES6는 7개의 데이터 타입을 제공한다. 7개의 타입은 원시타입과 객체타입으로 분류 할 수 있다.

### 원시 타입

숫자 (number)

- 숫자, 정수와 실수 구분 없이 하나의 숫자 타입만 존재

문자열 (string)

- 문자열 그대로의 타입

불리언 (boolean)

- 논리적 참과 거짓 (ture, false)

undefined

- var 키워드로 선언된 변수에 암묵적으로 할당 되는 값

null

- 값이 없다는 것을 의도적으로 명시할 때 사용하는 값

심볼 (symbol)

- ES6에서 추가된 7번째 타입

### 객체 타입 (object)

- 객체, 함수, 배열 등

예를 들어 숫자열 타입 1과 문자열 타입 "1"은 생성한 목적과 용도가 다르다. 숫자 타입의 값은 주로 산술 연산을 위해 생성하지만 문자열 타입은 주로 텍스트를 화면에 출력하기 위해 생성한다.

<br>

---

<br>

## 숫자 타입

자바스크립트는 하나의 숫자 타입만 존재한다. ECMAScript 사양에 따르면 숫자 타입의 값은 배정밀도 64비트 부동소수점 형식을 따른다. 모든 수를 실수로 처리하며 정수만 표현하기 위한 데이터 타입이 별도로 존재하지 않는다.

자바스크립트는 2진수, 8진수, 16진수를 표현하기 위한 데이터 타입을 제공하지 않기 때문에 이들값을 참조하면 모두 10진수로 해석된다.

```jsx
var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary);
console.log(octal);
console.log(hex);

/*
	--RESULT--
	65
	65
	65
*/
```

자바스크립트의 숫자 타입은 모든 수를 실수로 처리하므로 정수로 표시된다 해도 사실은 실수라는 것을 의미한다. 따라서 정수로 표시되는 수끼리 나누더라도 실수가 나올 수 있다.

```jsx
console.log(1 === 1.0); //true
```

숫자 타입은 세가지 특별한 값도 표현할 수 있다.

- Infinity : 양의 무한대
- -Infinity : 음의 무한대
- NaN(not-a-number) : 산술 연산 불가

자바스크립트는 대소문자를 구별하므로 NaN을 다르게 표현하면 에러가 발생하므로 주의해야한다.

<br>

---

<br>

## 문자열 타입

문자열은 0개 이상의 16비트 유니코드 문자(UTF-16)의 집합으로 전 세계 대부분의 문자를 표현할 수 있다.

문자열은 따옴표들 (''), ("") 또는 백틱 (``)으로 텍스트를 감싼다. 자바스크립트에서 가장 일반적인 표기법은 작은따옴표 ('')를 사용하는 것이다.

문자열을 따옴표로 감싸는 이유는 키워드나 식별자 같은 토큰과 구분하기 위해서다. 그리고 스페이스와 같은 공백 문자도 포함시킬 수 없다. 자바스크립트의 문자열은 원시 타입이며 변경 불가능한 값이다. 이것은 문자열이 생성되면 그 문자열을 변경할 수 없다는 것을 의미한다.

```jsx
var string;
string = "문자열";
string = "문자열";
string = `문자열`;
string = '문자열의 "내부문자열"';
string = "문자열의 '내부문자열'";

var string = hello; // 에러 : 따옴표로 감싸지 않은 hello를 식별자로 인식한다.
```

---

## 템플릿 리터럴

ES6부터 템플릿 리터럴이라고 하는 새로운 문자열 표기법이 도입되었다.

템플릿 리터럴은 멀티라인 문자열, 표현식 삽입, 태그드 템플릿 등 편리한 문자열 처리 기능을 제공한다. 템플릿 리터럴은 런타임에 일반 문자열로 변환되어 처리된다.

템플릿 리터럴은 일반적으로 백틱(``)을 사용해 표현한다.

### 멀티라인 문자열

일반 문자열 내에서는 줄바꿈이 허용되지 않는다. 일반 문자열과 달리 템플릿 리터럴 내에서는 이스케이프 시퀀스를 사용하지 않고도 줄바꿈이 허용되며, 모든 공백도 있는 그대로 적용된다.

```jsx
var template = `<ul>
	<li><a herf="#">Home<a/></li>
</ul>`;

console.log(template);

/*
	--RESULT--
	<ul>
		<li><a herf="#">Home<a/></li>
	</ul>
*/
```

### 표현식 삽입

문자열은 문자열 연산자 +를 사용해 연결할 수 있다. +연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다. 그 외의 경우는 덧셈 연산자로 동작한다.

템플릿 리터럴 내에서는 표현식 삽입(${})을 통해 간단히 문자열을 삽입할 수 있다.

```jsx
var first = "First";
var last = "Name";

// ES6 : 표현식 삽입
console.log(`Your name is ${first} ${last}.`); // Your name is First Name.
```

<br>

---

<br>

## boolean 타입

불리언 타입의 값은 참과 거짓으로 구분되는 조건에 의해 프로그램의 흐름을 제어하는 조건문에서 자주 사용한다.

```jsx
var foo = true;
console.log(foo); //true

foo = false;
console.log(foo); //false
```

<br>

---

<br>

## undefined 타입

var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화된다. 변수 선언에 의해 확보된 메모리 공간을 처음 할당이 이뤄질 때까지 빈 상태로 내버려두지 않고 자바스크립트 엔진이 undefined로 초기화한다.

변수를 선언한 이후 값을 할당하지 않은 변수를 참조하면 undefined가 반환된다. undefined는 개발자가 의도적으로 할당하기 위한 값이 아닌 엔진이 변수를 초기화 할 때 사용하는 값이다. 의도적으로 undefined를 변수에 할당한다면 undefined의 취지에 어긋날 뿐더러 혼란을 줄 수 있으므로 권장하지 않는다.

_\*undefined는 비어있다기 보다 정의되지 않는 값이라고 봐야한다._

<br>

## null 타입

프로그래밍 언어에서 null은 변수에 값이 없다는 것을 의도적으로 명시 할 때 사용한다. 변수에 null을 할당하는 것은 변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미다. 할당되어 있던 값에 대한 참조를 면시적으로 제거하는 것을 의미하고 엔진은 참조하지 않는 메모리 공간에 대해 가비지 콜렉션을 수행할 것이다.

_\*함수가 유효한 값을 반환 할 수 없는 경우 명시적으로 null을 반환하기도 한다. 예를 들어 HTML 요소를 검색하고 반환하는 document.querySelector 메소드는 조건에 부합하는 HTML 요소를 검색할 수 없는 경우 에러 대신 null을 반환한다._

<br>

## 심볼 타입

심볼은 ES6에서 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다. 심볼 값은 다른 값과 중복되지 않는 유일무이한 값이다. 주로 이름이 충돌한 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다. 심볼 이외의 원시 값은 리터럴을 통해 생성하지만 심볼을 symbol 함수를 호출해 생성한다. 이때 생성된 심볼 값은 외부에 노출되지 않으며 다른값과 절대 중복되지 않으며 유일무이한 값이다.

```jsx
var key = Symbol("key");
console.log(typeof key); //symbol

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유밀무이한 값인 심볼을 프로퍼티 키로 사용한다.
obj[key] = "value";
console.log(obj[key]); // value
```

<br>

---

<br>

## 객체 타입

자바스크립트의 데이터 타입은 크게 원시 타입과 객체 타입으로 분류한다. 근본적으로 원시 타입과 객체 타입은 다르다는 의미이다. 자바스크립트는 객체 기반의 언어이며, **자바스크립트를 이루고 있는 거의 모든 것이 객체**라는 것이다. 지금까지 본 6가지 원시 데이터 타입 이외의 값은 모두 객체 타입이다.

<br>

---

<br>

## 데이터 타입의 필요성

값은 메모리에 저장하고 참조 할 수 있어야 한다. 몇 바이트의 메모리 공간을 사용해야 낭비와 손실 없이 값을 저장 할 수 있는지 알아야 한다. 모든 값은 데이터 타입을 가지며 메모리에 2진수, 비트의 나열로 저장된다. 메모리에 저장된 값은 데이터 타입에 따라 다르게 해석될 수 있다. 예를 들어 메모리에 저장된 값 0100 0001을 숫자로 해석하면 65지만 문자열로 해석하면 'A'다.

자바스크립트의 모든 값은 데이터 타입을 갖는다. 데이터 타입이 필요한 이유는 다음과 같다.

- 값을 저장 할 때 확보해야 하는 메모리 공간의 크기를 결정하기 위해
- 값을 참조할 때 한번에 읽어 들여야 할 메모리 공간의 크기를 결정하기 위해
- 메모리에서 읽어 들인 2진수를 어떻게 해석할지 결정하기 위해

<br>

---

<br>

## 동적 타이핑

### 동적 타입 언어와 정적 타입 언어

정적 타입 언어는 변수를 선언할 때 변수에 할당할 수 있는 값의 종류, 데이터 타입을 사전에 선언해야 한다. 이를 명시적 타입 선언이라고 한다. 정적 언어는 변수의 타입을 변경 할 수 없으며, 변수에서 선언한 타입에 맞는 값만 할당 할 수 있다. 컴파일 시점에 타입 체크를 수행하고 체크를 통과하지 못했다면 에러를 발생시키고 프로그램의 실행 자체를 막는다. 이를 통하여 일관성을 강제하고 더욱 안정적인 코드의 구현을 통해 런타임에 발생하는 에러를 줄인다.

자바스크립트는 이와 다르게 변수를 선언할 때 타입을 선언하지 않는다. 다만 var, const, let 키워드를 사용해 변수를 선언할 뿐이다. 정적언어와 달리 어떠한 데이터 타입의 값이라도 자유롭게 할당할 수 있다.

typeof 연산자로 변수를 연산하면 변수의 데이터 타입을 반환한다. 자바스크립트는 값을 할당하는 시점에 변수의 타입이 동적으로 결정되고 변수의 타입을 언제든지 자유롭게 변경할 수 있다.

<br>

> 💡 자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정(타입 추론)된다. 그리고 재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다. 이러한 특징을 동적 타이핑이라고 하며 동적 타입 언어라고 한다.

<br>

기본적으로 변수는 타입을 갖지 않는다. 하지만 값은 타입을 갖는다. 변수에 할당되어 있는 값에 의해 변수의 타입이 동적으로 결정된다고 표현하는 것이 적절하다.

<br>

### 동적 타입 언어와 변수

동적 타입 언어는 변수에 어떤 데이터 타입의 값이라도 자유롭게 할당할 수 있지만 구조적으로 변수의 값은 언제든지 변경될 수 있기 때문에 복잡한 프로그램에서는 변화하는 변수 값을 추적하기 어려울 수 있다. 뿐만 아니라 변수의 타입이 고정되어 있지 않고 동적으로 변하는 동적 타입 언어의 변수는 값의 변경에 의해 타입도 언제든지 변경될 수 있다. 동적 타입 언어는 유연성은 높지만 신뢰성은 조금 떨어진다.

- 변수는 꼭 필요한 경우에 한해 제한적으로 사용한다. 변수의 개수가 많으면 많을 수록 오류가 발생할 확률도 높아진다.
- 변수의 유효 스코프는 최대한 좁게 만들어 변수의 부작용을 억제해야 한다.
- 전역 변수는 최대한 사용하지 않도록 한다. 의도치 않게 값이 변경될 가능성이 높고 다른 코드에 영향을 줄 사능성도 높다.
- 변수 작명은 변수가 가질 목적이나 의미를 파악할 수 있도록 네이밍한다. 변수뿐만 아니라 모든 식별자(변수, 함수, 클래스 이름 등)는 이유를 파악할 수 있는 적절한 이름으로 지어야 한다.

<br>

> 💡 코드는 동작하는 것만이 존재 목적이 아닌 개발자를 위한 문서이기도 하다. 가독성이 좋고 깔끔한 코드가 좋은 코드다.