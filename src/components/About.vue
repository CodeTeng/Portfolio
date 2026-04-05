<script setup lang="ts">
import { skills } from '../data/skills'
import { projects } from '../data/projects'

const categories = ['Frontend', 'Backend', 'Tools', 'AI'] as const

const categoryMeta: Record<string, { color: string; dot: string }> = {
  Frontend: { color: 'from-cyan-500 to-blue-500', dot: 'bg-cyan-500' },
  Backend:  { color: 'from-blue-500 to-indigo-600', dot: 'bg-blue-500' },
  Tools:    { color: 'from-violet-500 to-purple-600', dot: 'bg-violet-500' },
  AI:       { color: 'from-pink-500 to-rose-500', dot: 'bg-pink-500' },
}
</script>

<template>
  <section id="about" class="py-24 px-6 bg-white dark:bg-[#0f0f0f] relative overflow-hidden">
    <!-- Background accents -->
    <div class="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
      >
        <h2 class="text-3xl md:text-5xl font-bold mb-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            关于我
          </span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Bio Content -->
        <div
          class="space-y-6"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
        >
          <!-- Avatar + Name -->
          <div class="flex items-center gap-4 mb-2">
            <div class="relative w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/30 flex-shrink-0">
              <img
                src="https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/user_avatar/14/OldnE8LR-avatar.jpg"
                alt="About Avatar"
                class="w-full h-full object-cover bg-gray-100 dark:bg-[#1a1a1a]"
              />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">木子 Teng</h3>
              <p class="text-purple-600 dark:text-purple-400 text-sm mt-0.5">北京交通大学 · 计算机科学与技术学院 · 研二 硕士生</p>
            </div>
          </div>

          <!-- Interest badges -->
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in ['Vibe Coding', '写笔记', 'AI 前沿', 'RAG', 'Agent', '提示工程']" :key="tag"
              class="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400">
              {{ tag }}
            </span>
          </div>

          <!-- Bio paragraphs -->
          <div class="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-base">
            <p>
              平时喜欢 <span class="text-cyan-600 dark:text-cyan-400 font-medium">Vibe Coding</span>、写笔记、跟进 AI 前沿。
            </p>
            <p>
              关注大模型落地与工程化，包括 <span class="text-blue-600 dark:text-blue-400 font-medium">RAG、Agent、工具调用、评测与提示工程</span>；
              也折腾 AI 辅助开发（<span class="text-violet-600 dark:text-violet-400 font-medium">Cursor / Claude Code</span> 等）。
              相信「工具会变，但问题拆解与系统能力会一直有用」。
            </p>
            <p class="italic text-gray-500 dark:text-gray-500 border-l-2 border-purple-500/50 pl-4">
              种一棵树最好的时间是十年前，其次是现在。继续学习，继续输出，拥抱 AI。
            </p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 pt-4">
            <div class="text-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-purple-500/50 transition-colors">
              <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">3</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Years Exp.</div>
            </div>
            <div class="text-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors">
              <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">{{ projects.length }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div class="text-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-cyan-500/50 transition-colors">
              <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">{{ skills.length }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Skills</div>
            </div>
          </div>
        </div>

        <!-- Skills Section -->
        <div
          class="space-y-7"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800, delay: 400, ease: 'easeOut' } }"
        >
          <div v-for="category in categories" :key="category">
            <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2 uppercase tracking-wider">
              <span class="w-2 h-2 rounded-full flex-shrink-0" :class="categoryMeta[category].dot"></span>
              {{ category }}
            </h4>
            <div class="space-y-3">
              <div v-for="skill in skills.filter(s => s.category === category)" :key="skill.name">
                <div class="flex justify-between mb-1.5">
                  <span class="text-gray-700 dark:text-gray-300 text-sm font-medium">{{ skill.name }}</span>
                  <span class="text-gray-400 dark:text-gray-500 text-xs">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-100 dark:bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div
                    class="h-full rounded-full bg-gradient-to-r"
                    :class="categoryMeta[category].color"
                    v-motion
                    :initial="{ width: '0%' }"
                    :visibleOnce="{ width: `${skill.level}%`, transition: { duration: 1000, delay: 500, ease: 'easeOut' } }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
