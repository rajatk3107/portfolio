<script setup>
const experiences = [
  {
    role: 'Backend Developer',
    company: 'Company Name',
    duration: '2023 - Present',
    details: [
      'Developed and maintained REST APIs for internal and customer-facing product features.',
      'Implemented backend logic in Node.js and worked closely with MongoDB collections, queries, and schema design.',
      'Handled debugging, issue resolution, and production support to improve reliability and response times.',
      'Collaborated with frontend and QA teams to ship stable releases in a structured job environment.',
    ],
  },
  {
    role: 'Junior Backend Developer',
    company: 'Previous Company',
    duration: '2021 - 2023',
    details: [
      'Supported feature delivery by building endpoints, validating request flows, and maintaining service logic.',
      'Worked on database operations, data cleanup tasks, and performance-minded query updates in MongoDB.',
      'Assisted with bug fixing, testing support, and maintenance work across existing backend modules.',
    ],
  },
]
</script>

<template>
  <section id="experience" class="section-shell py-20 sm:py-28">
    <div data-reveal>
      <p class="eyebrow">Experience</p>
      <h2 class="section-title">Professional backend experience with delivery, maintenance, and support responsibilities.</h2>
    </div>

    <div class="relative mt-12 space-y-6 before:absolute before:left-[1.1rem] before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-stone-200 dark:before:bg-stone-800 sm:before:left-6">
      <article
        v-for="(item, index) in experiences"
        :key="item.role"
        class="surface-card relative ml-6 p-7 sm:ml-12 sm:p-8"
        data-reveal
        :style="{ '--reveal-delay': `${index * 110}ms` }"
      >
        <span class="absolute -left-[2.15rem] top-8 h-3.5 w-3.5 rounded-full border-4 border-stone-50 bg-accent-500 dark:border-stone-950 sm:-left-[3.35rem]" />
        <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p class="text-xl font-semibold text-stone-950 dark:text-stone-100">{{ item.role }}</p>
            <p class="mt-2 text-sm text-stone-500 dark:text-stone-400">{{ item.company }}</p>
          </div>
          <span class="w-fit rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-500 dark:bg-stone-800 dark:text-stone-300">
            {{ item.duration }}
          </span>
        </div>

        <ul class="mt-6 space-y-3 text-sm leading-7 text-stone-600 dark:text-stone-300">
          <li v-for="detail in item.details" :key="detail" class="flex gap-3">
            <span class="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500" />
            <span>{{ detail }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
