function throttle(fn, wait) {
  let lastCallTime;
  let timeout;
  return function(...args) {
    if (!lastCallTime) {
      lastCallTime = Date.now();
    }
    const timeLapsed = Date.now() - lastCallTime;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
      lastCallTime = Date.now();
      console.log("lastCallTime", lastCallTime);
    }, wait - timeLapsed);
  }

}

//examples

const throttledFn = throttle(function() {
  console.log("function will run every 10 seconds")
}, 10000);

console.log("first call to throttled", Date.now())
throttledFn();

setTimeout(() => {
  console.log("second call to throttled", Date.now())
  throttledFn();
}, 3000);

setTimeout(() => {
  console.log("third call to throttled", Date.now())
  throttledFn();
}, 13000);
