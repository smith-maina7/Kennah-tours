<script setup>
import { RouterView } from 'vue-router'
import Navigation from '@/components/TheNavigation.vue'
</script>

<template>
  <Navigation />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped></style>
