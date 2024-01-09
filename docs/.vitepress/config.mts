import { type DefaultTheme, type LocaleSpecificConfig, defineConfig } from 'vitepress'
import { en } from './english'

export type LocaleConfig = Omit<LocaleSpecificConfig<DefaultTheme.Config>, 'label' | 'lang'>

export default defineConfig({
  title: 'Web Projects',
  description: 'A randoms web apps',
  lang: 'en',
  base: '/web/',
  themeConfig: {
    logo: '/bibo.png',
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ylwvnk/web' },
      {
        icon: 'twitter',
        link: 'https://twitter.com/ylwvnk'
      }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      ...en
    }
  }
})
