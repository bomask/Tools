<template>
<div class= "body">
	<div class="maker">

		<div class="infoItem">
			<inputComp v-model="form.name" ref="name" >姓名:</inputComp>
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
			<inputComp v-model="form.createdTime" ref="createdTime">下单时间:</inputComp>
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


	</div>

	<div class="submitForm">
		<Button type="primary" @click="onSubmit">立即创建</Button>
	</div>
</div>
</template>

<script>
	import inputComp from '../../components/common/inputComp/inputComp'
	import selectComp from '../../components/common/selectComp/selectComp'
	import {Button}  from 'element-ui'


	export default {
		name: "UniIDMaker",
		components: {
			inputComp,
			selectComp,
			Button
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
					payTime:''
					
												},
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

				]
			}
		},
		methods: { onSubmit(){
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

			console.log(this.form)
		} }
	}
</script>

<style scoped>
	.body{
	width: 70%;
	margin: 0 auto;

	}

	.maker {
	
	flex-wrap: wrap;
	display: flex;
	}
</style>