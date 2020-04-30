<template>

	<div class="dateTimeItem">
		<div class="content">
			<span><slot></slot></span>
		</div>

		<div class="dateTimecomp">
			<DatePicker   placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"  size="mini" v-model="value" type="datetime"> </DatePicker>
		</div>
	</div>

</template>

<script>
	import {DatePicker} from 'element-ui'
	export default {
		name: "dateTimeComp",
		data() {
			return {
				value: ''
			}
		},
		components: {
			DatePicker
		}
	}
</script>

<style>
	.dateTimeItem {
		
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
	
	.dateTimecomp {
		display: flex;
		justify-content: flex-start;
		width: 180px;
	}




	.el-picker-panel__body-wrapper {
	line-height:5px;
}

</style>
