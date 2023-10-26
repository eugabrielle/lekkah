import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { BiSolidSushi } from 'react-icons/bi';
import { GiNoodles } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import '../styles/Cuisine.css';

const Cuisine = () => {
    return (
        <ul className="cuisine-list">
            <li>
                <NavLink to="/cuisine/italian">
                    <FaPizzaSlice className="cuisine-icon" />
                    Italian
                </NavLink>
            </li>
            <li>
                <NavLink to="/cuisine/japanese">
                    <BiSolidSushi className="cuisine-icon" />
                    Japanese
                </NavLink>
            </li>
            <li>
                <NavLink to="/cuisine/american">
                    <FaHamburger className="cuisine-icon" />
                    American
                </NavLink>
            </li>
            <li>
                <NavLink to="/cuisine/thai">
                    <GiNoodles className="cuisine-icon" />
                    Thai
                </NavLink>
            </li>
        </ul>
    )
}

export default Cuisine

