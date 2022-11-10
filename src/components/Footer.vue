<template>
  <div class="bg-indigo-600 mt-4 p-2 lg:p-4 lg:px-4 flex justify-between">
    <div class="flex items-center max-w-[288px]">
      <span class="flex rounded-lg bg-indigo-800 p-2">
        <ClockIcon class="h-5 w-5 text-white" aria-hidden="true" />
      </span>
      <p class="ml-3 truncate font-medium text-white text-xs">
        Ma'lumotlar {{ data }} da yangilangan. Lorem ipsum dolor sit.
      </p>
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
