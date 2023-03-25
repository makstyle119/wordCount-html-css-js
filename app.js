const countWords = () => {
  // Get the input value
  const inputText = document.getElementById('text-input').value;

  // Split the input text into an array of words
  const wordsArray = inputText.trim().split(/\s+/);

  // Count the number of words
  const numWords = wordsArray.length;

  // Display the word count in the output div
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = `Number of words: ${numWords}`;
};

const charWords = () => {
  // Get the input value
  const inputText = document.getElementById('text-input').value;

  // Count the number of character
  const charCount = inputText.length;

  // Display the character count in the output div
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = `Number of Characters: ${charCount}`;
};

// Add an event listener to the count button
const countBtn = document.getElementById('count-btn');
const charBtn = document.getElementById('char-btn');
countBtn.addEventListener('click', countWords);
charBtn.addEventListener('click', charWords);

// get the current year
const getYearAndUrl = () => {
  let year = document.getElementById('getYear');
  let currentPage = document.getElementById('currentPage');
  year.innerText = new Date().getFullYear();
  currentPage.href = window.location.href;
};
