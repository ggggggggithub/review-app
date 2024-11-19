<template>
  <div>
    <header class="header">
      <h1 class="title">책 목록</h1>
    </header>
    <main>
      <ul v-if="books.length > 0">
        <li v-for="book in books" :key="book.id">{{ book.title }}</li>
      </ul>
      <p v-else>불러오는 중...</p>
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "BookPage",
  setup() {
    const books = ref([]); // 책 목록을 저장할 상태

    // Mock 데이터를 가져오는 함수
    const fetchBooks = async () => {
      try {
        const response = await fetch("/book.json"); // 로컬 JSON 파일 경로
        if (!response.ok) {
          throw new Error("데이터를 가져오는데 실패했습니다.");
        }
        books.value = await response.json(); // JSON 데이터를 상태에 저장
      } catch (error) {
        console.error("책 목록을 불러오는 중 오류가 발생했습니다:", error);
      }
    };

    onMounted(() => {
      fetchBooks(); // 컴포넌트가 마운트될 때 데이터 가져오기
    });

    return {
      books,
    };
  },
};
</script>

<style scoped>
.header {
  text-align: center;
  background-color: #28a745;
  color: white;
  padding: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
}

li:last-child {
  border-bottom: none;
}
</style>