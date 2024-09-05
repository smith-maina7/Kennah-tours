<script setup>
import data from '@/data.json'
import { computed, defineProps } from 'vue'

const props = defineProps({
  id: { type: Number, required: true },
  experienceSlug: { type: String, required: true }
})

const destination = computed(() =>
  data.destinations.find((destination) => destination.id === props.id)
)
const experience = computed(() =>
  destination.value.experiences.find((experience) => experience.slug === props.experienceSlug)
)
</script>

<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </section>
</template>

<style scoped>
img {
  max-width: 250px;
  height: auto;
}
</style>
