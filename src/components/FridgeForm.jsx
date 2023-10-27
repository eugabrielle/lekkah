import { useForm, Controller } from 'react-hook-form';
import '../styles/FridgeForm.css';


const FridgeForm = ({ onSubmit }) => {
    const { control, handleSubmit, reset } = useForm()

    const handleFormSubmit = (data) => {
        onSubmit(data)
        reset()
    }

    return (
        <div className="fridge-form-container">
            <h1 className="fridge-form-title">Empty your fridge</h1>
            <p className="fridge-form-subtitle">Fill in 3 different ingredients left over in your fridge and find a recipe.</p>
            <form className="fridge-form" onSubmit={handleSubmit(handleFormSubmit)}>
                <Controller
                    name="ingredient1"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} placeholder="Ingredient 1" />}
                />
                <Controller
                    name="ingredient2"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} placeholder="Ingredient 2" />}
                />
                <Controller
                    name="ingredient3"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} placeholder="Ingredient 3" />}
                />
                <button type="submit">Search Recipes</button>
            </form>
        </div>
    )
}


export default FridgeForm
