<template>
  <ul class="navigation-deep nd">
    <template v-for="(item, index) in inItems">
        <li class="nd__item" :key="index">
          <PermissionBlock :name="item.permission ? item.permission : $permission.AUTH_ONLY">
            <div class="nd__item-wrap">
              <template v-if="item.link && item.children.length === 0">
                <PermissionLink class="nd__link" :to="item.link">
                  <div class="nd__icon" v-html="item.icon"></div>
                  <div class="nd__name">{{ item.name }}</div>
                </PermissionLink>
              </template>
              <template v-else>
                <div class="nd__link" @click="item.isOpen = !item.isOpen">
                  <div class="nd__icon" v-html="item.icon"></div>
                  <div class="nd__name">{{ item.name }}</div>
                </div>
              </template>

              <div
                class="nd__arrow"
                :class="{active: item.isOpen}"
                v-if="item.children && item.children.length > 0"
                @click="item.isOpen = !item.isOpen">
                <img
                  svg-inline
                  src="@img/arrow.svg"
                />
              </div>
            </div>
            <div class="nd__children" v-if="item.children && item.children.length > 0 && item.isOpen">
              <Children :items="item.children" />
            </div>
          </PermissionBlock>
        </li>
    </template>
  </ul>
</template>

<script>

import PermissionBlock from "@widgetPermission/PermissionBlock";
import { cloneDeep } from 'lodash';

export default {
  name: 'NavigationDeep',
  components: {
    PermissionBlock,
    Children: () => import('@/components/Part/NavigationDeep'),
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      inItems: cloneDeep(this.items),
    };
  },
  watch: {
    items(value) {
      this.inItems = cloneDeep(value);
    },
  },


};
</script>

<style lang="scss" scoped>
.navigation-deep,
.nd {
  width: 100%;
  list-style: none;

  &__item-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  &__item {

    &:hover  {
      > div > .nd__item-wrap > .nd__link > .nd__name {
        color: var(--color-main);
        cursor: pointer;
      }
      > div > .nd__item-wrap > .nd__link > .nd__icon > ::v-deep svg,
      > div > .nd__item-wrap > .nd__arrow > svg {
        path {
          fill: var(--color-main);
        }
      }

    }
    .router-link-active > .nd__name,
    .router-link-active > .nd__icon > ::v-deep svg path{
      fill: var(--color-main);
      color: var(--color-main);
    }
  }
  &__link {
    display: flex;
    text-decoration: none;
    margin-bottom: 20px;
    cursor: pointer;
    width: 100%;
    padding-right: 30px;
    position: relative;
  }
  &__icon {
    width: 20px;
    min-width: 20px;
    height: 20px;
    margin-right: 15px;
    display: block;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &__name {
    margin-right: 30px;
    flex-grow: 1;
    font-weight: 600;
    font-size: 15px;
    text-transform: uppercase;
  }
  &__arrow {
    svg {
      width: 10px;
      height: 7px;
      outline: none;
      position: absolute;
      right: 0;
      top: 7px;
      cursor: pointer;
    }

    &.active {
      svg {
        transform: scale(1, -1);
      }
    }
  }

  &__children {
    margin-left: 20px;
  }
}
</style>
