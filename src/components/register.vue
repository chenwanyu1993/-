<template>
	<div id="box">
		<header class="header2">
			<router-link to="/">
					<button class=""><icon name="fanhui" scale="3"></icon></button>
			</router-link>
			<span class="span2">我的</span>
			<router-link :to="{name:'login'}">
				<button id="btn0">登录</button>
			</router-link>
		</header>
		<div class="inp1 inp2">
			<span>国家地区</span>
			<button id="btnn">中国大陆</button>
			<i></i>
		</div>
		<div class="inp1">
			<span>+86</span>
			<input type="text" placeholder="请输入手机号">
		</div>
		<button class="btn7">获取短信验证码</button>
		<div class="div33">
			<input type="checkbox" class="iinp">
			<span class="spn">我已阅读并同意《豆瓣用户服务协议》</span>
		</div>
		
		<button class="btn5">登录</button>
	</div>
</template>
<script>
	export default{
		name:"register",
	}
</script>
<style scoped>
	*{
		margin:0;
		padding: 0;
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
	.header2 a{
		width:20%;
		height:100%;
		display:inline-block;
	}
	.header2 button{
		background: #f0f8ff ;
		border:0;
	}
	.header2 span{
		display:block;
		width:80%;
		text-align: center;
		font-size: 1rem;
		letter-spacing: .5rem
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
		margin-left:5%;
	}
	.btn5{
		position: absolute;
		bottom:2rem;
		left:40%;
		width:20%;
		border:none;
		color:#7cfc00;
		font-size: 1rem;
		background:#fff;

	}
	.btn7{
		width:100%;
		height:8%;
		background: green;
		border:none;
		margin-top: 5%;
		font-size: .8rem
	}
	#btnn{
		width:60%;
		background: #fff;
		height:100%;
		border:none;
		text-align: left;
		margin-left:5%;
	}
	.div33{
		margin-top: 3%
	}
	.iinp{
		float: left;
		margin-top: .8%;
		margin-left:3%
	}
	.spn{
		float: left;
		margin-left: 3%
	}
</style>