<template lang="pug">
.cont
  .nav.py-4.large.position-relative
      .container.d-flex.justify-content-between.align-items-center.position-relative
          .logo.d-flex.justify-content-between.align-items-center
              div.d-flex.align-items-center
                  img(src="../img/logo.png")
                  h2 {{$t("logo")}}
          .links.d-flex 
              ul.d-flex.justify-content-between(style="gap:5px")
                  li.px-4: nuxt-link(to="/")  {{$t('home')}}
                  li.px-4: nuxt-link(to="/todos")   {{$t('todos')}}     
                  li.px-4: nuxt-link(to="/users")   {{$t('users')}}
          .end        
              label(for="locale-select"): img(src="../img/world.svg") 
              select(id="locale-select"  v-model="$i18n.locale" @change="addtolocal()")
                  option(value="en" selected name="lang") English
                  option(value="ar" name="lang" ) العربية  

  .mobilenav.d-none
      .nav.py-4.position-relative
          .container.position-relative
              .logo.d-flex.justify-content-between.align-items-center
                  div.d-flex.align-items-center
                      img(src="../img/logo.png")
                      h2 {{$t("logo")}}
                  a.bars(@click="showside()"): img(src="../img/bars-solid.svg") 
          transition(name="slide")         
              section(v-if="menu")    
                  .links
                      ul.py-4
                          li.me-4.py-4: nuxt-link(to="/"): h5 {{$t('home')}}
                          li.me-4.py-4: nuxt-link(to="/todos"): h5  {{$t('todos')}}     
                          li.me-4.py-4: nuxt-link(to="/users"): h5  {{$t('users')}}
                  .end.d-flex.justify-content-between.align-items-center  
                      div
                          label(for="locale-select"): img(src="../img/world.svg") 
                          select(id="locale-select"  v-model="$i18n.locale" @change="addtolocal()")
                              option(value="en" selected) English
                              option(value="ar") العربية  

                      a.close(@click="showside()"): img(src="../img/cancel.svg" style="width:40px")      

</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
var i18n = useI18n({});
function addtolocal() {
  sessionStorage.setItem("lang", i18n.locale.value);
}
const menu = ref(false);
function showside() {
  menu.value = !menu.value;
}
</script>

<style scoped lang="scss">
@media (max-width: 990px) {
  select {
    background-color: $dark-color;
    color: white;
    option {
      background-color: $dark-color !important;
    }
  }
  .bars {
    display: block !important;
  }

  .mobilenav {
    display: block !important;

    ul {
      position: relative;
      li {
        padding: 0.2rem;
        border-radius: 0;
        color: white;
        transition: all 0.5s ease;
        width: fit-content;

        &:hover {
          transform: scale(1.2);
          background-color: transparent;
        }
        a {
          color: white;
          &:hover {
            color: $main-color;
          }
        }
      }
      &::after {
        content: "";
        width: 100%;
        position: absolute;
        height: 1px;
        background-color: #ccc;
      }
    }
  }
  .large {
    display: none;
  }

  // .container{
  //     display: block !important;;
  //     height: 50vh;
  //     .links{
  //         display: block !important;
  //         padding: 5rem 0;
  //         ul{
  //             display: block !important;
  //             li{
  //                 padding: 2rem 0;
  //             }
  //         }
  //     }
  // }
  /* … */
}
.logo {
  h1 {
    color: $dark-color;
  }
}
li {
  padding: 0.2rem 0.4rem;
  transition: 0.3s all ease;
  &:hover {
    a {
      color: white;
    }
    background-color: $main-color;
    border-radius: 1.2rem;
  }
}
a {
  &.close {
    transition: all 0.5s ease-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
  color: rgb(41, 41, 41);
  &:hover {
    color: white;
  }
  &.bars {
    img {
      width: 20px;
    }
  }
}

select {
  border: none;
  padding: 0.2rem 0.3rem;
  outline: none;
  background-color: transparent;

  option {
    padding: 2rem;
    border-color: #f2f3f5;
    background-color: #f2f3f5;
  }
}

section {
  background-color: $dark-color;
  z-index: 5;
  color: white;
  width: 100%;
  padding: 2rem;
  position: absolute;
  top: 0;
}
</style>