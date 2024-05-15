import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3.4.27/dist/vue.esm-browser.prod.js';

const socialLinks = ['GitHub', 'Linkedin'];

createApp({
  data() {
    return {
      socialLinks,
    };
  },
}).mount('#app');
