<template lang="pug">
.container
    form
      h1 {{$t("addtodo")}}
      .adding.d-flex.mt-4.justify-content-between(style="gap:20px")
        input(type="text" v-model="todo" placeholder="Add your todo") 
        button.primary-button(@click.prevent="inserttodo()") {{$t("insert")}}
      .todos

      ul.mt-4 
        li( v-for="mytodo in myalltodos")
            .content.d-flex.newAdded.justify-content-between.align-items-center(v-if="mytodo.newAdded" )
                .data
                  h2 {{mytodo.content}} 
                  h5.mt-2 created at 
                    //- span {{DateStringToFormatedDate(mytodo?.created_at)}}
                button(class="mx-5" @click.prevent="deletetodo(mytodo.id)").primary-button {{$t("delete")}}
            .content.d-flex.justify-content-between.align-items-center( v-else )
              .data
                h2 {{mytodo.content}}  
                h5.mt-2 created at 
                  //- span {{DateStringToFormatedDate(mytodo?.created_at)}}
              button(type="button" class="mx-5" @click.prevent="deletetodo(mytodo.id)").primary-button {{$t("delete")}}   

</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const apiToken =
  config.public["graphql-client"]?.clients?.default?.publicRuntimeConfig
    ?.apiToken;
// console.log(apiToken);
const todo = ref("");
const myalltodos = ref([]);

const { data: alltodos } = await useAsyncGql({
  operation: "usertodo",
  variables: { id: 7 }
});
myalltodos.value = alltodos?.value?.user.todos;
console.log("getted todos", myalltodos.value);

async function inserttodo() {
  console.log("todovalue", todo.value);
  useGqlToken(`${apiToken}`);
  myalltodos.value.forEach(item => {
    item.newAdded = false;
  });
  const { data, error } = await useAsyncGql({
    operation: "InsertTodos",
    variables: { createTodoInput: { content: todo.value } }
  });
  console.log("created", data.value);
  const addedTod = { ...data?.value?.createTodo, newAdded: true };
  myalltodos.value.unshift(addedTod);
  console.log("addedtodo ", myalltodos.value);
  todo.value = "";
}

// async function completed(id) {
//   useGqlToken(`${apiToken}`);
//   const { data, error } = await useAsyncGql({
//     operation: "completed",
//     variables: { id: id }
//   });
//   myalltodos.value = myalltodos.value.map(ele => {
//     if (ele.id === id) {
//       ele.is_completed = true;
//       return ele;
//     }
//   });

//   console.log(myalltodos.value);
// }

async function deletetodo(id) {
  useGqlToken(`${apiToken}`);

  const { data, error } = await useAsyncGql({
    operation: "remove",
    variables: { id: id }
  });
  console.log(data.value.removeTodo);
  myalltodos.value = myalltodos.value.filter(ele => ele.id !== id);
  console.log(myalltodos.value);
}
// function DateStringToFormatedDate(stringDate: string) {
//   const date = new Date(stringDate);
//   const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
//   const month = date.getMonth() >= 10 ? date.getMonth() : `0${date.getMonth()}`;
//   const year = date.getFullYear();
//   let morningOrNigth = "am";
//   let hours: number | string = date.getHours();
//   if (date.getHours() > 12) {
//     hours = date.getHours() - 12;
//     morningOrNigth = "pm";
//   }
//   hours = hours >= 10 ? hours : `0${hours}`;
//   const minutes =
//     date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
//   const time = `${hours}:${minutes} ${morningOrNigth}`;
//   return `${day}/${month}/${year} at ${time}`;
// }
</script>

<style lang="scss" scoped>
.newAdded {
  animation: show 600ms 100ms cubic-bezier(0.38, 0.97, 0.56, 0.76) forwards;

  // Prestate
  opacity: 0;
  // remove transform for just a fade-in
  transform: rotateX(-90deg);
  transform-origin: top center;
}

@keyframes show {
  100% {
    opacity: 1;
    transform: none;
  }
}

input {
  width: 80%;
}
ul {
  background-color: $main-color;
  padding: 3rem;
  border-radius: 1.2rem;

  .content {
    position: relative;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 2px 12px #b6a08b;
      cursor: pointer;
    }
    &.complited {
      background-color: rgba(255, 255, 255, 0.496);
      opacity: 0.5;
      // &::after {
      //   content: "";
      //   width: 90%;
      //   height: 1px;
      //   background-color: #777;
      //   top: 40%;
      //   transform: translateY(-50%);
      //   position: absolute;
      //   z-index: 100;
      // }
    }
    width: 100%;
    .data {
      h5 {
        color: $main-color;
        span {
          color: #777;
          font-size: 15px;
        }
      }
    }

    padding: 1rem;
    background-color: white;
    border-radius: 1.2rem;
    margin-top: 1.2rem;
  }
}
</style>