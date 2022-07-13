const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bleeker | Documentation",
  tagline:
    "Tout ce dont vous avez besoin pour intégrer les solutions Bleeker à vos technologies.",
  url: "https://dev.d74r0vsiu01dr.amplifyapp.com",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "src/img/favicon.ico",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        language: "fr",
        indexBlog: false,
      },
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Bleeker",
        logo: {
          alt: "Documentation for",
          src: "img/logo.png",
          srcDark: "img/darklogo.png",
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More",
            items: [
              {
                label: "Bleeker",
                href: "https://bleeker.live",
              },
            ],
          },
        ],
        copyright: `Bleeker © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php"],
      },
    }),
};

module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      fr: {
        htmlLang: 'fr',
      },
    },
  },
};

module.exports = config;
