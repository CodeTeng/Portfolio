<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { skills } from '../data/skills'
import type { Skill } from '../data/skills'

const skillsByCategory = (cat: Skill['category']) => skills.filter(s => s.category === cat)
</script>

<template>
  <!--
    Expertise — Apple "bento" grid (think iPad / iPhone product page):
    A primary "feature" tile (AI), then a 2x2 grid of secondary tiles.
    Each tile is its own miniature story, with skill chips at the bottom.
  -->
  <section
    id="expertise"
    class="relative py-24 md:py-32 px-6 bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden"
  >
    <!-- Background atmospherics -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute -top-24 right-1/4 w-[640px] h-[640px] rounded-full bg-fuchsia-500/5 dark:bg-fuchsia-500/10 blur-[120px]"></div>
      <div class="absolute bottom-0 left-1/4 w-[640px] h-[640px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-[120px]"></div>
    </div>

    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div
        class="max-w-3xl mb-16 md:mb-20"
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, ease: [0.22, 1, 0.36, 1] } }"
      >
        <div class="text-eyebrow text-fuchsia-600 dark:text-fuchsia-400">Expertise</div>
        <h2 class="text-display mt-4 text-4xl md:text-6xl text-gray-900 dark:text-white">
          专业技能。
          <span class="text-gradient-warm">从底层到 AI 全栈打通。</span>
        </h2>
        <p class="mt-5 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          以 Java 后端为底，Spring 全家桶为面，外加 AI 工程化与高性能存储中间件，
          形成一条「能落地、能扩展、能调优」的工程闭环。
        </p>
      </div>

      <!-- Bento grid: 6 columns on lg, hero tile spans 2 rows × 4 cols -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[200px] sm:auto-rows-[220px] gap-4 md:gap-5">

        <!-- Hero tile: AI -->
        <div
          class="group relative col-span-1 sm:col-span-2 lg:col-span-4 lg:row-span-2 rounded-3xl overflow-hidden bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 p-7 md:p-9 text-white shadow-xl shadow-fuchsia-500/15 dark:shadow-fuchsia-500/10"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100, ease: [0.22, 1, 0.36, 1] } }"
        >
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_55%)]"></div>
          <div class="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-white/15 blur-3xl"></div>

          <div class="relative h-full flex flex-col">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
                <Icon icon="lucide:bot" class="w-5 h-5 text-white" />
              </div>
              <div>
                <div class="text-xs uppercase tracking-widest text-white/80">AI 工程</div>
                <div class="text-sm text-white/90">AI Coding · Prompt · MCP</div>
              </div>
            </div>

            <h3 class="mt-auto text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              用 AI 工具
              <br />
              极致提效开发。
            </h3>

            <p class="mt-4 text-white/85 max-w-xl leading-relaxed">
              熟练使用 Claude Code、Cursor 等 AI 编程工具，具备扎实的 Prompt 工程与调优能力；
              熟练运用 MCP、Skills、Rules、Subagent 等机制提升代码生成质量，
              实现生产级代码开发，极大提高开发效率。
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="s in skillsByCategory('AI')"
                :key="s.name"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-medium border border-white/20"
              >
                <Icon :icon="s.icon" class="w-3.5 h-3.5" />
                {{ s.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Backend (tall) -->
        <div
          class="group relative col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 p-7 md:p-8 text-white shadow-xl shadow-blue-500/15"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200, ease: [0.22, 1, 0.36, 1] } }"
        >
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(255,255,255,0.35),transparent_55%)]"></div>
          <div class="relative h-full flex flex-col">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
                <Icon icon="lucide:server" class="w-5 h-5 text-white" />
              </div>
              <div>
                <div class="text-xs uppercase tracking-widest text-white/80">Backend</div>
                <div class="text-sm text-white/90">Java · Spring · 高并发</div>
              </div>
            </div>

            <h3 class="mt-auto text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
              扎实的 Java
              <br />
              工程能力。
            </h3>

            <p class="mt-3 text-white/85 text-sm leading-relaxed">
              JavaSE 集合 / 反射 / IO / Java8；JUC 锁、线程池、异步与 CountDownLatch；
              Spring 全家桶；Spring Cloud Alibaba 微服务。
            </p>

            <div class="mt-5 flex flex-wrap gap-1.5">
              <span
                v-for="s in skillsByCategory('Backend')"
                :key="s.name"
                class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-[11px] font-medium border border-white/20"
              >
                <Icon :icon="s.icon" class="w-3 h-3" />
                {{ s.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Agent -->
        <div
          class="group relative col-span-1 sm:col-span-1 lg:col-span-3 rounded-3xl overflow-hidden bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 p-6 md:p-7 text-white shadow-lg shadow-violet-500/15"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 250, ease: [0.22, 1, 0.36, 1] } }"
        >
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.3),transparent_55%)]"></div>
          <div class="relative h-full flex flex-col">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
                <Icon icon="lucide:brain" class="w-5 h-5 text-white" />
              </div>
              <div>
                <div class="text-xs uppercase tracking-widest text-white/80">Agent</div>
                <div class="text-sm text-white/90">ReAct · Tool Calling · Multi-Agent</div>
              </div>
            </div>

            <h3 class="mt-4 text-xl md:text-2xl font-semibold tracking-tight">
              智能体架构设计。
            </h3>
            <p class="mt-2 text-sm text-white/85 leading-relaxed">
              深入理解 Agent 架构设计，掌握 ReAct、Plan-and-Execute 等推理范式，
              熟悉 Context Engineering、Memory、Tool / Function Calling、多 Agent 协作等核心机制。
            </p>

            <div class="mt-auto pt-4 flex flex-wrap gap-1.5">
              <span
                v-for="s in skillsByCategory('Agent')"
                :key="s.name"
                class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-[11px] font-medium border border-white/20"
              >
                <Icon :icon="s.icon" class="w-3 h-3" />
                {{ s.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- RAG -->
        <div
          class="group relative col-span-1 sm:col-span-1 lg:col-span-3 rounded-3xl overflow-hidden bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 p-6 md:p-7 hover:border-teal-500/30 transition-all duration-500"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 300, ease: [0.22, 1, 0.36, 1] } }"
        >
          <div class="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-teal-500/10 dark:bg-teal-500/15 blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
          <div class="relative h-full flex flex-col">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-teal-500/10 dark:bg-teal-500/15 flex items-center justify-center">
                <Icon icon="lucide:search" class="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <div class="text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400">RAG</div>
                <div class="text-sm text-gray-500 dark:text-gray-500">Hybrid Search · Rerank · Graph RAG</div>
              </div>
            </div>

            <h3 class="mt-3 text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              检索增强生成。
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              掌握文档切分、Embedding 选型、Hybrid Search、Rerank 等关键技术；
              熟悉 Query Rewrite、Retriever 优化，了解 Graph RAG、Agentic RAG 前沿架构。
            </p>

            <div class="mt-auto pt-4 flex flex-wrap gap-1.5">
              <span
                v-for="s in skillsByCategory('RAG')"
                :key="s.name"
                class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
              >
                <Icon :icon="s.icon" class="w-3 h-3" />
                {{ s.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- AI 应用框架 -->
        <div
          class="group relative col-span-1 sm:col-span-2 lg:col-span-6 rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-6 md:p-7 text-white shadow-lg shadow-orange-500/15"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 350, ease: [0.22, 1, 0.36, 1] } }"
        >
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.3),transparent_55%)]"></div>
          <div class="relative h-full flex flex-col">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
                <Icon icon="lucide:blocks" class="w-5 h-5 text-white" />
              </div>
              <div>
                <div class="text-xs uppercase tracking-widest text-white/80">AI 应用框架</div>
                <div class="text-sm text-white/90">LangChain · LangGraph · Dify</div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-auto">
              <div>
                <h3 class="text-xl md:text-2xl font-semibold tracking-tight">
                  从原型到上线的端到端落地。
                </h3>
                <p class="mt-2 text-sm text-white/85 leading-relaxed max-w-2xl">
                  熟练使用 LangChain、LangGraph、Dify 等 AI 应用开发框架，
                  能够灵活组合 Agent、RAG、MCP 等能力，完成从原型设计到服务上线的端到端落地能力。
                </p>
              </div>

              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="s in skillsByCategory('AIFramework')"
                  :key="s.name"
                  class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-[11px] font-medium border border-white/20"
                >
                  <Icon :icon="s.icon" class="w-3 h-3" />
                  {{ s.name }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Database -->
        <div
          class="group relative col-span-1 sm:col-span-1 lg:col-span-3 rounded-3xl overflow-hidden bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 p-6 md:p-7 hover:border-emerald-500/30 transition-all duration-500"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 300, ease: [0.22, 1, 0.36, 1] } }"
        >
          <div class="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
          <div class="relative h-full flex flex-col">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 flex items-center justify-center">
                <Icon icon="lucide:database" class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <div class="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Database</div>
                <div class="text-sm text-gray-500 dark:text-gray-500">MySQL · Redis · ES</div>
              </div>
            </div>

            <h3 class="mt-4 text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              数据存储与检索。
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              MySQL 索引 / 事务 / MVCC / 锁机制 + SQL 优化；Redis 缓存、分布式锁、持久化、内存淘汰；
              MongoDB / Elasticsearch 实战经验。
            </p>

            <div class="mt-auto pt-4 flex flex-wrap gap-1.5">
              <span
                v-for="s in skillsByCategory('Database')"
                :key="s.name"
                class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
              >
                <Icon :icon="s.icon" class="w-3 h-3" />
                {{ s.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Middleware -->
        <div
          class="group relative col-span-1 sm:col-span-1 lg:col-span-3 rounded-3xl overflow-hidden bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 p-6 md:p-7 hover:border-amber-500/30 transition-all duration-500"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 400, ease: [0.22, 1, 0.36, 1] } }"
        >
          <div class="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-amber-500/10 dark:bg-amber-500/15 blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
          <div class="relative h-full flex flex-col">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 flex items-center justify-center">
                <Icon icon="lucide:share-2" class="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <div class="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400">Middleware</div>
                <div class="text-sm text-gray-500 dark:text-gray-500">RabbitMQ · Nacos</div>
              </div>
            </div>

            <h3 class="mt-4 text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              异步消息与服务治理。
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              熟悉 RabbitMQ 消息中间件与 Elasticsearch 分布式搜索；
              了解 Spring Cloud（含 Alibaba）微服务相关组件的使用。
            </p>

            <div class="mt-auto pt-4 flex flex-wrap gap-1.5">
              <span
                v-for="s in skillsByCategory('Middleware')"
                :key="s.name"
                class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
              >
                <Icon :icon="s.icon" class="w-3 h-3" />
                {{ s.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- DevOps -->
        <div
          class="group relative col-span-1 sm:col-span-1 lg:col-span-3 rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500/95 via-violet-500 to-purple-600 p-6 md:p-7 text-white shadow-lg"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 500, ease: [0.22, 1, 0.36, 1] } }"
        >
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.3),transparent_55%)]"></div>
          <div class="relative h-full flex flex-col">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
                <Icon icon="lucide:terminal" class="w-5 h-5 text-white" />
              </div>
              <div>
                <div class="text-xs uppercase tracking-widest text-white/80">DevOps</div>
                <div class="text-sm text-white/90">Linux · Docker · Git</div>
              </div>
            </div>

            <h3 class="mt-4 text-xl md:text-2xl font-semibold tracking-tight">
              工程化与部署。
            </h3>
            <p class="mt-2 text-sm text-white/85 leading-relaxed">
              熟练使用 Linux、Docker、Git 常用命令，了解 CI/CD，
              具备应用部署与运行期问题排查的基本能力。
            </p>

            <div class="mt-auto pt-4 flex flex-wrap gap-1.5">
              <span
                v-for="s in skillsByCategory('DevOps')"
                :key="s.name"
                class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-[11px] font-medium border border-white/20"
              >
                <Icon :icon="s.icon" class="w-3 h-3" />
                {{ s.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Frontend -->
        <div
          class="group relative col-span-1 sm:col-span-1 lg:col-span-3 rounded-3xl overflow-hidden bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 p-6 md:p-7 hover:border-rose-500/30 transition-all duration-500"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 600, ease: [0.22, 1, 0.36, 1] } }"
        >
          <div class="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-rose-500/10 dark:bg-rose-500/15 blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
          <div class="relative h-full flex flex-col">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-rose-500/10 dark:bg-rose-500/15 flex items-center justify-center">
                <Icon icon="lucide:layout-dashboard" class="w-5 h-5 text-rose-600 dark:text-rose-400" />
              </div>
              <div>
                <div class="text-xs uppercase tracking-widest text-rose-600 dark:text-rose-400">Frontend</div>
                <div class="text-sm text-gray-500 dark:text-gray-500">Vue · uni-app · Vite</div>
              </div>
            </div>

            <h3 class="mt-4 text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              全栈侧的前端基础。
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              了解 Vue、uni-app、Ant Design Vue、Vite 等主流前端技术栈，
              能独立完成中后台与移动端小程序的开发与对接。
            </p>

            <div class="mt-auto pt-4 flex flex-wrap gap-1.5">
              <span
                v-for="s in skillsByCategory('Frontend')"
                :key="s.name"
                class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
              >
                <Icon :icon="s.icon" class="w-3 h-3" />
                {{ s.name }}
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- Footnote: foundational skills (CN, OS, algos) -->
      <div
        class="mt-10 rounded-2xl border border-black/5 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 700, ease: [0.22, 1, 0.36, 1] } }"
      >
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 dark:from-white/15 dark:to-white/5 flex items-center justify-center text-white">
            <Icon icon="lucide:graduation-cap" class="w-4 h-4" />
          </div>
          <div>
            <div class="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500">Computer Science Fundamentals</div>
            <div class="text-sm text-gray-700 dark:text-gray-300 font-medium">扎实的计算机基础</div>
          </div>
        </div>
        <p class="md:flex-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed md:pl-4 md:border-l md:border-black/10 md:dark:border-white/10">
          熟悉 计算机网络、操作系统、常见数据结构、算法 与 设计模式，能将这些底层知识反复用在工程优化与系统设计当中。
        </p>
      </div>
    </div>
  </section>
</template>
