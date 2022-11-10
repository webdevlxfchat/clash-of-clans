<template>
  <div class="mt-6 relative overflow-hidden bg-white dark:bg-black">
    <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div class="sm:max-w-lg">
          <h1
            class="font text-2xl font-bold tracking-wide text-black dark:text-white sm:text-5xl font-clash">
            {{ member.name }}
          </h1>
          <p class="mt-4 text-xl text-gray-500 dark:text-gray-400 capitalize">
            {{ member.role }}
          </p>
        </div>
        <div>
          <div class="mt-10">
            <!-- Decorative image grid -->
            <div
              aria-hidden="true"
              class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <div
                class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div
                    class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div
                      class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img
                        src="/images/1.jfif"
                        alt="1"
                        class="h-full w-full object-cover" />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="/images/2.jfif"
                        alt="1"
                        class="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div
                    class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="/images/2.jfif"
                        alt="1"
                        class="h-full w-full object-cover" />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="/images/3.jfif"
                        alt="1"
                        class="h-full w-full object-cover" />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="/images/1.jfif"
                        alt="1"
                        class="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div
                    class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="/images/4.jfif"
                        alt="1"
                        class="h-full w-full object-cover" />
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="/images/5.jfif"
                        alt="1"
                        class="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#"
              class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">
              {{ member.expLevel }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  member: {
    type: Object,
    required: true,
  },
});
</script>
