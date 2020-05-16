import Vue from 'vue'
import App from './App.vue'
import Announcement from './Announcement.vue';
import Articles from './Articles.vue';

Vue.component('announcement', Announcement);
Vue.component('articles', Articles);

new Vue({
  el: '#app',
  render: h => h(App)
})
