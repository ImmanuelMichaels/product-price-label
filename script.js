const incrementButton = document.getElementById('increment');
const counterElement = document.getElementById('counter');
const decrementButton = document.getElementById('decrement');

let counter = 0;

incrementButton.addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;
  });

  // Decrement function
  decrementButton.addEventListener('click', () => {
    if (counter > 0) {
      counter--;
      counterElement.textContent = counter;
    }
  });