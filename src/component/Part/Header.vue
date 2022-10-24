<template>
  <div class="header-container">
    <router-link :to="{ name: '' }">
      <img src="#" />
    </router-link>


    <img src="#" />
    <div class="header__profile-menu">
      menu
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      userData: {},
    };
  },
  computed: {
    fullname() {
      const employee = USER.profile.getEmployee();
      if (employee) {
        const { firstName, lastName } = employee;
        return `${firstName} ${lastName}`;
      }
      return USER.profile.getLogin();
    },
  },
  methods: {
    getInitials(name) {
      name = String(name).split(' ');
      let initials = name[0].substring(0, 1).toUpperCase();

      if (name.length > 1) {
        initials += name[1].substring(0, 1).toUpperCase();
      }

      return initials;
    },
    getRandomColor(str) {
      if (!str) return '#000000';
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      let color = '#';
      for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xff;
        color += ('00' + value.toString(16)).substr(-2);
      }
      return color;
    },
  },
};
</script>

<style scoped lang="scss">
.header-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
  gap: 15px;

  // svg:first-child {
  //   margin-right: auto;
  // }

  .avatar {
    border-radius: 20px;
    width: 40px;
    display: flex;
    border-radius: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: '';
      padding-top: 100%;
      width: 0;
      display: block;
    }
    span {
      // position: absolute;
      // top: 0;
      // left: 0;
      // bottom: 0;
      // right: 0;
      // margin: auto;
      // display: block;
      color: #fff;
      text-transform: uppercase;
      line-height: 1;
      display: inline-flex;
      font-weight: bold;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: 1;
    }
  }

  .text {
    font-family: 'Rubik', serif;
    font-style: normal;
    font-size: 12px;
    color: #555d60;
  }
  .header__subsystem {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 18px;
    margin: 0 auto 0 15px;
  }
  .header__profile-menu {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0;
    .avatar {
      margin-right: 10px;
      height: 45px;
      width: 45px;
      border-radius: 50%;
    }
    ::v-deep(.v-popper.dropdown) {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .th-svg-wrapper {
      width: 20px;
    }
  }
}
</style>
