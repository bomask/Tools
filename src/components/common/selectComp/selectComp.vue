<template>

	<div class="selectItem">
		<div class="content">
			<span><slot></slot></span>
		</div>

		<div class="selectcom">
			<Select size="mini" v-model="value" clearable placeholder="请选择">
				<Option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</Option>
			</Select>
		</div>
	</div>

</template>

<script>
	import { Select,Option } from 'element-ui'
	export default {
		name: "selectComp",
		props:{
			options:{
			type:Array,
		}},
		data() {
			return {
				value: ''
			}
		},
		components: {
			Select,
			Option
		}
	}
</script>

<style>
	.selectItem {
		display: flex;
		align-items: center;
		height: 40px;
		width: 300px;
	}
	
	.content {
		display: flex;
		flex-wrap: wrap;
		/*换行*/
		justify-content: flex-end;
		width: 140px;
		padding: 0 3px 0 0;
	}
	
	.selectcom {
		display: flex;
		justify-content: flex-start;
		width: 160px;
	}
	
	.inputcom .el-input__inner:focus {
		border-color: #66CCCC;
	}
</style>
