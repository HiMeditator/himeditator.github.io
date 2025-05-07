import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav: [
      { text: '主页', link: '/zh/' },
      { text: '项目列表', link: '/zh/projects/light-at' },
      { text: '博客列表', link: '/zh/blogs/external-blogs' }
    ],
    sidebar: [
      {
        text: '项目列表',
        items: [
          { text: 'Light At', link: '/zh/projects/light-at' },
          { text: 'Light Browser', link: '/zh/projects/light-browser' },
          { text: 'Light Statistics', link: '/zh/projects/light-stat' }
        ]
      },
      {
        text: '博客列表',
        items: [
          { text: '站外博客', link: '/zh/blogs/external-blogs' }
        ]
      }
    ]
  }
}