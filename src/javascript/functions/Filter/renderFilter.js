export default function renderFilter() {

    // Main function to render the filter-container into the DOM.
    const filterBtn = document.getElementById('open-filter-btn');
    const filterContainer = document.createElement("section");
    filterContainer.className = "filter-container";

    const filterSection = document.getElementById('filter-section');
    filterSection.parentNode.insertBefore(filterContainer, filterSection.nextSibling);

    filterBtn.style.display = "none"; // Only temporary fix to hide filter button.

    filterContainer.innerHTML = `
        <div class="grid-header"> 
                <h3>Filter challenges</h3>
                <button id="close-filter-btn"><i class="fas fa-times"></i></button>
            </div>
            <div class="grid-item grid-child-one">
                <h3>By type</h3>
                <div class="filter-byType-container">
                    <input type="checkbox" id="filter-checkbox-online" checked>
                    <label for=""> Include online challenges</label>
                    <input type="checkbox" id="filter-checkbox-onsite" checked>
                    <label for=""> Include on-site challenges</label>
                    <input type="checkbox" id="filter-checkbox-name" checked>
                    <label for=""> Filter by name</label>
                </div>
            </div>
            <div class="grid-item grid-child-two">
                <h3>By rank</h3>
                <div class="filter-byRank-container">
                    <ul id="rating-lessThan" class="rating-stars">
                        <li>&#9733;</li>
                        <li>&#9733;</li>
                        <li>&#9733;</li>
                        <li>&#9733;</li>
                        <li>&#9733;</li>
                    </ul>
                    <p> to </p>
                    <ul id="rating-biggerThan" class="rating-stars">
                        <li class="checked">&#9733;</li>
                        <li class="checked">&#9733;</li>
                        <li class="checked">&#9733;</li>
                        <li class="checked">&#9733;</li>
                        <li class="checked">&#9733;</li>
                    </ul>
                </div>
            </div>
            <div class="grid-item grid-child-three">
                <h3>By tags</h3>
                <div class="filter-byTag-container">
                    <!--tags goes here -->
                </div>
            </div>
            <div class="grid-item grid-child-four">
                <h3>Or type to search for keyword</h3>
                <div class="filter-bySearch-container">
                    <input id="filter-search-input" type="text" placeholder="Start typing to filter (min. 3 letters)">
                </div>
            </div>
        `;
}