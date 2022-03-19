<template>
  <div class="page-row">
    <div class="user-edit__fields-wrapper">
      <perfect-scrollbar>
        <UserProfileForm :formData="profileInfo" @submit="updateProfile"/>
      </perfect-scrollbar>
    </div>
    <div class="user-edit__nav-wrapper">
      <h3>Login Data</h3>
      <h3>Personal Info</h3>
      <h3>Company and Location</h3>
      <h3>Privacy</h3>
    </div>
  </div>
</template>

<script>

import UserProfileForm from "@user/page/_component/UserProfileForm";

export default {
  name: "UserProfileEdit",
  components: {
    UserProfileForm
  },
  data() {
    return {
      profileInfo: this.$user.Profile.getProfileObj()
    };
  },
  methods: {
    updateProfile(profileObj) {
      RequestManager.Auth.updateProfileInfo({
        userId: this.$user.Auth.getUserId(),
        userProfileInfo: {
          id:                   this.$user.Auth.getUserId(),
          profilePhoto:         profileObj.profilePhoto,
          firstName:            profileObj.firstName,
          lastName:             profileObj.lastName,
          login:                profileObj.login,
          password:             profileObj.password,
          mail:                 profileObj.mail,
          birthday:             profileObj.birthday,
          familyStatus:         profileObj.familyStatus,
          hobbiesAndInterests:  profileObj.hobbiesAndInterests,
          countryOfResidence:   profileObj.countryOfResidence,
          companyName:          profileObj.companyName,
          communitiesEntity:    profileObj.communitiesEntity,
          gender:               profileObj.gender,
        }
      });
    }
  }
};

</script>

<style lang="scss" scoped>
.ps {
  height: calc(100vh - 72px);
}

.user-edit__fields-wrapper {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  border-top-right-radius: 8px;
  padding-top: 2px;
  background-color: var(--color-gray-01);
}

.user-edit__nav-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 296px;
  width: 100%;
  padding: 40px 24px;

  // TODO: Update and fix

  & > h3 {
    font-size: 1rem;
    color: var(--color-gray-07);
    font-weight: 600;
    padding: 8px;
  }

}

.profile-notification {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

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
    height: 100%;
  }

}


</style>
