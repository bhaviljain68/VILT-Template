<script setup>
import { Link } from "@inertiajs/vue3";
const props = defineProps({
  toBlade: {
    default: false,
  },
});
const classes =
  "block w-full px-4 py-2 text-left text-sm leading-5 text-base-content hover:bg-base-300 focus:outline-none focus:bg-gray-100 transition duration-300 ease-in-out first:rounded-t-md last:rounded-b-md";
</script>

<template>
  <a v-if="toBlade" :class="classes" class="">
    <slot/>
  </a>
  <Link v-else :class="classes">
    <slot />
  </Link>
</template>
