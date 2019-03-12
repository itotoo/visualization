import reactComponent from '../containers/react-component/menu/index.jsx';
import animation from '../containers/animation/menu/index.jsx';
import global from '../containers/global/menu/index.jsx';
import illustrate from '../containers/illustrate/menu/index.jsx';

module.exports = [{
        path: '/',
        component: reactComponent,
    },
    {
        path: '/index',
        component: reactComponent,
    },
    {
        path: '/react',
        component: reactComponent,
    },
    {
        path: '/react/:path',
        component: reactComponent,
    },
    {
        path: '/animation',
        component: animation,
    },
    {
        path: '/animation/:path',
        component: animation,
    },
    {
        path: '/global',
        component: global,
    },
    {
        path: '/global/:path',
        component: global,
    },
    {
        path: '/illustrate',
        component: illustrate,
    },
    {
        path: '/illustrate/:path',
        component: illustrate,
    }
]