├── node_modules                        // 项目依赖包文件夹
├── build                               // 编译配置文件，一般不用管
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config                              // 项目基本设置文件夹
│   ├── dev.env.js                      // 开发配置文件
│   ├── index.js                        // 配置主文件
│   └── prod.env.js                     // 编译配置文件
├── src                                 // 我们的项目的源码编写文件
│   ├── api                             // 接口调用工具文件夹
│   │   └── index.js                    // 接口调用工具
│   ├── components                      // 组件文件夹，目前为空
│   ├── assets                          // 图片资源文件夹
│   ├── config                          // 项目配置文件夹
│   │   └── index.js                    // 项目配置文件
│   ├── frame                           // 子路由文件夹
│   │   └── frame.vue                   // 默认子路由文件
│   ├── router                          // 路由配置文件夹
│   │   └── index.js                    // 路由配置文件
│   ├── service                         // 接口业务层文件，实现了一个前段多个后台的配置实现和前端与服务接口的解耦和
│   │   └── baseService                 // 主后台接口文件
│   ├── style                           // scss 样式存放目录
│   │   ├── base                        // 基础样式存放目录
│   │   │   ├── _base.scss              // 基础样式文件
│   │   │   ├── _color.scss             // 项目颜色配置变量文件
│   │   │   ├── _mixin.scss             // scss 混入文件
│   │   │   └── _reset.scss             // 浏览器初始化文件
│   │   ├── scss                        // 页面样式文件夹
│   │   │   ├── _content.scss           // 内容页面样式文件
│   │   │   └── _index.scss             // 列表样式文件
│   │   └── style.scss                  // 主样式文件
│   ├── utils                           // 常用工具文件夹
│   │   └── index.js                    // 常用工具文件
│   ├── view                            // 我们的页面组件文件夹
│   │   ├── content.vue                 // 准备些 cnodejs 的内容页面
│   │   └── index.vue                   // 准备些 cnodejs 的列表页面
│   ├── App.vue                         // APP入口文件
│   └── main.js                         // 项目配置文件
├── static                              // 资源放置目录
├── test                                // 测试文件夹
│   ├── e2e   
│   │   ├── custom-assertions
│   │   │   └── elementCount.js   
│   │   ├── specs
│   │   │   └── test.js   
│   │   ├── nightwatch.conf.js      
│   │   └── runner.js                                  
│   └── unit                     
├── index.html                          // 项目入口文件
├── package-lock.json                   // npm5 新增文件，优化性能
├── package.json                        // 项目依赖包配置文件
└── README.md                           // 项目说明文档

# rllove

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


