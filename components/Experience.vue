<script setup lang="ts">
  const props = defineProps<{
    location: string;
    date: string;
    position: string;
    summary: string;
  }>();
</script>

<template>
  <div class="fade-in">
    <div class="grid grid-cols-3 gap-30 items-center justify-center">
      <h3>{{ props.location }}</h3>
      <h3>{{ props.date }}</h3>
      <h3>{{ props.position }}</h3>
    </div>

    <p>{{ props.summary }}</p>
  </div>
</template>

<style lang="scss">
  @use '/assets/style/colors.scss' as colors;

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .fade-in {
    animation: fade-in 1s;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
