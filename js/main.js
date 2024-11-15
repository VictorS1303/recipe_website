const searchMealInput = document.querySelector('.meal-search-input')
const searchMealInputToggleBtn = document.querySelector('.search-meal-input-toggle-btn')
const mealCardsContainer = document.querySelector('.meal-cards-container')

// EVENT LISTENERS //
searchMealInputToggleBtn.addEventListener('click', toggleSearchMealInput)
searchMealInput.addEventListener('input', (e) => filterMeals(e))


// FUNCTIONS //
function toggleSearchMealInput()
{
    searchMealInput.classList.toggle('active')
    searchMealInputToggleBtn.classList.toggle('active')
}


// Fetch data from API
async function fetchMeals()
{
    try
    {
        const response = await fetch('https://dummyjson.com/recipes')
        const data = await response.json();

        meals = data.recipes
        showMeals(meals)
    }
    catch (error)
    {
        console.error("Error fetching meals:", error);
    }
}

fetchMeals()

function showMeals(data)
{
    mealCardsContainer.innerHTML = ""
    
    data.forEach((meal) =>
    {
        mealCardsContainer.innerHTML +=
        `
            <article class="meal-card">
                <header>
                    <span class="cuisine">${meal.cuisine}</span>
                    <img src="${meal.image}" alt="${meal.name}">
                    <h5>${meal.name}</h5>
                    <p class="preparation-time">${meal.prepTimeMinutes} minutes</p>
                </header>
                <a href=${`meal.html?id=${meal.id}`} class="btn primary-btn">
                    <span>See recipe</span> <i class="fa-solid fa-bowl-food"></i>
                </a>
            </article>
        `
    })
}

function filterMeals(e) {
    const searchTerm = e.target.value.toLowerCase();

    const filteredMeals = meals.filter((meal) => 
        meal.name.toLowerCase().includes(searchTerm) ||
        meal.cuisine.toLowerCase().includes(searchTerm)
    );

    showMeals(filteredMeals); // Reuse `showMeals` to display filtered meals
}