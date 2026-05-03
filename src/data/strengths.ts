export interface Strength {
  id: number
  icon: string
  title: string
  description: string
  metric?: { value: string; label: string }
  accent: string
}

export const strengths: Strength[] = [
  {
    id: 1,
    icon: 'lucide:flame',
    title: '热爱技术钻研',
    description: '持续跟进前沿 AI 技术学习，是 AI 编程的重度玩家。坚信「工具会变，但问题拆解与系统能力会一直有用」。',
    accent: 'from-orange-500 to-amber-500',
  },
  {
    id: 2,
    icon: 'lucide:book-open',
    title: '热爱总结与输出',
    description: '在语雀、CSDN、公众号等平台持续产出技术内容，把每一次踩坑沉淀为可被复用的笔记。',
    metric: { value: '100w+', label: '已发布字数' },
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    id: 3,
    icon: 'lucide:search-check',
    title: '自主学习与解决问题',
    description: '能够独立利用 GitHub Issues、AI 工具、搜索引擎等渠道定位与解决问题，不依赖单一信息源。',
    accent: 'from-sky-500 to-indigo-500',
  },
  {
    id: 4,
    icon: 'lucide:layout-template',
    title: '工程化模板沉淀',
    description: '独立开发了一套可复用的项目开发模板，能够快速立项、快速交付。本科期间利用该模板在第三方平台接单。',
    metric: { value: '1w+ / 月', label: '本科期间副业收入' },
    accent: 'from-fuchsia-500 to-purple-600',
  },
]
