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
    id: 1,
    title: 'MarkDown 笔记应用',
    description: 'MarkNote 是一款专为开发者和写作爱好者打造的轻量级、高性能 Markdown 笔记应用',
    image: 'https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/teng/content.jpg',
    tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Marked', 'Highlight.js'],
    link: 'https://markdown-notes-9up2.vercel.app/',
    github: 'https://github.com/CodeTeng/MarkdownNotes'
  },
  {
    id: 2,
    title: 'Image Generator',
    description: '基于 React 和 Zhipu AI 构建的现代化 AI 图片生成应用',
    image: 'https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/teng/2.jpg',
    tags: ['React', 'Zhipu AI', 'TypeScript', 'Tailwind CSS'],
    link: 'https://image-generator-lake-one.vercel.app/',
    github: 'https://github.com/CodeTeng/ImageGenerator'
  },
  {
    id: 3,
    title: 'Document Retrieval RAG System',
    description: '一个完整的企业级本地知识库问答系统(RAG)，支持文档上传、解析、向量化存储以及基于大模型的智能检索问答',
    image: 'https://muziteng-1310538376.cos.ap-beijing.myqcloud.com/teng/1.jpg',
    tags: ['FastApi', 'LangChain', 'Vue3', '阿里云 DashScope', 'Faiss'],
    link: 'https://document-retrieval-rag-system.vercel.app/',
    github: 'https://github.com/CodeTeng/Document-Retrieval-RAG-System'
  },
  {
    id: 4,
    title: 'Crypto Portfolio Tracker',
    description: '实时追踪加密货币价格和投资组合表现，集成多个交易所 API。',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1000&auto=format&fit=crop',
    tags: ['Vue 3', 'Web3.js', 'ECharts', 'API Integration'],
    link: '#',
    github: 'https://github.com'
  },
  {
    id: 5,
    title: 'Smart Home Hub',
    description: '物联网设备控制中心，可视化管理家庭智能设备，支持自动化场景配置。',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    tags: ['Vue 3', 'MQTT', 'IoT', 'Real-time'],
    link: '#',
    github: 'https://github.com'
  },
  {
    id: 6,
    title: 'Creative Portfolio',
    description: '为设计师打造的个人作品集网站模板，注重视觉交互和排版设计。',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000&auto=format&fit=crop',
    tags: ['Vue 3', 'GSAP', 'Sass', 'Responsive'],
    link: '#',
    github: 'https://github.com'
  },
  {
    id: 7,
    title: 'Social Media Dashboard',
    description: '跨平台社交媒体数据分析工具，提供详细的用户增长和互动报告。',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    tags: ['Vue 3', 'D3.js', 'Analytics', 'REST API'],
    link: '#',
    github: 'https://github.com'
  }
]
