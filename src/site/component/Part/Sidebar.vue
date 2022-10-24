<template>
  <div class="sidebar_container">
    <div class="item" @click="changeView" :class="{item_full_size: isShow}">
      <div class="th-svg-wrapper icon_color_default">
        <img v-if="isShow" src="#"/>
        <img v-else src="#"/>
      </div>
      <span v-if="isShow" class="text">Свернуть</span>
    </div>

    <div class="group control_group">
      <router-link
        v-if="$user.access(homeGroup.permission)"
        :class="[{item_full_size: isShow}, {'router-link-active router-link-exact-active' : currentRouteName === $routeName.TASK}]"
        :to="{name: homeGroup.path}"
        class="item"
        v-tooltip="{ content: homeGroup.name, placement: 'right', distance: 32, disabled: isShow }"
      >
        <div v-html="homeGroup.icon" class="th-svg-wrapper icon_color_default"></div>
        <span v-if="isShow" class="text">{{homeGroup.name}}</span>
      </router-link>

      <template v-for="item in controlGroup" :key="item.name">
        <router-link
          v-if="$user.access(item.permission)"
          :class="{item_full_size: isShow}"
          :to="{name: item.path}"
          class="item"
          v-tooltip="{ content: item.name, placement: 'right', distance: 32, disabled: isShow }"
        >
          <div v-html="item.icon" class="th-svg-wrapper icon_color_default"></div>
          <span v-if="isShow" class="text">{{item.name}}</span>
        </router-link>
      </template>

    </div>

    <div class="group settings_group">
      <router-link
        v-if="$user.access($permission.NAV_SETTINGS)"
        :class="{item_full_size: isShow}"
        :to="{name: $routeName.SETTINGS_LIST}"
        class="item"
        v-tooltip="{ content: 'Настройки', placement: 'right', distance: 32, disabled: isShow }"
      >
        <div class="th-svg-wrapper icon_color_default">
          <img src="#"/>
        </div>
        <span v-if="isShow" class="text">Настройки</span>
      </router-link>

      <template
        v-for="(item, key) in settingsGroup"
        :key="key"
      >
        <router-link
          v-if="!!item.path"
          :to="{ name: item.path }"
          class="item"
          :class="{item_full_size: isShow}"
          v-tooltip="{ content: item.name, placement: 'right', distance: 32, disabled: isShow }"
        >
          <div v-html="item.icon" class="th-svg-wrapper icon_color_default"></div>
          <span v-if="isShow" class="text">{{item.name}}</span>
        </router-link>
        <div v-else class="item">
          <div
            v-html="item.icon"
            class="th-svg-wrapper icon_color_default"
            v-tooltip="{ content: item.name, placement: 'right', distance: 32, disabled: isShow }"
          ></div>
          <span v-if="isShow" class="text">{{item.name}}</span>
        </div>
      </template>

    </div>
  </div>
</template>

<script>
import * as pageName from '@router/variable';
import * as PERMISSION from '@permission/Permission';

export default {
  name: 'Sidebar',
  data() {
    return {
      isShow: false,
      settingsGroup: [
        {
          icon: '<img src="#" alt="" />',
          path:  pageName.ABOUT,
          name: 'Контакты',
          permission: PERMISSION.ALL,
        },
        {
          icon: '<img src="#"/>',
          path: null,
          name: 'Ночной режим'
        },
      ],
      homeGroup: {
        icon: '<img src="#"/>',
        path: pageName.HOME,
        name: 'Главная',
        permission: PERMISSION.NAV_MAIN,
      },
      controlGroup: [
        {
          icon: '<img src="#"/>',
          path: pageName.CONTRACT,
          name: 'Договоры',
          permission: PERMISSION.NAV_CONTRACT,
        },
      ]
    };
  },
  emits: ['hide', 'show'],
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    changeView() {
      this.isShow ? this.$emit('hide') : this.$emit('show');
      this.isShow = !this.isShow;
    }
  },
};
</script>

<style scoped lang="scss">

.sidebar_container {
  overflow: hidden;

  background: var(--color-menu);
  border-radius: 8px;
  padding: 35px 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;

  .item {
    height: 44px;
    width: 44px;
    padding-left: 2px;
    margin-left: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    position: relative;

    .text {
      size: 16px;
      font-weight: 500;
      font-family: Rubik, serif;
      color: #C9EAF8;
      font-style: normal;
      transition: all 1s ease;
      white-space: nowrap;
      position: absolute;
      left: 50px;
    }
  }

  .item_full_size {
    width: 100%;
    border-radius: 8px 0 0 8px;
  }

  .item:hover {
    background: #C9EAF8;

    .text {
      color: #1595C9;
    }

    ::v-deep(path) {
      fill: var(--color-icon-active)
    }
  }

  .group {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }

  .control_group {
    margin-top: 40px;
  }

  .settings_group {
    margin-top: auto;
  }

  .router-link-active {
    background: #C9EAF8;

    .text {
      color: #1595C9;
    }

    ::v-deep(path) {
      fill: var(--color-icon-active)
    }
  }

}

</style>
