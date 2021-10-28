
const ShowErrorMessage = (message) => {
  global.VueApp && global.VueApp.$dialogs && global.VueApp.$dialogs.alert(message, {title: 'Ошибка'});
};


export default {
  RequestPromise(requestPromise, settings) {

    if(window.VueApp) {
      window.VueApp.$store.dispatch('loading/addRequest', requestPromise);
    }

    requestPromise.then(
      // eslint-disable-next-line no-unused-vars
      (result) => {
      },
      (error) => {
        if(error && error.message) {
          ShowErrorMessage(error.message);
        }
      });

  }
};


