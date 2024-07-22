import { CardHeader } from "./CardHeader";
import { CardPrepTime } from "./CardPrepTime";

import data from "../lib/recipe.json";

function Card() {
  const recipe = data.recipe;

  return (
    <div className="recipe_card">
      <CardHeader
        title={recipe.name}
        cover={recipe.preview[0]}
        description={recipe.description}
        serving={recipe.servings}
        price={recipe.priceEUR}
      />
      <CardPrepTime timePrep={recipe.preparationTime.cooking} />
      <div className="recipe_card__div">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="recipe_card__div">
        <h2>Instructions</h2>
        <ol>
          {recipe.instructions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
      <div className="recipe_card__div">
        <h2>Nutrition</h2>
        <p>
          The table bellow shows nutritional values per serving without the
          additional fillings.
        </p>
        <table>
          <tbody>
            {Object.entries(recipe.nutrition).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Card;
