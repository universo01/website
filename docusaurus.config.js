// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'u01',
  tagline: 'Universo 01',
  url: 'https://u01.tec.br',
  baseUrl: '/website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'universo01',
  projectName: 'website',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/universo01/website',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/universo01/website',
        },
        theme: {
          customCss: require.resolve("./src/css/index.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Universo 01',
        logo: {
          alt: 'Open source community',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            to: "docs/intro",
            activeBasePath: "docs",
            label: "Documentation",
            position: "left",
          },
          {
            to: "docs/intro",
            activeBasePath: "tutorials",
            label: "Tutorial",
            position: "left",
          },
          {
            to: 'https://github.com/universo01/website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        id: "new-major-announcement",
        content:
          "We are now on <a href='https://instagram.com/' target='_blank'>Instagram</a> and <a href='#' target='_blank'>YouTube</a> with amazing content.",
        backgroundColor: "#1786fb",
        textColor: "#fff",
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: '#',
              },
              {
                label: 'Instagram',
                href: '#',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/universo01',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} u01, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: require("prism-react-renderer/themes/vsDark"),
      },
    }),
};

module.exports = config;
