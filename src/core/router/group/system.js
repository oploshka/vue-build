export default [
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@page/System/NotFound'),
  },
  {
    path: '*',
    component: () => import('@page/System/NotFound'),
  }
];
