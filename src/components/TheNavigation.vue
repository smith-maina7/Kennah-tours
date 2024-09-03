<script setup>
import data from '@/data.json'

const destinations = data.destinations
</script>
<template>
  <div id="nav">
    <router-link id="logo" to="/">Kennah-Tours </router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination', params: { id: destination.id, slug: destination.slug } }"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>
