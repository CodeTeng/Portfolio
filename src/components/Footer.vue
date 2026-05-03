<script setup lang="ts">
import { Icon } from '@iconify/vue'

const currentYear = new Date().getFullYear()

const footerNav = [
  {
    title: 'Site',
    links: [
      { name: '简介',     href: '#hero' },
      { name: '作品',     href: '#projects' },
      { name: '经历',     href: '#experience' },
      { name: '专业',     href: '#expertise' },
      { name: '荣誉',     href: '#honors' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'GitHub',  href: 'https://github.com/CodeTeng',          external: true },
      { name: '语雀',    href: 'https://www.yuque.com/ambition-bcpii', external: true },
      { name: 'CSDN',    href: 'https://blog.csdn.net/m0_52781902?spm=1000.2115.3001.10640',                                    external: true },
      { name: '公众号',  href: '#',                                    external: true },
    ],
  },
]
</script>

<template>
  <!-- Footer — Apple-style fine-print + small wordmark, generous breathing room -->
  <footer class="bg-gray-100/60 dark:bg-[#050505] border-t border-black/5 dark:border-white/5 px-6 pt-16 pb-10">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12">
      <!-- Brand block -->
      <div class="lg:col-span-5 space-y-4">
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white text-xs font-bold">
            T
          </span>
          <span class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
            Teng / Portfolio
          </span>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-500 leading-relaxed max-w-md">
          用 AI 加速开发，用工具放大创造力。专注大模型落地、RAG / Agent 与全栈工程实践，
          让每一个想法都快速变成可运行的产品。
        </p>

        <div class="pt-2 flex items-center gap-2">
          <a
            href="https://github.com/CodeTeng"
            target="_blank"
            class="w-9 h-9 rounded-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-gray-700 dark:text-gray-300 flex items-center justify-center transition"
            aria-label="GitHub"
          >
            <Icon icon="simple-icons:github" class="w-4 h-4" />
          </a>
          <a
            href="https://www.yuque.com/ambition-bcpii"
            target="_blank"
            class="w-9 h-9 rounded-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-gray-700 dark:text-gray-300 flex items-center justify-center transition"
            aria-label="Yuque"
          >
            <Icon icon="lucide:notebook-pen" class="w-4 h-4" />
          </a>
          <a
            href="mailto:hi@example.com"
            class="w-9 h-9 rounded-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-gray-700 dark:text-gray-300 flex items-center justify-center transition"
            aria-label="Email"
          >
            <Icon icon="lucide:mail" class="w-4 h-4" />
          </a>
        </div>
      </div>

      <!-- Nav columns -->
      <div class="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
        <div v-for="col in footerNav" :key="col.title">
          <h4 class="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">
            {{ col.title }}
          </h4>
          <ul class="space-y-2.5">
            <li v-for="link in col.links" :key="link.name">
              <a
                :href="link.href"
                :target="(link as any).external ? '_blank' : undefined"
                class="text-sm text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-1"
              >
                {{ link.name }}
                <Icon
                  v-if="(link as any).external"
                  icon="lucide:arrow-up-right"
                  class="w-3 h-3 opacity-60"
                />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">Stack</h4>
          <ul class="space-y-2.5 text-sm text-gray-600 dark:text-gray-500">
            <li class="flex items-center gap-2">
              <Icon icon="logos:vue" class="w-3.5 h-3.5" />
              Vue 3 + Vite
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="logos:tailwindcss-icon" class="w-3.5 h-3.5" />
              Tailwind CSS
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="logos:typescript-icon" class="w-3.5 h-3.5" />
              TypeScript
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="simple-icons:cursor" class="w-3.5 h-3.5" />
              Built with Cursor
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="max-w-7xl mx-auto mt-12 pt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-500">
      <div>
        © {{ currentYear }} Designed &amp; Built by 木子 Teng · Made with ❤ in Beijing.
      </div>
      <div class="flex items-center gap-4">
        <span>Vibe Coding · Spec Coding</span>
        <span aria-hidden="true">·</span>
        <span>v2026.05</span>
      </div>
    </div>
  </footer>
</template>
