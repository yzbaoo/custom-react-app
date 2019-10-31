# custom-react-app
从0搭建一个react项目

todo：
- babel/css/less loader 👌
- 使用环境变量 👌
```
 new webpack.DefinePlugin({
    /**
     * 配置环境变量
     * 方法1.在此直接声明 'process.env.NODE_ENV' : '"development"',
     * 方法2.使用dotenv插件
     * 方法3.如下
     */
    'process.env': require('../.env.dev')
 })
```
- 1.react 👌
- 2.eslint 👌
```
// 1.eslint init
// 2.自定义 .eslintrc.js
{
    enforce: 'pre',
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
},
```
- 3.prettier 👌
[https://segmentfault.com/a/1190000015315545?utm\_source=tag-newest](https://segmentfault.com/a/1190000015315545?utm_source=tag-newest)
```
// 配合eslint fix:true 使用
// 1.npm i -D prettier
// 2.npm i -D eslint-plugin-prettier

// 3..eslintrc.js
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```
- 2.typeScript
- 3.router
- 4.dva 👌
- 5.HMR
- 6.manifest
- 7.css_modules
- 8.清理终端 启动个本地服务后自动启动浏览器 Compiled successfully!
- 11.ci/cd
- 12.code splitting (use Loadable) + Router

问题：

1.dotenv？
答：从文件加载环境变量时会用到
2.写箭头函数时eslint报错 `Parsing error: Unexpected token :` 或者 `Parsing error: Unexpected token =`
答：Use the babel-eslint parser in your ESLint configuration.
也就是在.eslintrc中添加`"parser": "babel-eslint",` 即可
安装依赖包：npm install babel-eslint –save
更多eslint注意的点：[https://blog.csdn.net/suwu150/article/details/78585609](https://blog.csdn.net/suwu150/article/details/78585609)
[https://www.cnblogs.com/jiaoshou/p/11218526.html](https://www.cnblogs.com/jiaoshou/p/11218526.html)



