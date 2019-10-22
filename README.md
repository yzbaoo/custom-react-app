# custom-react-app
从0搭建一个react项目

todo：
- babel/css/less loader 👌
- 使用环境变量 👌
···
 new webpack.DefinePlugin({
                /**
                 * 配置环境变量
                 * 方法1.在此直接声明 'process.env.NODE_ENV' : '"development"',
                 * 方法2.使用dotenv插件
                 * 方法3.如下
                 */
                'process.env': require('../.env.dev')
            })
···
- 1.react 👌
- 2.typeScript
- 3.router
- 4.dva
- 5.HMR
- 6.manifest
- 7.css_modules
- 8. 清理终端 Compiled successfully!
- 9.eslint
- 10.prettier
- 11.ci/cd

问题：

dotenv？
答：从文件加载环境变量时会用到，正常配置环境变量在new webpack.DefinePlugin({}) 
