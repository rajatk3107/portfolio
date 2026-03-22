<script setup>
import { contactMethods } from '../siteConfig'
</script>

<template>
  <section id="contact" class="section-shell py-20 sm:py-28">
    <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div data-reveal>
        <p class="eyebrow">Contact</p>
        <h2 class="section-title">A clean contact area for direct outreach.</h2>
        <p class="section-copy">
          Reach out for backend roles, API-focused work, or engineering discussions around Node.js
          and MongoDB systems.
        </p>

        <div class="mt-10 space-y-5">
          <a
            v-for="item in contactMethods"
            :key="item.label"
            :href="item.href"
            target="_blank"
            rel="noreferrer"
            class="surface-card flex items-center justify-between gap-4 p-4 transition duration-300 hover:-translate-y-1 sm:p-5"
          >
            <div class="min-w-0">
              <p class="font-mono text-xs uppercase tracking-[0.28em] text-stone-400 dark:text-stone-500">{{ item.label }}</p>
              <p class="mt-2 break-all text-sm text-stone-700 dark:text-stone-200 sm:break-normal">{{ item.value }}</p>
            </div>
            <span class="text-stone-400 dark:text-stone-500">↗</span>
          </a>
        </div>
      </div>

      <div data-reveal style="--reveal-delay: 120ms;">
        <form class="surface-card p-6 sm:p-10">
          <div class="grid gap-6 sm:grid-cols-2">
            <label class="block">
              <span class="mb-2 block text-sm font-medium text-stone-700 dark:text-stone-200">Name</span>
              <input
                type="text"
                placeholder="Your name"
                class="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-accent-400 focus:bg-white dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:bg-stone-900"
              />
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-medium text-stone-700 dark:text-stone-200">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                class="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-accent-400 focus:bg-white dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:bg-stone-900"
              />
            </label>
          </div>

          <label class="mt-6 block">
            <span class="mb-2 block text-sm font-medium text-stone-700 dark:text-stone-200">Subject</span>
            <input
              type="text"
              placeholder="How can I help?"
              class="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-accent-400 focus:bg-white dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:bg-stone-900"
            />
          </label>

          <label class="mt-6 block">
            <span class="mb-2 block text-sm font-medium text-stone-700 dark:text-stone-200">Message</span>
            <textarea
              rows="6"
              placeholder="Tell me a bit about the role or project."
              class="w-full rounded-3xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-accent-400 focus:bg-white dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:bg-stone-900"
            />
          </label>

          <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p class="max-w-md text-sm text-stone-500 dark:text-stone-400">UI-only form. Hook this up to EmailJS, Formspree, or a backend endpoint later.</p>
            <button type="button" class="primary-button">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
