
import { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import { useParams } from 'react-router-dom';

const Cuisines = () => {
    const { type } = useParams()
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchRecipesByCuisine = async (cuisine) => {
            try {
                const randomOffset = Math.floor(Math.random() * 20)

                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&cuisine=${cuisine}&number=8&offset=${randomOffset}`
                )

                if (response.data.results.length === 0) {
                    setError("No recipes found for this cuisine.")
                } else {
                    setError(null)
                    setRecipes(response.data.results)
                }
            } catch (error) {
                console.error("Error getting recipes:", error)
                setError("An error occurred while getting recipes.")
            }
        }

        fetchRecipesByCuisine(type)
    }, [type])

    return (
        <div className="recipe-list">
            {error ? (
                <div className="error-message">{error}</div>
            ) : (
                recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
            )}
        </div>
    )
}

export default Cuisines
