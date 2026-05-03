<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { experiences } from '../data/experience'
</script>

<template>
  <!--
    Experience — Apple keynote storytelling.
    Section sits on a dark surface for clear contrast vs the lighter Hero,
    creating the "scroll cadence" that Apple product pages have.
  -->
  <section
    id="experience"
    class="relative py-24 md:py-32 px-6 bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white overflow-hidden"
  >
    <!-- Subtle backdrop -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-fuchsia-500/5 dark:bg-fuchsia-500/10 blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto">
      <!-- Section header -->
      <div
        class="max-w-3xl mb-16 md:mb-20"
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, ease: [0.22, 1, 0.36, 1] } }"
      >
        <div class="text-eyebrow text-blue-600 dark:text-blue-400">Experience</div>
        <h2 class="text-display mt-4 text-4xl md:text-6xl text-gray-900 dark:text-white">
          在大厂里，
          <span class="text-gradient-cool">把工程做扎实。</span>
        </h2>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- vertical rail -->
        <div class="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/15 dark:via-white/15 to-transparent -translate-x-px sm:-translate-x-px"></div>

        <div class="space-y-10 sm:space-y-16">
          <div
            v-for="(exp, i) in experiences"
            :key="exp.id"
            class="relative"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 + i * 80, ease: [0.22, 1, 0.36, 1] } }"
          >
            <!-- node -->
            <div class="absolute left-5 sm:left-1/2 -translate-x-1/2 top-3">
              <div
                class="relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                :style="{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color}dd)` }"
              >
                <Icon :icon="exp.icon" class="w-5 h-5 text-white" />
                <span
                  class="absolute -inset-1 rounded-full opacity-30 blur-md -z-10"
                  :style="{ backgroundColor: exp.color }"
                ></span>
              </div>
            </div>

            <!-- card: alternating sides on >=sm -->
            <div
              :class="[
                'pl-16 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 items-start',
                i % 2 === 0 ? '' : ''
              ]"
            >
              <!-- spacer for the off-side on sm+ -->
              <div
                class="hidden sm:block"
                :class="i % 2 === 0 ? 'order-2' : 'order-1'"
              >
                <!-- meta block on the off side, helps balance -->
                <div
                  class="text-sm text-gray-500 dark:text-gray-500 leading-relaxed"
                  :class="i % 2 === 0 ? 'sm:pl-10 text-left' : 'sm:pr-10 text-right'"
                >
                  <div class="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    {{ exp.period }}
                  </div>
                  <div class="mt-1 inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                    <Icon icon="lucide:map-pin" class="w-3.5 h-3.5" />
                    {{ exp.location }}
                  </div>
                </div>
              </div>

              <!-- main card -->
              <div
                class="relative"
                :class="i % 2 === 0 ? 'sm:order-1 sm:pr-10 sm:text-right' : 'sm:order-2 sm:pl-10 sm:text-left'"
              >
                <!-- mobile: meta -->
                <div class="sm:hidden mb-2 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500 flex items-center gap-2">
                  <span>{{ exp.period }}</span>
                  <span>·</span>
                  <span class="inline-flex items-center gap-1">
                    <Icon icon="lucide:map-pin" class="w-3 h-3" />
                    {{ exp.location }}
                  </span>
                </div>

                <div
                  class="group relative rounded-2xl p-6 md:p-7 bg-white dark:bg-white/[0.04] border border-black/5 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-black/10 dark:hover:border-white/20 transition-all duration-500"
                >
                  <!-- top row -->
                  <div
                    class="flex items-center gap-3 mb-3"
                    :class="i % 2 === 0 ? 'sm:justify-end' : ''"
                  >
                    <span
                      class="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide text-white"
                      :style="{ backgroundColor: exp.color }"
                    >
                      {{ exp.companyEn }}
                    </span>
                    <span class="text-sm text-gray-500 dark:text-gray-500">{{ exp.team }}</span>
                  </div>

                  <h3 class="text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {{ exp.role }}
                    <span class="text-gray-400 dark:text-gray-600">@</span>
                    <span class="text-gray-700 dark:text-gray-200">{{ exp.company }}</span>
                  </h3>

                  <ul
                    class="mt-4 space-y-2.5 text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed"
                    :class="i % 2 === 0 ? 'sm:text-right' : ''"
                  >
                    <li
                      v-for="(line, lineIdx) in exp.highlights"
                      :key="lineIdx"
                      class="flex gap-2 items-start"
                      :class="i % 2 === 0 ? 'sm:flex-row-reverse' : ''"
                    >
                      <Icon
                        icon="lucide:sparkle"
                        class="w-3.5 h-3.5 mt-1.5 flex-shrink-0"
                        :style="{ color: exp.color }"
                      />
                      <span>{{ line }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
