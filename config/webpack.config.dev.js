const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

        mode: 'development',
        entry: './src/index.js',
    
        output: {
            // 输出的文件名
            filename: 'bundle.js', 
            // webpack所有文件的输出的路径，必须是绝对路径
            path: path.resolve('dist'),
            // 不会对生成文件的路径造成影响，主要是对你的页面里面引入的资源的路径做对应的补全，常见的就是css文件里面引入的图片
            // publicPath: '/'
        },
    
        /**
         * 备注：可以使用 ExtractTextWebpackPlugin 将css单独打包
         * 优点：css-sourceMap，css单独缓存等
         * 缺点：增加http请求，css不能热更新等，详细见webpack文档
         */
        module: {
            rules:[{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                // include: 需要编译的目录
                include: /src/,
                // exclude: 跳过的目录
                exclude: /node_modules/ 
            },{
                test: /\.css$/,
                // webpack1的写法 等同于 ['style-loader','css-loader']
                loader: 'style-loader!css-loader',
                include: /src/,
                exclude: /node_modules/ 
            },{
                test: /\.less$/,
                // 注意loader的加载顺序是从右向左，先用less-loader将less代码编译，再交给style-loader插入到网页里面去
                loader: 'style-loader!less-loader',
                include: /src/,
                exclude: /node_modules/ 
            },{
                // url-loader可以将图片转为base64字符串，能更快的加载图片，一旦图片过大，
                //就需要使用file-loader的加载本地图片，故url-loader可以设置图片超过多少字节时，使用file-loader加载图片。
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    // 自定义生成文件拓展名
                    name: 'img/[name].[hash:7].[ext]'
                }
            },{
                // include: /\.(woff|woff2|eot|ttf|otf)$/ 等等
                exclude: [/\.(js|mjs|jsx)$/, /\.html$/, /\.json$/],
                loader: 'file-loader'
            },{
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
            },]
        },
    
        /**
         * 使用devServer起本地服务是基础
         * 更多自定义设置可以使用 webpack-dev-middleware https://www.webpackjs.com/guides/development/#选择一个开发工具
         */
        devServer: {
            // 需要安装 webpack-dev-server npm install -D webpack-dev-server
            // 注意：安装完 webpack-dev-server，执行webpack-dev-server --open有可能会报错，此时有可能是webpack和webpack-dev-server版本不一致导致
            // !!坑!! 在npm start时，自定义的端口不生效，原因就是在start命令后没有指定 --config 的执行目录
           port: 8000
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html' //使用一个模板
            }),
            // 允许你创建一个在【编译】时可以配置的全局常量。这可能会对开发模式和发布模式的构建允许不同的行为非常有用。
            // 比如,你可能会用一个全局的常量来决定 log 在开发模式触发而不是发布模式。这仅仅是 DefinePlugin 提供的便利的一个场景。
            // 详见：https://www.webpackjs.com/plugins/define-plugin/
            new webpack.DefinePlugin({
                /**
                 * 配置环境变量
                 * 方法1.在此直接声明 'process.env.NODE_ENV' : '"development"',
                 * 方法2.使用dotenv插件
                 * 方法3.如下
                 */
                'process.env': require('../.env.dev')
            })
        ]
}