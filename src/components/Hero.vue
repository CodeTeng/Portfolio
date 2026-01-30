<script setup lang="ts">
</script>

<template>
  <section class="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-20 relative overflow-hidden">
    <!-- Text Content -->
    <div 
      class="w-full max-w-xl text-center md:text-left space-y-6 relative z-10"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
    >
      <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
        Hello, I'm <br class="md:hidden" />
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 animate-gradient-x">
          Vibe Coder
        </span>
      </h1>
      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
        一名热衷于创造极致用户体验的全栈开发者。专注于构建高性能、可扩展的 Web 应用，将创意转化为现实。
      </p>
      <div class="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
        <a 
          href="#about"
          class="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors cursor-pointer text-center"
        >
          关于我
        </a>
        <a 
          href="#projects"
          class="px-8 py-3 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:border-white/50 dark:hover:bg-white/5 font-semibold rounded-full transition-all cursor-pointer text-center"
        >
          查看作品
        </a>
      </div>
    </div>

    <!-- Avatar/Visual -->
    <div 
      class="flex justify-center md:justify-start relative z-10"
      v-motion
      :initial="{ opacity: 0, scale: 0.8, x: 50 }"
      :enter="{ opacity: 1, scale: 1, x: 0, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
    >
      <div class="relative w-64 h-64 md:w-80 md:h-80 group">
        <!-- Glow Effect -->
        <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <!-- Avatar Container -->
        <div class="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 dark:border-white/10 bg-white dark:bg-[#1a1a1a] flex items-center justify-center">
          <img 
            src="https://api.dicebear.com/9.x/avataaars/svg?seed=Vibe" 
            alt="Profile Avatar" 
            class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
    
    <!-- Background Decor (Optional) -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
  </section>
</template>

<style scoped>
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}

@keyframes gradient-x {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
