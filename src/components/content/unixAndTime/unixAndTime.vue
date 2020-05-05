<template>
  <div class="">
    <div class="timeNow">
      <div class="Item-text"><span>当前时间</span></div>
      <div class="Item-a"><Input v-model="dateTimeFormat" readonly></Input></div>
      <div class="Item-button">
        <Button type="primary" round @click="transformNowTime">转换</Button>
      </div>
      <div class="Item-a"><Input v-model="dateTimeFormatStop" readonly></Input></div>
      <div class="Item-b"><Input v-model="unixForNowTime" readonly></Input></div>
      <div class="Item-unit"><Select v-model="unitValue1" placeholder="单位：秒(s)">
        <Option
                v-for="item in unitOptions1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </Option>
      </Select></div>
    </div>


    <div class="timeToUnix">
      <div class="Item-text"><span>日期时间</span></div>
      <div class="Item-a">
        <DatePicker v-model="anyTimeTOUnixValue" type="datetime" placeholder="选择日期时间"></DatePicker>
      </div>
      <div class="Item-button">
        <Button type="primary" round @click="transformToUnix">转换</Button>
      </div>
      <div class="Item-a"><Input v-model="unixForAnyTime" readonly></Input></div>
      <div class="Item-unit"><Select v-model="unitValue2" placeholder="单位：秒(s)">
        <Option
                v-for="item in unitOptions2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </Option>
      </Select></div>
    </div>


    <div class="unixToTime">
      <div class="Item-text"><span>时间戳</span></div>
      <div class="Item-a"><Input v-model="anyUnixToTimeValue" placeholder="请输入时间戳" clearable></Input></div>
      <div class="Item-button">
        <Button type="primary" round @click="transformToTime">转换</Button>
      </div>
      <div class="Item-a"><Input v-model="timeForAnyUnix" readonly></Input></div>
      <div class="Item-unit"><Select v-model="unitValue3" placeholder="单位：秒(s)">
        <Option
                v-for="item in unitOptions3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </Option>
      </Select></div>
    </div>
  </div>
</template>

<script>
  import {Input, Button, Select, Option, DatePicker, Message} from "element-ui"

  export default {
    name: "unixAndTime",
    components: {
      Input,
      Button,
      Option,
      Select,
      DatePicker
    },
    data() {
      return {
        dateTime: new Date(),
        dateTimeFormatStop: '',
        unixForNowTime: '',
        unitOptions1: [{
          value: 's',
          label: '单位：秒(s)'
        }, {
          value: 'ms',
          label: '单位：毫秒(ms)'
        }],
        unitOptions2: [{
          value: 's',
          label: '单位：秒(s)'
        }, {
          value: 'ms',
          label: '单位：毫秒(ms)'
        }],
        unitOptions3: [{
          value: 's',
          label: '单位：秒(s)'
        }, {
          value: 'ms',
          label: '单位：毫秒(ms)'
        }],
        unitValue1: 's',
        unitValue2: 's',
        unitValue3: 's',
        anyTimeTOUnixValue: '',
        unixForAnyTime: '',
        anyUnixToTimeValue: '',
        timeForAnyUnix: '',
      };
    },
    computed: {
      dateTimeFormat() {
        return this.dateTime.getFullYear() + '-' + String(this.dateTime.getMonth() + 1).padStart(2, 0) + '-' + String(this.dateTime.getDate()).padStart(2, 0) + ' ' + String(this.dateTime.getHours()).padStart(2, 0) + ':' + String(this.dateTime.getMinutes()).padStart(2, 0) + ':' + String(this.dateTime.getSeconds()).padStart(2, 0);
      }
    },
    methods: {
      transformNowTime() {
        this.dateTimeFormatStop = this.dateTimeFormat;
        if (this.unitValue1 === "s") {
          this.unixForNowTime = Date.parse(this.stringToDate(this.dateTimeFormatStop)) / 1000;/*精确到秒*/
        } else {
          this.unixForNowTime = this.stringToDate(this.dateTimeFormatStop).getTime();/*精确到毫秒*/
        }
      },
      transformToUnix() {
        if (this.anyTimeTOUnixValue == "" || typeof (this.anyTimeTOUnixValue) == "undefined" || this.anyTimeTOUnixValue == null) {

          Message.warning({
            message: '您输入的日期格式有误 (＞﹏＜) ',
            type: 'warning',
          });
          this.unixForAnyTime = '';
        } else {
          if (this.unitValue2 === "s") {
            this.unixForAnyTime = Date.parse(this.anyTimeTOUnixValue) / 1000;/*精确到秒*/
          } else {
            this.unixForAnyTime = this.anyTimeTOUnixValue.getTime();/*精确到毫秒*/
          }
        }
      },
      transformToTime() {
        let num = /^\d{10,13}$/

        if (this.unitValue3 == "s" && num.test(this.anyUnixToTimeValue)) {
          this.timeForAnyUnix = jutils.formatDate(new Date(this.anyUnixToTimeValue * 1000), "YYYY-MM-DD HH:ii:ss")
        } else if (this.unitValue3 == "ms" && num.test(this.anyUnixToTimeValue)) {
          this.timeForAnyUnix = jutils.formatDate(new Date(this.anyUnixToTimeValue * 1), "YYYY-MM-DD HH:ii:ss")
        } else {
          this.timeForAnyUnix = '';
          Message.warning({
            message: '您输入的时间戳格式有误，必须是10或者13位的数字 (＞﹏＜) ',
            type: 'warning',
          });
        }
      },
      stringToDate(str) {
        try {
          /*字符串转换为Date类型的方法*/
          if (str) {
            let getDate = str.split(" ")[0].split('-');
            let getTime = str.split(" ")[1].split(':');
            let newDate = new Date(getDate[0], getDate[1] - 1, getDate[2], getTime[0], getTime[1], getTime[2]);
            return newDate
          }
        } catch (e) {
          console.log("Error:" + e);
        }
      }
    },
    mounted() {
      //https://www.cnblogs.com/jin-zhe/p/9835068.html
      let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
      this.timer = setInterval(() => {
        _this.dateTime = new Date(); // 修改数据date
      }, 1000)
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
      }
    }
  }


</script>

<style>
  .timeNow,
  .timeToUnix,
  .unixToTime {
    display: flex;
    justify-content: flex-start;
    /* justify-content: center;*/
    align-items: center;
    flex-wrap: wrap;
  }


  .Item-a, .Item-b {
    width: 220px;
    display: flex;
    justify-content: center;
  }

  .Item-a {
    padding: 12px 6px 12px 6px;
  }

  .Item-b {
    padding: 12px 6px 12px 0px;
  }


  .Item-text {
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 6px 12px 6px;
  }

  .Item-button {
    display: flex;
    justify-content: center;
    width: 76px;
    padding: 12px 6px 12px 6px;
  }

  .Item-unit {
    display: flex;
    justify-content: center;
    width: 180px;
    padding: 12px 6px 12px 6px;
  }
</style>
