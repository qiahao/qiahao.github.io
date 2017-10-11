import Home from '@/views/home';
import Experience from '@/views/home/experience';
import Introduce from '@/views/home/introduce';
import Contact from '@/views/home/contact';

// const routes = webpackRequire2array(require.context('./', true, /\/index.js$/), ['./index.js'])

export default [{
        path: '/',
        component: Home,
        redirect: '/experience',
        children: [
        	{
        		path: '/experience',
        		component: Experience,
        	},
        	{
        		path: '/introduce',
        		component: Introduce,
        	},
        	{
        		path: '/contact',
        		component: Contact,
        	},
        ]
    }
]