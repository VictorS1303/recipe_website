const searchMealInput = document.querySelector('.meal-search-input')
const searchMealInputToggleBtn = document.querySelector('.search-meal-input-toggle-btn')
const mealCardsContainer = document.querySelector('.meal-cards-container')

// EVENT LISTENERS //
searchMealInputToggleBtn.addEventListener('click', toggleSearchMealInput)

// FUNCTIONS //
function toggleSearchMealInput()
{
    searchMealInput.classList.toggle('active')
    searchMealInputToggleBtn.classList.toggle('active')
}


// Fetch data from API
async function fetchMeals() {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();

    showMeals(data.recipes); // Assuming `data.recipes` contains an array of meals
}


fetchMeals()

function showMeals(data)
{
    data.forEach(meal => {
        mealCardsContainer.innerHTML += `
            <article class="meal-card">
                <header>
                    <span class="cuisine">${meal.cuisine}</span>
                    <img src="${meal.image}" alt="${meal.name}">
                    <h5>${meal.name}</h5>
                    <p class="preparation-time">${meal.prepTimeMinutes} minutes</p>
                </header>
                <a href="#" class="btn primary-btn">
                    <span>See recipe</span> <i class="fa-solid fa-bowl-food"></i>
                </a>
            </article>
        `;
    });
}