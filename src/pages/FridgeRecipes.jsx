import { useState } from 'react';
import axios from 'axios';
import FridgeForm from '../components/FridgeForm';
import RecipeCard from '../components/RecipeCard';

const FridgeRecipes = () => {
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(null)

    const searchRecipes = async (formData) => {
        const { ingredient1, ingredient2, ingredient3 } = formData

        try {
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&ingredients=${ingredient1},${ingredient2},${ingredient3}&number=8`
            )
            if (response.data.length === 0) {
                setError("No recipes found with these ingredients.")
            } else {
                setError(null)
                setRecipes(response.data)
            }
        } catch (error) {
            console.error("Error getting recipes:", error)
            setError("An error occurred while getting recipes.")
            setRecipes([])
        }
    }

    return (
        <div>
            <FridgeForm onSubmit={searchRecipes} />
            <div className="recipe-list">
                {error ? (
                    <div className="error-message">{error}</div>
                ) : (
                    recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
                )}
            </div>
        </div>
    )
}

export default FridgeRecipes
