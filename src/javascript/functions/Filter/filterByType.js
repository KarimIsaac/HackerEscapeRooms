import activeFilters from "./activeFilterCheck.js";

export default function filterByType() {
  const cbOnline = document.querySelector("#filter-checkbox-online");
  const cbOnsite = document.querySelector("#filter-checkbox-onsite");

  //restore filter => displays all card to == "flex"
  document.getElementById('close-filter-btn').addEventListener("click", () => {
    cbOnline.checked === true;
    cbOnsite.checked === true;
  })

  cbOnline.addEventListener("click", () => activeFilters());
  cbOnsite.addEventListener("click", () => activeFilters());
}

export function showOnlineCards() {
  const onlineCards = document.querySelectorAll(".online");
  const cbOnline = document.querySelector("#filter-checkbox-online");

  if (cbOnline.checked == true) {
    for (let i = 0; i < onlineCards.length; i++) {
      onlineCards[i].style.display = "flex";
    }
  } else {
    for (let i = 0; i < onlineCards.length; i++) {
      onlineCards[i].style.display = "none";
    }
  }
}

export function showOnsiteCards() {
  const onsiteCards = document.querySelectorAll(".onsite");
  const cbOnsite = document.querySelector("#filter-checkbox-onsite");

  if (cbOnsite.checked == true) {
    for (let i = 0; i < onsiteCards.length; i++) {
      onsiteCards[i].style.display = "flex";
    }
  } else {
    for (let i = 0; i < onsiteCards.length; i++) {
      onsiteCards[i].style.display = "none";
    }
  }
}