require('./bootstrap');

Vue.component('wiki-show', require('./components/WikiShow.vue').default);
Vue.component('vocabla-icon', require('./components/VocablaIcon.vue').default);

const app = new Vue({
    el: '#app'
});
