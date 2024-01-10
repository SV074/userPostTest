<script setup lang="ts">

</script>

<template>
  <div class="main">
    <div class="main__inner">
      <nav-bar class="main__nav-bar">
        <router-link :to="{ name: 'PostsList' }" class="link">
          <h1 class="main__link-title">Страница списка постов</h1>
        </router-link>
      </nav-bar>
    </div>
    <main></main>
    <footer></footer>
  </div>
</template>

<style scoped>
.main {
  height: 100%; 
}
.main__inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main__nav-bar {
  display: flex;
  justify-content: center;
  width: 100%;
  background: rgb(184, 184, 184);
}

.main__link-title {
  font-weight: normal;
  color: aliceblue;
}

a {
  text-decoration: none;
}

</style>