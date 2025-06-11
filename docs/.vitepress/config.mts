import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MCSS Documentation",
  description: "Documentation for MC Server Soft",
  sitemap: {
    hostname: 'https://docs.mcserversoft.com',
  },
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Create a Server', link: '/basic/simple-server' },
      { text: 'API', link: '/api/about' }
    ],

    sidebar: [
      {
        // text: 'Navigation',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local',
    }
  }
})
