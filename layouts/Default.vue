<template>
  <header class="min-h-1/8 bg-cover">
    <nav class="h-full rounded-2xl p-8 backdrop-blur-sm">
      <ul class="flex h-full text-lg items-center justify-around font-bold">
        <li class="cursor-pointer rounded-full px-3 py-3 hover:bg-secondary hover:bg-opacity-75 duration-500">
          <NuxtLink
            class="cursor-pointer rounded-full px-3 py-3 hover:bg-secondary hover:bg-opacity-75 duration-500"
            active-class="bg-accent font-extrabold text-primary rounded-full px-5 py-3 hover:none"
            to="/"
          >
            HOME
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="cursor-pointer rounded-full px-3 py-3 hover:bg-secondary hover:bg-opacity-75 duration-500"
            active-class="bg-accent font-extrabold text-primary rounded-full px-5 py-3 hover:none"
            to="/contact"
          >
            CONTACT
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer class="sticky top-full flex flex-row items-center justify-center border-t-2 border-[#A4AC86]">
    <p class="pl-8 text-sm">@ 2025 August Colonna - Software Developer</p>
    <div class="flex jsutify-center p-2">
      <a href="#">
        <img class="w-8 px-1" src="/assets/images/github-svgrepo-com.svg" target="_blank" alt="GitHub" />
      </a>
      <a href="#">
        <img class="w-8 px-1" src="/assets/images/linkedin-161-svgrepo-com.svg" target="_blank" alt="LinkedIn" />
      </a>
    </div>
  </footer>
</template>
