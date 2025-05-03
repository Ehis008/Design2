<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
  store.dispatch("fetchHeadlineNews");
});

const headline = computed(() => store.getters.getHeadlineNews);
</script>

<template>
  <header class="bg-light py-5">
    <div class="container text-center">
      <h1 class="text-primary mb-4">Headline News</h1>

      <div v-if="headline" class="card mx-auto shadow" style="max-width: 800px;">
        <img :src="headline.image_url" class="card-img-top" alt="Headline image" />
        <div class="card-body">
          <h3 class="card-title">{{ headline.title }}</h3>
          <p class="card-text">{{ headline.description }}</p>
        </div>
      </div>

      <div v-else>
        <p>Loading headline...</p>
      </div>
    </div>
  </header>
</template>
