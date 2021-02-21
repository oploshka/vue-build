import * as pageName from '@router/variable';

export default [
  {
    path: '/site-map',
    name: 'siteMap',
    component: () => import('@page/System/SiteMap'),
    meta: {
      layout: 'DEFAULT',
    },
  },
  {
    path: '/404',
    name: pageName.NOT_FOUND,
    component: () => import('@page/System/NotFound'),
    meta: {
      layout: 'DEFAULT',
    },
  },
  {
    path: '*',
    name: 'page-not-found-fix',
    component: () => import('@page/System/NotFound'),
    meta: {
      layout: 'DEFAULT',
    },
  }
];
