export function setStarsInRating(idOfCard, ratingValue) {
  const starsItems = document.querySelectorAll(`#id${idOfCard} .rating-stars li`);
  let ratingNumber = ratingValue;

  //removes error from console
  if (ratingNumber > 5) {
    ratingNumber = 0
    console.log(`ERR: challenge card ID: ${idOfCard} has has to high ranking value`)
  }

  for (let index = 0; index < ratingNumber; index++) {
    starsItems[index].classList.add('checked')
  }
};