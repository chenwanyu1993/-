<template>
	<div id="box">
		<div id="title">
			<h4>{{this.$route.params.id}}电影</h4>
		
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
		name: "List",
		data(){
			return {
				arr:"",
				menn:"",
			}
		},
		created(){
			var brr = window.location.hash.split("/")
			var crr = brr[brr.length-1]
			var menn = 	decodeURIComponent(crr)
//			console.log(menn)
			// var url = "/v2/movie/search?tag="+menn
			var url = "../../static/hotfilm.json"
			Vue.axios.get(url).then((res)=>{
				return res.data.subjects
			}).then((data)=>{
//				console.log(data)
				this.arr = data
			})
//			jsonp(url,null,(err,data)=>{
//				if(err){
//					console.log('数据无法获取')
//				}else{
//					this.arr = data.subjects
//        			console.log(data.subjects)
//				}
//			})
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