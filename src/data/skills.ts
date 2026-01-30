export interface Skill {
  name: string
  icon: string
  level: number // 1-100
  category: 'Frontend' | 'Backend' | 'Tools'
}

export const skills: Skill[] = [
  { name: 'Vue', icon: 'logos:html-5', level: 75, category: 'Frontend' },
  { name: 'JavaScript', icon: 'logos:html-5', level: 85, category: 'Frontend' },
  { name: 'TypeScript', icon: 'logos:html-5', level: 75, category: 'Frontend' },
  { name: 'Java', icon: 'logos:java', level: 95, category: 'Backend' },
  { name: 'Python', icon: 'logos:python', level: 80, category: 'Backend' },
  { name: 'Golang', icon: 'logos:go', level: 60, category: 'Backend' },
  { name: 'C++', icon: 'logos:c-plusplus', level: 30, category: 'Backend' },
  { name: 'Docker', icon: 'logos:docker-icon', level: 85, category: 'Tools' },
  { name: 'Linux', icon: 'logos:docker-icon', level: 90, category: 'Tools' },
]
