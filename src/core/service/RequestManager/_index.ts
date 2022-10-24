// @ts-ignore
import { RequestManager } from 'js-request-manager';

// RequestSchema
import RequestSchema from './RequestSchema';
import Settings from './Settings';

type ReplaceReturnType<T extends (...arg: any) => any> = (
  ...arg: Parameters<T>
) => Promise<ReturnType<T>>;

export type Ex<T> = {
  [P in keyof T]: T[P] extends (...arg: any) => any
    ? ReplaceReturnType<T[P]>
    : Ex<T[P]>;
};

let rm: Ex<typeof RequestSchema> = RequestManager(RequestSchema, Settings);

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

declare global {
  const RequestManager: typeof rm;
}
