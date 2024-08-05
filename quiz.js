const quizForm = document.getElementById('quizForm');
const quizResult = document.getElementById('quizResult');

quizForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(quizForm);
  const answers = {};
  formData.forEach((value, key) => {
    answers[key] = value;
  });
  const result = calculateResult(answers);
  displayResult(result);
});

function calculateResult(answers) {
  const results = [
    {
      plant: 'Snake Plant',
      description: 'A low-maintenance plant that thrives in low-light conditions.',
      score: 0
    },
    {
      plant: 'Spider Plant',
      description: 'A versatile and easy-to-care-for plant that\'s perfect for beginners.',

      score: 0
    },
    {
      plant: 'Peace Lily',
      description: 'A beautiful and elegant plant that\'s known for its air-purifying properties.',
      
      score: 0
    },
    {
      plant: 'Dracaena',
      description: 'A tall and slender plant that\'s perfect for adding a touch of greenery to any room.',
      
      score: 0
    },
    {
      plant: 'Succulent',
      description: 'A low-maintenance and stylish plant that\'s perfect for indoor spaces.',
    
      score: 0
    }
  ];

  // Scoring system
  if (answers.preferences === 'flowering') {
    results[1].score += 2; // Spider Plant
    results[3].score += 1; // Dracaena
  } else if (answers.preferences === 'foliage') {
    results[0].score += 2; // Snake Plant
    results[2].score += 1; // Peace Lily
  } else if (answers.preferences === 'succulents') {
    results[4].score += 3; // Succulent
  }

  if (answers['living-conditions'] === 'bright') {
    results[1].score += 1; // Spider Plant
    results[3].score += 1; // Dracaena
  } else if (answers['living-conditions'] === 'moderate') {
    results[0].score += 1; // Snake Plant
    results[2].score += 1; // Peace Lily
  } else if (answers['living-conditions'] === 'low') {
    results[4].score += 1; // Succulent
  }

  if (answers['care-capabilities'] === 'experienced') {
    results[2].score += 2; // Peace Lily
    results[3].score += 1; // Dracaena
  } else if (answers['care-capabilities'] === 'beginner') {
    results[0].score += 2; // Snake Plant
    results[1].score += 1; // Spider Plant
  } else if (answers['care-capabilities'] === 'low-maintenance') {
    results[4].score += 2; // Succulent
  }

  // Sort results by score
  results.sort((a, b) => b.score - a.score);

  // Return the top result
  return results[0];
}

function displayResult(result) {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <h2>Your Personalized Plant Suggestion</h2>
    <p>${result.description}</p>
    <button class="close-popup">Close</button>
  `;
  document.body.appendChild(popup);
  const closeButton = popup.querySelector('.close-popup');
  closeButton.addEventListener('click', () => {
    popup.remove();
  });
}
