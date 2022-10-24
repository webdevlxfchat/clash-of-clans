<template>
  <div
    class="header-bg h-24 lg:h-32 bg-top bg-cover rounded-2xl m-1 lg:m-2 flex justify-center items-center relative overflow-hidden">
    <div class="absolute w-full h-full backdrop-blur-sm"></div>
    <img class="h-24 lg:h-32 z-10" src="/coc-logo.png" alt="coc-logo" />
    <button @click="toggleAudio()" class="z-10 absolute right-6">
      <svg v-if="!isPlayAudio" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
      </svg>
    </button>
  </div>

  <div class="m-1 p-4 lg:m-2 rounded-2xl bg-gray-500">
    <div class="flex items-center space-x-4">
      <img class="w-20 h-20" :src="main.clan.badgeUrls.large" alt="clan-badge" />
      <div class="space-y-2">
        <h1 class="text-xl font-clash text-white drop-shadow-md">
          {{ main.clan.name }}
        </h1>
        <h6 class="font-clash text-sm border-b border-white inline-block">
          {{ main.clan.tag }}
        </h6>
        <p class="font-mono bg-white rounded-2xl p-2 text-xs">
          {{ main.clan.description }}
        </p>
      </div>
    </div>
  </div>

  <div class="p-1 lg:p-2 space-y-1">
    <div class="bg-emerald-400 p-2 rounded-2xl font-clash border border-black flex justify-between items-center"
      v-for="(member, index) in main.clan.memberList">
      <span class="mr-4">{{ index + 1 }}. {{ member.name }}</span>
      <img class="w-8 h-8" :src="[member.league.iconUrls.medium || member.league.iconUrls.small]" alt="league-icon" />
    </div>
  </div>

  <div class="m-1 lg:m-2 border border-black p-2 rounded-2xl text-right font-clash">
    Ma'lumotlar {{ main.clanDataUpdateTime }} da yangilangan.
  </div>
</template>

<script setup>
import { ref } from "vue";
import { mainStore } from "../stores/main";
const main = mainStore();

main.getData();

const isPlayAudio = ref(false);

const audio = new Audio("/music-bg.mp3");
audio.addEventListener('ended', () => {
  isPlayAudio.value = false;
})

function toggleAudio() {
  isPlayAudio.value = !isPlayAudio.value;

  if (isPlayAudio.value) {
    audio.play();
  } else {
    audio.pause();
  }
}
</script>

<style scoped>
.header-bg {
  background-image: url("/header-bg.jpg");
}
</style>
