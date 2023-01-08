<template>
  <div class="absolute top-4 left-4">
    <RouterLink
      class="rounded-full shadow-md dark:shadow-white px-3 py-2"
      to="/"
    >
      &LeftArrow;
    </RouterLink>
  </div>
  <h1 class="text-3xl text-center font-bold py-4">News</h1>
  <ul class="lg:grid lg:grid-cols-3 lg:gap-4 p-4">
    <li
      class="shadow-md dark:shadow-white rounded-md overflow-hidden"
      v-for="item in news"
      :key="item.title"
    >
      <img :src="item.image" :alt="item.title" />
      <div class="p-4 space-y-2">
        <h2 class="text-lg font-bold">{{ item.title }}</h2>
        <p class="text-gray-500">{{ item.description }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const news = ref([
  {
    image: "https://pbs.twimg.com/media/FlUJzmCXwAMbmbM?format=jpg",
    title: "Here's to a happy 2023! 🎆",
    description:
      "Thank you for a great 2022, Chiefs! May all your wishes come true in the New Year!",
  },
]);
</script>
