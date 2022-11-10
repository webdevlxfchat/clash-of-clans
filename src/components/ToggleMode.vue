<template>
  <div
    class="p-2 rounded-lg"
    :class="[isDark ? 'bg-white' : 'bg-black']"
    @click="toggleDark()">
    <SunIcon class="w-5 h-5 text-black" v-if="isDark" />
    <MoonIcon class="w-5 h-5 text-white" v-else />
  </div>
</template>

<script setup>
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
