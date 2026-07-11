<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const scrollProgress = ref(0)
const isDark = useDark({ initialValue: 'dark' })
const toggleDark = useToggle(isDark)

const checkScroll = () => {
  isScrolled.value = window.scrollY > 16
  // Calculate scroll progress for the Apple-style progress bar
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docHeight > 0 ? scrollTop / docHeight : 0
}
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => window.addEventListener('scroll', checkScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', checkScroll))

const navItems = [
  { name: '简介',  href: '#hero' },
  { name: '作品',  href: '#projects' },
  { name: '经历',  href: '#experience' },
  { name: '专业',  href: '#expertise' },
  { name: '荣誉',  href: '#honors' },
  { name: '关于',  href: '#about' },
]
</script>

<template>
  <!-- Apple-style frosted nav: very thin, very high z-index, full-width frosted strip on scroll -->
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-500"
    :class="[
      isScrolled
        ? 'bg-white/72 dark:bg-black/60 backdrop-blur-2xl border-b border-black/5 dark:border-white/8'
        : 'bg-transparent'
    ]"
  >
    <!-- Scroll progress bar — Apple's signature thin gradient line -->
    <div
      class="scroll-progress"
      :style="{ width: `${scrollProgress * 100}%` }"
    ></div>
    <div
      class="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500"
      :class="isScrolled ? 'h-12' : 'h-16'"
    >
      <!-- Logo - simple wordmark, Apple-style -->
      <a
        href="#hero"
        class="group flex items-center gap-2 text-[15px] font-semibold tracking-tight text-gray-900 dark:text-white"
      >
        <span
          class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white text-[11px] font-bold shadow-sm shadow-blue-500/25"
        >
          T
        </span>
        <span class="hidden sm:inline">Teng / Portfolio</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-1">
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="px-3 py-1.5 text-[13px] font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors rounded-full"
        >
          {{ item.name }}
        </a>

        <button
          @click="toggleDark()"
          class="ml-2 p-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label="Toggle Theme"
        >
          <Icon :icon="isDark ? 'lucide:moon' : 'lucide:sun'" class="w-4 h-4" />
        </button>

        <a
          href="https://github.com/CodeTeng"
          target="_blank"
          class="ml-1 inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 transition"
        >
          GitHub
          <Icon icon="lucide:arrow-up-right" class="w-3.5 h-3.5" />
        </a>
      </nav>

      <!-- Mobile menu button -->
      <button
        class="md:hidden p-2 text-gray-700 dark:text-gray-300"
        @click="toggleMobileMenu"
        aria-label="Toggle Menu"
      >
        <Icon :icon="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-5 h-5" />
      </button>
    </div>

    <!-- Mobile menu drawer -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      leave-active-class="transition duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-2"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/85 backdrop-blur-2xl border-b border-black/5 dark:border-white/10 px-6 py-4"
      >
        <a
          v-for="item in navItems"
          :key="item.name"
          :href="item.href"
          class="block py-3 text-[15px] font-medium text-gray-800 dark:text-gray-200 border-b border-black/5 dark:border-white/5 last:border-0"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </a>
        <div class="pt-4 flex items-center gap-3">
          <button
            @click="toggleDark()"
            class="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-black/5 dark:bg-white/10 text-sm"
          >
            <Icon :icon="isDark ? 'lucide:moon' : 'lucide:sun'" class="w-4 h-4" />
            {{ isDark ? '深色' : '浅色' }}
          </button>
          <a
            href="https://github.com/CodeTeng"
            target="_blank"
            class="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-sm font-semibold"
          >
            GitHub
            <Icon icon="lucide:arrow-up-right" class="w-4 h-4" />
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>
