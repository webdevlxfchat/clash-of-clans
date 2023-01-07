<script setup>
import { RouterView } from "vue-router";
import CustomParticles from "@/components/Particles.vue";
import { useDark } from "@vueuse/core";

useDark();
</script>

<template>
  <RouterView />
  <CustomParticles />
</template>
