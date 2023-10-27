import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/Recipe.css';

const Recipe = () => {
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
                )
                setRecipe(response.data)
            } catch (error) {
                console.error("Error getting recipes:", error)
                setError("Failed to getting the recipe. Please try again later.")
            }
        }

        fetchRecipeDetails()
    }, [recipeId])

    if (error) {
        return <div className="error-message">{error}</div>
    }

    if (recipe === null) {
        return <div className="error-message">Loading...</div>
    }

    if (!recipe) {
        return <div className="error-message">Recipe not found.</div>
    }

    return (
        <div className="container">
            <div className="recipe-details">
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} />
                <h3>Ingredients:</h3>
                <ul>
                    {recipe.extendedIngredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.original}</li>
                    ))}
                </ul>
                <h3>Instructions:</h3>
                <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
            </div>
        </div>
    )
}

export default Recipe