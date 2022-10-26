// import * as roleName from "@permission/roleName";

export default [
  {
    path: '/test',
    component: { render: h => h('router-view') },
    children: [
      {
        path: '',
        name: 'test',
        component: () => import('@test/page/Test'),
        meta: {
          // permission: {
          //   [roleName.ROLE_ANONYMOUS] : true,
          //   [roleName.ROLE_AUTH] : true
          // }
        }
      },
      {
        path: 'grid',
        name: 'test-grid',
        component: () => import('@test/page/TestGrid'),
        meta: {
          // permission: {
          //   [roleName.ROLE_ANONYMOUS] : true,
          //   [roleName.ROLE_AUTH] : true
          // }
        }
      },
    ]
  },
];
