<template>
  <div>
    <header class="header">
      <h1 class="title">ReviewAll</h1>
      <div class="login-container">
        <router-link to="/login" class="login-button">로그인</router-link>
      </div>
    </header>
    <main>
      <nav class="nav-container">
        <router-link to="/books" class="nav-item">책</router-link>
        <router-link to="/movies" class="nav-item">영화</router-link>
        <router-link to="/dramas" class="nav-item">드라마</router-link>
      </nav>
    </main>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

.header {
  position: relative; /* 로그인 버튼을 절대 위치로 조정 */
  background-color: #28a745; /* 초록색 배경 */
  text-align: center; /* 제목을 중앙 정렬 */
  padding: 1rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.login-container {
  position: absolute; /* 부모 요소 기준으로 위치 설정 */
  top: 50%; /* 세로 중앙 정렬 */
  right: 1rem; /* 오른쪽 끝에 여백 */
  transform: translateY(-50%); /* 세로 중앙 맞춤 */
}

.login-button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.login-button:hover {
  background-color: #0056b3;
}

/* Nav 스타일 */
.nav-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
}

.nav-item {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0; /* 회색 배경 */
  border: 2px solid #ccc;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s, transform 0.2s;
}

.nav-item:hover {
  background-color: #dcdcdc; /* 밝은 회색 */
  transform: scale(1.1);
}
</style>
