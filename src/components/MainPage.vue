<template>
  <div>
    <header class="header">
      <h1 class="title">ReviewAll</h1>
      <div class="login-container">
        <router-link to="/login" class="login-button">로그인</router-link>
      </div>
    </header>
    <main>
      <nav>
        <router-link to="/books">책</router-link>
        <router-link to="/movies">영화</router-link>
        <router-link to="/dramas">드라마</router-link>
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
  background-color: #28a745; /* 초록색 배경 */
  text-align: center;
  padding: 1rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
}

.login-container {
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
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
</style>
