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
// 引用API文件
import service from './service/index.js'
// 引用工具文件
import utils from './utils/index.js'
// 引入全局axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 将工具方法绑定到全局
Vue.prototype.$utils = utils

Vue.use(VueAxios, axios)

// 将API方法绑定到全局
Vue.prototype.$service = service

Vue.use(ElementUI)

Vue.component(CollapseTransition.name, CollapseTransition)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
