## **3.7 Setup Recap**

### **package.json**

이 프로젝트 자체가 package.json으로부터 시작한다.
<br>
package.json은 그저 텍스트로 node 프로젝트의 정보는 담는 방법
<br>
<br>

#### **scripts**

스크립트는 npm이 무언가를 도와주게 만들 수 있는 방법
<br>
스크립트는 아주 복잡한 스크립트를 간단하게 실행 시킬 수 있도록 간단한 별명을 하나 부여하여 실행시키게 할 수 있다.
<br>
현재까지의 경우 `dev` 라는 스크립트를 만들어 nodemon과 바벨노드를 사용할 수 있게 되었다.
<br>
<br>

#### **dependencies/devDependencies**

프로젝트가 돌아가기 위해 필요한 패키지들이다.
<br>
패키지의 버전까지 기록하여 준다. 이 장점으로 누구든 npm install만 실행한다면 어디서든 편하게 코드를 실행 시킬 수 있다.
<br>
그 때문에 node_module 폴더를 git으로 업로드 할 필요가 없다.
<br>

**dependencies** : 프로젝트가 작동하기 위해 필요한 패키지
<br>
**devDependencies** : 개발자가 개발에 필요한 패키지

<br>

### **babel**

nodeJS가 ES6 코드를 지원하지 않을 경우가 있다.
<br>
이럴 경우 우리는 ES6로 코드를 작성하고 babel-node를 이용하여 컴파일 후 서버를 작동시킨다.
<br>

#### babel plugin

`{ "presets": ["@babel/preset-env"] }`

### nodemon

파일의 변화를 감지해 변화가 생긴다면 서버를 재작동시켜줌
