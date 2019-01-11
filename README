# Node.js Application for TDD

## Version
- Node.js : 10.13.0
- Babel : 7.2.3
- Mocha : 5.2.0
- Nodemon : 1.18.9
- Chai : 4.2.0

## 설치 과정

### Babel<br>

Babel to compile ES6/ES7 back to ES5
<pre><code>npm install --save-dev @babel/cli @babel/core @babel/node @babel/register @babel/preset-env chai mocha nodemon
</code></pre>

### Nodemon으로 index.js 실행하기<br>
automatically restart the app.

<pre><code>./src/index.js

const sayHello = () => 'Hello guys!';
console.log(sayHello());

//same with exports.default = sayHello for ES5
export default sayHello;
</code></pre>
<pre><code>package.json

"scripts": {
    "start": "nodemon --exec babel-node ./src/index.js",
},
</code></pre>

<pre><code>./babelrc

{
    "presets": ["@babel/preset-env"]
}
</code></pre>

### Mocha & Chai
Mocha & Chai for unit testing purposes

### 특징
1. test 폴더 안에 있으면, 폴더를 지정하지 않아도 된다.
2. --compilers js:@babel/register<br>
는 mocha에게 ES6를 사용할 것이다라고 알려 준다.
이것이 @babel/register를 설치한 이유다.
 
<pre><code>package.json

"scripts": {
    "start": "nodemon --exec babel-node ./src/index.js",
    "test": "./node_modules/.bin/mocha --compilers js:@babel/register"
},
</code></pre>


<pre><code>./test/index.spec.js

import { expect } from 'chai';
import sayHello from '../src';

console.log('aa');

describe('index test', () => {
  describe('sayHello function', () => {
    it('should say Hello guys!', () => {
      const str = sayHello();
      expect(str).to.equal('Hello guys!');
    });
  });
});
</code></pre>

## ESLint

<pre><code>npm install --save-dev eslint
</code></pre>

[.eslintrc](https://github.com/jadenjack/es6-application-boilerplate/blob/master/.eslintrc)
<pre><code>.eslintrc

{
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "extends": [
    "airbnb-base"
  ],
  "env": {
    "node": true,
    "mocha": true
  },
  "rules": {
    .... 생략
  }
}
</code></pre>