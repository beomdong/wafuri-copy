<template>
  <div>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <nav class="header">
      <router-link to="/character" class="linklogo">
        <img src="../assets/wafuri-logo.png" alt="로고" class="logo" />
      </router-link>
      <router-link to="/character" class="linkstyle"> 캐릭터 </router-link>
      <router-link to="/equipt" class="linkstyle"> 장비 </router-link>
      <router-link to="/formation" class="linkstyle"> 편성 </router-link>
      <router-link to="/stats" class="linkstyle"> 통계 </router-link>
      <router-link to="/follow" class="linkstyle"> 친구찾기 </router-link>
      <router-link to="/multi" class="linkstyle"> 멀티모집 </router-link>
      <router-link to="/gacha" class="linkstyle"> 가챠시뮬 </router-link>
      <router-link to="/vote" class="linkstyle"> 인기투표 </router-link>
      <router-link to="/guestbook" class="linkstyle"> 방명록 </router-link>
      <router-link to="/bot" class="linkstyle"> 디아봇 </router-link>
      <span>
        <img src="../assets/menu.png" alt="메뉴" class="menu" />
      </span>
      <button class="loginBtn">로그인</button>
    </nav>
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
  display: flex;
  background-color: #f8f9fa !important;
  font-size: 15px;
  box-shadow: 0 5px 5px -5px rgb(0 0 0 / 20%);
  align-items: center;
  justify-content: space-between;
}

.loginBtn {
  float: right;
  background-color: #007bff;
  color: white;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  align-items: center;
}
.loginBtn:hover {
  background-color: #0063ce;
  transition-duration: 0.3s;
  cursor: pointer;
}
.linkstyle:hover {
  background-color: rgb(228, 224, 224);
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
}
a.router-link-exact-active {
  font-size: 17px;
  font-weight: 1000;
}
.linklogo {
  cursor: pointer;
}
.menu {
  width: 45px;
  height: 35px;
  -o-object-fit: contain;
  object-fit: cover;
  display: none;
}
.menu:hover {
  cursor: pointer;
}

@media (max-width: 700px) {
  .linkstyle {
    display: none;
  }
  .loginBtn {
    display: none;
  }
  .menu {
    display: block;
  }
}
</style>
