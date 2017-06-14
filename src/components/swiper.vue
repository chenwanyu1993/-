<template>
	<div>
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