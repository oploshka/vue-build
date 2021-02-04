<template v-if="noMenu === false">
  <div class="side-menu">
    <div class="side-menu__wrap-content">
      <!-- <div class="side-menu__search-wrap">
        <input type="text" class="side-menu__search" placeholder="Поиск" />
      </div> -->

      <NavigationDeep class="side-menu__nav" :items="navItems" />
    </div>

    <div class="side-menu__logout-wrap">
      <a class="side-menu__logout" @click.prevent="logout">
        <img
          src="@img/logout.svg"
          svg-inline
          alt="logout icon"
          class="side-menu__logout-icon"
        />
        <span>Выход</span>
      </a>
    </div>
  </div>
</template>

<script>
  import * as permissionName from '@permission/permissionName';
  import NavigationDeep from '@/components/Part/NavigationDeep';

  export default {
    name: "SideMenu",
    components: {
      // Navigation,
      NavigationDeep,
    },
    props: {
      noMenu: Boolean
    },
    data() {
      return {
      };
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
          .then(() => {
            this.$router.push("/");
          });
      }
    },
    computed: {
      navItems() {
        return [
          {
            name: 'Список транзакций',
            isOpen: false,
            icon: '<img svg-inline src="@img/nav-icon/list.svg"/>',
            link: { name: this.$routeName.TRANSACTION },
            children: [],
          },
          {
            name: 'Переводы между физическими лицами',
            isOpen: false,
            icon: '<img svg-inline src="@img/nav-icon/face.svg"/>',
            children: [
              {
                name: 'Создать',
                isOpen: false,
                link: { path: '/transaction-create/1' },
                children: [],
              },
              {
                name: 'Оплатить',
                isOpen: false,
                link: { path: '/transaction-pay' },
                children: [],
              },
              {
                name: 'Выплатить',
                isOpen: false,
                link: { path: '/individual-payment/control-number-search' },
                children: [],
              },
              {
                name: 'Возврат',
                isOpen: false,
                link: { path: '/transaction/1/refund-search' },
                children: [],
              },
            ],
          },
          // TODO: Delete
          // {
          //   name: 'переводы на счета в любом банке выбранной страны (contact-счет)',
          //   isOpen: false,
          //   icon: '<img svg-inline src="@img/nav-icon/house.svg"/>',
          //   link: { path: '/transaction-create/73' },
          //   children: [],
          //   permission: permissionName.MENU__PERMISSION_SERVICES,
          // },
          // {
          //   name: 'переводы с целью погашения кредитов и пополнения счетов',
          //   isOpen: false,
          //   icon: '<img svg-inline src="@img/nav-icon/doc.svg"/>',
          //   children: this.subServices1,
          //   permission: permissionName.MENU__PERMISSION_SERVICES,
          // },
          {
            name: 'Платежи',
            icon: '<img svg-inline src="@img/nav-icon/book.svg"/>',
            isOpen: true,
            children: this.services,
            permission: permissionName.MENU__PERMISSION_SERVICES,
          },
        ];
      },
      services() {
        const services = this.$store.getters.services;

        if (!services) {
          return;
        }

        const map = services.reduce((acc, i) => {
          const service = {
            id: i.id,
            name: i.caption,
            children: [],
            isRoot: i.id === i.parentID,
            isOpen: false,
            link: { name: 'TransactionCreate', params: { serviceId: i.id }},
          };
          acc[i.id] = service;
          return acc;
        }, {});

        services.forEach(i => {
          if (i.parentID !== i.id) {
            map[i.parentID].children.push(map[i.id]);
          }
        });

        const rootElements = Object.values(map).filter(i => i.isRoot);
        return rootElements;
      },
      subServices1() {
        if (!this.services) {
          return [];
        }
        const parent = this.services.find((i) => i.id === 3);

        const children = parent ? parent.children : [];

        return children;
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.side-menu {
  background: #ffffff;
  overflow-y: auto;

  //padding: 30px 34px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.side-menu__search-wrap {
  position: relative;
  margin-bottom: 50px;

  &::after {
    content: "";
    position: absolute;
    top: 22px;
    right: 50px;
    width: 18px;
    height: 19px;

    background-image: url("~@img/lupa.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
}

.side-menu__search {
  width: 100%;
  background: #ffffff;
  border: 1.5px solid #eeeeee;
  box-sizing: border-box;
  box-shadow: 0px 4px 30px 2px rgba(0, 0, 0, 0.01);
  border-radius: 5px;

  padding: 21px 44px 22px 28px;

  font-size: 14px;
  line-height: 17px;

  outline: none;

  &::placeholder {
    color: #a8a8a9;
  }
}

.side-menu__nav {
  // padding-left: 40px;
}

.side-menu__logout {
  padding-top: 50px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;

  span {
    display: inline-block;
    margin-left: 10px;
  }
  &:hover {
    color: var(--color-main);
    svg {
      path {
        fill: var(--color-main);
      }
    }
  }
}

.side-menu__logout-icon {
  display: block;
  width: 24px;
  height: 24px;
}
</style>
