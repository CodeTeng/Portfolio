<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { honors } from '../data/honors'
import { computed } from 'vue'

// Featured is guaranteed to exist because `honors` is a non-empty constant.
const featured = computed(() => honors[0]!)
const rest = computed(() => honors.slice(1))

const levelTone: Record<string, string> = {
  '国家级': 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30',
  '省市级': 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30',
  '校级':   'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
  '其他':   'bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30',
}
</script>

<template>
  <!--
    Honors — Apple "milestones" rail.
    A featured highlight card on the left, a vertical award list on the right.
    On mobile they stack so the timeline still reads top-down.
  -->
  <section
    id="honors"
    class="relative py-24 md:py-32 px-6 bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden"
  >
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-500/5 dark:bg-amber-500/10 blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div
        class="max-w-3xl mb-14 md:mb-20"
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, ease: [0.22, 1, 0.36, 1] } }"
      >
        <div class="text-eyebrow text-amber-600 dark:text-amber-400">Honors & Awards</div>
        <h2 class="text-display mt-4 text-4xl md:text-6xl text-gray-900 dark:text-white">
          所获荣誉。
          <span class="text-gradient-warm">把每一次同台都当作一次复盘。</span>
        </h2>
        <p class="mt-5 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          国赛、省赛、校赛与志愿服务表彰。比起奖项本身，更在意每次比赛里产出的工程与方法论。
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-6 md:gap-8 items-start">
        <!-- Featured highlight (latest, biggest) -->
        <div
          class="lg:col-span-5 relative rounded-3xl overflow-hidden p-8 md:p-10 text-white shadow-2xl bg-gradient-to-br"
          :class="featured.accent"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100, ease: [0.22, 1, 0.36, 1] } }"
        >
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.4),transparent_55%)]"></div>
          <div class="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-white/15 blur-3xl"></div>

          <div class="relative">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/30 text-xs font-semibold tracking-wide">
              <Icon icon="lucide:award" class="w-3.5 h-3.5" />
              最新荣誉 · {{ featured.date }}
            </div>

            <div class="mt-7 flex items-center gap-4">
              <div class="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center">
                <Icon :icon="featured.icon" class="w-7 h-7 text-white" />
              </div>
              <div>
                <div class="text-[11px] uppercase tracking-widest text-white/80">{{ featured.level }} · {{ featured.rank }}</div>
              </div>
            </div>

            <h3 class="mt-6 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
              {{ featured.title }}
            </h3>

            <p class="mt-5 text-white/90 leading-relaxed">
              全国大学生计算机系统能力大赛 OceanBase 数据库赛道，
              北京赛区第二名、国赛 19 名 —— 与团队一起完成了从内核题目到产品赛的完整答辩。
            </p>

            <div class="mt-8 flex items-center gap-2 text-sm font-medium text-white/90">
              <Icon icon="lucide:trophy" class="w-4 h-4" />
              {{ honors.length }} 项主要荣誉
              <span class="mx-2 opacity-50">·</span>
              <Icon icon="lucide:calendar" class="w-4 h-4" />
              覆盖 2022 — 2025
            </div>
          </div>
        </div>

        <!-- Awards list -->
        <div class="lg:col-span-7 space-y-3">
          <div
            v-for="(h, i) in rest"
            :key="h.id"
            class="group relative flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-white dark:bg-white/[0.04] border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 hover:shadow-lg transition-all duration-500"
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 + i * 70, ease: [0.22, 1, 0.36, 1] } }"
          >
            <!-- date column -->
            <div class="flex-shrink-0 w-16 sm:w-20 text-center">
              <div class="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500">
                {{ h.date.split('.')[0] || h.date }}
              </div>
              <div class="text-sm font-semibold text-gray-900 dark:text-white">
                {{ h.date.includes('.') ? h.date.split('.')[1] + '月' : '' }}
              </div>
            </div>

            <!-- separator -->
            <div class="hidden sm:block w-px self-stretch bg-black/5 dark:bg-white/10"></div>

            <!-- icon -->
            <div
              class="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-md"
              :class="h.accent"
            >
              <Icon :icon="h.icon" class="w-5 h-5" />
            </div>

            <!-- content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span
                  class="px-2 py-0.5 rounded-full text-[10px] font-semibold border"
                  :class="levelTone[h.level]"
                >
                  {{ h.level }}
                </span>
                <span class="text-xs text-gray-500 dark:text-gray-500">{{ h.rank }}</span>
              </div>
              <div class="mt-1 text-[15px] font-medium text-gray-900 dark:text-white leading-snug">
                {{ h.title }}
              </div>
            </div>

            <Icon
              icon="lucide:arrow-up-right"
              class="hidden sm:block w-4 h-4 text-gray-400 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
