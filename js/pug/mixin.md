# pug : mixin

## pug에서 mix을 사용하는 방법

<br>

### 1. mixin 으로 사용 할 파일 생성

mixin.pug  
mixin 파일 다음과 같이 작성

```pug
mixin test(types)
  div
    h1=types.title
    ul
      li #{types.likes} ❤️
      li a(herf="#") #{types.link}
```

<br>

### 2. 사용할 파일에 `include`하고 입력

```pug
include folder-mixin/mixin.pug
//- .pug 생략가능

+mixin(pizza)
//- mixin파일명(뱉어줄것)
```
