module.exports = {
  title: 'FairOS',
  tagline: 'Welcome to the FairOS',
  url: 'https://fairos.io',
  // note! we use SED to change this during automated builds, see ./.github/workflows/gh-pages.yml
  baseUrl: '/bzz/fairos.eth/',
  plugins: [require.resolve('docusaurus-lunr-search')],
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'FairDataSociety', // Usually your GitHub org/user name.
  projectName: 'FairOS', // Usually your repo name.
  themeConfig: {
    colourMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title: '',
      logo: {
        alt: 'FairOS Logo',
        src: 'img/fairOS-logo.svg',
      },
      items: [
        {
          to: 'docs/fairos-dfs/introduction',
          activeBasePath: 'docs',
          label: 'FairOS-dfs',
          position: 'left',
        },
        {
          to: 'docs/fairos-dfs/video/architecture',
          activeBasePath: 'docs',
          label: 'Screencast',
          position: 'left',
        },
        {
          to: 'docs/fairos-dfs/api-reference',
          activeBasePath: 'docs',
          label: 'API Reference',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/fairDataSociety/fairOS-dfs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'FairOS',
          items: [
            {
              label: 'FairOS-dfs',
              to: 'https://fairos.io',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/fairos',
            },
            {
              label: 'Blog',
              href: 'https://medium.com/fairos',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/fairDataSociety/fairOS-dfs',
            },
          ],
        },
      ],
      copyright: `Copyleft © ${new Date().getFullYear()}.`,
    },
    announcementBar: {
      id: 'fairos_announcements',
      content:
        '⭐️ FairOS-dfs version v0.9.0-rc6 is released. This release has breaking changes and will work with bee v1.10.0 or above ⭐️',
      backgroundColor: '#00994d', // Defaults to `#fff`.
      textColor: '#ffffff', // Defaults to `#000`.
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/fairDataSociety/fairOS-docs/blob/master',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ethersphere/fairOS-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
