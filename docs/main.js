import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.esm-browser.prod.js';

const socialNetworks = [
  {
    icon: 'fa-brands fa-github',
    text: 'GitHub',
    url: 'https://github.com/fredbelotte/',
  },
  {
    icon: 'fa-brands fa-linkedin',
    text: 'Linkedin',
    url: 'https://www.linkedin.com/in/fredbelotte/',
  },
];

createApp({
  data() {
    return {
      socialNetworks,
    };
  },
}).mount('#app');
