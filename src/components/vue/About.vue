<script setup>
import { ref } from 'vue'
import anime from 'animejs'
import '../../assets/style/about.css'
import WorkHistoryCard from './components/WorkHistoryCard.vue'

const title = 'About'
const src = ref('/about-img.png')
const onTouch = (prom) => {
  if (prom === true) {
    setTimeout(() => {
      src.value = '/photo-bulat.png'
    }, 100)
    anime({
      targets: '#img1-about',
      rotateY: [{ value: '180deg', duration: 3000 }],
    })
  } else {
    setTimeout(() => {
      src.value = '/about-img.png'
    }, 100)
    anime({
      targets: '#img1-about',
      rotateY: [{ value: '0deg', duration: 3000 }],
    })
  }
}

const skillsIP = [
  'VueJs',
  'Angular',
  'Astro',
  'ExpressJs',
  'Directus',
  'NestJs',
  'NuxtJs',
  'Tailwind',
  'Vuetify',
  'PostgreSQL',
  'MongoDB',
]

const skillsIPTrainee = [
  'VueJs',
  'NuxtJs',
  'Pinia',
  'VeeValidate',
  'PrimeVue',
  'BootstrapVue',
  'ExpressJs',
  'Sequelize',
  'MySql',
]

const skillsKIP = ['Google Analytics', 'META ads', 'Figma', 'Adobe Illustrator', 'UI Design']

const skillsNusantaraTechno = ['PHP', 'Bootstrap', 'MySql', 'Apache']

const expertTechStacks = [
  {
    name: 'VueJs',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg',
  },
  {
    name: 'NuxtJs',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original-wordmark.svg',
  },
  {
    name: 'Express Js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
  },
  {
    name: 'Node Js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
  },
  {
    name: 'Vuetify',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg',
  },
  {
    name: 'PrimeVue',
    src: 'https://www.primefaces.org/presskit/primevue-logo.svg',
  },
  {
    name: 'Tailwind',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Bootstrap',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  },
  {
    name: 'PostgreSQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'MySql',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
]

const usedTechStacks = [
  {
    name: 'Laravel',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original-wordmark.svg',
  },
  {
    name: 'PHP',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
  {
    name: 'NestJs',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
  },
  {
    name: 'MongoDB',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Anaconda',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg',
  },
  {
    name: 'AngularJs',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  },
  {
    name: 'Astro',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg',
  },
  {
    name: 'Firebase',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg',
  },
  {
    name: 'Flask',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  },
  {
    name: 'Ionic',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
  },
  {
    name: 'Jest',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  },
  {
    name: 'Jupyter',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
  },
  {
    name: 'Prisma',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
  },
  {
    name: 'Python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Redis',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  },
  {
    name: 'Tensorflow',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  },
  {
    name: 'TypeScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
]
</script>

<template>
  <div class="about flex flex-col gap-5">
    <section class="hero mt-18 mb-12 md:mt-24">
      <div class="container">
        <div class="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
          <div class="flex flex-col items-center gap-8 md:items-start">
            <h1 class="text-center text-5xl md:text-left lg:text-7xl">
              <span class="text-gradient">Thank You</span> <br />
              for your visit
            </h1>
          </div>
          <div class="flex items-center justify-center md:justify-start">
            <div class="hero-right" id="img1-about-container" @mouseenter="onTouch(true)" @mouseleave="onTouch(false)">
              <img :src="src" id="img1-about" class="img1 w-[60vw] md:w-[30vw]" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section id="main">
      <div class="mx-auto w-[90vw] px-8 md:container">
        <div class="grid grid-cols-1 gap-2">
          <h1>It's Me!</h1>
          <p class="text-wrap text-justify text-sm">
            Thank you so much for taking the time to visit my blog! Your presence means the world to me. I truly
            appreciate your interest in my content and the support you've shown. It is because of readers like you that
            I am able to share my thoughts, ideas, and experiences.
          </p>
          <p class="text-wrap text-justify text-sm">
            Your visit not only encourages me to continue creating valuable content but also motivates me to explore new
            topics and improve my writing. Once again, thank you for stopping by and I hope you found my blog
            informative and enjoyable. Feel free to come back anytime as I'll continue to provide fresh and engaging
            content for you to explore.
          </p>
        </div>
      </div>
    </section>
    <section id="work-history">
      <div class="mx-auto w-[90vw] px-8 md:container">
        <div class="grid grid-cols-1 gap-2">
          <h1>Work Experience</h1>
          <div class="relative">
            <div class="no-scrollbar relative flex gap-4 overflow-x-auto md:gap-8">
              <WorkHistoryCard
                position="Software Engineer"
                institude="PT. Imani Prima"
                period="Jan 2022 - Present"
                src="https://imaniprima.co.id/wp-content/uploads/2021/03/logo.png"
                :skills="skillsIP"
              >
                i work as developer here
              </WorkHistoryCard>
              <WorkHistoryCard
                position="Web App Developer Trainee"
                institude="PT. Imani Prima"
                period="Sept 2022 - Dec 2022"
                src="https://imaniprima.co.id/wp-content/uploads/2021/03/logo.png"
                :skills="skillsIPTrainee"
              >
                i work as developer trainee here
              </WorkHistoryCard>
              <WorkHistoryCard
                position="Junior Digital Marketing"
                institude="PT. Karya Indah Pertiwi"
                period="Aug 2022 - Oct 2022"
                src="https://kipertiwi.com/icons/logo_kip.png"
                :skills="skillsKIP"
              >
                i work as Junior Digital Marketing here
              </WorkHistoryCard>
              <WorkHistoryCard
                position="Web Developer"
                institude="CV. Nusantara Techno"
                period="Aug 2021 - Feb 2022"
                :skills="skillsNusantaraTechno"
              >
                i work as web developer here
              </WorkHistoryCard>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="Experience">
      <div class="mx-auto w-[90vw] px-8 md:container">
        <div class="grid grid-cols-1 gap-2">
          <h1>Stacks Used</h1>
          <div class="grid grid-cols-6 md:grid-cols-9 justify-center items-center">
            <img v-for="skill in expertTechStacks" :key="skill" :src="skill.src" class="w-28 self-center" />
          </div>
          <div class="grid grid-cols-10 gap-2 md:grid-cols-12">
            <img v-for="skill in usedTechStacks" :key="skill" :src="skill.src" class="w-16" />
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<style>
#about {
  max-width: 10vw;
}

#img1-about-container {
  width: fit-content;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
