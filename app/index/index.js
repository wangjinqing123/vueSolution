import Vue from 'Vue'

import '../style/usage/layout/main.scss';

import Favlist from './components/Favlist.vue'
Vue.config.debug = true;//开启错误提示
window.onload = function () {
  new Vue({
      el: '#app',
      components: {
        'my-component': Favlist
      }
  });
}
