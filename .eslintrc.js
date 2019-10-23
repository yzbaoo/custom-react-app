module.exports = {
    "parser": "babel-eslint",
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
    ],
    // 详细参见： https://www.cnblogs.com/nklong/p/7233631.html
    "rules": {
        "no-var": 1,
        "no-undef": 1
    }
};