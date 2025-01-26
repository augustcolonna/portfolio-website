<script setup lang="ts">
  const props = defineProps<{
    location: string;
    date: string;
    position: string;
    summary: string;
  }>();
</script>

<template>
  <div class="fade-in flex flex-col items-center justify-center w-full px-4 md:px-8 lg:px-12">
    <div class="flex flex-row mt-4 xl:mt-10 w-full">
      <div class="flex flex-col justify-center w-full md:w-1/2">
        <p class="text-accent text-sm xl:text-xl md:text-left">When</p>
        <p class="text-accent font-extrabold text-sm xl:text-xl md:text-left">{{ props.date }}</p>
      </div>
      <div class="flex flex-col justify-center w-full md:w-1/2">
        <p class="text-accent text-sm xl:text-xl md:text-left">Where</p>
        <p class="text-accent font-extrabold text-sm xl:text-xl md:text-left">{{ props.location }}</p>
      </div>
    </div>

    <div
      class="text-accent flex items-center justify-center m-5 p-3 xl:m-10 xl:p-5 xl:line-height border-l-2 border-accent w-full"
    >
      <p class="text-left">{{ props.summary }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '/assets/style/colors.scss' as colors;

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
  .line-height {
    line-height: 1.8rem;
  }
</style>
