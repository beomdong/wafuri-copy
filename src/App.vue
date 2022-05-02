<template>
  <div>
    <wafuri-tool></wafuri-tool>
    <transition name="page">
      <router-view></router-view>
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
/* router transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
