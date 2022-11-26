<template lang="pug">
div
    mynav
    slot 
</template>


<script setup lang="ts" >
import { useI18n } from "vue-i18n";
var i18n = useI18n({});

onMounted(() => {
  const lang = sessionStorage.getItem("lang");
  i18n.locale.value = lang;
});
</script>


<style lang="scss" scoped>
h1 {
  color: white;
}
</style>