<template>
  <div class="navbar">
    <!-- <router-link to="/character" class="nav-brand">
      <div>
        <img src="../assets/wafuri-logo.png" alt="로고" />
      </div>
    </router-link> -->
    <router-link to="/character"> 캐릭터 </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* .navbar {
  background: #2d2d2d;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0 1rem;
  -webkit-box-shadow: 0 0 5px 0 rgb(0 0 0 / 20%);
  -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 20%);
} */
.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}
.navbar-brand {
  padding: 3px 0;
}
#img {
  vertical-align: middle;
  border-style: none;
}
</style>
