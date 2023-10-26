import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/RecipeList.css';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [error, setError] = useState(null)

    const loadMoreRecipes = () => {
        setPageNumber(pageNumber + 1)
    }

    useEffect(() => {
        axios
            .get(
                `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&number=8&page=${pageNumber}`
            )
            .then((response) => {
                if (response.data.recipes.length > 0) {
                    setRecipes([...recipes, ...response.data.recipes])
                    setError(null)
                } else {
                    setError("No more recipes found.")
                }
            })
            .catch((error) => {
                console.error("Error no recipes found:", error)
                setError("An error occurred while getting recipes.")
            })
    }, [pageNumber])

    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
            {error && <div className="error-message">{error}</div>}
            <div className="load-more-container">
                <button className="load-more" onClick={loadMoreRecipes}>
                    Load More
                </button>
            </div>
        </div>
    )
}

export default RecipeList
