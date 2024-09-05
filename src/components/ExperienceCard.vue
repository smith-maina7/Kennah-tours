<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  experience: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <img :src="`/images/${props.experience.image}`" :alt="props.experience.name" />
    <span class="card_text">{{ props.experience.name }}</span>
  </div>
</template>
<style scoped>
img {
  max-width: 250px;
  height: auto;
}
</style>
