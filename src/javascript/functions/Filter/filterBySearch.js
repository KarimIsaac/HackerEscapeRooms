import activeFilters from "./activeFilterCheck.js";

export default function filterBySearchInput() {
    document.querySelector('#filter-search-input').addEventListener('keyup', () => {
        activeFilters();
    })
}

export function LookForSearchInputValue() {
    const cards = document.querySelectorAll('article');
    const inputValue = document.querySelector('#filter-search-input').value.toUpperCase();

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('article h2');
        let desc = cards[i].querySelector('article p');

        if (document.querySelector('#filter-search-input').value.length >= 3) {
            if (title.textContent.toUpperCase().indexOf(inputValue) > -1 || desc.textContent.toLocaleUpperCase().indexOf(inputValue) > -1) {
                if (cards[i].style.display === "none") return;
                cards[i].style.display = "flex";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}