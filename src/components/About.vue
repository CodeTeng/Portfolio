<script setup lang="ts">
import { skills } from '../data/skills'
import { projects } from '../data/projects'

const categories = ['Frontend', 'Backend', 'Tools'] as const
</script>

<template>
  <section id="about" class="py-24 px-6 bg-white dark:bg-[#0f0f0f] relative overflow-hidden">
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

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Bio Content -->
        <div 
          class="space-y-6"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200, ease: 'easeOut' } }"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="relative w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/30">
              <img 
                src="https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/user_avatar/14/OldnE8LR-avatar.jpg" 
                alt="About Avatar" 
                class="w-full h-full object-cover bg-gray-100 dark:bg-[#1a1a1a]"
              />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                木子Teng
              </h3>
              <p class="text-purple-600 dark:text-purple-400">北京交通大学 · 计算机技术 · 研二</p>
            </div>
          </div>

          <h3 class="text-xl font-bold text-gray-900 dark:text-white">
            热爱分享与学习技术，持续成长
          </h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            你好，我是木子Teng，专注分享 Java/前端/C++/Python/Golang 技术。热爱分享与学习技术，励志成为一名资深架构师。
          </p>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            种一棵树最好的时间是十年前，其次是现在。一切的一切都刚刚好，让我们继续努力。
          </p>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 pt-6">
            <div class="text-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-purple-500/50 transition-colors">
              <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">1</div>
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
          class="space-y-8"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800, delay: 400, ease: 'easeOut' } }"
        >
          <div v-for="category in categories" :key="category">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-purple-500"></span>
              {{ category }}
            </h4>
            <div class="space-y-4">
              <div v-for="skill in skills.filter(s => s.category === category)" :key="skill.name">
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
                  <span class="text-gray-500 dark:text-gray-500 text-sm">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                  <div 
                    class="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
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
