import {useForm} from 'react-hook-form';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import '../styles/Search.css';

const Search = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, reset} = useForm()

    const onSubmit = (data) => {
        navigate("/searched/" + data.search)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-search">
            <div className="Search-Bar">
                <input
                    className="Search-Input"
                    {...register('search')}
                    type="text"
                    placeholder="Search for a recipe"
                />
                <button className="search-button" type="submit">
                    <FaSearch/>
                </button>
            </div>
        </form>
    )
}

export default Search
