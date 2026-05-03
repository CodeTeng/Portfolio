<script setup lang="ts">
import { Icon } from '@iconify/vue'

const channels = [
  { name: '语雀', desc: '系统笔记 · 知识库', icon: 'lucide:notebook-pen', color: '#31cc79', href: 'https://www.yuque.com/ambition-bcpii' },
  { name: 'CSDN', desc: '原创技术博客',     icon: 'simple-icons:csdn',   color: '#fc5531', href: 'https://blog.csdn.net/m0_52781902?spm=1000.2115.3001.10640' },
  { name: '公众号', desc: '长文 · 复盘',     icon: 'lucide:rss',          color: '#9333ea', href: '#' },
  { name: 'GitHub', desc: '开源 · 模板',    icon: 'simple-icons:github', color: '#1f1f1f', href: 'https://github.com/CodeTeng' },
]

const facts = [
  { icon: 'lucide:graduation-cap', label: '北京交通大学 · 计算机技术 · 硕士在读' },
  { icon: 'lucide:map-pin',        label: '北京 · 海淀' },
]
</script>

<template>
  <!--
    About — closing chapter.
    Two-column on desktop: portrait + bio on the left, channels grid on the right.
    Designed to feel like the "Hi, I'm ___" callback at the end of an Apple keynote.
  -->
  <section
    id="about"
    class="relative py-24 md:py-32 px-6 bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden"
  >
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div
        class="max-w-3xl mb-14 md:mb-20"
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, ease: [0.22, 1, 0.36, 1] } }"
      >
        <div class="text-eyebrow text-blue-600 dark:text-blue-400">About me</div>
        <h2 class="text-display mt-4 text-4xl md:text-6xl text-gray-900 dark:text-white">
          关于我，
          <br class="hidden md:block" />
          <span class="text-gradient-cool">还有一些题外话。</span>
        </h2>
      </div>

      <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <!-- Left: profile card -->
        <div
          class="lg:col-span-7"
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800, delay: 100, ease: [0.22, 1, 0.36, 1] } }"
        >
          <div class="relative rounded-3xl bg-gradient-to-br from-gray-50 to-white dark:from-white/[0.04] dark:to-white/[0.02] border border-black/5 dark:border-white/10 p-7 md:p-9">
            <!-- avatar + name -->
            <div class="flex items-start gap-5">
              <div class="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden flex-shrink-0">
                <div class="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur opacity-60"></div>
                <img
                  src="https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/user_avatar/14/OldnE8LR-avatar.jpg"
                  alt="Avatar"
                  class="relative w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  木子 Teng
                </h3>
                <p class="mt-1 text-sm text-blue-600 dark:text-blue-400 font-medium">
                  全栈 / AI 应用工程师 · Vibe Coder
                </p>

                <div class="mt-3 flex flex-wrap gap-1.5">
                  <span
                    v-for="t in ['Vibe Coding', 'RAG', 'Agent', 'Spring Boot', '写笔记']"
                    :key="t"
                    class="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                  >
                    {{ t }}
                  </span>
                </div>
              </div>
            </div>

            <!-- bio paragraphs -->
            <div class="mt-7 space-y-4 text-[15px] md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                平时喜欢
                <span class="font-medium text-gray-900 dark:text-white">Vibe Coding</span>、写笔记、跟进 AI 前沿。
                关注大模型落地与工程化，包括
                <span class="font-medium text-gray-900 dark:text-white">RAG、Agent、工具调用、评测与提示工程</span>；
                也折腾 AI 辅助开发（Cursor / Claude Code 等）。
              </p>
              <p>
                相信「工具会变，但问题拆解与系统能力会一直有用」。
                所以在选实习、选项目时，会偏向那些能让我把
                <span class="font-medium text-gray-900 dark:text-white">底层、架构、工具链</span> 同时跑通的方向。
              </p>
            </div>

            <!-- facts -->
            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="f in facts"
                :key="f.label"
                class="flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10"
              >
                <Icon :icon="f.icon" class="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ f.label }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: channels + CTA -->
        <div
          class="lg:col-span-5 space-y-5"
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200, ease: [0.22, 1, 0.36, 1] } }"
        >
          <div class="rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-fuchsia-600 p-7 md:p-8 text-white relative overflow-hidden">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(255,255,255,0.35),transparent_55%)]"></div>
            <div class="relative">
              <div class="text-xs uppercase tracking-widest text-white/80">Let's talk</div>
              <h3 class="mt-3 text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                有合作或岗位机会？
                <br />
                欢迎随时联系。
              </h3>
              <p class="mt-3 text-white/85 text-sm leading-relaxed">
                AI 应用 / 后端工程 / 工具链方向都欢迎，
                也很乐意聊聊 Vibe Coding 与团队效率的话题。
              </p>
              <div class="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:hi@example.com"
                  class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-900 text-sm font-semibold hover:bg-white/90 transition"
                >
                  <Icon icon="lucide:mail" class="w-4 h-4" />
                  发邮件
                </a>
                <a
                  href="https://github.com/CodeTeng"
                  target="_blank"
                  class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur border border-white/30 text-sm font-semibold hover:bg-white/20 transition"
                >
                  <Icon icon="simple-icons:github" class="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <!-- Channels grid -->
          <div class="grid grid-cols-2 gap-3">
            <a
              v-for="c in channels"
              :key="c.name"
              :href="c.href"
              target="_blank"
              class="group relative rounded-2xl bg-white dark:bg-white/[0.04] border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 p-4 transition-all duration-500 hover:-translate-y-0.5"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-sm"
                  :style="{ backgroundColor: c.color }"
                >
                  <Icon :icon="c.icon" class="w-4 h-4" />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-sm font-semibold text-gray-900 dark:text-white">{{ c.name }}</div>
                  <div class="text-[11px] text-gray-500 dark:text-gray-500">{{ c.desc }}</div>
                </div>
                <Icon icon="lucide:arrow-up-right" class="w-3.5 h-3.5 text-gray-400 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white transition" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
