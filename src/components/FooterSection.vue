<script setup>
import { siteConfig } from '../siteConfig'
</script>

<template>
  <footer class="border-t border-stone-200/80 py-8 dark:border-stone-800/80">
    <div class="section-shell flex flex-col gap-4 text-sm text-stone-500 dark:text-stone-400 sm:flex-row sm:items-center sm:justify-between">
      <p>&copy; 2026 {{ siteConfig.name }}. All rights reserved.</p>
      <div class="flex items-center gap-5">
        <a :href="`mailto:${siteConfig.email}`" class="transition hover:text-stone-900 dark:hover:text-white">Email</a>
        <a :href="siteConfig.linkedin" target="_blank" rel="noreferrer" class="transition hover:text-stone-900 dark:hover:text-white">LinkedIn</a>
        <a :href="siteConfig.github" target="_blank" rel="noreferrer" class="transition hover:text-stone-900 dark:hover:text-white">GitHub</a>
      </div>
    </div>
  </footer>
</template>
