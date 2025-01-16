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

  type Experience = {
    location: string;
    place: string;
    date: string;
    position: string;
    summary: string;
  };

  const experience: Experience[] = [
    {
      location: 'Munich, Germany',
      place: 'Kinexon',
      date: '2021 - Present',
      position: 'Software Engineer',
      summary: 'Developing and maintaining software for the sports industry.',
    },
    {
      location: 'Munich, Germany',
      place: 'IronHack',
      date: '2021',
      position: 'Career Transition',
      summary: 'Attended IronHack to transition into a software developer role.',
    },
    {
      location: 'Lehi, Utah',
      place: 'Podium and Shopmonkey',
      date: '2019 - 2021',
      position: 'Tech Sales',
      summary: 'Worked in tech sales for Shopmonkey and Podium.',
    },
    {
      location: 'Salt Lake City, Utah',
      place: 'The University of Utah',
      date: '2016 - 2021',
      position: 'Student',
      summary: 'Studied at the University of Utah.',
    },
  ];

  const itemToShow = ref<Experience>(experience[0]);
  const showSelected = (item: Experience) => {
    if (itemToShow.value !== item) {
      itemToShow.value = item;
    } else {
      itemToShow.value = experience[0];
    }
  };
</script>

<template>
  <div class="h-full">
    <main>
      <section class="px-12 md:px-16 lg:px-48 xl:px-60 py-12 fade-in xl:min-h-screen flex flex-col items-center">
        <div class="flex flex-col xl:flex-row items-center bg-accent rounded-xl py-4 px-4">
          <img
            class="h-30 w-30 md:h-60 md:w-60 lg:h-80 lg:w-80 xl:h-96 xl:w-96 bg-primary transition-transform duration-300 hover:scale-105 rounded-bl-full rounded-br-full rounded-tr-full"
            src="/assets/images/profile.png"
            alt="August"
          />

          <h2 class="text-5xl text-center xl:text-right text-primary font-bold">
            I'm August,
            <br />
            <span class="text-secondary tracking-wide text-4xl md:text-5xl lg:text-[6rem] xl:text-[6rem]">
              a Software developer
            </span>
          </h2>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-5 tracking-wide gap-4 py-4">
          <div class="flex flex-col items-center justify-center bg-accent rounded-lg p-5 fade-in-sequence">
            <p class="text-center xl:text-left text-primary py-2 text-l font-bold py-4 px-4 mt-4">
              Experience in back-end and front-end development
            </p>
            <img class="w-36 mx-auto" src="/assets/images/code-block-svgrepo-com.svg" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center bg-accent rounded-lg p-5 fade-in-sequence">
            <p class="text-center xl:text-left text-primary py-2 text-l font-bold py-4 px-4 mt-4">
              Have an eye for design and attention to
              <br />
              detail
            </p>
            <img class="w-36 mx-auto" src="/assets/images/eye-svgrepo-com.svg" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center bg-accent rounded-lg p-5 fade-in-sequence">
            <p class="text-center text-primary py-2 text-l font-bold py-4 px-4 mt-4">
              Desire for feedback to continuously improve my skills
            </p>
            <img class="w-36 mx-auto" src="/assets/images/comments-svgrepo-com.svg" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center bg-accent rounded-lg p-5 fade-in-sequence">
            <p class="text-center xl:text-right text-primary py-2 text-l font-bold py-4 px-4 mt-4">
              Constantly failing, learning, and growing
            </p>
            <img class="w-36 mx-auto" src="/assets/images/brain-10-svgrepo-com.svg" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center bg-accent rounded-lg p-5 fade-in-sequence">
            <p class="text-center xl:text-right text-primary py-2 text-l font-bold py-4 px-4 mt-4">
              Work with various programming languages and frameworks
            </p>
            <img class="w-36 mx-auto" src="/assets/images/stack1-svgrepo-com.svg" alt="" />
          </div>
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

      <section
        class="xl:min-h-screen flex flex-col items-center justify-center tracking-wide fade-in px-12 md:px-16 lg:px-48 xl:px-60 py-12 fade-in"
      >
        <div class="flex row items-center justify-center xl:justify-start" style="width: 100%">
          <h2 class="text-5xl py-5 font-bold text-accent">What and Where</h2>
        </div>
        <div class="flex flex-column xl:flex-row bg-accent rounded-lg p-5">
          <!-- Left: List -->
          <div class="flex flex-row xl:flex-col items-center justify-center min-w-1/4">
            <ul class="">
              <li
                v-for="item in experience"
                :key="item.place"
                class="py-4 px-4 bg-accent text-primary rounded-lg mb-4 hover:bg-primary hover:text-accent hover:cursor-pointer"
                @click="showSelected(item)"
              >
                <h1 class="font-bold">{{ item.position }}</h1>
                <h2>{{ item.place }}</h2>
              </li>
            </ul>
          </div>

          <!-- Right: Experience Component -->
          <div class="ml-4 min-w-3/4">
            <Experience
              :location="itemToShow.location"
              :date="itemToShow.date"
              :position="itemToShow.position"
              :summary="itemToShow.summary"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
  @use '/assets/style/colors.scss' as colors;

  .fade-in-sequence {
    opacity: 0;
    animation: fade-in 1s forwards;
  }

  .fade-in-sequence:nth-child(1) {
    animation-delay: 0.2s;
  }

  .fade-in-sequence:nth-child(2) {
    animation-delay: 0.4s;
  }

  .fade-in-sequence:nth-child(3) {
    animation-delay: 0.6s;
  }

  .fade-in-sequence:nth-child(4) {
    animation-delay: 0.8s;
  }

  .fade-in-sequence:nth-child(5) {
    animation-delay: 1s;
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
