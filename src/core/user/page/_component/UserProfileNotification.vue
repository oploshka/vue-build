<template>
  <div class="profile-notification">
      <div class="profile-notification__header">
        <div class="profile-notification__title">Tasks & notification</div>
        <span class="profile-notification__settings-link" @click="openNotificationSettings">Settings</span>
      </div>

      <div class="ps-wrapper">
        <perfect-scrollbar>
          <NotificationGroup v-for="index in 1" :key="index"/>
        </perfect-scrollbar>
      </div>
    </div>
</template>

<script>

import NotificationGroup from "@component/Notification/NotificationGroup";
import NotificationSettings from "@component/Notification/NotificationSettings";

export default {
  name: "UserProfileNotification",
  components: {
    NotificationGroup,
  },
  methods: {
    openNotificationSettings() {
      this.$dialog.open(
          NotificationSettings,
          {},
          {
            group: 'modal', // не обязательно
            theme: "notification-settings"
          }
      );
    }
  }
};
</script>

<style lang="scss" scoped>

.ps-wrapper {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden
}

.profile-notification {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  background-color: var(--color-gray-02);
  height: 100%;

  .profile-notification__header {
    display: flex;
    justify-content: space-between;
    padding: 40px 40px 32px;
    line-height: 1.45;
    background-color: var(--color-gray-01);
  }

  .profile-notification__title {
    font-size: 1.375rem;
    font-weight: 700;
    color: var(--color-gray-08);
  }

  .profile-notification__settings-link {
    font-size: 0.875rem;
    color: var(--color-gray-05);
    cursor: pointer;
  }

  .profile-notification__body {
    display: flex;
    flex-direction: column;
  }

}

</style>
