<template>
  <div class="page-row">
    <UserProfileNotification/>
    <UserProfilePanel/>
  </div>
</template>

<script>

import UserProfileNotification from "@user/page/_component/UserProfileNotification";
import UserProfilePanel from "@user/page/_component/UserProfilePanel";

export default {
  name: "UserProfileView",
  components: {
    UserProfileNotification,
    UserProfilePanel,
  },
};

</script>

<style lang="scss" scoped>

.user-profile {
  display: flex;
}

</style>
