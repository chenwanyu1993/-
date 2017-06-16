<template>
	<div id="box">
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
		<div id="title">
			<ul>
				<li v-for="item in arr">
					<router-link :to="{name:'Detail',params:{id:item.id}}">
						<img :src="item.images.small" alt="">
					</router-link>
					<h2 class="title">{{ item.title }}</h2>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vue from "vue"
	import jsonp from 'jsonp'
	export default {
		name: "Result",
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
				var menn = this.shuju
				var url = "/v2/movie/search?tag="+menn
				// var url = "../../static/hotfilm.json"
				jsonp(url,null,(err,data)=>{
					if(err){
						console.log('数据无法获取')
					}else{
						this.arr = data.subjects
	       			// console.log(data.subjects)
					}
				})
			},
			
		},
		
		created(){
			var brr = window.location.hash.split("/")
			// console.log(brr)
			var crr = brr[brr.length-1]
			var menn = decodeURIComponent(crr)
//			console.log(menn)
			var url = "/v2/movie/search?tag="+menn
			// var url = "../../static/hotfilm.json"
			// Vue.axios.get(url).then((res)=>{
			// 	return res.data.subjects
			// }).then((data)=>{
			// 	this.arr = data
			// })
			jsonp(url,null,(err,data)=>{
				if(err){
					console.log('数据无法获取')
				}else{
					this.arr = data.subjects
       			// console.log(data.subjects)
				}
			})
		}
	}
</script>

<style scoped>
	#title{
		/*display: flex;
		justify-content: space-between;
		align-items: center;
		height: 30px;
		padding:0 10px;*/
	}
	#title h4{
		font-size: 1.4rem;
		color: #111;
		margin:1rem 0 0 1.2rem
	}
	ul,li{
		list-style: none
	}
	ul {
	display: flex;
	/*justify-content: space-between;*/
	flex-wrap: wrap;
	height:1%;
	}
	ul li{
		margin:10% 0.3% 0 5%;
		float:left;
		width:28%;
	}
	ul li img{
		width:80px;
		height: 100px
	}
	.title{
		font-size: 0.2rem;
		width:80px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
	}
</style>