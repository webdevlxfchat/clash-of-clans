<template>
  <h1 class="font-clash text-center text-3xl py-6 bg-sky-300 rounded-b-full">
    Clash of Clans
  </h1>
</template>

<script setup>
import { mainStore } from "../stores/main";
const main = mainStore();

main.getMyBaseInfo();
</script>
