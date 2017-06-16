<template>
	<div id="box">
			<header class="header2">
				<router-link to="/">
						<button class=""><icon name="fanhui" scale="3"></icon></button>
				</router-link>
				<span class="span2">我的</span>
				<router-link :to="{name:'register'}">
						<button>注册</button>
				</router-link>
			</header>
			<div class="inp1 inp2">
				<span>账号</span>
				<input type="text">
			</div>
			<div class="inp1">
				<span>密码</span>
				<input type="text">
			</div>
			<button class="btn7">登录</button>
			<router-link :to="{name:'login'}">
					<span class="sp1">忘记密码？</span>
			</router-link>
			<button class="btn5">更多</button>
		
	</div>
</template>
<script>
	export default{
		name:"login",
	}
</script>
<style scoped>
	*{
		margin:0;
		padding: 0;
	}
	#box{
		width:100%;
		height:100vh;
		
		overflow: hidden;
		position: relative;
	}
	
	.inp1{
		width:100%;
		height:9%;
		
		margin-top:5%;
	}
	.inp2{
		margin-top:10%;
	}
	.inp1 span{
		display: inline-block;
		width:20%;
		height:2rem;
		
		text-align: center;
		line-height: 2rem;
		font-size: .5rem;
		letter-spacing: .1rem;
		border-right: 1px solid #d8bfd8;
		margin-top:2.5%;
	}
	.inp1 input{
		width:60%;
		height:100%;
		
		border:none;
	}
	.btn7{
		width:100%;
		height:8%;
		background: green;
		border:none;
		margin-top: 5%
	}
	.sp1{
		position: absolute;
		top:50%;
		right:1rem;
	}
	
	.bbox{
		background: #c0c0c0;
		height:100%;
	}
	
	.header2{
		width:100%;
		height: 44px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #f0f8ff;
		overflow: hidden;
	}
	.header2 button{
		background: #f0f8ff ;
		border:0;
	}
	#box .btn5{
		position: absolute;
		bottom:2rem;
		left:40%;
		width:20%;
		border:none;
		color:#7cfc00;
		font-size: 1rem;
		background:#fff;
	}
	#btn0{
		width:100%;
		font-size: 1rem;
		color:#1e90ff;
	}
</style>