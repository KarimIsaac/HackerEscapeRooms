import render from "./render.js";

export function renderIndex(dataUnsorted) {
  const data = dataUnsorted.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  let idOfCard = 0;
  for (let index = 0; index < 3; index++) {
    render(data[index], idOfCard);
    idOfCard++;
  };
}

export function renderChallenges(data) {
  let idOfCard = 0;
  data.forEach(data => {
    render(data, idOfCard);
    idOfCard++;
  });
}