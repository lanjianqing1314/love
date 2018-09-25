// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/images/fontawesome/font-awesome.min.css'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
// 引入工具文件
import utils from './utils/index.js'
// 引入全局axios
import axios from 'axios'
// 引入vue-axios
import VueAxios from 'vue-axios'
// 引用API文件
import api from './api/index.js'
// 引入状态文件
import store from './store/store.js'

// 初始化elementUI
Vue.use(ElementUI)
// 初始化collapse 展开折叠
Vue.component(CollapseTransition.name, CollapseTransition)
// 将工具方法绑定到全局
Vue.prototype.$utils = utils
// 使用axios
Vue.use(VueAxios, axios)
// 将API方法绑定到全局
Vue.prototype.$api = api
// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
