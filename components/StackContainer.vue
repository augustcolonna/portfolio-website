<script setup lang="ts">
  const props = defineProps<{
    path: string;
    stack: string;
  }>();
</script>

<template>
  <div class="relative group cursor-pointer flex items-center justify-center">
    <img class="h-14 px-1 group-hover:opacity-0 transition-opacity duration-300" :src="props.path" :alt="props.stack" />
    <div
      class="absolute flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <p class="text-5xl text-bold text-primary">{{ props.stack }}</p>
    </div>
  </div>
</template>
