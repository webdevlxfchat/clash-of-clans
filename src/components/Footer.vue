<template>
  <div class="bg-indigo-600 mt-4 p-2 lg:p-4 lg:px-4 flex justify-between">
    <div class="flex items-center max-w-[288px] gap-3">
      <span class="flex rounded-lg bg-indigo-800 p-2">
        <ClockIcon class="h-5 w-5 text-white" aria-hidden="true" />
      </span>
      <div class="truncate font-medium text-white text-xs">
        <p class="moving-text">Ma'lumotlar {{ data }} da yangilangan.</p>
      </div>
    </div>
    <ToggleMode class="inline-block" />
  </div>
</template>

<script setup>
import { ClockIcon } from "@heroicons/vue/24/outline";
import { mainStore } from "../stores/main";
import ToggleMode from "./ToggleMode.vue";

const data = mainStore().clanDataUpdateTime;
</script>
