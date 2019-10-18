const path = require('path');
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

    devServer: {
        // 需要安装 webpack-dev-server npm install -D webpack-dev-server
        // 注意：安装完 webpack-dev-server，执行webpack-dev-server --open有可能会报错，此时有可能是webpack和webpack-dev-server版本不一致导致
        // !!坑!! 在npm start时，自定义的端口不生效，原因就是在start命令后没有指定 --config 的执行目录
       port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html' //使用一个模板
        })
    ]
}