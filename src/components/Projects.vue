<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { projects } from '../data/projects'

const itemsPerPage = 6
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(projects.length / itemsPerPage))

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return projects.slice(start, end)
})

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
}

const openGithub = (url?: string) => {
  if (url) window.open(url, '_blank')
}
</script>

<template>
  <!--
    Projects — Apple "Featured" gallery.
    Section sits on a slightly different surface (gray-50 / near-black)
    and uses larger cards with generous internal padding.
  -->
  <section
    id="projects"
    class="relative py-24 md:py-32 px-6 bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white overflow-hidden"
  >
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div
        class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20"
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, ease: [0.22, 1, 0.36, 1] } }"
      >
        <div class="max-w-3xl">
          <div class="text-eyebrow text-purple-600 dark:text-purple-400">Featured Work</div>
          <h2 class="text-display mt-4 text-4xl md:text-6xl text-gray-900 dark:text-white">
            从想法到产品，
            <br class="hidden md:block" />
            <span class="text-gradient-cool">一气呵成。</span>
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            一些与 AI、全栈、工具链相关的个人作品 —— 大多数都跑在线上，可点开体验。
          </p>
        </div>

        <a
          href="https://github.com/CodeTeng"
          target="_blank"
          class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/15 dark:border-white/15 text-sm font-semibold text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition"
        >
          全部项目
          <Icon icon="lucide:arrow-up-right" class="w-4 h-4" />
        </a>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        <a
          v-for="(project, index) in paginatedProjects"
          :key="project.id"
          :href="project.link"
          target="_blank"
          class="group relative block rounded-3xl overflow-hidden bg-white dark:bg-white/[0.04] border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: index * 80, ease: [0.22, 1, 0.36, 1] } }"
        >
          <!-- Image -->
          <div class="relative aspect-[16/10] overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>

            <!-- corner action chip -->
            <div class="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur text-gray-900 shadow-sm opacity-0 group-hover:opacity-100 transition">
              查看
              <Icon icon="lucide:arrow-up-right" class="w-3 h-3" />
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ project.title }}
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
              {{ project.description }}
            </p>

            <!-- Tags -->
            <div class="mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-2.5 py-1 text-[11px] font-medium rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Footer links -->
            <div class="mt-5 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
              <span class="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                <Icon icon="lucide:globe" class="w-4 h-4" />
                Live Demo
              </span>
              <span
                v-if="project.github"
                class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition"
                @click.stop.prevent="openGithub(project.github)"
              >
                <Icon icon="simple-icons:github" class="w-4 h-4" />
                GitHub
              </span>
            </div>
          </div>
        </a>
      </div>

      <!-- Pagination - Apple-style segmented control -->
      <div
        v-if="totalPages > 1"
        class="mt-12 md:mt-16 flex justify-center items-center gap-3"
      >
        <button
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="w-9 h-9 rounded-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/15 text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center justify-center"
          aria-label="Previous page"
        >
          <Icon icon="lucide:chevron-left" class="w-4 h-4" />
        </button>

        <div class="inline-flex items-center gap-1 p-1 rounded-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/15">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
            class="w-8 h-8 rounded-full text-sm font-medium transition flex items-center justify-center"
            :class="
              currentPage === page
                ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            "
          >
            {{ page }}
          </button>
        </div>

        <button
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="w-9 h-9 rounded-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/15 text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center justify-center"
          aria-label="Next page"
        >
          <Icon icon="lucide:chevron-right" class="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
</template>
