module.exports = {
    "parser": "babel-eslint",//指定 ESLint 使用的语法分析器。ESLint 兼容的语法分析器有：Esprima、Babel-ESLint、@typescript-eslint/parser，ESLint 默认使用 Esprima。
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        // "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "process": true
    },
    // "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        // "@typescript-eslint"
        "prettier"
    ],
    // 详细参见： https://www.cnblogs.com/nklong/p/7233631.html
    "rules": {
        "prettier/prettier": "error",
        "no-var": 1,
        "no-undef": 1
    }
};