<script setup>
import { siteConfig } from '../siteConfig'
</script>

<template>
  <section id="home" class="section-shell pb-20 pt-14 sm:pb-28 sm:pt-20">
    <div class="section-grid items-center">
      <div data-reveal>
        <p class="eyebrow">Backend Developer Portfolio</p>
        <h1 class="mt-5 max-w-2xl text-[2.6rem] font-semibold tracking-tight text-stone-950 dark:text-stone-100 sm:mt-6 sm:text-6xl">
          {{ siteConfig.name }}
        </h1>
        <p class="mt-4 text-lg font-medium text-stone-700 dark:text-stone-300 sm:mt-5 sm:text-xl">
          {{ siteConfig.title }}
        </p>
        <p class="mt-5 max-w-xl text-[15px] leading-7 text-stone-600 dark:text-stone-300 sm:mt-6 sm:text-lg sm:leading-8">
          {{ siteConfig.description }}
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <a class="primary-button" href="/resume.pdf" download>
            Download Resume
          </a>
          <a class="secondary-button" href="#contact">
            Contact Me
          </a>
        </div>

        <div class="mt-10 grid max-w-xl gap-6 border-t border-stone-200 pt-6 dark:border-stone-800 sm:mt-12 sm:gap-5 sm:pt-8 sm:grid-cols-3">
          <div>
            <p class="font-mono text-xs uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400">Focus</p>
            <p class="mt-3 text-sm text-stone-700 dark:text-stone-300">APIs, backend logic, data modeling</p>
          </div>
          <div>
            <p class="font-mono text-xs uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400">Stack</p>
            <p class="mt-3 text-sm text-stone-700 dark:text-stone-300">Node.js, Express.js, MongoDB, Vue.js</p>
          </div>
          <div>
            <p class="font-mono text-xs uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400">Based In</p>
            <p class="mt-3 text-sm text-stone-700 dark:text-stone-300">Open to remote and onsite roles</p>
          </div>
        </div>
      </div>

      <div data-reveal style="--reveal-delay: 140ms;">
          <div class="surface-card relative overflow-hidden p-4 sm:p-8">
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-stone-50/95 via-white to-accent-50/55 dark:from-stone-900 dark:via-stone-900 dark:to-accent-950/40" />
          <div class="relative">
            <div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p class="font-mono text-xs uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400">Profile Visual</p>
                <h2 class="mt-2 text-lg font-semibold text-stone-900 dark:text-stone-100">Professional portrait</h2>
              </div>
              <span class="w-fit rounded-full border border-stone-200 bg-white/80 px-3 py-1 text-xs text-stone-500 dark:border-stone-700 dark:bg-stone-900/80 dark:text-stone-300">Static image</span>
            </div>

            <div class="overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-white via-stone-50 to-stone-100 dark:border-stone-800 dark:from-stone-900 dark:via-stone-900 dark:to-stone-800">
              <img
                :src="siteConfig.image"
                :alt="`Portrait of ${siteConfig.name}`"
                class="h-[280px] w-full object-cover object-center sm:h-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
