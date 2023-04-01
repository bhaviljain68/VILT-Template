<template>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input type="checkbox" class="invisible"/>

    <!-- moon icon -->
    <div class="swap-on fill-current" >
      <i-bi-moon-stars-fill @click="changeTheme('night')"/>
    </div>
    <!-- sun icon -->
    <div class="swap-off fill-current">
      <i-bi-sun-fill @click="changeTheme('cupcake')"/>
    </div>

  </label>
</template>

<script setup>
const changeTheme = function (theme) {
  const body = document.querySelector("#html");
  body.dataset.theme = theme;
};
</script>
