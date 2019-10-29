/**
 * webpack 入口文件
 */

import dva from "dva";

// 1.初始化
const app = dva();

// 2.plugin
// app.use({});

// 3.注入model
// app.model(require('./models/example'));

// 4.添加路由
app.router(require("./router").default);

// 5.启动
app.start("#root");
