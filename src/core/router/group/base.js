import * as pageName from '@router/variable';

export default [
  {
    path: "/",
    name: pageName.HOME,
    component: () => import('@page/Base/Home'),
    meta: {
      layout: 'DEFAULT',
    },
  },
  {
    path: "/about",
    name: pageName.ABOUT,
    component: () => import('@page/Base/About'),
    meta: {
      layout: 'DEFAULT',
    },
  },
  {
    path: "/contact",
    name: pageName.CONTACT,
    component: () => import('@page/Base/Contact'),
    meta: {
      layout: 'DEFAULT',
    },
  },
  {
    path: "/todo",
    name: pageName.TODO,
    component: () => import('@page/TodoApp/TodoMain'),
    meta: {
      layout: 'DEFAULT',
    },
  }
];
