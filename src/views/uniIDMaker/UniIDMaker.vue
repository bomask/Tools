<template>
	<div class="maker">
		<div class="infoItem">
			<inputComp>年龄:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp>年龄:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp>生日:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp>家庭地址:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp>身份证号码:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp>手机号:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp>年龄:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp>年龄:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp>生日:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp>家庭地址:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp>身份证号码:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp>手机号:</inputComp>
		</div>

	</div>

</template>

<script>
	import inputComp from '../../components/common/inputComp/inputComp'

	export default {
		name: "UniIDMaker",
		components: {
			inputComp
		}
	}
</script>

<style scoped>
	.maker {
		display: flex;
		width: 70%;
		margin: 0 auto;
		flex-wrap:wrap;

	}
</style>