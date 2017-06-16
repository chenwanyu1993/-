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
	
	<div id="box1">
		
		<h2 class="detail">{{arr.title}}</h2>
		<div class="pingjia">
			<span v-if='arr.rating != null'>评分：{{arr.rating.average}}</span> 
			<span>{{arr.reviews_count}}人评价</span>
		</div>
		<dl>
			<dt><img :src="arr.images.small" alt=""  v-if='arr.images != null'></dt>
			<dd>
				<span v-if='arr.rating != null' >{{arr.countries[0]}}/{{arr.genres[0]}}/{{arr.genres[1]}}/{{arr.genres[2]}}/{{arr.directors[0].name}}(导演)/{{arr.casts[0].name}}/{{arr.casts[1].name}}/{{arr.casts[2].name}}/{{arr.casts[3].name}}/</span>		
			</dd>
		</dl>
		
		<div class="content">
			<p>剧情简介</p>
			{{arr.summary}}
		</div>
	</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import jsonp from 'jsonp'
	export default{
		name:"Detail",
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
			// var url = "../static/detail.json"
			//var id = {{this.$route.params.id}};
			
			var arr1 = window.location.hash.split("/");

			var arr2 = arr1[arr1.length-1]
			var url = "https://api.douban.com/v2/movie/subject/"+arr2
			//console.log(url)
			// Vue.axios.get("../static/detail.json").then((res)=>{
			// 	return res.data
			// }).then((data)=>{
			// 	console.log(data)
			// 	this.arr = data
			// })

			jsonp(url,null,(err,data)=>{
				if(err){
					console.log('数据无法获取')
				}else{
					
					this.arr = data;
					// console.log(this.arr )
				}
			})
			 
		}
		
	}
</script>
<style scoped>
	#box1{
		margin:5% 3% 0;
	}
	.detail{
		font-size: 1.4rem;
		color: #111;
		
	}
	.pingjia{
		height: 5%;
		font-size: 0;
		margin: 2% 0
	}
	.pingjia span{
		font-size: 0.3rem;
		color: #1ebc2a;
		display: inline-block;
		height: 20px;
		margin-right: 15px
	}
	dl{
		height: 8rem;
		margin-top: 3%
	}
	dt{
		float:left;
	}
	dd{
		float:left;
		font-size: 0;
		width:70%;
		margin-left: 10px
	}
	dd span{
		font-size: 0.3rem;
	}
	.content{
		font-size: .8rem;
		line-height: 1.4rem
	}
	.content p{
		font-size: 1rem;
		color: #1ebc2a;
		margin:3% 0;
	}
</style>