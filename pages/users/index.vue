<template lang="pug">

.container 
    h1.mt-2 {{$t("search")}}
    .searching.d-flex.mt-4.justify-content-between(style="gap:20px")  
      input(type="text" v-model="searchval" placeholder="search in users" style="width:90%") 
      button.primary-button(@click="finduser") {{$t("sbuttton")}} 
    .cardele(v-if="users")
        Card(v-for="user in users" :name="user.email" :id="user.id" :todos="user.todos" )
         
</template>

<script setup lang="ts">
const searchval = ref<any>("");
const users = ref([]);

const { data } = await useAsyncGql({
  operation: "allusers"
});
console.log("users", data.value);
users.value = data?.value?.users;

// watch( data.value, (curr ,old) =>{
//   users = curr.users;
//   console.log("from watch",users)

// })

// watch(searchval, (currentValue, oldValue) => {
//       console.log(currentValue);

//     });

function finduser() {
  console.log("useers searched", users.value);

  users.value = users.value.filter(ele => ele.id == searchval.value);
  console.log("useers searched", users.value);
  console.log(searchval.value);
}

// console.log(data.value.users)
</script>
  
<style lang="scss" scoped>
.searching {
  display: flex;
}
.cardele {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>