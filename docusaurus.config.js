// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// @ts-ignore
const lightCodeTheme = require('prism-react-renderer').themes.github;
// @ts-ignore
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
// see //https://github.com/facebook/docusaurus/issues/8940#issuecomment-1532573496

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'MC Server Soft Documentation',
  tagline: 'Official Docs for MC Server Soft',
  url: 'https://mcserversoft.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.ico',
  organizationName: 'mcserversoft',
  projectName: 'documentation',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // plugins: [
  //   ['@docusaurus/plugin-pwa',
  //     {
  //       debug: true,
  //       offlineModeActivationStrategies: [
  //         'appInstalled',
  //         'standalone',
  //         'queryString',
  //       ],
  //       pwaHead: [
  //         {
  //           tagName: 'link',
  //           rel: 'icon',
  //           href: '/favicon.ico',
  //         },
  //         {
  //           tagName: 'link',
  //           rel: 'manifest',
  //           href: 'manifest.json',
  //         },
  //         {
  //           tagName: 'meta',
  //           name: 'theme-color',
  //           content: '#abd037',
  //         },
  //       ],
  //     },
  //   ],
  // ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/mcserversoft/documentation/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'apis/v2.yml',
            route: '/apis/v2',
          },
          {
            spec: 'apis/v1.yml',
            route: '/apis/v1',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          primaryColor: '#abd037',
          options: {
            disableSearch: true,
            hideDownloadButton: true,
            scrollYOffset: 60,
            hideLoading: true,
          },
          theme: {
            rightPanel: {
              backgroundColor: '#121212',
            },
            fab: {
              backgroundColor: '#abd037',
              color: '#ffffff'
            }
          },
        },
      },
    ],
  ],

  themeConfig:
    ({
      metadata: [{ name: 'keywords', content: 'mcserversoft, documentation, mcss, docs, minecraft, server, server ui, software, manager, wrapper' }],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
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
            label: 'Docs',
            position: 'left',
            to: '/',
            activeBasePath: 'to',
          },
          {
            label: 'API Docs',
            position: 'left',
            items: [
              {
                label: 'v2 - latest',
                to: '/apis/v2',
              },
              {
                label: 'v1 - legacy',
                to: '/apis/v1',
              },
            ],
          },
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
                label: 'Website',
                href: 'https://www.mcserversoft.com',
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
        //https://prismjs.com/#supported-languages
        additionalLanguages: ['batch'],
      },
    }),
};

module.exports = config;
