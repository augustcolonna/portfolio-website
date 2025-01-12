<template>
  <div class="h-full">
    <main>
      <!-- <div class="md:pt-16 lg:pt-32"></div> -->
      <section class="px-12 md:px-16 lg:px-48 xl:px-55 py-12">
        <h2 class="text-5xl md:text-6xl lg:text-[8rem] xl:text-[9rem] font-bold">
          I'm August
          <br />
          <span
            class="bg-gradient-to-r from-black to-darkGreen bg-clip-text text-transparent tracking-wide text-4xl md:text-5xl lg:text-[6rem] xl:text-[7rem]"
          >
            a Software developer
          </span>
        </h2>
        <p class="text-right text-3xl md:text-3xl lg:text-4xl xl:text-5xl pt-5">
          I'm proficient in both back-end and front-end development, and am adept at working with various programming
          languages and frameworks.
        </p>
      </section>

      <section class="flex flex-col items-center justify-center bg-accent tracking-wide">
        <h2 class="text-2xl py-5 md:text-6xl lg:text-[8rem] xl:text-[9rem] font-bold text-center text-primary">
          My Stack
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-8 md:px-16 lg:px-48 xl:px-55 py-12">
          <img class="w-14 px-1" src="/assets/images/vue-fill-svgrepo-com.svg" target="_blank" alt="Vue" />
          <img class="w-14 px-1" src="/assets/images/nuxt-js-svgrepo.com.svg" target="_blank" alt="Nuxt" />
          <img class="w-14 px-1" src="/assets/images/react-svgrepo-com.svg" target="_blank" alt="React" />
          <img class="w-14 px-1" src="/assets/images/typescript-svgrepo-com.svg" target="_blank" alt="Typescript" />
          <img class="w-14 px-1" src="/assets/images/javascript-svgrepo-com.svg" target="_blank" alt="Javascript" />
          <img class="w-14 px-1" src="/assets/images/sass-svgrepo-com.svg" target="_blank" alt="Sass" />
          <img class="w-14 px-1" src="/assets/images/css-svgrepo-com.svg" target="_blank" alt="CSS" />
          <img class="w-14 px-1" src="/assets/images/python-16-svgrepo-com.svg" target="_blank" alt="Python" />
          <img class="w-14 px-1" src="/assets/images/node-16-svgrepo-com.svg" target="_blank" alt="Node.js" />
          <img class="w-14 px-1" src="/assets/images/docker-svgrepo-com.svg" target="_blank" alt="Docker" />
          <img class="w-14 px-1" src="/assets/images/postgresql-svgrepo-com.svg" target="_blank" alt="Postgresql" />
          <img class="w-14 px-1" src="/assets/images/mongodb-svgrepo-com.svg" target="_blank" alt="MongoDb" />
          <img class="w-14 px-1" src="/assets/images/jest-svgrepo-com.svg" target="_blank" alt="Jest" />
          <img class="w-14 px-1" src="/assets/images/cypress-svgrepo-com.svg" target="_blank" alt="Cypress" />
          <img class="w-14 px-1" src="/assets/images/git-svgrepo-com.svg" target="_blank" alt="Git" />
          <img class="w-14 px-1" src="/assets/images/gitlab-svgrepo-com.svg" target="_blank" alt="Gitlab" />
        </div>
      </section>

      <section class="px-12 md:px-16 lg:px-48 xl:px-55 py-12">
        <h2 class="text-2xl md:text-6xl lg:text-[8rem] xl:text-[9rem] font-bold text-center text-accent">What I do</h2>
        <div class="flex flex-col items-center">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 px-8 md:px-16 lg:px-48 xl:px-55 py-12">
            <div class="flex flex-col items-center justify-start">
              <h3 class="text-2xl font-bold">Front End</h3>
              <p class="text-center">
                I am the sole Front end developer on my team, so my responsibilities are quite vast. I maintain all of
                our front end code and manage multiple front end repositories, design and develop new UI's, update
                documentation, and of course, squash bugs that come up.
              </p>
            </div>
            <div class="flex flex-col items-center justify-start">
              <h3 class="text-2xl font-bold">Back End</h3>
              <p class="text-center">
                I also do a fair amount of backend development, including building applications that require tie-ins to
                our custom API's, and write back-end services that connect our applications to our hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="flex flex-col items-center justify-center tracking-wide">
          <h2 class="text-2xl py-5 md:text-6xl lg:text-[8rem] xl:text-[9rem] font-bold text-center text-accent">
            My Projects
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-8 md:px-16 lg:px-48 xl:px-55 py-12">
            <div class="flex flex-col items-center justify-start">
              <h3 class="text-2xl font-bold">Project 1</h3>
              <p class="text-center">
                This is a project I worked on that was a full stack application that was built using Vue.js, Node.js,
                and MongoDB. It was a project management tool that allowed users to create projects, assign tasks, and
                track progress.
              </p>
            </div>
            <div class="flex flex-col items-center justify-start">
              <h3 class="text-2xl font-bold">Project 2</h3>
              <p class="text-center">
                This was a project that I worked on that was a front end application that was built using React.js. It
                was a social media platform that allowed users to create posts, comment on posts, and like posts.
              </p>
            </div>
            <div class="flex flex-col items-center justify-start">
              <h3 class="text-2xl font-bold">Project 3</h3>
              <p class="text-center">
                This was a project that I worked on that was a back end application that was built using Node.js and
                Express.js. It was a RESTful API that allowed users to create, read, update, and delete data from a
                database.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="css"></style>
