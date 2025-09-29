const votes = {};
const optionColors = ["option1", "option2", "option3", "option4", "option5", "option6", "option7"];

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function vote(surveyId, option) {
  if (!votes[surveyId]) votes[surveyId] = {};
  if (!votes[surveyId][option]) votes[surveyId][option] = 0;
  votes[surveyId][option]++;
}

function showResults(surveyId) {
  const resultsBox = document.querySelector(`#${surveyId} .results-box`);
  const data = votes[surveyId] || {};
  resultsBox.innerHTML = Object.entries(data)
    .map(([opt, count]) => `${opt}: ${count}`)
    .join('<br>') || 'No votes yet.';
}

function addOption() {
  const optionsDiv = document.getElementById('options');
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = `Option ${optionsDiv.querySelectorAll('input').length + 1}`;
  optionsDiv.appendChild(input);
}

function createSurvey() {
  const title = document.getElementById('newTitle').value;
  const options = [...document.querySelectorAll('#options input')].map(i => i.value).filter(v => v);
  if (!title || options.length < 2) {
    alert('Please provide a title and at least two options');
    return;
  }

  const surveyId = 'survey' + Date.now();
  const surveyDiv = document.createElement('div');
  surveyDiv.classList.add('survey');
  surveyDiv.id = surveyId;

  // Assign colors in order
  let buttonsHTML = options.map((opt, idx) => {
    const colorClass = optionColors[idx % optionColors.length];
    return `<button class="${colorClass}" onclick="vote('${surveyId}','${opt}')">${opt}</button>`;
  }).join('');

  surveyDiv.innerHTML = `<p>${title}</p>` +
    buttonsHTML +
    `<button class="results" onclick="showResults('${surveyId}')">Results</button>
     <div class="results-box"></div>`;

  document.getElementById('customSurveys').appendChild(surveyDiv);

  // Reset inputs
  document.getElementById('newTitle').value = '';
  document.getElementById('options').innerHTML = `
    <input type="text" placeholder="Option 1">
    <input type="text" placeholder="Option 2">`;
}
