<template>
  <div class="">
    <div class="timeCalc1">
      <div class="datePicker">
        <DatePicker v-model="datePickerValue1" type="datetime" placeholder="选择日期时间"></DatePicker>
      </div>
      <div class="itemUnit">
        <Select v-model="forwardOrBackwardDefault" placeholder="往前">
          <Option v-for="item in forwardOrBackward" :key="item.value" :label="item.label" :value="item.value">
          </Option>
        </Select>
      </div>
      <div class="InputNum">
        <Input v-model="inputNum" placeholder="请输入数字"></Input>
      </div>

      <div class="timeUnit">
        <Select v-model="defaultTimeUnit" placeholder="天">
          <Option v-for="item in timeUnits" :key="item.value" :label="item.label" :value="item.value">
          </Option>
        </Select>
      </div>

      <div class="calcButton">
        <Button type="primary">计算</Button>
      </div>

      <div class="calcResult">
        <Input v-model="calcResult" readonly> </Input>
      </div>
    </div>


    <div class="timeCalc2">
      <div class="datePicker">
        <DatePicker v-model="datePickerValue2" type="datetime" placeholder="选择日期时间"></DatePicker>
      </div>

      <div class="withCompare"><span>与</span></div>

      <div class="datePicker">
        <DatePicker v-model="datePickerValue3" type="datetime" placeholder="选择日期时间"></DatePicker>
      </div>

      <div class="calcButton">
        <Button type="primary">相隔</Button>
      </div>

      <div class="calcResult">
        <Input v-model="calcResultIntervals" readonly> </Input>
      </div>

			<div class="timeUnitIntervals">
				<Select v-model="defaultTimeUnitIntervals" placeholder="天">
					<Option v-for="item in timeUnitsIntervals" :key="item.value" :label="item.label" :value="item.value">
					</Option>
				</Select>
			</div>

    </div>
</template>

<script>
  import {DatePicker, Input, Button,Option,Select} from 'element-ui';

  export default {
    name: "timeTools",
    data() {
      return {
        datePickerValue1: '',
        forwardOrBackward: [{
          value: 'forward',
          label: '往前'
        }, {
          value: 'backward',
          label: '往后'
        }],
        forwardOrBackwardDefault: 'backward',
        inputNum: '',
        timeUnits: [{
          value: 'day',
          label: '天'
        }, {
          value: 'hour',
          label: '小时'
        }, {
          value: 'minutes',
          label: '分钟'
        }, {
          value: 'seconds',
          label: '秒'
        }],
        defaultTimeUnit: 'day',
        calcResult: '',
        calcResultIntervals: '',
				timeUnitsIntervals: [{
					value: 'day',
					label: '天'
				}, {
					value: 'hour',
					label: '小时'
				}, {
					value: 'minutes',
					label: '分钟'
				}, {
					value: 'seconds',
					label: '秒'
				}],
				defaultTimeUnitIntervals:"day",
				datePickerValue2:'',
				datePickerValue3:''
      }
    },
    components: {
      DatePicker,
      Input,
      Button,
			Option,
			Select
    }
  }
</script>

<style>
	.timeCalc2,
	.timeCalc1{
		display: flex;
/*		justify-content: flex-start;*/
		justify-content: center;
		align-items: center;
		flex-wrap:wrap;
	}



	.datePicker,
	.InputNum,
	.calcResult {
		width: 220px;
		display: flex;
		justify-content: center;
		padding: 12px 6px 12px 6px;
	}


	.timeUnitIntervals,
	.itemUnit,
	.timeUnit{
		display: flex;
		justify-content: center;
		width: 120px;
		padding: 12px 6px 12px 6px;
	}


	.calcButton{
		display: flex;
		justify-content: center;
		width: 76px;
		padding: 12px 6px 12px 6px;
	}


</style>