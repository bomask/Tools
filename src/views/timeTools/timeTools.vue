<template>
  <div class="timeToolBody">
    <div class="timeUnix">
      <div class="bgBox">
        <bgBox>
          <p slot="title">Unix时间戳(Unix timestamp)转换</p>
          <unixAndTime slot="item"></unixAndTime>
        </bgBox>
      </div>
    </div>

    <div class="timeCalc">
      <div class="bgBox">
        <bgBox>
          <p slot="title">时间计算器</p>
          <timeCalc slot="item"></timeCalc>
        </bgBox>
      </div>
    </div>
  </div>
</template>

<script>
  import bgBox from '../../components/common/backgroundBox/bgBox'
  import unixAndTime from '../../components/content/unixAndTime/unixAndTime'
  import timeCalc from '../../components/content/timeCalc/timeCalc'
  export default {
    name: "timeTools",
    components: {
      bgBox,
      unixAndTime,
      timeCalc
    }
  }
</script>

<style>
  .timeToolBody {
    width: 70%;
    margin: 0 auto;

  }

  .timeUnix,.timeCalc{
    padding: 30px 0px 0px 0px;
  }

  .bgBox {
    width: 100%;
  }

  .bgBox .bgBody {

  }


  .el-picker-panel{
    line-height: 5px;
  }


</style>
