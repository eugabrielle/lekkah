import Searched from './Searched';
import Cuisines from './Cuisines';
import {Route, Routes} from 'react-router-dom';
import RecipeList from '../components/RecipeList';

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/cuisine/:type" element={<Cuisines />} />
        </Routes>
    )
}

export default Pages