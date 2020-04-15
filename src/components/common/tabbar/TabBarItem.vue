<template>
  <div class="tab-bar-item" @click="itemClick">

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor:{
        type:String,
        default:"red",
      }
    },
    data() {
      return {}
    },
	   computed: {
	   isActive() {
        /*动态决定取得哪个路径*/
        return this.$route.path.indexOf(this.path) !==-1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} :{}
      }
    },

    methods: {
      itemClick() {
        console.log("clicked");
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
	background-color:blue;

  height:30px;
  width:120px;

  margin: 2px 10px;
  display: flex;
  justify-content:center;
  flex-wrap:wrap ;
  align-content:center;
  border-radius: 15px;
  }

  .active {
    color: red;
  }
</style>
