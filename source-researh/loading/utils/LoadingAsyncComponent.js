
import { defineAsyncComponent, shallowRef } from 'vue';

import LoadingView                from '@loading/component/LoadingView';
import LoadingAsyncComponentError from '@loading/component/LoadingAsyncComponentError';

export default (loaderFunc) => {
  return shallowRef( defineAsyncComponent({
    loader: loaderFunc,
    // A component to use while the async component is loading
    loadingComponent: LoadingView,
    // Delay before showing the loading component. Default: 200ms.
    delay: 200,
    // A component to use if the load fails
    errorComponent: LoadingAsyncComponentError,
    // The error component will be displayed if a timeout is provided and exceeded. Default: Infinity.
    timeout: 3000
  }) );
};
