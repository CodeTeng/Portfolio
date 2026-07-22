export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github?: string
}

export const projects: Project[] = [
  {
    id: 10,
    title: 'FitPedia 健身百科',
    description: '一个基于 1324 个健身动作数据的在线百科全书，支持中英双语，兼容 Web 和移动端',
    image: 'https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/jianshen.jpg',
    tags: ['React', 'TypeScript', '健身', 'Tailwind CSS'],
    link: 'https://fitness-3d59.vercel.app/',
    github: 'https://github.com/CodeTeng/fitness'
  },
  {
    id: 9,
    title: 'KnowFlow RAG',
    description: 'KnowFlow RAG 是一个企业级智能问答系统，覆盖从文档入库到智能问答的完整链路，聚焦检索增强生成场景下的核心工程难题。',
    image: 'https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/%E7%94%A8%E6%88%B7%E9%97%AE%E7%AD%94%E7%95%8C%E9%9D%A2.png',
    tags: [' RAG', '向量检索', '多模型编排', 'SSE'],
    link: 'https://know-flow-phi.vercel.app/',
    github: 'https://github.com/CodeTeng/KnowFlow-'
  },
  {
    id: 1,
    title: 'mini-cc',
    description: 'mini-cc 是一个用 Python 编写的 Claude Code 精简教学实现：在单一 OpenAI 兼容 Provider 之上，提供 Agent Loop、工具系统、权限闸门、上下文与预算管理、以及会话级 Memory。适合用来理解「Agent Harness」各模块如何协作。',
    image: 'https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/11.png',
    tags: ['Python', 'Agent', 'Claude', 'LLM'],
    link: 'https://github.com/CodeTeng/mini-cc',
    github: 'https://github.com/CodeTeng/mini-cc'
  },
  {
    id: 11,
    title: 'OpenSpec + Superpowers',
    description: '基于 OpenSpec + SuperPowers SDD（规范驱动开发） 的通用项目模板',
    image: 'https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/ChatGPT%20Image%202026%E5%B9%B47%E6%9C%8822%E6%97%A5%2022_22_38.png',
    tags: ['OpenSpec', 'Superpowers AI', 'AI 原生开发', 'AI 提效'],
    link: 'https://github.com/CodeTeng/Spec-Driven-Development-Template',
    github: 'https://github.com/CodeTeng/Spec-Driven-Development-Template'
  },
  {
    id: 12,
    title: 'Teng Boot Scaffold',
    description: '基于 Java 17 + Spring Boot 3.5.14 + Vue 3 + TypeScript 的现代化全栈脚手架',
    image: 'https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/ChatGPT%20Image%202.png',
    tags: ['Spring Boot', 'Vue 3', '脚手架'],
    link: 'https://github.com/CodeTeng/teng-boot',
    github: 'https://github.com/CodeTeng/teng-boot'
  },
    {
    id: 4,
    title: '万能视频下载工具',
    description: '一款万能视频下载工具，支持B站、抖音、小红书、腾讯视频、YouTube、X等视频网站的下载',
    image: 'https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/home.png',
    tags: ['Vue 3', 'Python3', 'FastAPI', 'yt-dlp', 'ffmpeg', 'Redis'],
    link: 'https://zailiu.vercel.app/',
    github: 'https://github.com/CodeTeng/Zailiu'
  },
  {
    id: 2,
    title: 'Harness Template',
    description: 'Harness Engineering 模版，拿来即用，帮助快速搭建和标准化工程脚手架。',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
    tags: ['Harness', 'Template', 'Engineering', 'Workflow'],
    link: 'https://github.com/CodeTeng/harness-template',
    github: 'https://github.com/CodeTeng/harness-template'
  },
  {
    id: 3,
    title: 'AI Hot Monitor',
    description: '一款AI热点发现平台，自动采集、评分、汇总 AI 领域重要动态，支持多平台来源、中文摘要、紧急推送与邮件日报。',
    image: 'https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/1234.png',
    tags: ['AI', 'Monitor', 'Python', 'Automation'],
    link: 'https://github.com/CodeTeng/AI-Hot-Monitor',
    github: 'https://github.com/CodeTeng/AI-Hot-Monitor'
  },
  {
    id: 6,
    title: 'Document Retrieval RAG System',
    description: '一个完整的企业级本地知识库问答系统(RAG)，支持文档上传、解析、向量化存储以及基于大模型的智能检索问答',
    image: 'https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/teng/1.jpg',
    tags: ['FastApi', 'LangChain', 'Vue3', '阿里云 DashScope', 'Faiss'],
    link: 'https://document-retrieval-rag-system.vercel.app/',
    github: 'https://github.com/CodeTeng/Document-Retrieval-RAG-System'
  },
  {
    id: 7,
    title: 'MarkDown 笔记应用',
    description: 'MarkNote 是一款专为开发者和写作爱好者打造的轻量级、高性能 Markdown 笔记应用',
    image: 'https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/teng/content.jpg',
    tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Marked', 'Highlight.js'],
    link: 'https://markdown-notes-tawny.vercel.app/',
    github: 'https://github.com/CodeTeng/MarkdownNotes'
  },
  {
    id: 8,
    title: 'Image Generator',
    description: '基于 React 和 Zhipu AI 构建的现代化 AI 图片生成应用',
    image: 'https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/teng/2.jpg',
    tags: ['React', 'Zhipu AI', 'TypeScript', 'Tailwind CSS'],
    link: 'https://image-generator-lake-one.vercel.app/',
    github: 'https://github.com/CodeTeng/ImageGenerator'
  },
  {
    id: 5,
    title: 'Vibe Coding 开发前必做步骤',
    description: 'Vibe Coding 开发前必做步骤，帮助你快速上手开发',
    image: 'https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/1.png',
    tags: ['Vibe Coding', 'Workflow', 'AI', 'Tools'],
    link: 'https://vibe-coding-workflow-rho.vercel.app/',
    github: 'https://github.com/CodeTeng/Vibe-Coding-workflow'
  },
]
