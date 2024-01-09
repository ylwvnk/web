import { type LocaleConfig } from './config.mts'

export const en: LocaleConfig = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Apps',
        items: [
          {
            text: 'Weather',
            link: '/app/weather'
          },
          {
            text: 'Ctrl-v',
            link: '/app/ctrl-v'
          }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Apps',
        items: [
          { text: 'Weather', link: '/app/weather' },
          { text: 'Ctrl-v', link: '/app/ctrl-v' }
        ]
      }
    ]
  }
}
