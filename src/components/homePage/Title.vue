<template>
  <div class="title">
   <div class ="title_bg">
   <p>极简工具</p>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Title'
}
</script>


<style scoped>

	* {
  margin: 0;
  padding: 0;
            }

.title{
display: flex;
justify-content:center;
user-select:none;
overflow:hidden;
}

.title_bg{
  display: flex;
  background-color:#99CCCC;
  height:50px;
  width:70%;
  border-radius: 20px;
justify-content:center;
flex-wrap:wrap ;
align-content:center;
margin:1%  1%;
}

.title_bg p{
	font-size: 30px;
  color:#FFFFFF;
  letter-spacing:10px;
}
</style>
