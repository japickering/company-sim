function runAfterDelay(a, b) {
  const delay = 1000; // ms
  // simulate an asynchronous action
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b);
    }, delay);
  });
}

async function init() {
  let a, b;
  [a, b] = [10, 20];
  var res = await runAfterDelay(a, b);
  console.log("a + b: " + res);
}
init();
