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
    title: 'Task Management App',
    description: '简洁高效的任务管理应用，支持拖拽排序、暗黑模式和本地数据持久化。',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop',
    tags: ['Vue 3', 'Pinia', 'LocalStorage', 'Drag & Drop'],
    link: '#',
    github: 'https://github.com'
  },
  {
    id: 3,
    title: 'AI Chat Interface',
    description: '集成了 OpenAI API 的智能对话界面，支持流式响应和代码高亮显示。',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    tags: ['Vue 3', 'OpenAI API', 'Highlight.js', 'WebSocket'],
    link: '#',
    github: 'https://github.com'
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
