import * as pageName from '@router/variable';
import LAYOUT from '@layout/LayoutName';

export default [
  {
    path: '/',
    name: pageName.HOME,
    component: () => import('@page/Base/Home'),
    meta: {
      layout: LAYOUT.DEFAULT,
    },
  },
  {
    path: '/about',
    name: pageName.ABOUT,
    component: () => import('@page/Base/About'),
    meta: {
      layout: LAYOUT.DEFAULT,
    },
  },
  {
    path: '/contact',
    name: pageName.CONTACT,
    component: () => import('@page/Base/Contact'),
    meta: {
      layout: LAYOUT.DEFAULT,
    },
  }
];
