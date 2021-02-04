import * as roleName from "@permission/roleName";

export default [
  {
    path: '/test',
    component: { render: h => h('router-view') },
    children: [
      {
        path: '',
        name: 'test',
        component: () => import('@page/Test/Test'),
        meta: {
          permission: {
            [roleName.ROLE_ANONYMOUS] : true,
            [roleName.ROLE_AUTH] : true
          }
        }
      },
    ]
  },
];
