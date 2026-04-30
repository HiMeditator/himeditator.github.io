export interface Skill {
  name: string
  level: number
  category: string
}

export const skills: Skill[] = [
  { name: 'Python', level: 85, category: '语言' },
  { name: 'TypeScript', level: 80, category: '语言' },
  { name: 'JavaScript', level: 80, category: '语言' },
  { name: 'Dart', level: 50, category: '语言' },

  { name: 'HTML/CSS', level: 80, category: '前端' },
  { name: 'Vue', level: 75, category: '前端' },
  { name: 'React', level: 60, category: '前端' },
  { name: 'UnoCSS', level: 40, category: '前端' },

  { name: 'FastAPI', level: 60, category: '后端' },
  { name: 'MySQL', level: 50, category: '后端' },
  { name: 'SQLite', level: 40, category: '后端' },

  { name: 'Git', level: 85, category: '工具' },
  { name: 'Claude Code', level: 80, category: '工具' },
  { name: 'Hermes', level: 75, category: '工具' },
  
  { name: 'Electron', level: 75, category: '跨平台' },
  { name: 'Flutter', level: 50, category: '跨平台' },

  { name: 'English', level: 75, category: '其他' },
  { name: 'Japanese', level: 25, category: '其他' },
]
