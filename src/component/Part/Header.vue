<template>
  <header class="header">
    <div class="header__logo">
      <img
        src="@img/logo.svg"
        alt="logo"
        class="header__logo--img"
      />
    </div>
    <div
      class="header__info"
      v-if="isOpenSession"
    >
      <p class="header__information">
        № Смены: <span class="header__info-item">{{ kkmSession.number }}</span>
      </p>

      <p class="header__information">
        Дата и время открытия:
        <span class="header__info-item">{{ dateOpenSession }}</span>
      </p>
    </div>

    <div class="header__btn-wrap">
      <button class="header__button" v-if="!isOpenSession" @click="openSession">Открыть смену</button>
      <button class="header__button" :class="{ 'header__button--close': isOpenSession }" v-if="isOpenSession" @click="closeSession">Закрыть смену</button>
    </div>

    <!-- <div class="header__ava-wrap">
      <img src="https://placekitten.com/40/40" alt="" class="header__ava" />
      <span class="header__name"
        >Сидоров <br />
        Сидорович</span
      >
    </div> -->
  </header>
</template>

<script>

export default {
  name: "Header",
  methods: {
    openSession() {
      try {
        this.$store.dispatch('openSession');
      } catch (e) {
        this.$dialogs.alert(e);
      }
    },
    closeSession() {
      try {
        this.$store.dispatch('closeSession');
      } catch (e) {
        this.$dialogs.alert(e);
      }

      // if (this.$route.name !== 'Dashboard') {
      //   this.$router.push({ name: 'Dashboard' });
      // }
    },
  },
  computed: {
    isOpenSession() {
      return this.$store.getters.isOpenSession;
    },
    kkmSession() {
      return this.$store.getters.kkmSession;
    },
    dateOpenSession() {
      return this.kkmSession.dateTime ? DateTime(this.kkmSession.dateTime).format('DD.MM.YYYY HH:mm') : '';
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  position: relative;
  left: -20px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  width: calc(100% + 40px);
  width: 100%;
  min-height: 100px;
  background: #ffffff;

  padding: 20px 40px 20px 40px;

  border-bottom: 1px solid rgba(0, 0, 0, .3);
}

.header__info {
  margin: 0 15px 0 0;
  display: flex;
  justify-content: space-between;
}

.header__information {
  font-size: 14px;
  line-height: 17px;

  &:not(:first-child) {
    margin-left: 35px;
  }
}

.header__info-item {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
}

.header__button {
  padding: 22px 58px;

  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: center;

  background-color: transparent;
  border: 0;

  border: 1px solid #5cd182;
  box-sizing: border-box;
  border-radius: 30.5px;

  text-transform: uppercase;

  color: #5cd182;

  transition: .5s;
  &:hover {
    //filter: saturate(300%);
    box-shadow: 0 0 3px 3px #5cd182;
  }

  &--close {
    color: #f06c6c;
    border: 1px solid #f06c6c;

    &:hover {
      //filter: saturate(300%);
      box-shadow: 0 0 3px 3px #f06c6c;
    }
  }
}

.header__ava-wrap {
  display: flex;
  align-items: center;
}

.header__ava {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.header__name {
  display: inline-block;
  margin-left: 20px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}
</style>
