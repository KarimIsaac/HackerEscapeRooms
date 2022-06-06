export default function noMatches() {
  const noMatchesDiv = document.querySelector('.no-matches-container');
  const cards = document.querySelectorAll('article');
  let cardsArray = Array.prototype.slice.call(cards);

  if (cardsArray.every((card) => card.style.display == 'none')) {
    noMatchesDiv.innerHTML = '<p class="no-matches-text">No matching challenges</p>'
  }
  else {
    noMatchesDiv.innerHTML = ''
  }
}

