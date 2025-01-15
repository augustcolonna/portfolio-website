<script setup lang="ts">
  import VueLogo from '/assets/images/vue-fill-svgrepo-com.svg';
  import NuxtLogo from '/assets/images/nuxt-js-svgrepo-com.svg';
  import ReactLogo from '/assets/images/react-svgrepo-com.svg';
  import TypescriptLogo from '/assets/images/typescript-svgrepo-com.svg';
  import JavascriptLogo from '/assets/images/javascript-svgrepo-com.svg';
  import SassLogo from '/assets/images/sass-svgrepo-com.svg';
  import CssLogo from '/assets/images/css-svgrepo-com.svg';
  import PythonLogo from '/assets/images/python-16-svgrepo-com.svg';
  import NodeLogo from '/assets/images/node-16-svgrepo-com.svg';
  import DockerLogo from '/assets/images/docker-svgrepo-com.svg';
  import PostgresqlLogo from '/assets/images/postgresql-svgrepo-com.svg';
  import JestLogo from '/assets/images/jest-svgrepo-com.svg';
  import CypressLogo from '/assets/images/cypress-svgrepo-com.svg';
  import GitLogo from '/assets/images/git-svgrepo-com.svg';
  import GitlabLogo from '/assets/images/gitlab-svgrepo-com.svg';
</script>

<template>
  <div class="h-full">
    <main>
      <section class="px-12 md:px-16 lg:px-48 xl:px-60 py-12 fade-in xl:min-h-screen flex items-center">
        <div class="flex flex-col xl:flex-row items-center justify-start bg-secondary rounded-xl py-4 px-4 w-full">
          <img
            class="h-30 w-30 md:h-60 md:w-60 lg:h-80 lg:w-80 xl:h-96 xl:w-96 bg-primary rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            src="/assets/images/profile.png"
            alt="August"
          />
          <h2 class="text-5xl text-center xl:text-right xl:mx-30 font-bold">
            I'm August,
            <br />
            <span
              class="bg-gradient-to-r from-black to-darkGreen bg-clip-text text-transparent tracking-wide text-4xl md:text-5xl lg:text-[6rem] xl:text-[7rem]"
            >
              a Software developer
            </span>
          </h2>
        </div>
      </section>

      <section
        class="xl:min-h-screen flex flex-col items-center justify-center tracking-wide px-12 md:px-16 lg:px-48 xl:px-60 py-12 fade-in"
      >
        <div class="flex flex-col tracking-wide bg-secondary rounded-xl py-4 px-4 mt-4">
          <p class="text-left py-2 text-l font-bold">
            Proficient in both back-end and front-end development.
            <br />
            Work with various programming languages and frameworks.
            <br />
            Have an eye for design.
            <br />
            Am willing to learn new technologies.
            <br />
            Constantly failing, learning, and growing.
          </p>
        </div>
      </section>

      <section
        class="xl:min-h-screen flex flex-col items-center justify-center bg-accent tracking-wide fade-in px-12 md:px-16 lg:px-48 xl:px-60 py-12 fade-in"
      >
        <div class="flex row items-center justify-center xl:justify-start" style="width: 100%">
          <h2 class="text-5xl py-5 font-bold text-primary">My Stack</h2>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-8 md:px-16 lg:px-48 xl:px-55 py-12"
          style="width: 100%; height: 100%"
        >
          <StackContainer :path="VueLogo" stack="Vue" />
          <StackContainer :path="NuxtLogo" stack="Nuxt" />
          <StackContainer :path="ReactLogo" stack="React" />
          <StackContainer :path="TypescriptLogo" stack="Typescript" />
          <StackContainer :path="JavascriptLogo" stack="Javascript" />
          <StackContainer :path="SassLogo" stack="Sass" />
          <StackContainer :path="CssLogo" stack="CSS" />
          <StackContainer :path="PythonLogo" stack="Python" />
          <StackContainer :path="NodeLogo" stack="Node.js" />
          <StackContainer :path="DockerLogo" stack="Docker" />
          <StackContainer :path="PostgresqlLogo" stack="Postgresql" />
          <StackContainer :path="JestLogo" stack="Jest" />
          <StackContainer :path="CypressLogo" stack="Cypress" />
          <StackContainer :path="GitLogo" stack="Git" />
          <StackContainer :path="GitlabLogo" stack="Gitlab" />
        </div>
      </section>

      <section class="xl:min-h-screen px-12 md:px-16 lg:px-48 xl:px-55 py-12 fade-in">
        <div class="flex items-center justify-center xl:justify-start">
          <h2 class="text-5xl py-5 font-bold text-accent">What I do</h2>
        </div>
        <div class="flex flex-col items-center">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 px-8 md:px-16 lg:px-48 xl:px-55 py-12 cursor-cursor"
          >
            <div
              class="flex flex-col items-center justify-start bg-accent rounded-lg p-5 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <h3 class="text-2xl font-bold">Front End</h3>
              <p class="text-center">
                I am the sole front end developer on my team - I maintain our front end code while also managing
                multiple repositories, design and develop new UI's, update documentation, and of course, squash bugs
                that come up.
              </p>
            </div>
            <div
              class="flex flex-col items-center justify-start bg-accent rounded-lg p-5 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <h3 class="text-2xl font-bold">Back End</h3>
              <p class="text-center">
                I also enjoy backend development, including building applications that require tie-ins to our custom
                API's, and writing back-end services that connect our applications to our hardware and databases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="flex flex-col items-center justify-center tracking-wide fade-in">
          <h2 class="text-2xl py-5 md:text-6xl lg:text-[8rem] xl:text-[9rem] font-bold text-center text-accent">
            My Experience
          </h2>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
  @use '/assets/style/colors.scss' as colors;
  .fade-in {
    animation: fade-in 1s;
  }

  // .image-shadow {
  //   box-shadow: 5px 5px 5px 0px colors.$accent;
  // }

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
