<template>
  <div class="bg-indigo-600 mt-4 p-4">
    <div class="flex items-center">
      <span class="flex rounded-lg bg-indigo-800 p-2">
        <ClockIcon class="h-5 w-5 text-white" aria-hidden="true" />
      </span>
      <p class="ml-3 truncate font-medium text-white text-xs">
        Ma'lumotlar {{ data }} da yangilangan.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ClockIcon } from '@heroicons/vue/24/outline';
import { mainStore } from '../stores/main';

const data = mainStore().clanDataUpdateTime;
</script>
