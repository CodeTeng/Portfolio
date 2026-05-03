export interface Experience {
  id: number
  company: string
  companyEn: string
  /** Iconify icon used in the timeline node */
  icon: string
  /** Brand color, hex used both for the icon background and the gradient accent */
  color: string
  role: string
  team: string
  period: string
  location: string
  highlights: string[]
}

/**
 * Internship history. Listed newest-first so the timeline reads as a story
 * of increasing responsibility and depth.
 */
export const experiences: Experience[] = [
  {
    id: 1,
    company: '腾讯',
    companyEn: 'Tencent · CSIG',
    icon: 'simple-icons:tencentqq',
    color: '#0052D9',
    role: '后台研发组/媒体应用组',
    team: 'CSIG/腾讯会议产品部',
    period: '2026-03 ～ 2026-05',
    location: '北京',
    highlights: [],
  },
  {
    id: 2,
    company: '腾讯',
    companyEn: 'Tencent · TEG',
    icon: 'simple-icons:tencentqq',
    color: '#0052D9',
    role: '数据管线组',
    team: 'TEG/机器学习平台部/太极平台中心',
    period: '2025-09 ～ 2026-01',
    location: '北京',
    highlights: [],
  },
  {
    id: 3,
    company: '美团',
    companyEn: 'Meituan',
    icon: 'simple-icons:meituan',
    color: '#FFC300',
    role: '运营后端组',
    team: '到餐技术部/用户体验研发组',
    period: '2025-05 ～ 2025-08',
    location: '北京',
    highlights: [],
  },
  {
    id: 4,
    company: '快手',
    companyEn: 'Kuaishou',
    icon: 'simple-icons:kuaishou',
    color: '#FF4906',
    role: '海外 Core Feature Server',
    team: '快手',
    period: '2024-10 ～ 2025-05',
    location: '北京',
    highlights: [],
  },
]
