<template>
  <div class="absolute top-4 left-4">
    <RouterLink class="rounded-full shadow dark:shadow-white px-3 py-2" to="/">
      &LeftArrow;
    </RouterLink>
  </div>
  <h1 class="text-3xl text-center font-bold py-4">News</h1>
  <ul class="grid lg:grid-cols-3 gap-4 p-4">
    <li
      class="shadow dark:shadow-white rounded-md overflow-hidden"
      v-for="item in news"
      :key="item.title">
      <img
        class="w-full h-64 object-cover object-top"
        :src="item.image"
        :alt="item.title" />
      <div class="p-4 space-y-2">
        <h2 class="text-lg font-bold">{{ item.title }}</h2>
        <p class="text-gray-500 dark:text-gray-400">{{ item.description }}</p>
      </div>
      <div class="pr-4 pb-2 flex justify-end">
        <span class="text-sm">{{ item.date }}</span>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const news = ref([
  {
    image: "/images/war-league.jpg",
    title: "Liga boshlanmoqda...",
    description:
      "Faol bo'ling va jamoamiz muvaffaqiyatida o'z hissangizni qo'shing.",
    date: "1-fevral 2023-yil",
  },
]);
</script>
