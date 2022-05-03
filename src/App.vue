<template>
  <div>
    <wafuri-tool></wafuri-tool>
    <transition name="page">
      <router-view />
    </transition>
  </div>
</template>

<script>
import WafuriTool from "./components/WafuriTool.vue";

export default {
  components: {
    WafuriTool,
  },
};
</script>

<style>
@import "./css/reset";
/* router transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

body {
  background-image: url("./assets/bg.png");
  /* background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial; */
}
</style>
