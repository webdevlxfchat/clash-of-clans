<template>
  <div
    class="bg-[url('/images/header-bg.jpg')] h-24 lg:h-32 bg-top bg-cover flex justify-center items-center overflow-hidden sticky top-0 z-20">
    <div class="absolute w-full h-full backdrop-blur-sm"></div>
    <img @click="start()" class="absolute h-24 lg:h-32 z-10" src="/images/coc-logo.png" alt="coc-logo" />
  </div>
</template>

<script setup>
const audio = new Audio("/audios/halloween-intro.mp3");

function start() {
  audio.play();
}
</script>
