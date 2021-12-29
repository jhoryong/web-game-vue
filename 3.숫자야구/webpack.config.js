const path = require('path')

module.exports = {
    // 웹펙설정의 기본 구조

    entry: { // 수많은 script 중 가장 대표가 되는 파일
        app: path.join(__dirname, './main.js') // main.js 를 대표 파일로 설정
        // app 의 뜻은 하나로 합쳐질 파일의 이름.
        // 
    }, 

    module: {
        rules: [{ // 수백개의 js 파일을 어떻게 합칠 것인지 적어주는 부분

        }]
    },

    output: {
        //filename: 'app.js'
        filename: '[name].js',
        // [name] 으로 감싸주면 entry 에서 정한 파일이름으로 알아서 들어간다.
        path: path.join(__dirname, './dist'), // 최종 파일(app.js)이 생성될 폴더
    }
}