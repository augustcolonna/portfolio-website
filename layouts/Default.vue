<template>
  <div class="h-full">
    <header class="min-h-1/8 bg-cover">
      <Navigation />
    </header>

    <main>
      <slot />
    </main>

    <footer class="sticky top-full flex flex-row items-center justify-center border-t-2 border-[#A4AC86]">
      <Foot />
    </footer>
  </div>
</template>
