// @ts-ignore
import { RequestManager } from 'js-request-manager';

// RequestSchema
import RequestSchema from './RequestSchema';
import Settings from './Settings';

let rm = RequestManager(RequestSchema, Settings);

// @ts-ignore
rm.getListener().on('REQUEST_ERROR', (error) => {
  if (error && error.message) {
    try {
      const methodInfo = error.details.requestClass.getMethodInfo();
      if (
        methodInfo.toObject().settings.hasOwnProperty('notify') &&
        !methodInfo.toObject().settings.notify
      )
        return;
    } catch (e) {}

    DIALOG && DIALOG.notify.error(error.message);
  }
});

export default rm;
