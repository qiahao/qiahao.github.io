// css
import '@/scss/style.scss'; //布局body html 修改

// base
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '@/router'

import App from './App'
import resumeData from '@/data'
Object.defineProperties(Vue.prototype, {
    $resumeData: {
        value: resumeData
    }
})



/* eslint-disable no-new */
const appVue = new Vue({
    el: '#app',
    // store,
    router,
    template: '<App></App>',
    components: { App },
    methods: {},
    created() {},
    mounted() {},
})
export default appVue;