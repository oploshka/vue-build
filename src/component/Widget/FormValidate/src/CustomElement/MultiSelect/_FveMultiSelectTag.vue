<script>

import FveMultiSelect from "@widgetFormValidate/src/Element/MultiSelect/FveMultiSelect";

export default {
  mixins: [
    FveMultiSelect
  ],
  data() {
    return {
      searchAdd: true,
    };
  },
  methods: {
    addItem(){
      // this.$emit('addTag', {tag: 'Tex'});
      RequestManager.Reference.addTag({name: this.search}).then((tagObject) => {
        this.$emit('addTag', tagObject);
      });
    }
  }
};
</script>
