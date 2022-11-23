{
  /* <div class="left-col">
    <img src="https://picsum.photos/400/400" alt="">
    <div class="meal__cat">
        <p>
            <span>Category: </span>
            Dessert
        </p>

    </div>
    <div class="ingredients">
        <h3>Ingredients:</h3>
        <ul>
            <li>Chocolate Chips - 2 cups</li>
            
        </ul>
    </div>
</div>
<div class="right-col">
    <h2></h2>
    <p>

    </p>
</div>
<div class="bottom-col">
    <div class="video-wrapper">
        <h2>Video Recipe</h2>
        <iframe
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"></iframe>

    </div>
</div> */
}

const getMeal = document.getElementById("get_meal");
const meal = document.getElementById("meal");

getMeal.addEventListener("click", getReceipe);

function getReceipe() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      renderReceipe(data.meals[0]);
    });
}

function renderReceipe(receipe) {
  const {
    strMeal,
    strCategory,
    strInstructions,
    strMealThumb,
    strArea,
    strYoutube,
    strTags,
  } = receipe;

  let ingredients = "";

  for (let i = 0; i < 20; i++) {
    if (receipe[`strIngredient${i}`] && receipe[`strMeasure${i}`]) {
      ingredients += `
            <li>
                ${receipe[`strIngredient${i}`]} 
                ${receipe[`strMeasure${i}`]}
            </li>
        `;
    }
  }

  meal.innerHTML = `
    <div class="left-col">
        <img src="${strMealThumb}">
        <div class="meal__cat">
            <p>
                <span>Category: </span>
                ${strCategory}
            </p>
            <p>
                <span>Area: </span>
                ${strArea}
            </p>
            <p>
                <span>Tags: </span>
                ${strTags}
            </p>
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${ingredients}
            </ul>
        </div>
    </div>

    <div class="right-col">
        <h2>${strMeal}</h2>
        <p>${strInstructions}</p>
    </div>

    <div class="bottom-col">
        <h2>Video Recipe</h2>
        <div class="video-wrapper"> 
            <iframe src="https://www.youtube.com/embed/${strYoutube.slice(
              -11
            )}"></iframe>
        </div>
    </div> 
    `;
}

// on button click run api function
// api function runs render function on return
