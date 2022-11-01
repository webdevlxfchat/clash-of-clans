<template>
  <div class="p-4 lg:p-8 grid lg:grid-cols-4 gap-16">
    <div class="lg:col-span-3">
      <h2 class="text-3xl lg:text-4xl font-bold text-white font-clash text-shadow-clash-style tracking-wide">
        {{ clan.name }}
      </h2>
      <p class="mt-4 text-gray-500">{{ clan.description }}</p>
      <dl class="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 lg:gap-y-16 lg:gap-x-8">
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">Jamoa a'zolari soni</dt>
          <dd class="mt-2 text-lg text-gray-500">{{ clan.members }} ta</dd>
        </div>
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">Urush ligasi</dt>
          <dd class="mt-2 text-lg text-gray-500">{{ clan.warLeague.name }}</dd>
        </div>
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">G'alabalar</dt>
          <dd class="mt-2 text-lg text-gray-500">{{ clan.warWins }} ta</dd>
        </div>
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">Mag'lubiyatlar</dt>
          <dd class="mt-2 text-lg text-gray-500">{{ clan.warLosses }} ta</dd>
        </div>
      </dl>
    </div>
    <div class="col-span-1 lg:col-span-1 grid grid-cols-3 gap-4 place-items-center">
      <img @click="alertShow(clan.name)" @contextmenu.prevent="alertShow(clan.name)"
        :src="clan.badgeUrls.large || clan.badgeUrls.medium || clan.badgeUrls.small" :alt="clan.name"
        class="rounded-lg bg-gray-100 col-span-3" />
      <img @click="alertShow(label.name)" @contextmenu.prevent="alertShow(label.name)" v-for="label in clan.labels"
        :src="label.iconUrls.medium || label.iconUrls.small" :alt="label.name" />
    </div>
  </div>
</template>

<script setup>
import { mainStore } from "../stores/main"

const clan = mainStore().clan;

function alertShow(name) {
  alert(name);
}
</script>
