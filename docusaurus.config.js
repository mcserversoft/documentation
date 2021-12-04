// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'MCSS',
  tagline: 'Community maintained documentation',
  url: 'https://mcserversoft.github.io',
  baseUrl: '/documentation/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/mcss.svg',
  organizationName: 'mcserversoft', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  deploymentBranch: 'gh-pages-dev',
  trailingSlash : true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'it', 'el'],
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
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(151, 200, 0)',
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/mcserversoft/documentation/edit/docusaurus/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/mcserversoft/documentation/edit/docusaurus/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      gtag: {
        trackingID: 'G-EBQC5FX51Y',
        anonymizeIP: true,
      },
      
      metadata: [{name: 'keywords', content: 'documentation, mcss, mcserversoft, minecraft, server, software, manager, wrapper'}],

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '🌙',
          lightIcon: '☀️',
        },
      },

      // announcementBar: {
      //   id: 'announcement',
      //   content:
      //     `This is a test, don't mind me`,
      //   backgroundColor: '#2C3638',
      //   textColor: '#97C800',
      //   isCloseable: true,
      // },

      image: 'img/mcss.svg',

      algolia: {
      // If Algolia did not provide you any appId, use 'BH4D9OD16A'
      appId: '5BRSJ21UOD',

      // Public API key: it is safe to commit it
      apiKey: '0acf1d2784dae016e02b01053a823e17',

      indexName: 'documentation',
    },
      navbar: {
        title: 'MCSS',
        logo: {
          alt: 'MCSS',
          src: 'img/mcss.svg',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
            // dropdownItemsAfter: [
            //   {
            //     to: 'https://my-site.com/help-us-translate',
            //     label: 'Help us translate',
            //   },
            // ],
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/blog',
            label: 'Informations',
            position: 'left'
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
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/DEn89PB',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/fiahblade',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'informations',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mcserversoft/documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MCSS Community`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
