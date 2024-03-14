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
</script>

<template>
  <div class="about flex flex-col gap-5">
    <section class="hero mb-12 mt-24">
      <div class="container">
        <div class="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
          <div class="flex flex-col items-center gap-8 md:items-start">
            <h1 class="text-center text-6xl md:text-left lg:text-8xl">
              <span class="text-gradient">Thanks You</span> <br />
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
    <section id="main">
      <div class="container">
        <div class="grid grid-cols-1 gap-2">
          <h1>It's Me!</h1>
          <p class="text-wrap text-sm">
            Thank you so much for taking the time to visit my blog! Your presence means the world to me. I truly
            appreciate your interest in my content and the support you've shown. It is because of readers like you that
            I am able to share my thoughts, ideas, and experiences.
          </p>
          <p class="text-wrap text-sm">
            Your visit not only encourages me to continue creating valuable content but also motivates me to explore new
            topics and improve my writing. Once again, thank you for stopping by and I hope you found my blog
            informative and enjoyable. Feel free to come back anytime as I'll continue to provide fresh and engaging
            content for you to explore.
          </p>
        </div>
      </div>
    </section>
    <section id="work-history" class="mb-12">
      <div class="container">
        <div class="grid grid-cols-1 gap-2">
          <h1>Work Experience</h1>
          <div class="relative w-full">
            <div class="relative flex gap-8 overflow-x-auto">
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
    <section id="Experience" class="mb-12">
      <div class="container">
        <div class="grid grid-cols-1 gap-2">
          <h1>Experiences</h1>
          <div class="relative w-full">
            <div class="relative flex gap-8 overflow-x-auto">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
#about {
  max-width: 10vw;
}

#img1-about-container {
  width: fit-content;
}
</style>
