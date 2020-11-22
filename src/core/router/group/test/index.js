
export default [
  //
  {
    path: '/test',
    component: { render: h => h('router-view') },
    children: [
      {
        path: '',
        name: 'test',
        component: () => import('@page/Test/Test'),
      },
    ]
  },
];
