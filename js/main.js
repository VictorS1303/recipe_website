const searchMealInput = document.querySelector('.meal-search-input')
const searchMealInputToggleBtn = document.querySelector('.search-meal-input-toggle-btn')


// EVENT LISTENERS //
searchMealInputToggleBtn.addEventListener('click', toggleSearchMealInput)


// FUNCTIONS //
function toggleSearchMealInput()
{
    searchMealInput.classList.toggle('active')
    searchMealInputToggleBtn.classList.toggle('active')
}
