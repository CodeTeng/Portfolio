<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { strengths } from '../data/strengths'
</script>

<template>
  <!--
    Strengths — Apple "Why this matters" panel.
    Four pillars on a softly tinted surface, each with a value-driven story.
  -->
  <section
    id="strengths"
    class="relative py-24 md:py-32 px-6 bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white overflow-hidden"
  >
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute -top-32 left-1/3 w-[700px] h-[700px] rounded-full bg-fuchsia-500/5 dark:bg-fuchsia-500/10 blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div
        class="max-w-3xl mb-14 md:mb-20"
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, ease: [0.22, 1, 0.36, 1] } }"
      >
        <div class="text-eyebrow text-emerald-600 dark:text-emerald-400">Why me</div>
        <h2 class="text-display mt-4 text-4xl md:text-6xl text-gray-900 dark:text-white">
          个人优点。
          <br class="hidden md:block" />
          <span class="text-gradient-cool">长期主义 · 持续输出。</span>
        </h2>
        <p class="mt-5 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          相比一时的产出速度，我更在意能不能持续地学、持续地写、持续地把模板沉淀给团队。
        </p>
      </div>

      <!-- Pillars: 2 columns on md, all four together -->
      <div class="grid md:grid-cols-2 gap-5 md:gap-6">
        <div
          v-for="(s, i) in strengths"
          :key="s.id"
          class="group relative rounded-3xl overflow-hidden bg-white dark:bg-white/[0.04] border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 transition-all duration-500 p-7 md:p-8"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: i * 100, ease: [0.22, 1, 0.36, 1] } }"
        >
          <!-- accent halo -->
          <div
            class="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-20 dark:opacity-30 blur-3xl bg-gradient-to-br pointer-events-none transition-opacity duration-700 group-hover:opacity-40"
            :class="s.accent"
          ></div>

          <div class="relative flex flex-col h-full">
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg flex-shrink-0"
                :class="s.accent"
              >
                <Icon :icon="s.icon" class="w-5 h-5" />
              </div>

              <div class="flex-1 min-w-0">
                <h3 class="text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {{ s.title }}
                </h3>
                <p class="mt-2 text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ s.description }}
                </p>
              </div>
            </div>

            <!-- Optional metric -->
            <div
              v-if="s.metric"
              class="mt-6 pt-5 border-t border-black/5 dark:border-white/10 flex items-baseline gap-3"
            >
              <span
                class="text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-br bg-clip-text text-transparent"
                :class="s.accent"
              >
                {{ s.metric.value }}
              </span>
              <span class="text-sm text-gray-500 dark:text-gray-500">
                {{ s.metric.label }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Closing tagline -->
      <div
        class="mt-14 md:mt-20 text-center"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400, ease: [0.22, 1, 0.36, 1] } }"
      >
        <p class="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white max-w-3xl mx-auto leading-tight">
          种一棵树最好的时间是十年前，
          <br class="hidden md:block" />
          其次是 <span class="text-gradient-warm">现在</span>。
        </p>
      </div>
    </div>
  </section>
</template>
