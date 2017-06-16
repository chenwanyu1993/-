<template>
	<div>
		<div class="comingfilm wth">
			<h2>即将上映</h2>
			<router-link :to="{name:'jijiangshangying'}">
				<span>更多</span>
			</router-link>
		</div>
		
		<ul>
			<li v-for="item in arr">
				<router-link :to="{name:'Detail',params:{id:item.id}}">
					<img :src="item.images.small" alt="">
				</router-link>
				<h2 class="title">{{ item.title }}</h2>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
	import Vue from 'vue'
	import jsonp from 'jsonp'
	export default{
		name:"Comingfilm",
		data(){
	      return {
	        arr:"",
	      }
	    },
		created(){
			// var url = "../static/today.json"
			var url = "https://api.douban.com/v2/movie/coming_soon"
			// Vue.axios.get("../static/comingfilm.json").then((res)=>{
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
	
	h2{
		font-size: 0.3rem;
		color: #111;
	}
	span{
		font-size: 0.3rem;
		color: #1ebc2a
	}
	/*ul,li{
		list-style: none
	}
	ul {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	height: 260px;
	overflow: hidden;
	}
	ul li{
		margin: 0 10px;
	}
	ul li img{
		width:80px;
		height: 100px
	}*/
	.title{
		font-size: 0.2rem;
		width:80px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>