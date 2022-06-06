import { showOnlineCards, showOnsiteCards } from "./filterByType.js";
import { displayCardsForActiveTags } from "./filterByTag.js";
import { displayCardsByRating } from "./filterByRating.js";
import { LookForSearchInputValue } from "./filterBySearch.js";
import noMatches from "../noMatch.js";

function showAllCards() {
    document.querySelectorAll('.card').forEach(card => card.style.display = "flex");
}

export default function activeFilters() {
    //displays all cards at challenges section
    showAllCards();
    //filter cards out if filters is active
    LookForSearchInputValue();
    if (document.querySelector("#filter-checkbox-online").checked == false) showOnlineCards();
    if (document.querySelector("#filter-checkbox-onsite").checked == false) showOnsiteCards();
    if (document.querySelector("#filter-checkbox-onsite").checked == false) showOnsiteCards();
    displayCardsByRating();
    displayCardsForActiveTags();
    noMatches();
}