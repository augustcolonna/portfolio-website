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
    stack?: string[];
  };

  const experience: Experience[] = [
    {
      location: 'Munich, Germany',
      place: 'Kinexon',
      date: 'Feb 2024 - Present',
      position: 'Software Engineer',
      summary:
        'Responsible for the front end development for the LPS team and back end development in the SensorNetwork. I have gained experience in learning complex relationships between our hardware and software applications, reading legacy code and applying refactors to reduce technical debt and promote clean and maintainable code, working within a team with various goals set per sprint, as well as developing brand new UIs to modernize existing applications.',
      stack: ['Vue', 'Typescript', 'Javascript', 'Python', 'Docker', 'PostgreSQL', 'Jest', 'Cypress', 'Git', 'Gitlab'],
    },
    {
      location: 'Garmisch-Pa., Germany',
      place: 'IronHack',
      date: ' June 2022 - Feb 2024',
      position: 'Career Transition',
      summary:
        'Began learning how to code on my own in 2022 while working as a tech sales rep. In the fall my wife and I moved to Germany, which allowed me put all of my time and resources into learning. I attended IronHack Coding Bootcamp  in the spring of 2023, and it is here that I truly understood the passion that I have for software development. In addition to the bootcamp, I continued to study and teach myself through various mediums, which ultimately led to my success in finding a job.',
      stack: ['React', 'Node.js', 'Express', 'Javascript', 'CSS', 'Git'],
    },
    {
      location: 'Salt Lake City, Utah',
      place: 'Podium and Shopmonkey',
      date: 'May 2019 - Sept. 2022',
      position: 'Tech Sales',
      summary:
        'Worked in tech sales for Shopmonkey and Podium. After earning a BS in Accounting and studying for the CPA exam, I decided that a career in accounting was not something that I was too passionate about. In Salt Lake City, there is no shortage of tech companies, and I was able to find a job quite quickly. I worked for Podium and Shopmonkey, two SaaS companies, and it was here that I was able to learn about the tech industry and the various roles within it. After several promotions, I still felt that I was not in the right place, and I decided to make a change. During my time at Shopmonkey, I worked closely with our product team, which really opened my eyes to the world of software development.',
    },
    {
      location: 'Salt Lake City, Utah',
      place: 'University of Utah',
      date: 'Aug 2015 - May 2019',
      position: 'Student',
      summary:
        'Studied at the University of Utah. As a student athelte, I maintained a 3.5 GPA and honor role status throughout my time at the U. It was here that I was initially introduced to programming, in the form of some intro to CS coursed. We did some minor web development with CSS and HTML, as well as some programming on a Raspberry Pi. My time at the U was incredibly valuable, and I am grateful for the experiences that I had there.',
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
          <h2 class="text-2xl text-center xl:text-left xl:ml-24 text-primary font-bold">
            I'm August,
            <br />
            <span class="text-secondary tracking-wide text-3xl md:text-4xl xl:text-6xl">a Software developer</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 py-4">
          <div class="flex flex-col items-center justify-center bg-accent rounded-lg p-5 fade-in-sequence">
            <p class="text-center xl:text-left text-primary py-2 text-l font-bold py-4 px-4 mt-4">
              Experience in back-end and front-end development
            </p>
            <img class="w-20 mx-auto" src="/assets/images/code-block-svgrepo-com.svg" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center bg-accent rounded-lg p-5 fade-in-sequence">
            <p class="text-center xl:text-center text-primary py-2 text-l font-bold py-4 px-4 mt-4">
              Constantly learning, and growing as a developer
            </p>
            <img class="w-20 mx-auto" src="/assets/images/brain-10-svgrepo-com.svg" alt="" />
          </div>
          <div class="flex flex-col items-center justify-center bg-accent rounded-lg p-5 fade-in-sequence">
            <p class="text-center xl:text-right text-primary py-2 text-l font-bold py-4 px-4 mt-4">
              Work with various programming languages and frameworks
            </p>
            <img class="w-20 mx-auto" src="/assets/images/stack1-svgrepo-com.svg" alt="" />
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
        class="min-h-screen flex flex-col items-center justify-center tracking-wide fade-in px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-12"
      >
        <div class="flex row items-center justify-center xl:justify-start" style="width: 100%">
          <h2 class="text-5xl py-5 font-bold text-accent">What, When and Where</h2>
        </div>

        <div
          class="flex flex-col xl:flex-row bg-accent rounded-lg p-5 w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
        >
          <div
            class="flex flex-row xl:flex-col items-center justify-evenly border-b-2 xl:border-r-2 xl:border-b-0 border-primary flex-wrap"
          >
            <ul
              v-for="item in experience"
              :key="item.place"
              class="flex flex-col items-start justify-start text-primary hover:bg-primary hover:text-accent duration-500 rounded-lg p-3 md:p-5 mb-5 xl:mr-5 cursor-pointer"
            >
              <li @click="showSelected(item)">
                <h1 class="text-sm md:text-l xl:text-xl font-bold">{{ item.position }}</h1>
                <h2 class="text-xs md:text-m xl:text-l">{{ item.place }}</h2>
              </li>
            </ul>
          </div>

          <div class="ml-4 p-5 rounded-lg">
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
