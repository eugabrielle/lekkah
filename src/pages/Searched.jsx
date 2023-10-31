import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const Searched = () => {
    const { search } = useParams()
    const [searchedRecipes, setSearchedRecipes] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchSearched = async (search) => {
            try {
                const randomOffset = Math.floor(Math.random() * 20)

                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&query=${search}&number=8&offset=${randomOffset}`
                )

                if (response.data.results.length === 0) {
                    setError("No recipes found for this search.")
                } else {
                    setError(null)
                    setSearchedRecipes(response.data.results)
                }
            } catch (error) {
                console.error("Error getting recipes:", error)
                setError("An error occurred while getting recipes.")
            }
        }

        fetchSearched(search)
    }, [search])

    return (
        <div className="recipe-list">
            {error ? (
                <div className="error-message">{error}</div>
            ) : (
                searchedRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))
            )}
        </div>
    )
}

export default Searched
