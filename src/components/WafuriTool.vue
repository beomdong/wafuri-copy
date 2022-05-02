<template>
  <div class="header">
    <!-- <router-link to="/character" class="nav-brand">
      <div>
        <img src="../assets/wafuri-logo.png" alt="로고" />
      </div>
    </router-link> -->
    <router-link to="/character">
      <img src="../assets/wafuri-logo.png" alt="로고" class="logo" />
    </router-link>
    <router-link to="/character"> 캐릭터 </router-link>
    <router-link to="/equipt"> 장비 </router-link>
    <router-link to="/formation"> 편성 </router-link>
    <router-link to="/stats"> 통계 </router-link>
    <router-link to="/follow"> 친구찾기 </router-link>
    <router-link to="/multi"> 멀티모집 </router-link>
    <router-link to="/gacha"> 가챠시뮬 </router-link>
    <router-link to="/vote"> 인기투표 </router-link>
    <router-link to="/guestbook"> 방명록 </router-link>
    <router-link to="/bot"> 디아봇 </router-link>
    <button class="loginBtn">로그인</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo {
  width: 120px;
  height: 35px;
  -o-object-fit: contain;
  object-fit: cover;
}

.header {
  background-color: #f8f9fa !important;
  font-size: 15px;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 20%);
}

.loginBtn {
  float: right;
  background-color: #007bff;
  color: white;
  width: 80px;
  height: 30px;
  border-radius: 5px;
}
.loginBtn:hover {
  background-color: #0063ce;
  text-align: center;
  transition-duration: 0.3s;
}
</style>
