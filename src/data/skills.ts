export interface Skill {
  name: string
  icon: string
  level: number // 1-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI'
}

export const skills: Skill[] = [
  // Frontend
  { name: 'Vue', icon: 'logos:vue', level: 75, category: 'Frontend' },
  { name: 'JavaScript', icon: 'logos:javascript', level: 85, category: 'Frontend' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', level: 75, category: 'Frontend' },
  // Backend
  { name: 'Java', icon: 'logos:java', level: 95, category: 'Backend' },
  { name: 'Python', icon: 'logos:python', level: 80, category: 'Backend' },
  { name: 'Golang', icon: 'logos:go', level: 60, category: 'Backend' },
  { name: 'C++', icon: 'logos:c-plusplus', level: 30, category: 'Backend' },
  // Tools
  { name: 'Docker', icon: 'logos:docker-icon', level: 85, category: 'Tools' },
  { name: 'Linux', icon: 'logos:linux-tux', level: 90, category: 'Tools' },
  { name: 'Cursor', icon: 'logos:cursor', level: 90, category: 'Tools' },
  { name: 'Claude Code', icon: 'logos:claude-icon', level: 85, category: 'Tools' },
  // AI
  { name: 'LangChain', icon: 'logos:langchain', level: 80, category: 'AI' },
  { name: 'Spring AI', icon: 'logos:spring-icon', level: 70, category: 'AI' },
]
