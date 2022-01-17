// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'MC Server Soft Documentation',
  tagline: 'Official Docs for MC Server Soft',
  url: 'https://mcserversoft.com\documentation',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.ico',
  organizationName: 'mcserversoft',
  projectName: 'documentation',
  trailingSlash : false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    ['@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#abd037',
          },
        ],
      },
    ],
  ],


  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/mcserversoft/documentation/edit/docusaurus/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      metadata: [{name: 'keywords', content: 'mcserversoft, documentation, mcss, docs, minecraft, server, server ui, software, manager, wrapper'}],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
        switchConfig: {
          darkIcon: '🌙',
          lightIcon: '☀️',
        },
      },
      image: 'img/logo.svg',
      algolia: {
      appId: '5BRSJ21UOD',
      // Public API key: it is safe to commit it
      apiKey: '0acf1d2784dae016e02b01053a823e17',

      indexName: 'documentation',
    },
      navbar: {
        title: 'MC Server Soft Documentation',
        logo: {
          alt: 'Logo of MC Server Soft',
          src: '/img/logo.svg',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/mcserversoft/documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Getting started',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
              {
                label: 'Port forwarding',
                to: '/networking/port-forwarding',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of Use',
                href: 'https://www.mcserversoft.com/terms',
              },
              {
                label: 'Privacy Policy',
                href: 'https://www.mcserversoft.com/privacy',
              },
            ],
          },
          {
            title: 'Contribute',
            items: [
              {
                label: 'Donate',
                href: 'https://www.mcserversoft.com/donate',
              },
              {
                label: 'Documentation',
                href: 'https://github.com/mcserversoft/documentation',
              }
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Changelogs',
                href: 'https://www.mcserversoft.com/changelogs',
              },
              {
                label: 'Documentation',
                to: '/',
              },
              {
                label: 'Developer API',
                to: '/api/about',
              },
              {
                label: 'Screenshots',
                href: 'https://www.mcserversoft.com/screenshots',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'About',
                href: 'https://www.mcserversoft.com/about',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/fiahblade',
              },
              {
                label: 'Discord',
                href: 'https://www.mcserversoft.com/discord',
              },
              {
                label: 'SpigotMC',
                href: 'https://www.spigotmc.org/resources/mc-server-soft-server-manager-for-windows.19261/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MC Server Soft and contributors.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
