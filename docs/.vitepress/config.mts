import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "MCSS Documentation",
  description: "Documentation for MC Server Soft",
  sitemap: {
    hostname: 'https://docs.mcserversoft.com',
  },
  // lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Create a Server', link: '/create/paper' },
      { text: 'FAQ', link: '/faq' },
      { text: 'API', link: '/api/api-v2' }
    ],
    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/' },
        ]
      },
      {
        text: 'Basics',
        items: [
          { text: 'Prerequisites', link: '/basic/prerequisites' },
          { text: 'Java', link: '/basic/java' },
        ]
      },
      {
        text: 'Create a Server',
        items: [
          { text: 'Quick start guide', link: '/server/' },
          { text: 'Paper', link: '/server/paper' },
          { text: 'Fabric', link: '/server/fabric' },
          { text: 'Forge', link: '/server/forge' },
        ]
      },
      {
        text: 'Networking',
        collapsed: true,
        items: [
          { text: 'Server IP', link: '/networking/server-ip' },
          { text: 'Port Forwarding', link: '/networking/port-forward' },
          { text: 'Troubleshooting', link: '/networking/troubleshoot' },
        ]
      },
      {
        text: 'Backups',
        collapsed: true,
        items: [
          { text: 'Creating Backups', link: '/backups/create' },
          { text: 'Restoring Backups', link: '/backups/restore' },
          { text: 'Backup Settings', link: '/backups/settings' },
        ]
      },
      {
        text: 'Scheduler',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/scheduler/' },
          { text: 'Creating Tasks', link: '/scheduler/create' },
        ]
      },
      {
        text: 'Advanced',
        collapsed: true,
        items: [
          { text: 'Java versions', link: '/advanced/java-version' },
          { text: 'Java path detection', link: '/advanced/java-path-detection' },
          { text: 'Using playit.gg', link: '/advanced/playitgg' },
        ]
      },
      {
        text: 'Web Panel',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/web-panel/' },
          { text: 'Configuration', link: '/web-panel/configuration' },
          { text: 'Usage', link: '/web-panel/usage' },
          { text: 'User Management', link: '/web-panel/user-management' },
        ]
      },
      {
        text: 'Troubleshooting',
        collapsed: true,
        items: [
          { text: 'Known Issues', link: '/troubleshooting/known-issues' },
          { text: 'Logs', link: '/troubleshooting/logs' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local',
    },
  }
})
