<template>
  <div
    class="header-bg h-24 lg:h-32 bg-top bg-cover rounded-2xl m-1 lg:m-2 flex justify-center items-center relative overflow-hidden"
  >
    <div class="absolute w-full h-full backdrop-blur-sm"></div>
    <img class="h-24 lg:h-32 z-10" src="/coc-logo.png" alt="coc-logo" />
  </div>

  <div class="m-1 p-4 lg:m-2 rounded-2xl bg-gray-500">
    <div class="flex items-center space-x-4">
      <img
        class="w-20 h-20"
        :src="main.clan.badgeUrls.large"
        alt="clan-badge"
      />
      <div class="space-y-2">
        <h1 class="text-xl font-clash text-white drop-shadow-md">
          {{ main.clan.name }}
        </h1>
        <h6 class="font-clash text-sm border-b border-white inline-block">
          {{ main.clan.tag }}
        </h6>
        <p class="font-mono bg-white rounded-2xl p-1">
          {{ main.clan.description }}
        </p>
      </div>
    </div>
  </div>

  <div class="p-1 lg:p-2 space-y-1">
    <div
      class="bg-emerald-400 p-2 rounded-2xl font-clash border border-black"
      v-for="(member, index) in main.clan.memberList"
    >
      <span class="mr-4">{{ index + 1 }}. {{ member.name }}</span>
      <span class="bg-white p-1 rounded-2xl">{{ member.expLevel }}</span>
    </div>
  </div>

  <div
    class="m-1 lg:m-2 border border-black p-2 rounded-2xl text-right font-clash"
  >
    Ma'lumotlar {{ main.clanDataUpdateTime }} da yangilangan.
  </div>
</template>

<script setup>
import { mainStore } from "../stores/main";
const main = mainStore();
console.log(main.clan);
</script>

<style scoped>
.header-bg {
  background-image: url("/header-bg.jpg");
}
</style>
