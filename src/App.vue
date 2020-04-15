<template>
  <div id="app">

	<Title></Title>
	<MainTabBar></MainTabBar>
	 <router-view></router-view>
  </div>
</template>

<script>

import  Title from  "../src/components/homePage/Title"
import MainTabBar from "../src/components/content/mainTabbar/MainTabBar"


export default {
  name: 'App',
  components: {
	Title,
	MainTabBar
  }
}
</script>

<style>
 @import "assets/css/bases.css";
</style>
