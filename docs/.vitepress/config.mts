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
      { text: 'API', link: '/api/about' }
    ],
    sidebar: [
      {
        items: [
          { text: 'Introduction', link: '/intro' },
        ]
      },
      {
        text: 'Basics',
        // collapsed: false,
        items: [
          { text: 'Prerequisites', link: '/basic/prerequisites' },
          { text: 'Java', link: '/basic/java' },
        ]
      },
      {
        text: 'Create a Server',
        // collapsed: false,
        items: [
          { text: 'Server types', link: '/server/types' },
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
          { text: 'Port Forwarding', link: '/networking/port-forwarding' },
          { text: 'Troubleshooting', link: '/networking/troubleshooting' },
        ]
      },
      {
        text: 'Backups',
        collapsed: true,
        items: [
          { text: 'Creating Backups', link: '/backups/creating-backups' },
          { text: 'Restoring Backups', link: '/backups/restoring-backups' },
          { text: 'Backup Settings', link: '/backups/backup-settings' },
        ]
      },
      {
        text: 'Scheduler',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/scheduler/introduction' },
          { text: 'Creating Tasks', link: '/scheduler/creating-tasks' },
        ]
      },
      {
        text: 'Advanced',
        collapsed: true,
        items: [
          { text: 'Java versions', link: '/advanced/java-versions' },
          { text: 'Java path detection', link: '/advanced/java-path-detection' },
          { text: 'Using playit.gg', link: '/advanced/playit' },
        ]
      },
      {
        text: 'Web Panel',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/web-panel/introduction' },
          { text: 'Configuration', link: '/web-panel/configuration' },
          { text: 'Usage', link: '/web-panel/usage' },
          { text: 'User Management', link: '/web-panel/user-management' },
        ]
      },
      {
        text: 'Troubleshooting',
        collapsed: true,
        items: [
          { text: 'Common Issues', link: '/troubleshooting/common-issues' },
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
