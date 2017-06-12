<template>
	<div>
		<mt-header title="豆瓣电影">
		   <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
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
	
</style>