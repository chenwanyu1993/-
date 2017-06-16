<template>
	<div>
	<!-- 正常使用的头部 -->
	 <!-- v-if="type === 'A'" -->
		<!-- <header v-if="flag[0]" class="header1">
			<div> 
				<h1>豆瓣</h1>
				<input type="text" placeholder="搜索" >

				<router-link :to="{ name: 'Result', params: { id: shuju }}">
				<button @click="huoqu">搜索</button></router-link>

				<router-link :to="{ name: 'MY'}">
				<button @click="qiehuan">我的图标</button>
				</router-link>
			</div>
		</header> -->
	<!-- 点击input框之后的头部 -->
		<!-- <header class="header1"  v-else-if="flag[1]">
			<div class="hd1">
				<span></span>
				<input type="text" placeholder="搜索" >
				<router-link to="/">
					<button @click="huoqu">取消</button>
				</router-link>
			</div>
		</header>  -->
<!-- 点击我的之后的头部 -->
		<!-- <header  v-else-if="flag[2]">
		</header> -->
		<router-view></router-view> 
	</div>
</template>
<script>
	export default{
		name:"Douban",
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
	header{
		color:black;
		
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
	.wai{
		width:90%;
		height:90%;
		margin-top:2%;
	}
	.nei{
		height:100%;
		margin-left:25%!important;
		width:72%;
		height:80%;
		border:1px solid #00ffff 
	}

	.header1{
		width:100%;
		height: 44px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #f0f8ff
		
	}
	.header1 button{
		background-color:#f0f8ff;
		border:0;
	}
	header h1{
		font-size: 1.5rem;
		float: left;
		color: #1ebc2a;
		width:20%;
		margin-left: 5%!important
	}
	header .h1{
		font-size: 1.5rem;
		float: left;
		color: #1ebc2a;
		width:20%;
		margin-left: 5%!important
	}
	header input{
		float: left;
		width:82%;
		height: 100%;
		border: 0;
		/*border-radius:5px; */
		
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
	.hd1{
		width:100%;
		height:100%;
	}
	.hd1 span{
		width:10%;
		height:100%;
		display:block;
	}
	.btn2{
		width:18%;
		border:0;
		height:100%;
	}
	.btn3{
		margin-top:-19%!important
	}
	.hd1 input{
		width:69%;
		height:100%;

	}
	.hd1 a{
		width:20%;
		height:100%;
		display:inline-block;
		float:right;
	}
	.hd1 button{
		width:100%;
		height:100%;
		background: none;
		border:0;
	}
	.header2{
		width:100%;
		height: 44px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #dd2027 
	}
	.header2 a{
		width:20%;
		height:100%;
		display:inline-block;
		
	}
	.header2 button{
		width:100%;
		height:100%;
		
		border:0;
	}
	.header2 span{
		display:block;
		width:80%;
		text-align: center;
		font-size: 1rem;
		letter-spacing: .5rem
	}
</style>