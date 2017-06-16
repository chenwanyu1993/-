<template>
	<div class="bbox">
		<header class="header2">
			<router-link to="/">
					<button class=""><icon name="fanhui" scale="3"></icon></button>
			</router-link>
			<span class="span2">我的</span>
			
			<router-link :to="{name:'register'}">
					<button id="btn0">注册</button>
			</router-link>
		</header>
		<div class="div1">
			<span><icon name="touxiang" scale="6"></icon></span>
			<router-link :to="{name:'login'}">
					<button class="btn1">登录</button>
			</router-link>
		</div>
		<div class="div2">
			<span><icon name="shoucang" scale="2"></icon></span>
			<button class="btn2">我的收藏</button>
		</div>
		<div class="div2">
			<span><icon name="qianbao" scale="2"></icon></span>
			<button class="btn2">我的钱包</button>
		</div>
		<div class="div2">
			<span><icon name="shezhi" scale="2"></icon></span>
			<button class="btn2">设置</button>
		</div>
		<div class="div2">
			<span><icon name="women" scale="2"></icon></span>
			<button class="btn2">关于我们</button>
		</div>

	
		<footer id="bottom">
			<div class="btt">
				<img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" alt="">
				<div class="bttr">
					<h3>豆瓣</h3>
					<p>我们的精神角落</p>
				</div>
			</div>
			<a href="https://www.douban.com/doubanapp/card/log?category=movie_home&cid=&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_movie_home%26direct_dl%3D1">去App Store 免费下载ios/Android 版客户端</a>
		</footer>
	</div>
</template>
<script>
	export default{
		name:"MY",
		
		
	}
</script>
<style scoped>
	*{
		margin:0;
		padding: 0;
	}
	.bbox{
		background: #c0c0c0;
		height:100%;
	}
	#btn0{
		width:100%;
		
		font-size: 1rem;
		color:#1e90ff;
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
	.mint-cell:last-child{
		background: #f0f8ff;
	}
	.header2 button{
		width:20%;
		height:100%;
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
	.div1{
		width:100%;
		height:3.5rem;
		margin: 3% 0 0 0;
		font-size:1rem;
		overflow: hidden;
		background: #fee8aa;
	}
	.div1 span{
		width:20%;
		height:100%;
		display:inline-block;
		
	}
	.div2{
		width:100%;
		height:2rem;
		margin: 3% 0 0 0;
		font-size:1rem;
		overflow: hidden;
		background: #fee8aa;
	}
	.div2 span{
		width:10%;
		height:100%;
		display:inline-block;
		margin:2% 0 0 5%;
	}
	.div2 button{
		width:80%;
		height:100%;
		float:right;
		font-size:.5rem;
		letter-spacing: .1rem;
		text-align: left;
		border:0;
		background: #fee8aa;
	}
	.btn1{
		width:80%;
		height:3.5rem;
		float:right;
		font-size:1rem;
		letter-spacing: .1rem;
		text-align: left;
		border:0;
		background: #fee8aa;
	}
	#bottom{
		margin-top:6rem;
		margin-bottom:1rem;
		width:100%;
	}
	#bottom .btt{
		width:11.5rem;
		height:4rem;
		margin:3rem auto;
		margin-bottom:1rem;
	}
	.btt img{
		float:left;
		width:4rem;
		height:4rem;
	}
	#bottom a{
		display: block;
		margin:0 auto;
		width:20rem;
		color:#42bd56;
		font-size: .9rem;
		text-align: center;
	}
	.btt .bttr{
		float:right;
	}
	.bttr h3{
		font-size: 2rem;
		line-height: 2rem;
		font-weight: 100;
		margin-top:.5rem;
		}
	.bttr p{
		font-size: 1rem;
	}

</style>