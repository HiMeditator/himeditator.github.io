import { defineConfig } from 'vitepress'
import { sharedConfig } from './config/share'
import { zhConfig } from './config/zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...sharedConfig,

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/',
      ...zhConfig
    }
  }
})