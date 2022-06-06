const body = document.querySelector('body');

import fetchData from "./functions/fetchData.js";
const data = await fetchData();

// For all
import MobileMeny from './functions/mobileMeny.js';
import bookChallenge from './functions/bookChallenge.js';
MobileMeny();
bookChallenge(data);

// For index
import { renderIndex } from './functions/renderChallenges.js';
import links from "./functions/links.js";
if (body.className == "index") {
  renderIndex(data);
  links();
}

// For challenge
import { renderChallenges } from './functions/renderChallenges.js';
import enableFilters from './functions/Filter/enableFilters.js';
if (body.className == "challengesPage") {
  enableFilters(data);
  renderChallenges(data);
};