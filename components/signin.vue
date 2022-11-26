<template lang="pug">

form(@submit.prevent="signup()")
    h2 Sign Up 
    .input.py-3
        label(for="email") Email :
        input(type="email" id="email" v-model="email").mt-2
    .input.py-3
        label(for="password") Password:
        input(type="password" id="password" v-model="pass").mt-2
    .end.py-3
        button.primary-button.w-100 submit

</template>

<script setup lang="ts">
const email = ref<string>("");
const pass = ref<string>("");

async function signup() {
  const { data, error } = await useAsyncGql({
    operation: "sign",
    variables: { input: { email: email.value, password: pass.value } }
  });
  console.log(typeof data.value.signUp.token);
  const token = data.value?.signUp.token;
  localStorage.setItem("token", token);
}
</script>

<style lang="scss" scoped>
input {
  width: 100%;
}
label {
  display: block;
}
</style>