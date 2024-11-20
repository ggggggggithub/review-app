<template>
  <div>
    <header class="header">
      <h1 class="title">책 목록</h1>
    </header>
    <main>
      <div v-if="books.length > 0" class="book-list">
        <div v-for="book in books" :key="book.id" class="book-card">
          <div class="book-image" :style="{ backgroundImage: `url(${book.image})` }"></div>
          <p class="book-title">{{ book.title }}</p>
        </div>
      </div>
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
        const data = await response.json();
        // 데이터 정렬 (ID 순서대로)
        books.value = data.sort((a, b) => a.id - b.id);
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

.book-list {
  display: flex;
  flex-wrap: wrap; /* 화면 크기에 따라 줄바꿈 */
  gap: 20px; /* 카드 간격 */
  justify-content: flex-start;
  margin: 20px 0;
}

.book-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  text-align: center;
}

.book-image {
  width: 100px;
  height: 100px;
  background-color: #ddd;
  background-size: cover;
  background-position: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
}

.book-title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
</style>
