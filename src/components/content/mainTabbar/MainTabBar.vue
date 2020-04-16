<template>

  <TabBar>
    <TabBarItem path="/uniIDMaker" >

      <div slot="item-text">uniIDMaker</div>
    </TabBarItem>
    <TabBarItem path="/tool2" >

      <div slot="item-text">工具2</div>
    </TabBarItem>
    <TabBarItem path="/tool3" >

      <div slot="item-text">工具3</div>
    </TabBarItem>
    <TabBarItem path="/tool4" >

      <div slot="item-text">MarkDown</div>
    </TabBarItem>
  </TabBar>


</template>


<script>
  import TabBar from "../../../components/common/tabbar/TabBar";
  import TabBarItem from "../../../components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }

</script>

<style scoped>


</style>
