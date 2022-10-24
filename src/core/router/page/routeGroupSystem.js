import * as pageName from '@router/variable';

export default [
  {
    path: '/site-map',
    name: 'siteMap',
    component: () => import('@router/page/SiteMap'),
  },
  {
    path: '/404',
    name: pageName.NOT_FOUND,
    component: () => import('@router/page/NotFound'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@router/page/NotFound'),
  },
  //{ path: '/:pathMatch(.*)*', component: NotFound }, // TODO Test vue 3 router new features
];
