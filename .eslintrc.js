module.exports = {
    "parser": "babel-eslint",//指定 ESLint 使用的语法分析器。ESLint 兼容的语法分析器有：Esprima、Babel-ESLint、@typescript-eslint/parser，ESLint 默认使用 Esprima。
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
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
        // 0:关闭，1:警告，2:异常
        "prettier/prettier": "error",
        // 禁止在 componentDidMount 里面使用 setState
        "react/no-did-mount-set-state": 1,
        // 组件必须写 propTypes
        "react/prop-types": 0,
        // 禁止使用 findDOMNode
        "react/no-find-dom-node": 1,
        // 禁止直接修改 this.state
        "react/no-direct-mutation-state": 1,
        "max-lines": ["warn", {
          "max": 350,
          "skipComments": true,
          "skipBlankLines": true
        }],
        // 不允许出现console语句
        "no-console": 1,
        // 不允许有声明后未使用的变量或者参数
        "no-unused-vars": 1,
        // 关闭额外的分号检查
        "semi": 2,
        // 不允许未声明的变量
        "no-undef": 1
    }
};