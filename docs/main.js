import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.esm-browser.prod.js';

const socialLinks = ['GitHub', 'Linkedin'];

createApp({
  data() {
    return {
      socialLinks,
    };
  },
}).mount('#app');
