function throttle(fn, wait) {
  let timer = null;
  let lastArgs = null;

  return function throttled(...args) {
    if (!timer) {
      fn.apply(this, args);
      timer = setTimeout(() => {
        if (lastArgs) {
          fn.apply(this, lastArgs);
          lastArgs = null;
        }
        timer = null;
      }, wait);
    } else {
      lastArgs = args;
      return false;
    }
  };
}

const throttledfn = throttle(fn, 100);
