// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Douban from './douban'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Header,Button,Search, Swipe, SwipeItem } from 'mint-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Search.name, Search);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
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
  components: { Douban,Header,Button,Search,Swipe,SwipeItem  }
})
