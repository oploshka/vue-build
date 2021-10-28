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
      {
        path: 'grid',
        name: 'test-grid',
        component: () => import('@page/Test/TestGrid'),
        meta: {
          permission: {
            [roleName.ROLE_ANONYMOUS] : true,
            [roleName.ROLE_AUTH] : true
          }
        }
      },
      // Form validate element
      {
        path: 'fve',
        component: { render: h => h('router-view') },
        children: [
          {
            path: 'uikit',
            name: 'test-fve-uikit',
            component: () => import('@widgetFormValidate/test/page/UiKit'),
            meta: {
              permission: {
                [roleName.ROLE_ANONYMOUS] : true,
                [roleName.ROLE_AUTH] : true
              }
            }
          },
          {
            path: 'uikit-text',
            name: 'test-fve-uikit-element-text',
            component: () => import('@widgetFormValidate/test/page/UiKitElementText'),
            meta: {
              permission: {
                [roleName.ROLE_ANONYMOUS] : true,
                [roleName.ROLE_AUTH] : true
              }
            }
          },
          {
            path: 'uikit-select',
            name: 'test-fve-uikit-select',
            component: () => import('@widgetFormValidate/test/page/UiKitElementSelect'),
            meta: {
              permission: {
                [roleName.ROLE_ANONYMOUS] : true,
                [roleName.ROLE_AUTH] : true
              }
            }
          },
          {
            path: 'uikit-switch',
            name: 'test-fve-switch',
            component: () => import('@widgetFormValidate/test/page/UiKitSwitch.vue'),
            meta: {
              permission: {
                [roleName.ROLE_ANONYMOUS] : true,
                [roleName.ROLE_AUTH] : true
              }
            }
          },
        ],
      },
    ]
  },
];
