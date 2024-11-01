<template>
  <div>
    <header class="header">
      <h1>리뷰 앱 메인 화면</h1>
      <nav>
        <router-link to="/books">책</router-link>
        <router-link to="/movies">영화</router-link>
        <router-link to="/dramas">드라마</router-link>
        <router-link to="/login" class="login-button">로그인</router-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

nav {
  display: flex;
  gap: 1rem;
}

.login-button {
  margin-left: auto; /* 오른쪽으로 정렬 */
  padding: 0.5rem 1rem;
  background-color: #007bff; /* 원하는 배경색 */
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
