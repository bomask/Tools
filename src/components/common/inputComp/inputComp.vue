<template>

	<div class="inputItem">
		<div class="content">
			<span><slot></slot></span>
		</div>

		<div class="inputcom">
			<Input placeholder="请输入内容" size="mini" v-model="value" clearable  > </Input>
		</div>
	</div>

</template>

<script>
	import {Input} from 'element-ui'
	export default {
		name: "inputComp",
		data() {
			return {
				value: ''
			}
		},
		components: {
			Input
		}

	}
</script>

<style>
	.inputItem {
		
		display: flex;
		align-items:center;
		height: 40px;
		width: 300px;
	}
	
	.content {
		display: flex;
		flex-wrap: wrap;
		/*换行*/
		justify-content: flex-end;
		width: 120px;
		padding:0 3px 0 0;
	}
	
	.inputcom {
		display: flex;
		justify-content: flex-start;
		width: 180px;
	}




	.inputcom  .el-input__inner:focus{
	border-color:#66CCCC;
}

</style>
