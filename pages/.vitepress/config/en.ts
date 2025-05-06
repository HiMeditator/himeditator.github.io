import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Profile', link: '/profile/profile' },
      { text: 'Projects', link: '/projects/light-at' },
      { text: 'Blogs', link: '/blogs/hello' }
    ],
    sidebar: [
      {
        text: 'Profile',
        items: [
          { text: 'Profile', link: '/profile/profile' }
        ]
      },
      {
        text: 'Projects',
        items: [
          { text: 'Light At', link: '/projects/light-at' },
          { text: 'Light Browser', link: '/projects/light-browser' },
          { text: 'Light Statistics', link: '/projects/light-stat' }
        ]
      },
      {
        text: 'Blogs',
        items: [
          { text: 'Hello', link: '/blogs/hello' }
        ]
      }
    ]
  }
}