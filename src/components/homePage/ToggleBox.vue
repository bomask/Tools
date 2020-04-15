<template>
  <div class="toggleBox">
    <div class='boxItem'><p><slot></slot></p></div>

  </div>
</template>

<script>
export default {
  name: 'ToggleBox'

}
</script>


<style scoped>
.boxItem{

  background-color:yellow;

  height:30px;
  width:80px;

  margin: 2px 10px;
  display: flex;
  justify-content:center;
  flex-wrap:wrap ;
  align-content:center;
  border-radius: 15px;

}

.boxItem p{

    font-size:20px;

      color:#666699;
}
</style>
