const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // 웹펙설정의 기본 구조

    mode: 'development', // 배포시 'production'

    devtool: 'eval', // 배포시 'hidden-source-map'. eval 시 웹펙빌드속도 빨라짐

    resolve: {
        extensions:['.js', '.vue'], // 확장자 처리. import 시 확장자 제거 가능.
    },

    entry: { // 수많은 script 중 가장 대표가 되는 파일
        app: path.join(__dirname, './main.js') // main.js 를 대표 파일로 설정
        // app 의 뜻은 하나로 합쳐질 파일의 이름.
        // 
    }, 

    module: {
        rules: [{ // 수백개의 js 파일을 어떻게 합칠 것인지 적어주는 부분
            test: /\.vue$/, // 파일명이 .vue 로 끝나는 파일
            loader: 'vue-loader' // vue loader 가 vue 파일을 처리 (웹펙은 js 만 처리함)
        }]
    },

    plugins: [
        new VueLoaderPlugin(),
    ],

    output: {
        //filename: 'app.js'
        filename: '[name].js',
        // [name] 으로 감싸주면 entry 에서 정한 파일이름으로 알아서 들어간다.
        path: path.join(__dirname, './dist'), // 최종 파일(app.js)이 생성될 폴더
    }
}