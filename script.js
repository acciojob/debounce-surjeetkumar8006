function debounce(callback, delay, immediate = false) {
  let timer = null;

  return function (...args) {
    const context = this;
    const callNow = immediate && !timer;

    clearTimeout(timer);

    timer = setTimeout(() => {
      // After the delay, always reset timer
      timer = null;
      // If not immediate mode, execute callback now
      if (!immediate) {
        callback.apply(context, args);
      }
    }, delay);

    if (callNow) {
      callback.apply(context, args);
    }
  };
}

module.exports = debounce;
