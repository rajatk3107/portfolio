<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import FooterSection from './components/FooterSection.vue'
import HeroSection from './components/HeroSection.vue'
import NavbarSection from './components/NavbarSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'

let observer
const theme = ref('light')

const applyTheme = (nextTheme) => {
  theme.value = nextTheme
  document.documentElement.classList.toggle('dark', nextTheme === 'dark')
  document.body.classList.toggle('dark', nextTheme === 'dark')
  localStorage.setItem('theme', nextTheme)
}

const toggleTheme = () => {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}

onMounted(() => {
  const storedTheme = localStorage.getItem('theme')
  applyTheme(storedTheme ?? 'light')

  const revealed = document.querySelectorAll('[data-reveal]')

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px',
    },
  )

  revealed.forEach((element) => observer.observe(element))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div :class="{ dark: theme === 'dark' }" class="relative min-h-screen overflow-x-hidden">
    <NavbarSection :theme="theme" @toggle-theme="toggleTheme" />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>
