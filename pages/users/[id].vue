<template lang="pug">
.container(v-if="userdata")
    h1(style="text-align:center").mt-3 {{$t("details")}}
    .data.d-flex.mt-5.rounded.shadow-lg.p-3
        .image 
            img(src="/img/myusers.jpg", alt="")
        .contnet
            h2.mt-2 {{$t("name")}} : 
            p {{userdata.email}}
            h2.mt-2 {{$t("id")}} 
            p   {{userdata.id}}
            h2.mt-2 {{$t("todos")}}
            ul
                li(v-if="userdata" v-for="todo in userdata.todos")
                    //- p created at: {{todo.created_at}}
                    p Todo: {{todo.content}}
                    //- p(v-if="todo.is_completed" ).fw-bold.fs-4 This todo is completed
                    //- p(v-else ).fw-bold.fs-4 This todo is not completed
</template>

<script setup lang="ts" >
let userdata = ref<any>([]);
const route = useRoute();
const userid = Number(route.params.id);
console.log("userid", userid);
const { data } = await useAsyncGql({
  operation: "usertodo",
  variables: { id: userid }
});
console.log("usertodo", data.value?.user);
userdata.value = data.value?.user;
</script>

<style lang="scss">
.image {
  padding: 1.2rem;
  width: 50%;
  align-items: center;
  img {
    width: 100%;
  }
}
.contnet {
  h2 {
    color: $main-color;
  }
  p {
    color: $dark-color;
  }
  li {
    background-color: $main-color;
    padding: 1rem;
    border-radius: 1.2rem;
    p {
      color: white;
    }
    margin-top: 1rem;
  }
}
</style>