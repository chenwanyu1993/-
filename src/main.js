// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Douban from './douban'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Header,Button,Search, Actionsheet,Swipe, SwipeItem ,Indicator,Cell,Lazyload} from 'mint-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import Icon from 'vue-svg-icon/Icon.vue'
import VueLazyload from 'vue-lazyload'



Vue.component(Header.name, Header);
Vue.component('icon', Icon);
Vue.component(Button.name, Button);
Vue.component(Search.name, Search);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(VueAxios, axios)
Vue.component(Cell.name, Cell);
Vue.component(Actionsheet.name, Actionsheet);

Vue.use(VueLazyload, {
	  loading: require('./assets/11.gif'),
	})

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
  components: { Douban,Header,Button,Search,Lazyload,Swipe,Actionsheet,SwipeItem,Indicator,Cell,Icon}
})
