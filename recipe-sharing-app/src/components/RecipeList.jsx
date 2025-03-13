import { Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes available. Add one!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link> {/* Link to Recipe Details */}
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
