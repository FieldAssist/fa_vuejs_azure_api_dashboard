import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import enUS from '@kangc/v-md-editor/lib/lang/en-US';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import router from './router'

VueMarkdownEditor.lang.use('en-US', enUS);
VueMarkdownEditor.use(vuepressTheme);
VueMarkdownEditor.use(createCopyCodePlugin());

Vue.use(VueMarkdownEditor);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
