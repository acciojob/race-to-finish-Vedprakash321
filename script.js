window.promises = [];
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

// Array of five promises
const promises = Array.from({ length: 5 }, createPromise);

// Using Promise.any to wait for the first promise to resolve
Promise.any(promises)
  .then((result) => {
    // Print the result in the output div
    document.getElementById('output').innerText = result;
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// Do not change the code above this
// add your promises to the array `promises`
