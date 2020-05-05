<template>

	<div class="bgBox">
		<div class="bgTitle">
			<slot name="title"></slot>
		</div>

		<div class="bgBody">
			<slot name="item"></slot>
		</div>
	</div>

</template>

<script>


	export default {
		name: "bgBox",
		data() {
			return {

			}
		},
		components: {

		}

	}
</script>

<style scoped>
.bgBox{

	height:100%;
}
.bgTitle{
	background-color: #99cccc;
	display: flex;
	align-items:center;
	font-size:14px;
	height: 30px;
	border-radius: 12px 12px 0px 0px;
	padding: 0px 0px 0px 15px;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	overflow: hidden;
}
	.bgBody{
		height: calc(100% - 30px);
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	padding:0px 0 30px 0;
	}

</style>
