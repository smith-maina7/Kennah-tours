<script setup>
import { computed } from 'vue'
import data from '@/data.json'
import experienceCard from '@/components/ExperienceCard.vue'
import BackBtn from '@/components/BackBtn.vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const destination = computed(() => data.destinations.find((d) => d.id === props.id))
</script>

<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <BackBtn />
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>

  <section class="experiences">
    <h2>Best experiences in {{ destination.name }}</h2>
    <div class="cards">
      <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{
          name: 'experience.show',
          params: { id: destination.id, slug: destination.slug, experienceSlug: experience.slug }
        }"
      >
        <experienceCard :experience="experience" />
      </router-link>
    </div>
    <RouterView />
  </section>
</template>

<style scoped>
img {
  max-width: 250px;
  height: auto;
}
</style>
