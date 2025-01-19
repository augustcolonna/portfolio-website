<template>
  <nav class="h-full rounded-2xl p-8 backdrop-blur-sm">
    <ul class="flex h-full text-lg items-center justify-around font-bold">
      <li>
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
          class="cursor-pointer rounded-full bg-light px-3 py-3 hover:bg-secondary hover:bg-opacity-75 duration-500"
          active-class="bg-accent font-extrabold text-primary rounded-full px-5 py-3 hover:none"
          to="/contact"
        >
          WORK WITH ME
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
