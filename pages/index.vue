<template lang="pug">
.home.container-fluiid
  .container
    .text 
        h1 {{$t("advice")}}
        h5.my-4 {{$t("advice-cont")}}
        button.primary-button: a {{$t("read")}}

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background-image: url("../img/home.jpg");
  background-size: cover;
  position: absolute;
  z-index: -100;
  top: 0;

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    z-index: 100;
    -webkit-backface-visibility: 0.5rem;
    backface-visibility: 0.5rem;
    padding: 1.5rem;
    border-radius: 1.2rem;
    color: #ecc6a1;
    text-align: center;
    h5 {
      color: rgb(119, 119, 119);
      letter-spacing: 0.1rem;
    }
  }
}
</style>