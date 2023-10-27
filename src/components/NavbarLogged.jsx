import {VscSignOut} from 'react-icons/vsc';
import {NavLink} from 'react-router-dom';
import {userAuthentication} from '../context/AuthContext';
import '../styles/Navbar.css';

const NavbarLogged = () => {

    const {logout} = userAuthentication()

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.log("Error signing out", error)
        }
    }

    return (
        <div className="navbar">
            <div className="navbar-brand">
                LEKKAH
            </div>
            <div className="navbar-links">
                <NavLink onClick={handleLogout} to={"/login"}>
                    <VscSignOut className="nav-icon"/>
                </NavLink>
            </div>
        </div>
    )

}

export default NavbarLogged