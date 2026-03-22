<script setup>
const skillGroups = [
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 85 },
    ],
  },
  {
    title: 'Database',
    items: [{ name: 'MongoDB', level: 88 }],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'Vue.js', level: 68 },
      { name: 'HTML', level: 78 },
      { name: 'CSS', level: 72 },
      { name: 'JavaScript', level: 82 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', level: 80 },
      { name: 'REST APIs', level: 90 },
    ],
  },
]
</script>

<template>
  <section id="skills" class="section-shell py-20 sm:py-28">
    <div data-reveal>
      <p class="eyebrow">Skills</p>
      <h2 class="section-title">Technical strengths organized around production backend work.</h2>
      <p class="section-copy">
        Cleanly grouped skills with restrained visual hierarchy to keep the page closer to a
        digital resume than a project showcase.
      </p>
    </div>

    <div class="mt-12 grid gap-6 md:grid-cols-2" data-reveal style="--reveal-delay: 120ms;">
      <article
        v-for="group in skillGroups"
        :key="group.title"
            class="surface-card p-7 transition duration-300 hover:-translate-y-1"
      >
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-stone-900 dark:text-stone-100">{{ group.title }}</h3>
          <span class="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-500 dark:bg-stone-800 dark:text-stone-300">
            {{ group.items.length }} skills
          </span>
        </div>

        <div class="mt-6 space-y-5">
          <div v-for="item in group.items" :key="item.name">
            <div class="mb-2 flex items-center justify-between text-sm">
              <span class="font-medium text-stone-700 dark:text-stone-200">{{ item.name }}</span>
              <span class="font-mono text-xs text-stone-400 dark:text-stone-500">{{ item.level }}%</span>
            </div>
            <div class="h-2 rounded-full bg-stone-100 dark:bg-stone-800">
              <div
                class="h-2 rounded-full bg-gradient-to-r from-accent-300 via-accent-500 to-accent-600"
                :style="{ width: `${item.level}%` }"
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
