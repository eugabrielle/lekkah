import Navbar from './components/Navbar'
import {BrowserRouter} from "react-router-dom";
import Search from './components/Search';
import Cuisine from './components/Cuisine';
import Pages from './pages/Pages';
import Dashboard from './pages/Dashboard';
import {userAuthentication} from './context/AuthContext';

function App() {
    const {user} = userAuthentication()
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    {user ? (
                        <Dashboard/>
                    ) : (
                        <>
                            <Navbar/>
                            <Search/>
                            <Cuisine/>
                            <Pages/>
                        </>
                    )}
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
