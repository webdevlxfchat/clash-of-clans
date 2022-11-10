<template>
  <div class="p-4 lg:p-8">
    <Listbox as="div" v-model="selected">
      <ListboxLabel
        class="block text-sm font-medium text-gray-700 dark:text-gray-500">
        Jamoa a'zolari
      </ListboxLabel>
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full cursor-default rounded-md border border-gray-300 bg-white dark:bg-black py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
          <span class="flex items-center">
            <img
              :src="
                selected.league.iconUrls.small || selected.league.iconUrls.tiny
              "
              :alt="selected.league.name"
              class="h-6 w-6 flex-shrink-0" />
            <span class="ml-3 block truncate tracking-wide font-clash">
              {{ selected.name }}
            </span>
          </span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true" />
          </span>
        </ListboxButton>
        <transition
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0">
          <ListboxOptions
            class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption
              as="template"
              v-for="member in members"
              :key="member.tag"
              :value="member"
              v-slot="{ active, selected }">
              <li
                :class="[
                  active
                    ? 'text-white bg-indigo-600'
                    : 'text-gray-900 dark:text-white',
                  'relative cursor-default select-none py-2 pl-3 pr-9',
                ]">
                <div class="flex items-center">
                  <img
                    :src="
                      member.league.iconUrls.small ||
                      member.league.iconUrls.tiny
                    "
                    :alt="member.clanRank"
                    class="h-6 w-6 flex-shrink-0" />
                  <span class="ml-3 block truncate tracking-wide font-clash">
                    {{ member.name }}
                  </span>
                </div>
                <span
                  v-if="selected"
                  :class="[
                    active ? 'text-white' : 'text-indigo-600',
                    'absolute inset-y-0 right-0 flex items-center pr-4',
                  ]">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
    <MemberInfo :member="selected" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import { mainStore } from "../stores/main";
import MemberInfo from "./MemberInfo.vue";
import { useFavicon, useTitle } from "@vueuse/core";

const members = mainStore().clan.memberList;

const selected = ref(members.find((member) => member.name === "SHAXZOD"));

watch(selected, () => {
  useFavicon(selected.value.league.iconUrls.tiny);
  useTitle("Jamoa a'zosi | " + selected.value.name);
});

setTimeout(() => {
  useFavicon(selected.value.league.iconUrls.tiny);
  useTitle("Jamoa a'zosi | " + selected.value.name);
}, 5000);
</script>
