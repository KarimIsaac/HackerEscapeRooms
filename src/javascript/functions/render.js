import { setStarsInRating } from "./renderStars.js";

export default function render(data, idOfCard) {
  const newCard = document.createElement('article');
  newCard.setAttribute("id", "id" + idOfCard);
  newCard.setAttribute("class", `card ${data.type}`);

  data.labels.forEach(label => newCard.classList.add(`${label}`));
  
  let logoType = data.type === "online" ? "fa-laptop" : "fa-home";
  
  newCard.innerHTML = `
  <picture class="card-top-part"><img src = ${data.image} alt="challenges room image">
   <span class="fa ${logoType}"></span>
  </picture>
  <div class="card-bottom-part">
        <div class="card-text-container">
          <h2>${data.title}</h2>
          <div class="card-subheader-container">
            <ul class="rating-stars">
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
              <li>&#9733;</li>
            </ul>
            <small>
            ${data.minParticipants} - ${data.maxParticipants} participants
            </small>
          </div>
          <p>${maxDescChar(data.description)}</p>
        </div>
        <div class="card-btn-container">
          <button class="fourth-btn">Book this room</button>
        </div>
      </div>
      `;

  document.querySelector('#card-section').appendChild(newCard);

  setStarsInRating(idOfCard, data.rating);
}

function maxDescChar(description){
  let maxChar = 40;
  let shortDesc = "";
  
  let spaces = 0;
  for(let i = 0; i < description.length; i++){
    if(description[i] === " ") spaces++; /*looks for spaces */
  };

  shortDesc = description.slice(0, maxChar + spaces);
  description.length > maxChar ? shortDesc += "...": shortDesc;
  console.log(maxChar);
  return  shortDesc;
}
