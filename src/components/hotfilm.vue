<template>
	<div>
		<div class="hotfilm wth">
			<h2>正在热映</h2>
			<router-link :to="{name:'Reying'}">
				<span>更多</span>
			</router-link>
		</div>
		
		
		
		<ul>
			<li v-for="(item,index) in arr">
				<router-link :to="{name:'Detail',params:{id:item.id}}">
					<img :src="item.images.small" alt="">
				</router-link>
				<h2 class="title">{{ item.title }}</h2>
			</li>
		</ul>
		<!-- 啦啦 -->
		
		
		<router-view></router-view>
	</div>
</template>
<script>
	import Vue from 'vue'
	import jsonp from 'jsonp'
	export default{
		name:"Hotfilm",
		data(){
	      return {
	        arr:"",
	      }
	    },
		created(){
			// var url = "../static/today.json"
			var url = "https://api.douban.com/v2/movie/in_theaters"
			// Vue.axios.get("../static/hotfilm.json").then((res)=>{
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
<style>
	
	.hotfilm h2{
		font-size: 0.3rem;
		color: #111;
	}
	span{
		font-size: 0.3rem;
		color: #1ebc2a;
		float: left
	}
	/*ul{
		overflow:visible
	}
	ul {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	height: 260px;
	overflow: hidden;
	}
	ul li{
		margin:8% 0.3% 0 5%;
	}*/
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
	}
</style>