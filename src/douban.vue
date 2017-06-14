<template>
	<div>
		<header>
			<div>
				<h1>豆瓣</h1>
				<input type="text" placeholder="搜索" >
				<i class="iconfont icon-denglu"></i>
			</div>
		</header>
		<!-- <header >
			<div>
				<h1>豆瓣电影</h1>
				<input type="text" placeholder="搜索" >
				<i class="iconfont icon-denglu"></i>
			</div>
		</header> -->
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		name:"Douban"
	}
</script>
<style>
	*{
		margin:0;
		padding: 0;
	}
	/*html{
		font-size: 15.625vw
		
	}*/
	body{
		font-family:"微软雅黑";
		
	}
	ul {
	display: flex;
	/*justify-content: space-between;*/
	flex-wrap: wrap;
	height: 280px;
	overflow: hidden;
	margin-top:3%;
	}
	ul li{
		margin:0 0.3% 6% 6.3%;
		list-style: none
	}
	ul li h2{
		text-align: center;
	}
	header{
		width:100%;
		height: 44px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #dd2027 
	}
	header h1{
		font-size: 0.4rem;
		float: left;
		color: #1ebc2a
	}
	header input{
		float: left;
		width:200px;
		height: 25px;
		border: 1px solid #1ebc2a;
		border-radius:5px; 

	}
	header i{
		font-size: 0.5rem !important;
		float:left;
		color: #1ebc2a
	}
	.wth{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 30px;
		padding:0 10px;
		width:86%;
		margin-left: 4%
	}
</style>