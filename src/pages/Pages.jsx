import Searched from './Searched';
import Cuisines from './Cuisines';
import {Route, Routes} from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import FridgeRecipes from "./FridgeRecipes";
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Recipe from './Recipe' ;

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/cuisine/:type" element={<Cuisines />} />
            <Route path="/fridge" element={<FridgeRecipes />} />
            <Route path="/recipe/:recipeId" element={<Recipe />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}

export default Pages