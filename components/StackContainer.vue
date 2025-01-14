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
      class="absolute inset-0 flex items-center rounded-full justify-center bg-primary bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl"
    >
      <p class="text-2xl text-bold">{{ props.stack }}</p>
    </div>
  </div>
</template>
