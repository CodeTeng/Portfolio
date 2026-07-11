<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)
const heroOpacity = ref(1)
const heroTranslateY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
  // Fade out hero content as user scrolls down — Apple keynote dissolve effect
  const fadeDistance = 400
  heroOpacity.value = Math.max(0, 1 - scrollY.value / fadeDistance)
  // Gentle parallax: content shifts up slightly slower than scroll
  heroTranslateY.value = scrollY.value * 0.15
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const tickerLogos = [
  { icon: 'simple-icons:cursor', name: 'Cursor' },
  { icon: 'simple-icons:anthropic', name: 'Claude' },
  { icon: 'logos:openai-icon', name: 'OpenAI' },
  { icon: 'logos:java', name: 'Java' },
  { icon: 'logos:spring-icon', name: 'Spring' },
  { icon: 'logos:mysql', name: 'MySQL' },
  { icon: 'logos:redis', name: 'Redis' },
  { icon: 'logos:elasticsearch', name: 'Elasticsearch' },
  { icon: 'logos:rabbitmq-icon', name: 'RabbitMQ' },
  { icon: 'logos:docker-icon', name: 'Docker' },
  { icon: 'logos:linux-tux', name: 'Linux' },
  { icon: 'logos:vue', name: 'Vue' },
  { icon: 'logos:typescript-icon', name: 'TypeScript' },
  { icon: 'simple-icons:langchain', name: 'LangChain' },
  { icon: 'lucide:brain', name: 'Agent' },
  { icon: 'lucide:search', name: 'RAG' },
]
const ticker = [...tickerLogos, ...tickerLogos]
</script>

<template>
  <!--
    Hero — Apple keynote style.
    Two-column on desktop: left is the editorial "story" (eyebrow, headline, lede, CTAs);
    right is a refined orb visual that acts as the page's signature mark.
  -->
  <section
    id="hero"
    class="relative isolate min-h-screen flex items-center px-6 pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden"
  >
    <!-- Atmospheric background: soft mesh gradients on both themes -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50 dark:from-black dark:via-[#070710] dark:to-black"></div>
      <div class="absolute -top-40 right-[-10%] w-[680px] h-[680px] rounded-full bg-blue-500/15 dark:bg-blue-600/30 blur-[120px]"></div>
      <div class="absolute top-1/3 left-[-15%] w-[640px] h-[640px] rounded-full bg-fuchsia-400/10 dark:bg-fuchsia-600/25 blur-[120px]"></div>
      <div class="absolute bottom-[-10%] left-1/3 w-[520px] h-[520px] rounded-full bg-cyan-300/10 dark:bg-cyan-500/20 blur-[110px]"></div>
      <!-- subtle grid -->
      <div
        class="absolute inset-0 opacity-[0.08] dark:opacity-[0.06]"
        style="background-image: linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px); background-size: 56px 56px; color: rgb(120 120 120);"
      ></div>
    </div>

    <div class="w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center" :style="{ opacity: heroOpacity, transform: `translateY(${heroTranslateY}px)` }">
      <!-- Left: editorial story -->
      <div
        class="lg:col-span-7 text-center lg:text-left"
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 900, ease: [0.22, 1, 0.36, 1] } }"
      >
        <!-- Eyebrow / status line -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur text-xs font-medium text-gray-700 dark:text-gray-300 animate-float">
          <span class="relative flex h-1.5 w-1.5">
            <span class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping"></span>
            <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          </span>
          <span>2027 校招</span>
        </div>

        <!-- Display headline -->
        <h1 class="text-display mt-7 text-[44px] leading-[1.05] sm:text-6xl lg:text-[80px] xl:text-[88px] text-gray-900 dark:text-white">
          用 AI 把想法
          <br class="hidden sm:block" />
          <span class="text-gradient-cool">变成可运行的产品</span>
        </h1>

        <!-- Lede -->
        <p class="mt-7 text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl lg:pr-6">
          木子 Teng — 北京交通大学 计算机硕士。
          驾驭 AI 而非依赖 AI——用 <span class="font-medium text-gray-900 dark:text-white">Cursor、Claude Code</span> 快速上手、极速交付，
          同时用工程功底兜底，确保 AI 产出的每一行代码都 <span class="font-medium text-gray-900 dark:text-white">可读、可测、可维护</span>。
        </p>

        <!-- KPI strip - Apple-product-page style -->
        <div class="mt-10 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
          <div class="text-center lg:text-left">
            <div class="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">5</div>
            <div class="mt-1 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500">大厂实习</div>
          </div>
          <div class="text-center lg:text-left border-l border-black/10 dark:border-white/10 pl-4">
            <div class="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">100<span class="text-xl">w+</span></div>
            <div class="mt-1 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500">语雀文档已发布字数</div>
          </div>
          <div class="text-center lg:text-left border-l border-black/10 dark:border-white/10 pl-4">
            <div class="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">20<span class="text-xl">+</span></div>
            <div class="mt-1 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500">竞赛获奖</div>
          </div>
        </div>

        <!-- CTAs -->
        <div class="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
          <a
            href="#projects"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-[15px] font-semibold hover:opacity-90 transition shadow-lg shadow-blue-500/10 dark:shadow-white/5"
          >
            查看作品
            <Icon icon="lucide:arrow-right" class="w-4 h-4" />
          </a>
          <a
            href="#experience"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 dark:border-white/15 text-gray-900 dark:text-white text-[15px] font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            实习经历
            <Icon icon="lucide:briefcase" class="w-4 h-4" />
          </a>
          <a
            href="https://www.yuque.com/ambition-bcpii"
            target="_blank"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            语雀笔记
            <Icon icon="lucide:arrow-up-right" class="w-4 h-4" />
          </a>
        </div>
      </div>

      <!-- Right: signature visual (Apple Vision-Pro-ish glass orb) -->
      <div
        class="lg:col-span-5 flex justify-center lg:justify-end"
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 1000, delay: 200, ease: [0.22, 1, 0.36, 1] } }"
      >
        <div class="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px]">
          <!-- conic glow ring -->
          <div class="absolute inset-0 rounded-full opacity-90"
            style="background: conic-gradient(from 0deg, #5ac8fa, #007aff, #af52de, #ff375f, #ff9f0a, #5ac8fa); filter: blur(48px);"
          ></div>
          <!-- glass orb -->
          <div class="absolute inset-6 rounded-full overflow-hidden border border-white/30 dark:border-white/10 backdrop-blur-xl bg-white/30 dark:bg-white/5 shadow-2xl">
            <div class="absolute inset-0 bg-gradient-to-br from-white/40 via-white/0 to-transparent dark:from-white/10"></div>
            <img
              src="https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/user_avatar/14/OldnE8LR-avatar.jpg"
              alt="Teng"
              class="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-90"
            />
            <!-- inner reflection -->
            <div class="absolute -top-1/4 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent dark:from-white/20 rounded-full blur-2xl pointer-events-none"></div>
          </div>

          <!-- floating chips around orb -->
          <div class="absolute -top-3 -left-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-lg flex items-center gap-2 text-xs font-medium text-gray-800 dark:text-gray-200 animate-float">
            <Icon icon="simple-icons:cursor" class="w-3.5 h-3.5" />
            Cursor
          </div>
          <div class="absolute top-12 -right-3 px-3 py-1.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-lg flex items-center gap-2 text-xs font-medium text-gray-800 dark:text-gray-200 animate-float" style="animation-delay: 1s;">
            <Icon icon="simple-icons:anthropic" class="w-3.5 h-3.5" />
            Claude Code
          </div>
          <div class="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-lg flex items-center gap-2 text-xs font-medium text-gray-800 dark:text-gray-200 animate-float" style="animation-delay: 1.5s;">
            <Icon icon="logos:java" class="w-3.5 h-3.5" />
            Spring Boot
          </div>
          <div class="absolute bottom-8 -right-4 px-3 py-1.5 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-lg flex items-center gap-2 text-xs font-medium text-gray-800 dark:text-gray-200 animate-float" style="animation-delay: 2s;">
            <Icon icon="simple-icons:langchain" class="w-3.5 h-3.5" />
            RAG / Agent
          </div>
        </div>
      </div>
    </div>

    <!-- Tech ticker — Apple-style "Designed by" footer for hero -->
    <div class="absolute bottom-0 left-0 right-0 border-t border-black/5 dark:border-white/5 bg-white/60 dark:bg-white/[0.02] backdrop-blur-md">
      <div class="relative overflow-hidden py-5">
        <!-- side fades -->
        <div class="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
        <div class="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>
        <div class="flex gap-12 animate-marquee whitespace-nowrap text-gray-500 dark:text-gray-500">
          <div
            v-for="(item, i) in ticker"
            :key="i"
            class="inline-flex items-center gap-2 text-sm"
          >
            <Icon :icon="item.icon" class="w-5 h-5" />
            <span class="font-medium">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
