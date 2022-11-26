<template lang="pug">
form
    h2 Login
    .input.py-3
        label(for="email") Email :
        input(type="email" id="email").mt-2
    .input.py-3
        label(for="password") Password:
        input(type="password" id="password").mt-2
    .end.py-3
        button.primary-button.w-100 submit
</template>

<script>
</script>

<style lang="scss" scoped>
input {
  width: 100%;
}
label {
  display: block;
}
</style>