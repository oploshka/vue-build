import { ref } from "vue";

export const examplePreloaderShown = ref(true);
export const exampleList = ref([]);
export const exampleFilterState = ref({});
export const exampleAutoHide = ref(true);

export const examplePreloaderToggle = (value) => {
  examplePreloaderShown.value = value ?? !examplePreloaderShown.value;
};

export const exampleGetList = () => {
  return exampleList;
};

export const exampleSetList = (fileList) => {
  exampleList.value = fileList;
};

export const exampleAddToList = (filename) => {
  exampleList.value.push(filename);
};

export const exampleRemoveByName = (filename) => {
  return exampleList.value = exampleList.value.filter(name => name !== filename);
};

export const exampleToggleAutoHide = (value) => {
  exampleAutoHide.value = value ?? !exampleAutoHide.value;
};

export const exampleClearFilterState = () => {
  for (var key in exampleFilterState.value) {
    delete exampleFilterState.value[key];
  }
};
