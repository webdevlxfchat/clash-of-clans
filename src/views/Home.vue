<template>
  <div class="absolute right-20 z-50 flex flex-col items-center">
    <div class="w-1 h-20 bg-black"></div>
    <div
      class="bg-red-700 text-white font-bold rounded-md animate-wiggle shadow-md shadow-red-900"
    >
      <RouterLink class="inline-block p-4" to="/news"> News </RouterLink>
    </div>
  </div>
  <div
    v-if="visibleText"
    class="fixed right-20 bottom-4 bg-red-700 text-white z-50 animate-pulse p-2 rounded-md shadow-md shadow-red-900">
    Clan Startupga xush kelibsiz!!!
  </div>
  <NavBar />
  <ClanInfo />
  <MembersInfo />
  <Footer />
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import ClanInfo from "../components/ClanInfo.vue";
import MembersInfo from "../components/MembersInfo.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";

const visibleText = ref(true);

setTimeout(() => {
  visibleText.value = false;
}, 5000);
</script>
