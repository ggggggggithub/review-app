<template>
  <div>
    <h1>리뷰 앱 메인 화면</h1>
    <nav>
      <router-link to="/books">책</router-link>
      <router-link to="/movies">영화</router-link>
      <router-link to="/dramas">드라마</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>
