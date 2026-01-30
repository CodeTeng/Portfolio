<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isDark = useDark({
  initialValue: 'dark',
})
const toggleDark = useToggle(isDark)

const checkScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})

const navItems = [
  { name: '作品集', href: '#projects' },
  { name: '关于我', href: '#about' }
]
</script>

<template>
  <header 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[isScrolled ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 py-4 shadow-sm dark:shadow-none' : 'bg-transparent py-6']"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
        Portfolio
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <a 
          v-for="item in navItems" 
          :key="item.name" 
          :href="item.href"
          class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors relative group"
        >
          {{ item.name }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        
        <!-- Theme Toggle -->
        <button 
          @click="toggleDark()" 
          class="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300"
          aria-label="Toggle Theme"
        >
          <div v-if="isDark" class="i-carbon-moon w-5 h-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
          <div v-else class="i-carbon-sun w-5 h-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </button>
      </nav>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden p-2 text-gray-300 hover:text-white"
        @click="toggleMobileMenu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-show="isMobileMenuOpen"
      class="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 py-4 px-6 flex flex-col gap-4"
    >
      <a 
        v-for="item in navItems" 
        :key="item.name" 
        :href="item.href"
        class="text-base font-medium text-gray-300 hover:text-white py-2"
        @click="isMobileMenuOpen = false"
      >
        {{ item.name }}
      </a>
    </div>
  </header>
</template>
