<script setup>
defineProps({
  theme: {
    type: String,
    required: true,
  },
})

defineEmits(['toggle-theme'])

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/85 backdrop-blur-xl dark:border-stone-800/80 dark:bg-stone-950/80">
    <nav class="section-shell flex items-center justify-between py-4">
      <a href="#home" class="font-mono text-xs uppercase tracking-[0.34em] text-stone-500 dark:text-stone-400">
        Rajat Kumar Yadav
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm text-stone-600 transition hover:text-stone-950 dark:text-stone-300 dark:hover:text-white"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="flex items-center gap-3">
        <button
          type="button"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          class="relative inline-flex h-11 w-[5.5rem] items-center rounded-full border border-stone-300 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors duration-300 hover:border-stone-400 dark:border-stone-700 dark:bg-stone-950 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:hover:border-stone-600"
          @click="$emit('toggle-theme')"
        >
          <span
            class="absolute top-1 h-[2.1rem] w-[2.1rem] rounded-full bg-[#3340b5] shadow-[0_8px_18px_rgba(51,64,181,0.28)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            :class="theme === 'dark' ? 'left-[3.05rem]' : 'left-[0.325rem]'"
            aria-hidden="true"
          />
          <span class="pointer-events-none absolute left-[1.375rem] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.9"
              class="h-[1.05rem] w-[1.05rem] transition-all duration-300"
              :class="theme === 'dark' ? 'scale-90 text-stone-500 opacity-60' : 'scale-100 text-white opacity-100'"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2.5" />
              <path d="M12 19.5V22" />
              <path d="m4.93 4.93 1.77 1.77" />
              <path d="m17.3 17.3 1.77 1.77" />
              <path d="M2 12h2.5" />
              <path d="M19.5 12H22" />
              <path d="m4.93 19.07 1.77-1.77" />
              <path d="m17.3 6.7 1.77-1.77" />
            </svg>
          </span>
          <span class="pointer-events-none absolute left-[4.125rem] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.9"
              class="h-[1.05rem] w-[1.05rem] transition-all duration-300"
              :class="theme === 'dark' ? 'scale-100 text-white opacity-100' : 'scale-90 text-stone-300 opacity-70'"
              aria-hidden="true"
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
            </svg>
          </span>
        </button>
        <a href="#contact" class="secondary-button !px-4 !py-2">
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  </header>
</template>
