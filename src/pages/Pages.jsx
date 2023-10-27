import Searched from './Searched';
import Cuisines from './Cuisines';
import {Route, Routes} from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import FridgeRecipes from "./FridgeRecipes.jsx";
import SignIn from '../components/SignIn.jsx';
import SignUp from '../components/SignUp.jsx';

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/cuisine/:type" element={<Cuisines />} />
            <Route path="/fridge" element={<FridgeRecipes />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}

export default Pages