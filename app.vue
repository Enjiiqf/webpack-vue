<template>
	<div>
		<v-title title="Vue元件化"></v-title>
		<v-button @click="handleClick">点击按钮</v-button>
		<p>
			<img src="./images/image.jpg" style="width: 200px;">
		</p>
	</div>
</template>
<script>
	import vTitle from './title.vue';
	import vButton from './button.vue';

	export default{
		components: {
			vTitle,
			vButton
		},
		methods: {
			handleClick(e){
				console.log(e);
			}
		}
	}
</script>
<style scoped>
	div{
		color: #f60;
		font-size: 24px;
		}
</style>