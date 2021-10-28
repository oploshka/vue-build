<script>
/*
<template>
  <component :is="currentLayout"/>
</template>
* */

export default {
  name: 'VueExtendLayout_loading',
  mounted() {
    // магическая штука для отключения лоадинга
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        document.body.className = document.body.className.replace("loading","");
      }
    };
  },
};

</script>
