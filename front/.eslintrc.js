module.exports = {
    root: true,
    //javascript 코드가 동작하는 환경
    env: {
        browser: true,
        es6: true,
        node: true
    },
    //미리 만들어진 설정파일
    extends: [    
        // import 관련 규칙 모음
        "plugin:import/errors",
        "plugin:import/warnings",        
        // prettier 관련 규칙 모음
        "plugin:prettier/recommended",        
        "prettier/react",
        "plugin:react/recommended",
        // "airbnb"
        // for typescript
        // "plugin:@typescript-eslint/recommended",
        // "plugin:import/typescript",
        // "prettier/@typescript-eslint",        
    ],
    //사용하고자 하는 javascript 버전을 지정하는 옵션입니다.
    // plugins 옵션은 설정 파일의 rules만 불러옴
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    //미리 만들어진 rules를 불러와서 사용할 수 있도록 해주는 옵션입니다.
    plugins: [
        "react"
    ],
    //ESLint가 검사할 규칙
    rules: {
    }
};