const timerRepeat = (fun = null) => {
  let _timerStart = false;
  let _timerIdObj = {};
  let timerID     = -1;
  let _fun        = fun;

  function isPromise(value) {
    return value && value.then && typeof value.then === 'function';
  }

  const setFunction = (fun) => {
    _fun        = fun;
  };
  const stop = () => {
    _timerStart = false;
    (timerID >= 0) && clearTimeout(timerID);
  };
  const run = (timeout = 5000) => {
    _timerStart = true;

    const timerRepeatFn = () => {
      if(!_timerStart){ return; }

      let startNewTimerBool = false;
      let startNewTimer = () => {
        if(!startNewTimerBool){
          startNewTimerBool = true;
        }
        if(_timerStart){
          let timerID = setTimeout( timerRepeatFn, timeout );
        }
      };

      //
      let $res = null;
      try {
        $res = _fun();
      } catch (e) {
        console.error(e);
        startNewTimer();
        return;
      }

      if(isPromise($res)) {
        $res.then( startNewTimer, startNewTimer);
      } else {
        startNewTimer();
      }

    };

    timerRepeatFn();

  };

  return {
    setFunction: setFunction,
    run: run,
    stop: stop
  };
};

export default timerRepeat;
