# HTTP

_생활코딩 http 과정을 보며 복습합니다_ <br>
_[생활코딩 http 강의](https://opentutorials.org/course/4848)_

<br>

## http란 무엇인가

http(Hyper Text Transfer Protocol)는 **인터넷에서 데이터를 주고 받을 수 있는 프로토콜.** 쉽게 말해 웹브라우저와 웹서버가 통신을 할 때 사용하는 규칙이라고 할 수 있다. <br>
웹을 구성 하는 **가장 중요한 요소** 중 하나이며 웹에서 벗어날 수 없는 요소이기도 하다.

과거의 http의 기능만으로는 성능, 보안, 안정성을 확보하는 것이 어려웠으며 속도 또한 느렸다.<br>
하지만 현대에서는 발전을 통하여 html 문서 뿐만 아닌 이미지, 오디오, 비디오 등의 다양한 멀티미디어 파일을 전송하는 **매우 중요한 프로토콜**로 인정받고 있다.<br>
이처럼 http 웹을 넘어서 인터넷이 동작하는 근간이라고 할 수 있다.

<br>

## http의 역할

클라이언트에서 보내는 request와 서버에서 보내주는 response를 위한 통신 메시지를 http가 해준다고 볼 수 있다.<br>
브라우저의 개발자도구를 통하여 네트워크 항목을 통하여 확인 해 볼 수 있다.<br>
http의 어떤 버전으로 통신 할 것인지부터 시작하여 콘텐츠의 길이 얼마인지 등 다양한 정보를 확인 해 볼 수 있으며 위와 같은 정보를 받아 웹 브라우저는 화면을 출력해준다.

<br>

## http : Request message

Request 메세지에는 Request 라인과 Request 헤더 그리고 Request message 바디로 이루어져 있고 주요 정보는 다음과 같다.

```
GET /index.html HTTP/1.1 // GET 메서드, 요청하는 주소, http 버전을 순으로 표기
Host: localhost:8080 // 요청하는 웹 서버의 주소
User-Agent: Mozilla/5.0 ... // 유저가 사용하는 웹 브라우저 정보 및 OS 정보 등
// 등등
```

위와 같이 다양한 정보가 담겨 있다.

<br>

## http : Response message

d
