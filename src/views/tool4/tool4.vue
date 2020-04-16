<template>
 <div class="tool4">

	<markDowner></markDowner>
 </div>
</template>

<script>
import markDowner from '../../../src/components/common/markDown/markDowner'


  export default {
    name: "tool4",
    components:{
	markDowner	
    }
  }
</script>

<style scoped>
.tool4{
  width:70%;
   margin: 0 auto;
   padding: 20px 2px 20px 2px;
}
</style>
