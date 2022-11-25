<template lang="pug">

.mycard.mt-5
    .title.d-flex.align-items-center(style="gap:20px")
        img(src="../img/user.png" width="50px" )
        h2 {{$t("name")}} :  
            p.mt-2 {{name}}
    .todos 
        .d-flex.align-items-center(style="gap:20px")
            img(src="../img/note.png")
            h2.py-3 {{$t("todos")}}:
        .todos(v-for="todo in todos" v-if="todos.length > 0")
            p {{todo.content}}
        p(v-else) {{$t("error")}}
    NuxtLink(:to="`/users/${id}`").text-center
        button.dark.primary-button {{$t("cont")}}  

</template>


<script lang="ts" setup>
const props = defineProps({
  name: String,
  id: String,
  todos: String
});
</script>

<style lang="scss" scoped>
a {
  width: 100%;
}

button {
  &.dark {
    margin: auto;
    display: block;
    background-color: $dark-color;
  }
}
.mycard {
  padding: 2rem;
  box-shadow: 0 2px 8px #ccc;
  border-radius: 1.2rem;
  margin-top: 2rem;
  width: 45%;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0 2px 30px #ccc;
  }
  h2 {
    color: $main-color;
    p {
      color: $dark-color;
      font-size: 20px;
    }
  }
  .todos {
    p {
      padding: 1rem;
      background-color: $main-color;
      color: white;
      border-radius: 1.2rem;
    }
  }
}
</style>

