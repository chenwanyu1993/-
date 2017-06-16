<template>
	
	<div>
		<header  class="header1">
			<div class="wai"> 
				<router-link to="/">
					<button class="h1"><icon name="fanhui" scale="3"></icon></button>
				</router-link>
				<div class="nei">
					<input type="text" placeholder="搜索" >

					<router-link :to="{ name: 'Result', params: { id: shuju }}">
					<button @click="huoqu" class="btn2"><icon name="sousuo" scale="3"></icon></button></router-link>
				</div>
			
			</div>
				<router-link :to="{ name: 'MY'}">
				<button class="btn3"><icon name="wode2" scale="3"></icon></button>
				</router-link>
		</header> 
		<ul>
			<li v-for="item in arr">
				<router-link :to="{name:'Detail',params:{id:item.id}}">
					<img :src="item.images.small" alt="">
				</router-link>
				<h2 class="title">{{ item.title }}</h2>
			</li>
		</ul>
	</div>
</template>
<script>
	import Vue from 'vue'
	import jsonp from 'jsonp'
	export default{
		name:"paihang",
		data(){
	      return {
	        arr:"",
	        shuju:"",
	      }
	    },
	    methods:{
			huoqu:function(){
				var txt = document.getElementsByTagName("input")[0]
				var val = txt.value
				this.shuju = val
				// console.log(this.shuju)
			},
		},
		created(){
			// var url = "../static/today.json"
			var url = "https://api.douban.com/v2/movie/top250"
			// Vue.axios.get("../static/top250.json").then((res)=>{
			// 	return res.data.subjects
			// }).then((data)=>{
			// 	//console.log(data)
			// 	this.arr = data
			// })
			
			jsonp(url,null,(err,data)=>{
				if(err){
					console.log('数据无法获取')
				}else{
					
					this.arr = data.subjects;
					// console.log(this.arr )
				}
			})

		}
	}
</script>
<style scoped>
	ul{
		height: 500px;
		margin-top: 10px;
		overflow:visible
	}
</style>