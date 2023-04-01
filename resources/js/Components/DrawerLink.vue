<template>
  <li :class="{ active: route().current(routeName) }" class="rounded w-full">
    <Link :href="route(routeName)" class="capitalize">{{ displayName }}</Link>
  </li>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
const props = defineProps(['displayName','routeName']);
</script>

<style lang="postcss">
.active {
  @apply bg-primary text-primary-content rounded-lg;
}
</style>
