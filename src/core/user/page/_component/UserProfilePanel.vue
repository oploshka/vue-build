<template>
  <router-link :to="{ name: $routeName.USER_PROFILE_EDIT }" class="user-panel">

    <Avatar
        class="user-panel__avatar"
        :name="`${profileInfo.firstName} ${profileInfo.lastName}`"
    />
    <div class="user-panel__username">{{ profileInfo.firstName }} {{ profileInfo.lastName  }}</div>
    <div class="user-panel__notify-click">Click to edit</div>

    <div class="user-panel__bar">
      <span class="user-panel__label">Email</span>
      <p class="user-panel__content">{{ profileInfo.mail }}</p>
    </div>

    <div class="user-panel__bar">
      <span class="user-panel__label">Company</span>
      <p class="user-panel__content">{{ profileInfo.companyName }}</p>
    </div>

    <div class="user-panel__bar" v-if="profileInfo.gender">
      <span class="user-panel__label">Gender</span>
      <p class="user-panel__content">{{ profileInfo.gender }}</p>
    </div>

    <div class="user-panel__bar" v-if="profileInfo.gender">
      <span class="user-panel__label">Hobbies and Interests</span>
      <p class="user-panel__content">{{ profileInfo.hobbiesAndInterests }}</p>
    </div>

    <div class="user-panel__bar" v-if="profileInfo.countryOfResidence">
      <span class="user-panel__label">Country of Residence</span>
      <p class="user-panel__content">{{ profileInfo.countryOfResidence }}</p>
    </div>

<!--    <div class="user-panel__bar">-->
<!--      <span class="user-panel__label">Family Status</span>-->
<!--      <p class="user-panel__content">Non-marriage</p>-->
<!--    </div>-->

  </router-link>
</template>

<script>

import Avatar from "@component/Avatar";


export default {
  name: "UserProfilePanel",
  components: {
    Avatar
  },
  data() {
    return {
      profileInfo: this.$user.Profile.getProfileObj()
    }
  }
};
</script>

<style lang="scss" scoped>

.user-panel {
  background-color: var(--color-gray-01);
  padding: 40px;
  height: 100%;
  max-width: 431px;
  width: 100%;

  .user-panel__avatar {
    @include icon-size(6.25);
    margin: 0 auto 16px;
  }

  .user-panel__username {
    font-size: 1.375rem;
    line-height: 1.45;
    font-weight: 700;
    color: var(--color-gray-07);
    text-align: center;
  }

  .user-panel__notify-click,
  .user-panel__label {
    font-size: 0.875rem;
    line-height: 1.45;
    color: var(--color-gray-05);
  }

  .user-panel__notify-click {
    text-align: center;
    margin-bottom: 32px;
  }

  .user-panel__bar {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .user-panel__content {
    margin-top: 3px;
  }

}

</style>
