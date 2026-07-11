export interface Skill {
  name: string
  icon: string
  level: number // 1-100
  category: 'AI' | 'Agent' | 'RAG' | 'AIFramework' | 'Backend' | 'Database' | 'Middleware' | 'DevOps' | 'Frontend'
}

export const skills: Skill[] = [
  // AI 编程工具
  { name: 'Claude Code',  icon: 'simple-icons:anthropic',  level: 92, category: 'AI' },
  { name: 'Cursor',       icon: 'simple-icons:cursor',     level: 95, category: 'AI' },
  { name: 'MCP',          icon: 'lucide:plug',             level: 88, category: 'AI' },
  { name: 'Prompt 工程',   icon: 'lucide:wand-2',           level: 90, category: 'AI' },
  { name: 'Skills / Rules',icon: 'lucide:settings-2',      level: 85, category: 'AI' },

  // Agent
  { name: 'ReAct',            icon: 'lucide:brain',         level: 85, category: 'Agent' },
  { name: 'Plan-and-Execute', icon: 'lucide:list-checks',   level: 82, category: 'Agent' },
  { name: 'Tool Calling',     icon: 'lucide:wrench',        level: 88, category: 'Agent' },
  { name: '多 Agent 协作',     icon: 'lucide:users',         level: 80, category: 'Agent' },
  { name: 'Memory',           icon: 'lucide:hard-drive',    level: 83, category: 'Agent' },

  // RAG
  { name: '文档切分',          icon: 'lucide:scissors',      level: 85, category: 'RAG' },
  { name: 'Embedding',        icon: 'lucide:layers',        level: 82, category: 'RAG' },
  { name: 'Hybrid Search',    icon: 'lucide:search',        level: 80, category: 'RAG' },
  { name: 'Rerank',           icon: 'lucide:sort-desc',     level: 78, category: 'RAG' },
  { name: 'Graph RAG',        icon: 'lucide:git-branch',    level: 75, category: 'RAG' },

  // AI 应用框架
  { name: 'LangChain',    icon: 'simple-icons:langchain',  level: 80, category: 'AIFramework' },
  { name: 'LangGraph',    icon: 'lucide:project',          level: 78, category: 'AIFramework' },
  { name: 'Dify',         icon: 'lucide:blocks',           level: 80, category: 'AIFramework' },
  { name: 'Spring AI',    icon: 'simple-icons:spring',     level: 75, category: 'AIFramework' },

  // Backend
  { name: 'Java',         icon: 'logos:java',              level: 95, category: 'Backend' },
  { name: 'Spring Boot',  icon: 'logos:spring-icon',       level: 92, category: 'Backend' },
  { name: 'Spring Cloud', icon: 'logos:spring-icon',       level: 80, category: 'Backend' },
  { name: 'Python',       icon: 'logos:python',            level: 80, category: 'Backend' },
  { name: 'JUC 并发',      icon: 'lucide:cpu',              level: 82, category: 'Backend' },

  // Database
  { name: 'MySQL',        icon: 'logos:mysql',             level: 88, category: 'Database' },
  { name: 'Redis',        icon: 'logos:redis',             level: 85, category: 'Database' },
  { name: 'MongoDB',      icon: 'logos:mongodb',           level: 75, category: 'Database' },
  { name: 'Elasticsearch',icon: 'logos:elasticsearch',     level: 72, category: 'Database' },

  // Middleware
  { name: 'RabbitMQ',     icon: 'logos:rabbitmq-icon',     level: 75, category: 'Middleware' },
  { name: 'Kafka',        icon: 'logos:kafka-icon',        level: 65, category: 'Middleware' },
  { name: 'Nacos',        icon: 'simple-icons:alibabacloud', level: 75, category: 'Middleware' },

  // DevOps
  { name: 'Docker',       icon: 'logos:docker-icon',       level: 88, category: 'DevOps' },
  { name: 'Linux',        icon: 'logos:linux-tux',         level: 90, category: 'DevOps' },
  { name: 'Git',          icon: 'logos:git-icon',          level: 92, category: 'DevOps' },
  { name: 'CI / CD',      icon: 'lucide:git-merge',        level: 70, category: 'DevOps' },

  // Frontend
  { name: 'Vue 3',        icon: 'logos:vue',               level: 80, category: 'Frontend' },
  { name: 'TypeScript',   icon: 'logos:typescript-icon',   level: 78, category: 'Frontend' },
  { name: 'Vite',         icon: 'logos:vitejs',            level: 75, category: 'Frontend' },
  { name: 'uni-app',      icon: 'lucide:smartphone',       level: 70, category: 'Frontend' },
]

// Grouped category metadata, used by the bento grid
export interface SkillCategoryMeta {
  key: Skill['category']
  title: string
  subtitle: string
  description: string
  accent: string         // tailwind gradient
  ring: string           // ring color on hover
}

export const skillCategories: SkillCategoryMeta[] = [
  {
    key: 'AI',
    title: 'AI 工程',
    subtitle: 'AI Coding · Prompt · MCP',
    description: '熟练使用 Claude Code、Cursor 等 AI 编程工具，具备扎实的 Prompt 工程与调优能力；熟练运用 MCP、Skills、Rules、Subagent 等机制提升代码生成质量，实现生产级代码开发，极大提高开发效率。',
    accent: 'from-pink-500 via-fuchsia-500 to-purple-600',
    ring: 'group-hover:ring-fuchsia-500/40',
  },
  {
    key: 'Agent',
    title: 'Agent',
    subtitle: 'ReAct · Tool Calling · Multi-Agent',
    description: '深入理解 Agent 架构设计，掌握 ReAct、Plan-and-Execute 等推理范式，熟悉 Context Engineering、Memory、Tool / Function Calling、多 Agent 协作等核心机制。',
    accent: 'from-violet-500 via-purple-500 to-indigo-600',
    ring: 'group-hover:ring-violet-500/40',
  },
  {
    key: 'RAG',
    title: 'RAG',
    subtitle: 'Hybrid Search · Rerank · Graph RAG',
    description: '深入理解 RAG 架构，掌握文档切分、Embedding 模型选型、Hybrid Search、向量检索、Rerank 等关键技术；熟悉 Query Rewrite、Retriever 优化及 RAG 评测体系，了解 Graph RAG、Agentic RAG 等前沿架构。',
    accent: 'from-teal-500 via-cyan-500 to-sky-500',
    ring: 'group-hover:ring-teal-500/40',
  },
  {
    key: 'AIFramework',
    title: 'AI 应用框架',
    subtitle: 'LangChain · LangGraph · Dify',
    description: '熟练使用 LangChain、LangGraph、Dify 等 AI 应用开发框架，能够灵活组合 Agent、RAG、MCP 等能力，完成从原型设计到服务上线的端到端落地能力。',
    accent: 'from-amber-500 via-orange-500 to-red-500',
    ring: 'group-hover:ring-amber-500/40',
  },
  {
    key: 'Backend',
    title: '后端工程',
    subtitle: 'Java · Spring · 高并发',
    description: '扎实的 JavaSE 基础，熟悉集合、反射、IO、Java8 特性；熟练 JUC、锁、线程池、异步与 CountDownLatch；熟练 Spring 全家桶与 Spring Cloud Alibaba 微服务体系。',
    accent: 'from-blue-500 via-sky-500 to-cyan-500',
    ring: 'group-hover:ring-sky-500/40',
  },
  {
    key: 'Database',
    title: '数据存储',
    subtitle: 'MySQL · Redis · ES',
    description: '熟练 MySQL，熟悉索引、事务、日志、MVCC 及锁机制，具备 SQL 优化能力；掌握 Redis 缓存、分布式锁、持久化与内存淘汰；熟悉 MongoDB 与 Elasticsearch 检索。',
    accent: 'from-emerald-500 via-teal-500 to-cyan-500',
    ring: 'group-hover:ring-emerald-500/40',
  },
  {
    key: 'Middleware',
    title: '中间件',
    subtitle: 'RabbitMQ · Nacos',
    description: '熟悉 RabbitMQ 消息中间件与 Elasticsearch 分布式搜索；了解 Spring Cloud（含 Alibaba）服务注册、配置中心、网关与限流降级。',
    accent: 'from-orange-500 via-amber-500 to-yellow-500',
    ring: 'group-hover:ring-amber-500/40',
  },
  {
    key: 'DevOps',
    title: '工程化与部署',
    subtitle: 'Linux · Docker · Git',
    description: '熟练使用 Linux、Docker、Git 常用命令，了解 CI / CD 与容器化部署，具备应用部署、运行期问题排查与监控告警的基本能力。',
    accent: 'from-indigo-500 via-violet-500 to-purple-600',
    ring: 'group-hover:ring-violet-500/40',
  },
  {
    key: 'Frontend',
    title: '前端基础',
    subtitle: 'Vue · uni-app · Vite',
    description: '了解 Vue、uni-app、Ant Design Vue、Vite 等主流前端技术栈，能够独立完成中后台页面与移动端小程序的开发与对接。',
    accent: 'from-rose-500 via-red-500 to-orange-500',
    ring: 'group-hover:ring-rose-500/40',
  },
]
