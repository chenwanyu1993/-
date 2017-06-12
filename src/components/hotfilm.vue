<template>
	<div>
		<h2>今日影院上映,啦啦啦啦啦</h2>
		<ul>
			<li v-for="item in arr">
				<img :src="item.pic_url" alt="">
				<h2>{{ item.movieName }}</h2>
			</li>
		</ul>
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
			// var url = "http://v.juhe.cn/movie/movies.today?cityid=1&dtype=&key=1bc8b8f6e0c6d77410b0bad20396142b";
			Vue.axios.get("../static/today.json").then((res)=>{
				return res.data.result
			}).then((data)=>{
				console.log(data)
				this.arr = data
			})

		}
	}
</script>
<style>
	.mint-tab-container{
		height: 400px;
	}
	.mint-tab-container-item{
		display: block
	}

</style>