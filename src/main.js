import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// iview相关
import installIView from './plugins/instalIView'
import 'view-design/dist/styles/iview.css';

// 安装iview
installIView()

new Vue({
  render: h => h(App),
}).$mount('#app')
