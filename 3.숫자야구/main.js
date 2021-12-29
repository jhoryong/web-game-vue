import Vue from 'vue'; // package.json 에서 설치한 vue 를 가져온다. (ES6)
import NumberBaseball from './NumberBaseball'; // vue 파일을 연결

new Vue(NumberBaseball).$mount('#root'); // vue instance

