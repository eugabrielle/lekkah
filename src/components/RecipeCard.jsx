import { Link } from 'react-router-dom';
import '../styles/RecipeCard.css';

const RecipeCard = ({ recipe }) => {
    return (
        <Link to={`/recipe/${recipe.id}`} className="recipe-card-link">
            <div className="recipe-card">
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} />
            </div>
        </Link>
    )
}

export default RecipeCard
