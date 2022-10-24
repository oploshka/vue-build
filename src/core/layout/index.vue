<template>
  <DialogCore/>
  <component :is="currentLayout" id="appLayout" />
</template>

<script>

import LAYOUT from "./layoutName";
import LAYOUT_COMPONENT from "./layoutComponent";

import DialogCore from "vue-dlg/src/DialogCore";

// import Notifications from "@layout/Notifications";
// template   => <Notifications />
// components => Notifications,

export default {
  name: 'layout-core',
  components: {
    DialogCore,
  },
  // mixins: [
  //   // grid,
  // ],
  data () {
    return {
      // TODO: убрать мерцание при переходе не на дефолтный template
      layoutName: LAYOUT.DEFAULT,
    };
  },
  // components: {
  //   LoadingBar,
  // },
  // mounted () {
  // created () {
  //   document.body.classList.add('bg-light');
  // },
  // destroyed () {
  //   document.body.classList.remove('bg-light');
  // }
  watch: {
    '$route': {
      immediate: true,
      handler (route) {
        const newLayout = route.meta.layout;
        // TODO: use parent meta params

        // if (!newLayout && !this.$route.name) { this.layoutName = this.loading; return; }
        // if (!newLayout) { this.layoutName = this.layout || 'default'; return; }
        // this.layoutName = newLayout;
        //
        this.layoutName = newLayout ? newLayout : LAYOUT.DEFAULT;
      }
    }
  },
  computed: {
    currentLayout () {

      let ln = this.layoutName;
      if(!LAYOUT_COMPONENT[ln]){
        console.error('[LAYOUT_COMPONENT]: undefined template name')
        ln = LAYOUT.DEFAULT;
      }

      return LAYOUT_COMPONENT[ln];
    }
  },
  mounted() {
    // магическая штука для отключения лоадинга
    const EndLoading = () => {
      //document.body.className = document.body.className.replace("loading","");
      // TODO: Установить минимальное время прелоадера??
      setTimeout(()=> {
        document.body.className = document.body.className.replace("loading","");
      }, 300);
    }
    //
    if (document.readyState == "complete") {
      EndLoading();
    } else {
      document.onreadystatechange = () => {
        if (document.readyState == "complete") {
          EndLoading();
        }
      };
    }
  },
};
</script>

<style>

#app, #appLayout {
  height: 100%;
}

</style>
