<template>
	<div>
	<div id="fenlei">
		<h2>分类浏览</h2>
		<ul id="ful">
			<li v-for="item in menu">
				<router-link :to="{ name: 'List', params: { id: item.list }}">{{item.list}}</router-link>
				<span></span>
			</li>
			
		</ul>
	</div>
	<div id="bottom">
			<div class="btt">
				<img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" alt="">
				<div class="bttr">
					<h3>豆瓣</h3>
					<p>我们的精神角落</p>
				</div>
			</div>
			<a href="https://www.douban.com/doubanapp/card/log?category=movie_home&cid=&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_movie_home%26direct_dl%3D1">去App Store 免费下载ios/Android 版客户端</a>
		</div>
</div>
</template>
<script>
	export default {
		name: "Search",
		data(){
			return {
				menu:[
				{"list":"经典"},
				{"list":"冷门佳片"},
				{"list":"动作"},
				{"list":"喜剧"},
				{"list":"爱情"},
				{"list":"悬疑"},
				{"list":"恐怖"},
				{"list":"科幻"},
				{"list":"治愈"},
				{"list":"文艺"},
				{"list":"成长"},
				{"list":"动画"},
				{"list":"华语"},
				{"list":"欧美"},
				{"list":"韩国"},
				{"list":"日本"},]
			}
		}
	}
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	h2{
		display: inline-block;
		color:#111;
		font-size: .9rem;
		min-width:4rem;
		font-weight: 100;
	}
	#fenlei{
		margin-left:1.4rem;
	}
	#ful{
		padding-top:1rem;
		overflow: hidden;
		height:0%;
	}
	#ful li{
		width:49.6%;
		height:2.64rem;
		line-height: 2.64rem;
		float:left;
		border-right: solid 1px #eee;
		border-top:solid 1px #eee;
		/*padding-right: 1.12rem;*/
	}
	#ful li a{
		color:#42bd56;
		float:left;
		display: inline-block;
		width:80%;
		line-height: 2.64rem;
		font-size: .9rem;
		padding-left:1rem;
	}
	#ful li span{
		float:right;
		font-weight: bold;
		display: inline-block;
		border-right:solid 1px #ccc;
		border-bottom:solid 1px #ccc;
		width:4%;
		height:14%;
		transform: rotate(-45deg);
		margin-top:1rem;
		margin-right:.4rem;
	}
	#ful .lr{
		border-right:0;
		padding-left:1.12rem;
	}
	#ful .lrb{
		border-bottom:solid 1px #eee;
	}
	#bottom{
		margin-top:1rem;
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