import Navbar from './components/Navbar'
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import Cuisine from "./components/Cuisine.jsx";
import Pages from './pages/Pages';

function App() {

    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Navbar/>
                    <Search />
                    <Cuisine />
                    <Pages />
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
