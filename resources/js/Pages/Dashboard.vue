<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import { Link } from "@inertiajs/vue3";
</script>

<template>
  <Head title="Dashboard" />

  <AuthenticatedLayout>
    <template #breadcrumbs>
      <li><a :href="route('home')">Home</a></li>
      <li><Link :href="route('dashboard')">Dashboard</Link></li>
    </template>
    <div>
      <div class="content-card">You're logged in!</div>
      <!-- <button class="btn btn-primary" @click="test">Test</button> -->
    </div>
  </AuthenticatedLayout>
</template>
