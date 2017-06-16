<template>
	 <div>
		<header  class="header1">
			<div class="wai"> 
				<h1>豆瓣</h1>
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
		<mt-swipe :auto="5000">
		  <mt-swipe-item><img src="../assets/1.jpg" alt=""></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/2.jpg" alt=""></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/3.jpg" alt=""></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/4.jpg" alt=""></mt-swipe-item>
		</mt-swipe>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		name:"Swiper",
		data(){
			return {
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
			
		}
	}
</script>
<style scoped>
	*{
		margin:0;
		padding:0;
	}
	
	.mint-swipe{
		height: 150px
	}
	img{
		width: 100%;
		height: 100%;
	}
</style>