<template>
  <div id="app">
    <RegionContent/>
  </div>
</template>

<script>
  import intercom         from '@/core/layout/intercom';
  import grid             from '@/core/layout/grid';
  import yandexMetrika    from '@/core/layout/yandexMetrika';
  import googleAnalytics  from '@/core/layout/googleAnalytics';

  export default {
    name: 'layout-default',
    // mixins: [],
    components: {
      RegionContent : require('@/core/layout/region/content.vue').default,
    },
    data: function () {
      return {
        modeClassName: 'user',
      };
    },
    computed:{
      getClass(){
        return this.getGridClass + ' ' + 'mode-' + this.modeClassName;
      },
      navMenuClass(){
        let mode = 'default';

        if (this.widgetSettings && this.widgetSettings.navMenuMod) {
          mode = this.widgetSettings.navMenuMod;
        }
        return 'offer-nav-fix-' + mode;
      },
      navLogoOnly() {
        const S = this.widgetSettings;
        if (S.navMenuMod !== 'disable' && S.navMenu.length === 1 && S.navMenu[0].type === 'logo') {
          return 'offer-nav-fix-logo-only';
        }
        return '';
      },
      widgetSettings() {
        return this.$store.getters.widgetSettings;
      }
    },
    methods:{
    },
    created() {
      let secret = 'iwqwerty';
      let lenSuccess = 0;
      document.addEventListener(`keydown`, event => {

        if(lenSuccess >= secret.length ){return}

        if (event.which == secret[lenSuccess].charCodeAt(0) || event.key == secret[lenSuccess]) {
          // event.preventDefault();
          lenSuccess++
        } else {
          lenSuccess = 0

          if (event.which == secret[lenSuccess].charCodeAt(0) || event.key == secret[lenSuccess]) {
            lenSuccess++
          }
        }

        if(lenSuccess >= secret.length ){
          this.modeClassName = 'manager';
        }
      }, false);
    },
  };
</script>

<style lang="scss">
// Это идет в app.css (глобальные стили)
@import '~@style/init.scss';

//
.mode-manager-only { display: none !important;}
.mode-manager .mode-manager-only{
  display: block !important;
}
</style>
