const isDeployPreview = process.env.hasOwnProperty('DEPLOY_PREVIEW');

const meta = {
  title: 'Vue ss-select | Renderless Select Component',
  description: 'Stylable searchable select component for VueJS. This component is renderless so you are free to customize it how you need to!',
  url: 'https://ss-select.netlify.com/',
};

let head = [
  ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
  ['meta', {name: 'title', content: meta.title}],
  ['meta', {name: 'description', content: meta.description}],
  [
    'link',
    {
      href: 'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css',
      rel: 'stylesheet',
      type: 'text/css',
    }
   ],
];

if (isDeployPreview) {
  head.push(
    ['meta', {name: 'robots', content: 'noindex'}],
    ['meta', {name: 'googlebot', content: 'noindex'}],
  );
}

module.exports = {
  title: 'Vue ss-select',
  description: meta.description,
  head,
  plugins: {
    '@vuepress/google-analytics': {
      ga: 'UA-142863922-1',
    },
  },
  themeConfig: {
    editLinks: true,
    docsDir: 'docs',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Github', link: 'https://github.com/miggiboy/ss-select'},
      {text: 'Live Demo', link: 'https://codesandbox.io/s/ss-select-613v2?fontsize=14&hidenavigation=1&module=%2Fsrc%2FSelect.vue'},
    ],
    sidebar: {
      '/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            ['markdown/Installation', 'Installation'],
            ['markdown/Components', 'Components'],
            ['markdown/Features', 'Features'],
          ],
        },
      ],
    },
  },
}
