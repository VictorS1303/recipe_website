const mealSection = document.querySelector('.meal')
const mealSectionBackgroundImage = mealSection.querySelector('img')


const searchURL = location.search
const params = new URLSearchParams(searchURL)
const id = params.get('id')

if (id) {  // Check if ID exists
    getChosenMeal(id);  // Call the function with the ID
}


async function getChosenMeal(id) {
    
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    console.log(response);
    const data = await response.json();

    showMeal(data);
}

function showMeal(data) {
    const ingredientsList = generateIngredientsHTML(data.ingredients)
    const instructionsList = generateInstructionsHTML(data.instructions)

    mealSection.innerHTML = `
        <article class="chosen-meal-card" id="chosen_meal_card">
            <div>
                <button class="btn add-to-favorite-btn" id="add_to_favorite_btn">
                    <i class="fas fa-heart"></i>
                </button>
                <img src="${data.image}" alt="${data.image}">
            </div>

            <div class="content-container">
                <h3>
                    ${data.name}
                </h3>

                <div class="preparing-info-container">
                    <div class="ingredients">
                        <header>
                            <h5>Ingredients</h5>
                        </header>
                        <ol>
                          ${ingredientsList}
                        </ol>
                    </div>

                    <div class="ingredients">
                        <header>
                            <h5>Instructions</h5>
                        </header>
                        <ol class="ingredients-list">
                            ${instructionsList}
                        </ol>
                    </div>
                </div>
            </div>
        </article>
    `

    setBackgroundImage(data)
}

// Display ingredients
function generateIngredientsHTML(ingredients)
{
    return ingredients
        .map(ingredient => `<li>${ingredient}</li>`)
        .join('')
}

function generateInstructionsHTML(instructions)
{
    return instructions
            .map((instruction) => `<li>${instruction}</li>`)
            .join('')
}


function setBackgroundImage(data)
{
    mealSection.style.backgroundImage = `url(${data.image})`
    mealSection.style.backgroundRepeat = 'no-repeat'
    mealSection.style.backgroundPosition = 'center'
    mealSection.style.backgroundSize = 'cover'
}

