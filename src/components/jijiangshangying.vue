<template>
	<div>
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
		name:"jijiangshangying",
		data(){
	      return {
	        arr:"",
	      }
	    },
		created(){
			// var url = "../static/today.json"
			//var url = "https://api.douban.com/v2/movie/in_theaters"
			Vue.axios.get("../static/comingfilm.json").then((res)=>{
				return res.data.subjects
			}).then((data)=>{
				//console.log(data)
				this.arr = data
			})
			
			// jsonp(url,null,(err,data)=>{
			// 	if(err){
			// 		console.log('数据无法获取')
			// 	}else{
					
			// 		this.arr = data.subjects;
			// 		console.log(this.arr )
			// 	}
			// })

		}
	}
</script>
<style>
	ul{
		height: 500px;
		margin-top: 10px
	}
</style>