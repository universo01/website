// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'u01',
  tagline: 'Seu universo de integrações',
  url: 'https://u01.tec.br',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'universo01',
  projectName: 'website',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
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
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Universo 01',
      logo: {
        alt: 'Open source community',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/about',
          label: 'Sobre',
          position: 'left',
        },
        {
          to: '/blog/bem-vindos',
          label: 'Blog',
          position: 'left',
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
          href: 'https://github.com/universo01/website',
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
              to: '/blog/bem-vindos',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/universo01',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} u01, Inc. Construído com Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      // O padrão é "false". Ative para alternância de modo claro/escuro.
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;