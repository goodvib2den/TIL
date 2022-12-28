# Learn my self | node project handling and express

express를 공부하며 적어나갑니다.  
node 프로젝트를 처음 접하기에 설명이 부실합니다.

---

## set-up recap

1. 프로젝트 디렉토리 내부에 `npm init` 커맨드를 입력한다.

2. `package.json`을 완성시킨다.  
   _package.js은 text로 이루어진 프로젝트의 정보를 제공하는 문서일 뿐이니 완벽하게 작성하지 않더라도 추후에 수정을 통하여 완성시키면 된다. 자주 수정하게 되니 강박을 갖지 않아도 된다._
3. express, babel 등 필요한 dependencies를 `npm i`를 활용하여 추가한다. 이때, package.json을 작업창에서 닫은 뒤 추가하는 것을 추천하고 node\*moduls이라는 디렉토리가 자동으로 추가되면 성공적으로 추가 된 것이다.  
   _`node_modules`의 이름으로 된 디렉토리는 공유할 필요가 없다. package.json에 기록된 정보들을 통하여 npm으로 한번에 필요한 패키지들의 버전까지 맞춰 한번에 추가가 가능하다_

> 💡 프로젝트를 편하게 해주는 devDependencies : [babel install nodeJS](https://babeljs.io/setup#installation) ES6를 컴파일 시켜주는 역할, [nodemon](https://babeljs.io/setup#installation) 파일저장 시 자동으로 npm run 커맨드를 재입력해 주는 역할

---

## server recap

**nodeJS**에서 **express**를 사용하여 서버를 만들 시 간략한 세팅 방법에 대하여 알아보자.

### 서버 리스닝 기능

1. 우선 서버의 역할을 해줄 js 파일을 생성

2. 이후 파일 내부에 express를 import

3. 사용될 변수를 생성하고 바로 사용할 수 있도록 리턴시킨다

```jsx
import express from "express";

const app = express();
```

4. 리스닝 함수를 추가

```jsx
import express from "express";

const app = express();

const listeningMyServer = () => console.log("Listening on port 4000");

app.listen(4000, listeningMyServer);
```

위 코드를 터미널을 통해 실행 시켜보자

```
$ npm run #{npm_run_script}
```

로그 기록은 아래와 같이 출력되어야 정상적으로 작동하는 것이다.

```log
Listening on port 4000
```

위와 같이 작동 중이라면 서버가 동작하고 있으며 동시에 리스닝 기능 또한 작동중인 것으로 확인 할 수 있다.

---

### 기본적인 route 작성법

express를 통해 서버와 통신하는 가장 보편적인 방법은 `get` api를 이용하여 통신을 하는 방법이 있다.  
요약하자면 특정 url을 브라우저 주소창에 입력 시 **브라우저**가 **서버**에 req를 보내고 **서버**가 **브라우저**에 요청한 내용을 보내는 방식이다.

`get`을 받은 뒤 들어갈 인자에 세부적인 내용만 넣어주면 되는 간단한 방법이다.

`app.get($route)` 에서는 `path`가 필요하다.  
path로는 url이 필요한것 이후엔 많은 핸들러(함수)가 들어갈 수 있다.

아래의 예시처럼 간단한 route를 작성해볼 수 있다.

```jsx
import express from "express";

const PORT = 4000;

const app = express();

const handleHome = () => console.log("Here is Home!");

app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅ Server listeting on port ${PORT}`);

app.listen(PORT, handleListening);
```

로그기록

```log
Here is Home!
```

위처럼 로그 기록으로는 뜨지만 실제 브라우저에서는 res를 받고 있지 않아 에러를 띄우고 지속적으로 로딩 중일 것이다.

---

### 기본적인 controller 작성법

route 작성에서 알게되었듯 모든 라우트는 기본적으로 핸들러를 가지게 되고 핸들러를 통해 브라우저가 서버에 `req`를 보냈기 때문에 res를 주지 않는다면 이전 내용처럼 지속적으로 로딩을 할 것이다.

라우트 작성 시 가지게 된 핸들러는 controller가 되며 컨트롤러에는 `req`와 `res` 인자를 갖게 된다.  
인자의 이름인 `req`와 `res`는 중요하지 않고 순서가 중요하다.  
각 인자마다 여러 메소드가 존재하는데 여기서는 기본적인 `res.end()`와 `res.send()`만 짚고 넘어 갈 예정이다.

- `res.end()`는 아무 응답 없이 그저 연결을 종료 시킬 뿐이다.
- `res.send()`는 fn 안의 내용을 보내주는 응답을 주는 것이다.
  \*html로도 보낼 수 있다.

req를 서버로 보냈다면 반드시 res 받아줘야한다. 간단하게 표현하자면

> routes를 만들고 controllers를 만들어 서버와 기본적으로 통신하게 만드는 것이다.

가장 쉽게 볼 수 있는 에러로는 라우트 컨트롤러에 함수를 입력하지 않아 발생하는 에러가 잦게 발생 할 수 있다. 반드시 컨트롤러가 있어야 할 자리에는 함수를 입력해주어야 한다. `get`은 **반드시** 함수가 필요하다.

---

### middleware

middleware는 req와 res의 중간다리 역할을 해주는 소프트웨어라고 생각하면 된다. 라우트 작성시 url 다음 컨트롤러가 붙게 되는데 사실 모든 컨트롤러도 미들웨어가 될 수 있다. 가장 중요한 핵심은 컨트롤러 인자 중 `next()`함수가 붙는다는 점이다.

아래의 예시 코드를 참고해보자.

```jsx
// middlerware
const logger = (req, res, next) => {
  console.log("here is logger middleware!");
  next();
};

// controller
const home = (req, res) => {
  res.send("Hello world!");
};

app.get("/", logger, home);
```

라우트를 보면 url 뒤로 `logger`라는 핸들러가 하나 더 붙게 되었다. 위 코드에서 보이듯 라우트에서 로거로 우선 함수를 실행 시킨 뒤 응답을 하고 그 뒤로 홈이라는 컨트롤러가 실행되어 로그창에는 `here is logger middleware!`가 표기되고 `Hello world!`라는 문구는 브라우저에 프린트하게 된다.

미들웨어는 어떠한 컨트롤러가 res를 통신을 하기 전까지 모든 컨트롤러를 미들웨어라고 칭할 수 있다. 그러한 관례로 모든 마지막 컨트롤러 인자에는 `next` 함수를 포함시키지 않는다.

미들웨어를 하나의 라우트에만 사용 할 수도 있지만 `app.use()`를 활용하여 모든 컨트롤러 이전에 미들웨어를 작동 시킬 수도 있다.

```jsx
// middlerware
const logger = (req, res, next) => {
  console.log("here is logger middleware!");
  next();
};

// controller
const home = (req, res) => {
  res.send("Hello world!");
};

app.use(logger);
app.get("/", home);
```

위와 같이 실행해도 이전과 같은 결과를 얻을 수 있다. `app.use`는 모든 route에서 사용되는 middleware를 적용시킬 수 있다.

`use`를 활용하여 미들웨어를 글로벌하게 작동시킬려면 반드시 적용될 라우트 윗 라인에 입력되어있어야한다.

> 💡 express는 모든 걸 위에서 아래 순으로 실행시킨다. javascript와 같은 원리이기 때문이다.

---

### morgan

미들웨어를 직접 만들 수도 있지만 npm을 보면 유용한 미들웨어도 존재한다.

[morgan](https://www.npmjs.com/package/morgan)은 추가적인 로그 기록을 쉽게 볼 수 있는 패키지이다. 간단하게 morgan을 적용시켜보자.

```shell
$ npm i morgan
```

```jsx
import morgan from "morgan";

// 개발환경 시 dev
const logger = morgan("dev");

app.use(logger);
```

```shell
GET / 304 3.545 ms - -
```

위와 같이 적용될 수 있다.

이외에도 더욱 정교한 로그를 확인할 수 있다.  
위의 예시의 dev를 이용한 로그 확인은  
**method, path, status code, 응답시간** 순으로 알려준다.

이외에는

- combined
  - 시간
  - method
  - http version
  - status code
  - 사용 중인 브라우저
  - OS 정보
  - 등등
- common
  - 시간
  - method
  - path
  - http version
  - status code
- short
  - method
  - path
  - http version
  - status code
  - 응답시간
- tiny
  - method
  - path
  - status code
  - 응답시간

위와 같이 확인 할 수 있으니 필요에 맞게 사용 할 수 있다.

---

### Router ft.express

express에서 라우터를 바로 만드는 방법을 알기 이전에 라우터의 역할과 라우터에 무엇이 들어가는지 부터 정리하겠다.

**Router(라우터)**란 컨트롤러와 URL 관리를 보다 쉽게 해주는 구조이다.  
작은 어플리케이션이라고 보면 쉽다.

우선 URL을 관리하는 좋은 방법으로 주제에 맞게 그룹화 하는 것이 좋다.

url의 `/` 는 기본적으로 `home`의 역할을 한다. 메인 도메인을 통하여 접속 했을 경우 나오는 화면을 뜻한다.

```shell
# 필요한 url의 역할
edit_user
delete_user

# 주제로 묶는 방법
/user/edit
/user/delete
```

위와 같은 방식을 그룹화하여 관리하되 루트에 제일 가까운 url을 **글로벌 라우터**라고 한다.

```shell
# global router
/login
/search
```

많은 웹서비스가 이런 방식으로 많이 이루어져 있다.

```shell
/github.com/goodvib2den
/github.com/goodvib2den/project
/github.com/goodvib2den/project/commit
```

위와 같은 방식으로 보기에 편하도록 그룹화를 이루어놓고 이 후 url을 쌓아가는 방식을 선호한다.

라우터를 만들어가는 명확한 기준은 없지만 그렇다고 하더라도 라우터를 만들어가는 과정에서 프로젝트에 쌓일 많은 url을 고려해가며 기초적인 구조를 그룹화하여 명확하게 구분하고 쌓아가는 것을 권장한다.

express에서 라우터는 만드는 방법은 아래와 같다.

```jsx
// global router
const globalRouter = express.Router();
const userRouter = express.Router();

// controller
const handleHome = (req, res) => res.send("Home");
const handleEditUser = (req, res) => res.send("user edit page");

// get
globalRouter.get("/", handleHome);
userRouter.get("/edit", handleEditUser);

// root url
app.use("/", globalRouter);
app.use("/user", ueserRouter);
```

위와 같은 식으로 라우터를 만들 수 있다.  
위 내용에서 `user` 라우터을 보게되면 `userRouter`에서 따로 url을 앞부분에 user를 넣어주지 않더라도 root url을 통해 찾게 된다면 하나의 라우터를 찾게되기 때문에 따로 만져주지 않더라도 뒤 함수를 실행 시켜준다.

쉽게 예를 들어 실행하는 브라우저에 직접 입력 해 보자.

![router ex img](./img/router_01.png)

위와 같이 시작하는 라우터의 root url과 직접 라우터의 get함수에서 넣어준 url 인자를 붙여 제대로 브라우저 상 표기가 되는 것을 확인 할 수 있다.

위처럼 코드를 지속적으로 작성해주어도 좋지만 코드를 분리하여 관리하면 더욱 편리해진다.

파일을 하나씩 **모듈화**하여 관리하는 것이 유용하다.  
아래와 같이 모듈화 해볼 수 있다. _(자바스크립트 모듈화 등으로 검색하면 쉽게 찾을 수 있으니 확인해보기 바란다.)_

```jsx
import express from "express";

// 라우터 파일의 코드 라인이 길어지며 복잡해질 수 있으니 파일 분리 후 import
import globalRouter from "./router/globalRouter";
import artworksRouter from "./router/artworksRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.use(logger);

// root
app.use("/", globalRouter);
app.use("/artworks", artworksRouter);

const handleListening = () =>
  console.log(`✅ Server listeting on port ${PORT}`);

app.listen(PORT, handleListening);
```

위 처럼 작성하게 될 시 당장의 서버파일의 라인이 간결해지고 라우터의 길어지는 라인을 따로 관리 할 수 있게되어 코드 자체의 가독성이 늘어난다.

위의 분리된 파일의 모듈의 간략한 이해는 맨 첫번째 라인인 `express`도 같은 점이다.

node 프로젝트에서 모든 파일과 폴더는 서로에게 영향을 주지 않으며 독립적이다. 따라서 각 파일과 폴더의 연동을 생각하여 분리하고 이후 `import`와 `export`를 해두어야 에러를 발생시키지 않고 어플리케이션이 실행 될 수 있다.

<br>

### controllers

라우터를 모듈화 한 것처럼 컨트롤러 또한 파일을 나눠 놓는 것이 좋다.

하나의 파일에서 관리하게 되면 지속적으로 코드가 길어지고 관리하는 것이 불편해지기 때문에 컨트롤러 또한 `export`와 `import`를 통해 관리 할 수 있다.

우선 아래의 라우터를 확인해보자

```jsx
// 기존 라우터 js 파일
// firtsRouter.js

import express from "express";

const firstRouter = express.Router();

const one = (req, res) => res.send("Page one");

firstRouter.get("/one", one);

export default firstRouter;
```

위와 같이 하나의 컨트롤러가 아닌 여러 컨트롤러가 생길 경우 아래로 코드가 지속적으로 늘어나게 되며 전체를 파악하기도 어려울 뿐더러 오류 발생시 찾기가 굉장히 어려워진다.

위 문제를 아래와 같이 해결할 수 있다.

```jsx
// 나눠놓은 라우터
// firstRouter.js

import express from "express";
import { one, two } from "../controllers/firstController";

const fistRouter = express.Router();

fistRouter.get("/one", one);

export default fistRouter;
```

```jsx
// 나눠 놓은 컨트롤러
// controllers 폴더 후 내부에 firstConstroller.js 작성

export const one = (req, res) => res.send("Page one");
```

<br>

### URL Parameters

`URL Parameters`는 url 내부에 변수를 넣는 것을 도와준다.
매번 url을 설정해 줄 수 없는 상황이기 때문에 내부에 id 와 같은 변수를 넣어 사용 할 수 있다.

```jsx
someRouter.get("/:id", params);
```

위와 같이 입력하여 쓸 수 있다.  
단 주의해야할 점은 express는 js이기 때문에 문서를 위에서 아래로 읽는다.  
따라서 `URL Parameters`를 사용 할 때에는 반드시 기존에 가지고 있던 라우터 아래로 보내 사용한다.

```jsx
// 잘못된 예시
someRouter.get("/:id", someparams);
myRouter.get("/myroute", myRoute);
othorRoute.get("/:id", othorparams);

// 결과
// myRoute 또한 파라미터로 읽음
```

```jsx
// 잘된 예시
myRouter.get("/myroute", myRoute);
someRouter.get("/:id/first", someparams);
othorRoute.get("/:id/second", othorparams);

// 결과
// myRoute 와 :id로 입력해놓은 params는 다르게 읽음
```

위 id를 정규표현식으로 찾기 위하여 다음과 같이 추가해 두었다.

```jsx
// 숫자를 찾는 표현식을 삽입하였음

myRouter.get("/myroute", myRoute);
someRouter.get("/:id(\\d+)/first", someparams);
othorRoute.get("/:id(\\d+)/second", othorparams);
```

<br>

### template (pug)

express를 이용하여 `html`을 작성하기 위하여 컨트롤러로 직접 보내는 방법을 사용할 수도 있다.

```jsx
// controller
export const home = (req, res) => res.send("<h1>Here is headline 1</h1>");
```

하지만 위처럼 작성한다면 변경과 반복되는 코드들로 좋지 못한 방법이 된다.

그러한 이유로 인하여 [pug](https://www.npmjs.com/package/pug)라는 템플릿을 활용하여 작성 해보겠다.

> 💡 pug는 `html`을 보다 쉽고 간략하게 작성할 수 있도록 도와주는 express 뷰엔진이자 템플릿언어이다.

<br>
<br>

#### pug set up

우선 프로젝트에 pug를 추가한다.

```shell
$ npm install pug
```

express의 view engine을 `pug`로 활용하여 작성하기 위하여 서버 파일에 다음과 같이 작성하여 코드를 추가한다.

```jsx
// view engine 추가
app.set("view engine", "pug");
```

이후 실제로 활용할 pug 파일을 작성하면 되지만 그 전에 express의 views 설정을 해주어야 한다.  
위와 같이 작성한 후 서버를 실행해 보면 에러를 맞게 된다. 이유가 무엇일까?

이유는 간단하다. 우리가 현재 어플리케이션을 실행하는 시작점은 `package.json`에서 시작된다. 그러므로 서버파일이 있는 폴더로 시작을 할 수 있도록 파일을 지정해주어야한다.

서버 파일에 아래와 같은 코드를 작성한다.

```jsx
// view engine 추가
app.set("view engine", "pug");

// 폴더 cwd 지정
app.set("views", precess.cwd() + "/src/views"); // 경로의 경우 맡게끔 지정해야함
```

위와 같이 지정한 후 폴더 내부에 pug 파일을 만들어 실행해보면 브라우저 화면에 정상적으로 출력이 된다.

```jsx
// controller
export const home = (req, res) => res.render("home");
```

```pug
//- home.pug file
doctype html
html(lang="ko")
  head
    title Home
  body
    h1 here is our home page
```

**브라우저 화면**
![pug ex img](./img/pug_01.png)

#### **inculde**

`inculde`는 pug에서 반복되어 클라이언트 화면에 출력될 부분을 따로 만들어 두어 출력될 수 있도록 해준다.

예를 들면 header, footer, navigtion bar 등등 클라이언트 화면에서 반복적이고 지속적으로 출력될 부분을 따로 만들어두어 반복적인 코드 작성 및 오류를 줄일 수 있게 해준다.

아래의 1번 페이지와 2번 페이지의 반복을 include로 묶어보자.

```pug
//- 1번 페이지

doctype html
html(lang="ko")
  head
    title 1번 페이지
  body
    h1 여기는 1번 페이지
    footer footer section
```

```pug
//- 2번 페이지

doctype html
html(lang="ko")
  head
    title 2번 페이지
  body
    h1 여기는 2번 페이지
    footer footer section
```

위와 같이 작성 할 경우 `footer`의 라인은 반복적으로 계속하여 작성해야 된다. 이 경우 따로 `footer.pug` 파일을 만들어 `footer`의 라인만 작성해 둔다.

```pug
//- add footer.pug file
footer footer section
```

이후 `footer`가 들어가야할 라인에 아래와 같이 `include`를 사용하여 작성한다.

```pug
doctype html
html(lang="ko")
  head
    title 1번 페이지
  body
    h1 여기는 1번 페이지
    include footer.pug
```

위와 같이 반복적으로 사용될 만한 구조를 `include`를 사용하여 작성하면 이후 보다 쉽게 수정이 가능하고 여러 부분을 나누어 쉽게 출력할 수 있게된다.

<br>

#### **extends**

`extends`는 베이스로 둘 파일을 만들어 각 파일에 불러오게 만들어 준다.

`include`와 비슷한 경우지만 `include`는 일정 영역을 반복적으로 출력하기 위해 사용한다면 `extends`는 반복될 전체를 출력해준다.

클라이언트 화면의 뼈대를 만들어 두어 사용한다고 보면 된다.

```pug
//- add base.pug file
doctype html
html(lang="ko")
  head
    title Page title
  body
    h1 first pug page
    include footer.pug
```

```pug
//- extends.pug file
extends base.pug

//- 위와 같은 페이지가 extends.pug 출력되는 것을 확인 할 수 있음
```

<br>

#### **block**

`block`은 `include`와는 반대로 반복되지 않을 부분을 만들어 준다. 클라이언트 화면상 반복되지 않을 페이지마다 콘텐츠를 담을 영역을 사용해야하는 경우 사용한다.

`extends`를 사용하여 뼈대를 만들어 둔 뒤 각 콘텐츠 페이지 넣을 내용을 작성해주기만 하면 된다.

`extends`와 `include`를 함께 사용하여 다음과 같이 각 페이지를 만들 수 있게된다.

```pug
//- base.pug
doctype html
html(lang="ko")
  head
    title pug 궝부
  body
    block content
    include footer.pug
```

```pug
//- first.pug

extends base.pug

block content
  h1 1번 페이지 완성!
```

```pug
//- second.pug

extends base.pug

block content
  h1 2번 페이지 완성!
```

<br>
