<template lang="pug">
.content
  
    .box(v-if="!signed")
      Signin 
      span already have an account ?  
          a(@click="change()") login  
    .box(v-else)
      Login    
 

</template>

<script setup lang="ts">
const signed = ref(false);

function change() {
  signed.value = true;
}
</script>


<style lang="scss" scoped>
.content {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 500;

  .box {
    background-color: white;
    border-radius: 1.2rem;
    box-shadow: 0 0 8px #777;
    padding: 2rem 3rem;
    height: 60%;
    min-width: 40%;
    margin-top: 100px;

    a {
      color: $main-color;
      cursor: pointer;
    }
  }
}
</style>