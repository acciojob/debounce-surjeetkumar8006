function debounce(callback, delay, immediate = false) {
  let timer = null;

  return function (...args) {
    const context = this;
    const callNow = immediate && !timer;

    clearTimeout(timer);

    timer = setTimeout(() => {
      // Always reset timer after delay
      timer = null;
      // If not immediate, call after delay
      if (!immediate) {
        callback.apply(context, args);
      }
    }, delay);

    // For immediate mode, call right away if allowed
    if (callNow) {
      callback.apply(context, args);
    }
  };
}

module.exports = debounce;
