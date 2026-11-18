
// ===================================
// WEBTECH HUB - JAVASCRIPT
// ===================================

// 1. SYLLABUS SEARCH FUNCTION

const searchInput = document.getElementById("searchInput");
const unitCards = document.querySelectorAll(".unit-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase().trim();

    let visibleCards = 0;

    unitCards.forEach(function (card) {

        const cardContent = card.textContent.toLowerCase();

        if (cardContent.includes(searchValue)) {

            card.style.display = "block";
            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });

    // Show message if nothing is found

    if (visibleCards === 0) {
        noResults.hidden = false;
    } else {
        noResults.hidden = true;
    }

});


// 2. EXPLORE BUTTON SCROLL

document.querySelectorAll('a[href="#units"]').forEach(function(button) {

    button.addEventListener("click", function() {

        document.getElementById("units").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// 3. WELCOME MESSAGE

console.log("Welcome to WEBTECH HUB!");
console.log("Quantum University - Web Technology CS35302");
console.log("All five syllabus units are loaded.");
