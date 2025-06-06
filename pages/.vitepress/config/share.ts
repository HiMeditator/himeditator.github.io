import { defineConfig } from 'vitepress'

export const sharedConfig = defineConfig({
  metaChunk: true,
  title: "HiMeditator",
  description: "HiMeditator's static website.",
  lastUpdated: true,
  head: [
    ['link', { rel: "icon", href: `/logo.gif` }],
    ['meta', { name: "viewport", content: "width=device-width, initial-scale=1.0" }]
  ],
  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    outline: {
      level: [1, 6],
    },
    logo: '/logo.gif',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HiMeditator' }
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/light-at' },
      { text: 'Blogs', link: '/blogs/external-blogs' }
    ],
    sidebar: [
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
          { text: 'External Blogs', link: '/blogs/external-blogs' }
        ]
      }
    ]
  }
})