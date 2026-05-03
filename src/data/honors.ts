export interface Honor {
  id: number
  date: string
  title: string
  level: '国家级' | '省市级' | '校级' | '其他'
  rank: string
  icon: string
  accent: string
}

export const honors: Honor[] = [
  {
    id: 1,
    date: '2025.11',
    title: '第五届 OceanBase 数据库创新设计赛',
    level: '国家级',
    rank: '北京市第二名 · 国赛 19 名',
    icon: 'lucide:database',
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    date: '2023.05',
    title: '第十八届 "挑战杯" 全国大学生课外学术科技作品竞赛',
    level: '省市级',
    rank: '重庆市特等奖',
    icon: 'lucide:trophy',
    accent: 'from-amber-400 to-orange-500',
  },
  {
    id: 3,
    date: '2022.12',
    title: '川渝大学生 "数智" 作品设计应用技能大赛',
    level: '省市级',
    rank: '重庆市特等奖',
    icon: 'lucide:sparkles',
    accent: 'from-pink-500 to-fuchsia-500',
  },
  {
    id: 4,
    date: '2022.08',
    title: '第十五届中国大学生计算机设计大赛',
    level: '国家级',
    rank: '国家二等奖',
    icon: 'lucide:medal',
    accent: 'from-violet-500 to-purple-600',
  },
  {
    id: 5,
    date: '2022.05',
    title: '全国大学生 5G 移动通信技术大赛',
    level: '省市级',
    rank: '重庆市三等奖',
    icon: 'lucide:radio-tower',
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    id: 6,
    date: '2023.04',
    title: '智能网联汽车大赛',
    level: '省市级',
    rank: '重庆市三等奖',
    icon: 'lucide:car',
    accent: 'from-sky-500 to-indigo-500',
  },
  {
    id: 7,
    date: '2022 — 2023',
    title: '重庆市志愿服务活动先进个人',
    level: '其他',
    rank: '重庆市级表彰',
    icon: 'lucide:heart-handshake',
    accent: 'from-rose-500 to-red-500',
  },
]
