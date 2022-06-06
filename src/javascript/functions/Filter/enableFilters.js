import renderFilter from "./renderFilter.js";
import filterByType from './filterByType.js';
import filterBySearch from './filterBySearch.js';
import { byRatingFilterBtns } from './filterByRating.js';
import renderfilterTagsInMeny from './renderFilterTags.js';
import activeFilters from "./activeFilterCheck.js";

// Function to enable the filter-container. It will get rendered into the DOM.
export default function enableFilters(data) {
    const filterBtn = document.getElementById('open-filter-btn');

    filterBtn.addEventListener('click', () => {
        renderFilter(); //renderFilter.js
        disableFilters();
        activeFilters();

        // When the filter-container has been rendered, call additional functions for the filter.
        if (document.querySelector(".filter-container")) {
            filterBySearch();
            filterByType();
            byRatingFilterBtns(data);
            renderfilterTagsInMeny(data);
        }
    })
}

// Function gets called to be able to disable the filter-container. It will be removed from the DOM.
function disableFilters() {
    const closeFilterBtn = document.getElementById('close-filter-btn');

    closeFilterBtn.addEventListener('click', () => {

        const filterContainer = document.querySelector('.filter-container');
        filterContainer.remove();

        const filterBtn = document.getElementById('open-filter-btn');
        filterBtn.style.display = "";
    })
}
