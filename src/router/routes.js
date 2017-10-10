import Home from '@/views/home';

// const routes = webpackRequire2array(require.context('./', true, /\/index.js$/), ['./index.js'])

export default [{
        path: '/',
        component: Home
    },
    {
        path: '/index',
        component: Home
    }
]