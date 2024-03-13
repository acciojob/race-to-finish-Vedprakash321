// script.js

// Function to create a promise that resolves with a random time
function createPromise() {
  const randomTime = Math.floor(Math.random() * 5) + 1;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved in ${randomTime} seconds`);
    }, randomTime * 1000);
  });
}

// Add five promises to the existing array window.promises
window.promises.push(createPromise(), createPromise(), createPromise(), createPromise(), createPromise());

// Using Promise.any to wait for the first promise to resolve
Promise.any(window.promises)
  .then((result) => {
    // Print the result in the output div
    document.getElementById('output').innerText = result;
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// Do not change the code above this
// add your promises to the array `promises`
