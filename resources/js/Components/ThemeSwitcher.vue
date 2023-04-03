<template>
  <!-- Sun icon -->
  <div class="theme-icon cursor-pointer" v-if="selectedTheme == 'night'" >
    <i-bi-sun-fill @click="changeTheme('cupcake')" />
  </div>
  <!-- sun icon -->
  <div class="theme-icon cursor-pointer" v-if="selectedTheme == 'cupcake'" >
    <i-bi-moon-stars-fill @click="changeTheme('night')" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

let selectedTheme = ref(null);
const changeTheme = function (theme) {
  const body = document.querySelector("#html");
  body.dataset.theme = theme;
  selectedTheme.value = theme;
};
onMounted(() => {
  const body = document.querySelector("#html");
  selectedTheme.value = body.dataset.theme;
});
</script>

<style scoped lang="postcss">
.theme-icon {
    @apply transition-all duration-500 ease-out;
}
</style>
