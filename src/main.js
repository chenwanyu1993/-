// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Douban from './douban'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Header,Button, TabContainer, TabContainerItem ,Cell} from 'mint-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `
  		<div id="wapper">
	 		<Douban/>
	  	</div>
	  `,
  components: { Douban,Header,Button,TabContainer, TabContainerItem,Cell  }
})
