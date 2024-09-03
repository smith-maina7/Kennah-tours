<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import data from '@/data.json'

const route = useRoute()
const routerId = computed(() => parseInt(route.params.id))

const destination = computed(() => data.destinations.find((d) => d.id === routerId.value))
</script>

<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>
