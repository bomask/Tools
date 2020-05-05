<template>
  <div class="">
    <div class="timeCalc1">
      <div class="datePicker">
        <DatePicker v-model="datePickerValue1" type="datetime" placeholder="选择日期时间"></DatePicker>
      </div>
      <div class="itemUnit">
        <Select v-model="forwardOrBackwardDefault" placeholder="前进">
          <Option v-for="item in forwardOrBackward" :key="item.value" :label="item.label" :value="item.value">
          </Option>
        </Select>
      </div>

      <div v-if="defaultTimeUnit=='day'" class="InputNum">
        <Input v-model="inputNum" placeholder="请输入数字" clearable maxlength="5" show-word-limit></Input>
      </div>
      <div v-else-if="defaultTimeUnit=='hour'" class="InputNum">
        <Input v-model="inputNum" placeholder="请输入数字" clearable maxlength="6" show-word-limit></Input>
      </div>
      <div v-else-if="defaultTimeUnit=='minutes'" class="InputNum">
        <Input v-model="inputNum" placeholder="请输入数字" clearable maxlength="9" show-word-limit></Input>
      </div>
      <div v-else class="InputNum">
        <Input v-model="inputNum" placeholder="请输入数字" clearable maxlength="10" show-word-limit></Input>
      </div>


      <div class="timeUnit">
        <Select v-model="defaultTimeUnit" placeholder="天">
          <Option v-for="item in timeUnits" :key="item.value" :label="item.label" :value="item.value">
          </Option>
        </Select>
      </div>

      <div class="calcButton">
        <Button type="primary" @click="resultDateTime">计算</Button>
      </div>

      <div class="calcResult">
        <Input v-model="calcResult" readonly> </Input>
      </div>
    </div>





    <div class="timeCalc2">
      <div v-if="this.defaultTimeUnitIntervals=='day'" class="datePicker">
        <DatePicker v-model="datePickerValue2" type="date" placeholder="选择日期时间"></DatePicker>
      </div >
      <div v-else class="datePicker">
        <DatePicker v-model="datePickerValue2" type="datetime" placeholder="选择日期时间"></DatePicker>
      </div>

      <div class="withCompare"><span>与</span></div>


      <div v-if="this.defaultTimeUnitIntervals=='day'"  class="datePicker">
        <DatePicker v-model="datePickerValue3" type="date" placeholder="选择日期时间"></DatePicker>
      </div>
      <div v-else class="datePicker">
        <DatePicker v-model="datePickerValue3" type="datetime" placeholder="选择日期时间"></DatePicker>
      </div>


      <div class="calcButton">
        <Button type="primary" @click="calcBetween">相隔</Button>
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
  import {DatePicker, Input, Button, Option, Select, Message} from 'element-ui';

  export default {
    name: "timeTools",
    data() {
      return {
        datePickerValue1: '',
        forwardOrBackward: [{
          value: 'forward',
          label: '前进'
        }, {
          value: 'backward',
          label: '后退'
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
        defaultTimeUnitIntervals: "day",
        datePickerValue2: '',
        datePickerValue3: ''
      }
    },
    components: {
      DatePicker,
      Input,
      Button,
      Option,
      Select,
      Message
    },
    methods: {
      resultDateTime() {
        let checkNum = /^[0-9]*$/
        if (this.datePickerValue1 == "" || typeof (this.datePickerValue1) == "undefined" || this.datePickerValue1 == null || this.inputNum == "") {

          Message.warning({
            message: '日期格式或输入数值不能为空 (＞﹏＜) ',
            type: 'warning',
          });
          this.calcResult = '';
        } else if (checkNum.test(this.inputNum)) {
          if (this.forwardOrBackwardDefault == "forward") {
            if (this.defaultTimeUnit == "day") {
              /*            let timeToUnix = Date.parse(this.datePickerValue1) / 1000 + this.inputNum*24*60*60
                          this.calcResult = jutils.formatDate(new Date(timeToUnix * 1000), "YYYY-MM-DD HH:ii:ss")*/
              /*用函数this.calcTime()计算下列所有的计算*/
              this.calcTime(this.inputNum * 60 * 60 * 24)
            } else if (this.defaultTimeUnit == "hour") {
              this.calcTime(this.inputNum * 60 * 60)
            } else if (this.defaultTimeUnit == "minutes") {
              this.calcTime(this.inputNum * 60)
            } else {
              this.calcTime(this.inputNum * 1)
            }
          } else {
            if (this.defaultTimeUnit == "day") {
              this.calcTime(-this.inputNum * 60 * 60 * 24)
            } else if (this.defaultTimeUnit == "hour") {
              this.calcTime(-this.inputNum * 60 * 60)
            } else if (this.defaultTimeUnit == "minutes") {
              this.calcTime(-this.inputNum * 60)
            } else {
              this.calcTime(-this.inputNum * 1)
            }
          }
        } else {
          Message.warning({
            message: '输入的数值只能为数字 (＞﹏＜) ',
            type: 'warning',
          });
          this.calcResult = '';
        }
      },
      calcTime(inputNum) {
        /*该方法在resultDateTime内部调用，计算倒退时间*/
        //jutils参考：https://blog.csdn.net/qq6759/article/details/95228778
        let timeToUnix = Date.parse(this.datePickerValue1) / 1000 + inputNum
        this.calcResult = jutils.formatDate(new Date(timeToUnix * 1000), "YYYY-MM-DD HH:ii:ss")
      },
      calcBetween() {
        if (this.datePickerValue2 == "" || typeof (this.datePickerValue2) == "undefined" || this.datePickerValue2 == null || this.datePickerValue3 == "" || typeof (this.datePickerValue3) == "undefined" || this.datePickerValue3 == null) {

          Message.warning({
            message: '日期格式不能为空 (＞﹏＜) ',
            type: 'warning',
          });
          this.calcResultIntervals = '';
        } else {
          if (this.defaultTimeUnitIntervals == 'day') {
            this.calcResultIntervals=Math.abs(Math.ceil((this.datePickerValue2.getTime()/1000 - this.datePickerValue3.getTime()/1000)/(24*60*60)))
            console.log(this.datePickerValue2.getTime());
            console.log(this.datePickerValue3.getTime());
          } else if (this.defaultTimeUnitIntervals == 'hour') {
            this.calcResultIntervals=Math.abs(Math.ceil((this.datePickerValue2.getTime()/1000 - this.datePickerValue3.getTime()/1000)/(60*60)))
          } else if (this.defaultTimeUnitIntervals == 'minutes') {
            this.calcResultIntervals=Math.abs(Math.ceil((this.datePickerValue2.getTime()/1000 - this.datePickerValue3.getTime()/1000)/60))
          } else {
            this.calcResultIntervals=Math.abs(Math.ceil((this.datePickerValue2.getTime()/1000 - this.datePickerValue3.getTime()/1000)/1))
          }
        }
      }
    }
  }
</script>

<style>
  .timeCalc2,
  .timeCalc1 {
    display: flex;
    justify-content: flex-start;
/*    justify-content: center;*/
    align-items: center;
    flex-wrap: wrap;
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
  .timeUnit {
    display: flex;
    justify-content: center;
    width: 120px;
    padding: 12px 6px 12px 6px;
  }


  .calcButton {
    display: flex;
    justify-content: center;
    width: 76px;
    padding: 12px 6px 12px 6px;
  }


</style>