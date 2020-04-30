<template>
<div class= "body">
	<div class="maker">

		<div class="infoItem">
			<inputComp v-model="form.name" ref="name" >* 姓名:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp v-model="form.age"  ref="age">年龄:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp v-model="form.birthday"  ref="birthday">生日:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp v-model="form.address" ref="address">家庭地址:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp  v-model="form.email" ref="email">邮箱:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp  v-model="form.phone" ref="phone">手机号:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp v-model="form.payment" ref="payment">消费金额:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp  v-model="form.payTime"  ref="payTime">支付时间:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp   v-model="form.prodName"  ref="prodName">商品名称:</inputComp>
		</div>
		<div class="infoItem">
			<inputComp  v-model="form.prodId" ref="prodId">商品ID:</inputComp>
		</div>
		<div class="infoItem">
			<selectComp :options="select1" ref="plat"  v-model="form.plat">平台:</selectComp>
		</div>
		<div class="infoItem">
			<dateTimeComp  v-model="form.createdTime" ref="createdTime">下单时间:</dateTimeComp>
		</div>


	</div>

	<div class="submitForm">
		<Button type="primary" :plain="true"  @click="onSubmit" size="small">提交</Button>
	</div>

	
	<div class='textArea'>
		<Input readonly="readonly"     type="textarea"   :rows="5"   placeholder="点击 `提交` 生成内容"   v-model="textarea"> </Input>
	</div>
</div>
</template>

<script>
	import inputComp from '../../components/common/inputComp/inputComp'
	import selectComp from '../../components/common/selectComp/selectComp'
	import dateTimeComp from '../../components/common/dateTimeComp/dateTimeComp'
	import {Button,Input,Message,DatePicker}  from 'element-ui'
	

	export default {
	name: "DataMaker",
		components: {
			inputComp,
 			selectComp,
			dateTimeComp,
			Button,
			Input,
			Message,
			DatePicker

		},
		data() {
			return {
				form:{
					name: '',
					phone: '',
					birthday: '',
					age: '',
					plat: '',
					prodName:'',
					prodId: '',
					payment:'',
					address:'',
					email:'',
					createdTime:'',
					payTime:''},
				select1: [{
						value: 'TAOBAO',
						label: '淘宝'
					}, {
						value: 'JD',
						label: '京东'
					}, {
						value: 'OFFLINE',
						label: '线下'
					}

				],
			 	textarea:'',
		}},
		methods: { onSubmit(){
			if (this.$refs.name.value =="" ||  this.$refs.name.value ==null ){
				Message.warning({
        			  message: '请检查必填项是否全部填写完整~',
			          type: 'warning',
				    });
			}else{

			this.form.name= this.$refs.name.value
			this.form.age= this.$refs.age.value
			this.form.phone= this.$refs.phone.value
			this.form.birthday= this.$refs.birthday.value
			this.form.payment= this.$refs.payment.value
			this.form.payTime= this.$refs.payTime.value
			this.form.createdTime= this.$refs.createdTime.value
			this.form.plat= this.$refs.plat.value
			this.form.email= this.$refs.email.value
			this.form.prodId= this.$refs.prodId.value
			this.form.prodName= this.$refs.prodName.value
			this.form.address= this.$refs.address.value

//			console.log(this.form)
			this.textarea = JSON.stringify(this.form)}
			

		}
	}
}
</script>

<style >
	.body{
	width: 70%;
	margin: 0 auto;
	padding:30px 0px 0px 0px;
	}

	.maker {
	
	flex-wrap: wrap;
	display: flex;
	}

	.submitForm{
		margin:10px 20px 10px 20px;
		height:30px;
		display:flex;
		justify-content:flex-end;
	}
	
	.textArea{
	width:90%;	
	flex-wrap: wrap;
	margin:0 auto;

	}

  .el-message{
		padding: 5px 15px 5px 20px;
	}
</style>
