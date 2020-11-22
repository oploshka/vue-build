<script>
export default {
  name: 'layout-grid',
  data: function () {
    return {grid_width: 0};
  },
  computed: {
    getGridClass() {
      let size = '';
      let padding = '';
      let display = '';
      let gridExtend = [];

      // Важно синхронизировать сетку от бутстрапа через $grid-breakpoints и текущую константу
      const gridBreakpoints = [
        {name: 'sm', minWidth: -1}, // TODO: use xs
        {name: 'sm', minWidth: 576},
        {name: 'md', minWidth: 768},
        {name: 'lg', minWidth: 992},
        {name: 'xl', minWidth: 1320},
        // {name: 'xxl', minWidth: 1460},
      ];

      for (let i = 0; i < gridBreakpoints.length; i++) {
        const breakpoint = gridBreakpoints[i];
        if ( breakpoint.minWidth < this.grid_width) {
          gridExtend.push('ge-' + breakpoint.name);
        }
      }

      for (let i = gridBreakpoints.length - 1; i >= 0; i--) {
        const breakpoint = gridBreakpoints[i];
        if ( breakpoint.minWidth < this.grid_width) {
          size = 'grid-' + breakpoint.name;
          padding = 'normal';
          display = breakpoint.name;
          break;
        }
      }

      this.$store.dispatch('grid_updateDisplay', display);
      return size + ' grid-padding-' + padding + ' ' + gridExtend.join(' ');
    },
  },
  methods: {
    updateGridWidth() {
      // document.body.clientWidth, document.body.clientWidth, window.innerWidth
      this.grid_width = window.innerWidth;
    },
  },
  created() {
    this.updateGridWidth();
    window.addEventListener('resize',            this.updateGridWidth);
    window.addEventListener("orientationchange", this.updateGridWidth);
  },
};
</script>
