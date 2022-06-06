import activeFilters from "./activeFilterCheck.js";

let tagStorageArray = []
//Factory function, creates an tag(label) obj

function createTagObj(tagName) {
    return {
        tagName: tagName,
        active: false,
        toggleActiveStatus: function () {
            this.active === false ?
                this.active = true :
                this.active = false;
        }
    }
}

//fetch the index of an tagObj if the tabBtn has the same name.
function getObjIndex(tagBtnText) {
    let indexOfTag = 0;
    for (const tag of tagStorageArray) {
        if (tagBtnText === tag.tagName)
            indexOfTag = tagStorageArray.indexOf(tag);
    }
    return indexOfTag;
}

/* ========================= main function ==================================*/
//creates dynamic addEventListener on TagBtn, if the labels(tags) change
export default function filterByTag() {
    //restore filter => displays all card to == "flex"
    document.getElementById('close-filter-btn').addEventListener("click", () => {
        tagStorageArray = []
    })

    document.querySelectorAll('.filter-byTag-container button')
        .forEach(tagBtn => {
            tagStorageArray.push(createTagObj(tagBtn.innerText));
            tagBtn.addEventListener('click', () => {
                isTagAktive(tagBtn, getObjIndex(tagBtn.innerText));
                activeFilters(); //bytas ut emot aktiveTagsCheck.js
            })
        })
};

//behövs denna funktionen?
function isTagAktive(tagBtn, tagObjIndex) {
    if (tagBtn.style.backgroundColor !== 'lightgray')
        tagBtn.style.backgroundColor = 'lightgray';
    else {
        tagBtn.style.backgroundColor = 'white';
    }
    tagStorageArray[tagObjIndex].toggleActiveStatus();
}

//displays card if the tag(label) is ative
export function displayCardsForActiveTags() {
    const activeTagsArray = pushActiveTagsToArray();
    activeTagsArray.forEach(index => {
        findByCardTagName(index)
    })
}

//looking at the tagStorage for of tabObj.active == true
function checkTotalActiveTags() {
    let totalActiveTags = 0
    for (const tagObj of tagStorageArray) {
        if (tagObj.active == true) totalActiveTags++;
    }
    return totalActiveTags;
}

//stores all active tags in an new array
function pushActiveTagsToArray() {
    let totalActiveTags = checkTotalActiveTags();
    const activTagsArray = [];
    if (totalActiveTags > 0) {
        for (const tagObj of tagStorageArray) {
            if (tagObj.active == true) activTagsArray.push(tagObj.tagName);
        }
    }
    return activTagsArray;
}

//finds card with matching challenges classList.value 
function findByCardTagName(tagIndex) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.style.display === 'none') return;
        //searsch thorugh card.classlist.value after string match
        let newRegEx = new RegExp(`${tagIndex}`);
        if (!newRegEx.test(card.classList.value)) {
            card.style.display = 'none';
        }
    })
}