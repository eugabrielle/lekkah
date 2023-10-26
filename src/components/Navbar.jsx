import {VscSignIn} from 'react-icons/vsc';
import {TbFridge} from 'react-icons/tb';
import {NavLink} from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" className="navbar-brand">
                LEKKAH
            </NavLink>
            <div className="navbar-links">
                <NavLink to="/fridge">
                    <TbFridge className="nav-icon"/>
                </NavLink>
                <NavLink to="/login">
                    <VscSignIn className="nav-icon"/>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar
