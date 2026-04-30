export interface Project {
  id: string
  name: string
  description: string
  iconPath: string
  github?: string
  webpage?: string
  features: string[]
  images?: string[]
}

export const projects: Project[] = [
  {
    id: 'auto-caption',
    name: 'Auto Caption',
    description: '一款跨平台的桌面实时字幕识别与显示软件，能够为音频输出或麦克风输入实时生成字幕，提供四个语音识别模型，涵盖云端与本地模型，且支持自定义开发扩展。提供丰富的字幕样式定制选项，并支持字幕记录的展示与导出，全面满足多样化的实时字幕需求。',
    iconPath: '/icons/auto-caption.png',
    github: 'https://github.com/HiMeditator/auto-caption',
    features: [
      '多语言界面支持',
      '丰富的字幕样式设置',
      '灵活的字幕引擎选择',
      '多语言识别与翻译',
      '字幕记录显示与导出',
      '音频输出和麦克风输入生成字幕',
    ]
  },
  {
    id: 'light-at',
    name: 'Light At',
    description: '一款专注于为 VS Code 及其衍生 IDE 提供边界的大语言模型聊天功能的轻量级智能助手插件，提供数学公式渲染、便捷的模型配置与切换、聊天上下文选择和聊天历史管理功能。',
    iconPath: '/icons/light-at.png',
    github: 'https://github.com/HiMeditator/light-at',
    webpage: 'https://marketplace.visualstudio.com/items?itemName=HiMeditator.light-at',
    features: [
      '数学公式渲染',
      '便捷的模型配置',
      '选择聊天上下文',
      '聊天历史管理',
      '超轻量级',
    ]
  },
  {
    id: 'light-browser',
    name: 'Light Browser',
    description: '一款轻量级 VS Code 插件，提供两个简单的功能：支持使用默认应用程序打开文件，以及在 IDE 内通过 iframe 浏览网页。',
    iconPath: '/icons/light-browser.png',
    github: 'https://github.com/HiMeditator/light-browser',
    webpage: 'https://marketplace.visualstudio.com/items?itemName=himeditator.light-browser',
    features: [
      '使用默认应用程序打开文件',
      '通过 iframe 浏览网页',
      '可配置默认页面地址',
      '状态栏显示控制'
    ]
  }
]
