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

// Add an event listener to the count button
const countBtn = document.getElementById('count-btn');
countBtn.addEventListener('click', countWords);

// get the current year
const getYearAndUrl = () => {
  let year = document.getElementById('getYear');
  let currentPage = document.getElementById('currentPage');
  year.innerText = new Date().getFullYear();
  currentPage.href = window.location.href;
};
