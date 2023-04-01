<template>
  <li class="!rounded-lg !mb-0">
    <input type="checkbox" class="invisible absolute" v-model="open" />
    <div
      class="cursor-pointer rounded-lg p-3 mb-2 ml-1 flex justify-between"
      @click="toggle"
    >
<span>{{ title }}</span>
<span>
    <i-material-symbols-keyboard-arrow-down-rounded v-if="!open"/>
    <i-material-symbols-keyboard-arrow-up-rounded v-else/>
</span>


    </div>
    <div class="!p-0 flex-col ml-4 gap-2 !bg-transparent" :class="classes">
      <DrawerLink v-for="(routeName,displayName) in routes" :displayName="displayName" :routeName="routeName" />
    </div>
  </li>
</template>

<!-- Your Java Script Here -->
<script setup>
import { ref, computed } from "vue";
import DrawerLink from "@/Components/DrawerLink.vue";
const props = defineProps(["routes", "title"]);
// Get Current Route
const currentRoute = route().current();
// Highlight if Active Route
const ulActive = Object.values(props.routes).includes(currentRoute) ? true : false;

// Dropdown Open-Close Logic
const open = ref(ulActive);
const toggle = () => (open.value = !open.value);

// Open Close Transition
const classes = computed(() => {
  return open.value ? "visible transition-all duration-300 mb-2" : "invisible h-0";
});
</script>

<!-- Your Styles Here -->
<style scoped></style>
