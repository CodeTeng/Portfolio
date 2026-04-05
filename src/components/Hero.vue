<script setup lang="ts">
</script>

<template>
  <section class="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 py-20 relative overflow-hidden">
    <!-- Text Content -->
    <div
      class="w-full max-w-xl text-center md:text-left space-y-7 relative z-10"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
    >
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-medium backdrop-blur-sm">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        Vibe Coding · 拥抱 AI · 持续构建
      </div>

      <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
        Hello, I'm <br class="md:hidden" />
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 animate-gradient-x">
          Vibe Coder
        </span>
      </h1>

      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
        用 AI 加速开发，用工具放大创造力。<br />
        专注 <span class="text-cyan-600 dark:text-cyan-400 font-medium">大模型落地</span>、<span class="text-blue-600 dark:text-blue-400 font-medium">RAG / Agent</span> 与全栈工程实践，
        让每一个想法都快速变成可运行的产品。
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 justify-center md:justify-start">
        <span v-for="tag in ['LLM', 'RAG', 'Agent', 'Cursor', 'Claude Code', 'Full Stack']" :key="tag"
          class="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-default">
          {{ tag }}
        </span>
      </div>

      <div class="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
        <a
          href="#about"
          class="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer text-center"
        >
          关于我
        </a>
        <a
          href="#projects"
          class="px-8 py-3 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:border-white/40 dark:hover:bg-white/5 font-semibold rounded-full transition-all cursor-pointer text-center"
        >
          查看作品
        </a>
      </div>
    </div>

    <!-- Avatar/Visual — enlarged -->
    <div
      class="flex justify-center md:justify-end relative z-10 flex-shrink-0"
      v-motion
      :initial="{ opacity: 0, scale: 0.8, x: 50 }"
      :enter="{ opacity: 1, scale: 1, x: 0, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
    >
      <div class="relative w-80 h-80 md:w-[480px] md:h-[480px] group">
        <!-- Outer Glow -->
        <div class="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-55 transition duration-700"></div>
        <!-- Floating decoration dots -->
        <div class="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-cyan-500/80 blur-sm animate-pulse"></div>
        <div class="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-purple-500/80 blur-sm animate-pulse" style="animation-delay: 1s;"></div>
        <!-- Image Container -->
        <div class="relative w-full h-full rounded-2xl overflow-hidden border-2 border-cyan-500/40 dark:border-cyan-400/40 bg-gray-900 dark:bg-[#0a0a0a]">
          <img
            src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200&auto=format&fit=crop"
            alt="AI Development"
            class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          <!-- Subtle overlay gradient for text legibility -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <!-- Corner label -->
          <div class="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span class="text-white text-xs font-medium">Vibe Coding in Progress</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Decor -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
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
