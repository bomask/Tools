<template>
  <div class="toggle">
    <ToggleBox>test1test1</ToggleBox>
    <ToggleBox>test2</ToggleBox>

  </div>
</template>

<script>
import ToggleBox from "./ToggleBox"

export default {
  name: 'toggle',
   components: {
	ToggleBox
  }
}
</script>


<style scoped>
.toggle{
margin:0 auto;
display:flex;
background-color:#666690;
width:70%;
justify-content:left;
}

</style>
