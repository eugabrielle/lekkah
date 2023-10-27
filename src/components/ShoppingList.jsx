import { useState, useEffect } from 'react';
import { useForm, Controller} from 'react-hook-form';
import { AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';
import { userAuthentication } from '../context/AuthContext';
import { collection, addDoc, getDocs, query, where, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import '../styles/ShoppingList.css';


const ShoppingList = () => {
    const { user } = userAuthentication()
    const { control, handleSubmit, reset } = useForm()
    const [items, setItems] = useState([])
    const [error, setError] = useState(null)
    const userId = user.uid

    useEffect(() => {
        loadShoppingList()
    }, [userId])

    const loadShoppingList = async () => {
        try {
            const shoppingListRef = collection(db, "shoppingLists")
            const userShoppingListQuery = query(shoppingListRef, where("userId", "==", userId))
            const snapshot = await getDocs(userShoppingListQuery)

            const shoppingListItems = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setItems(shoppingListItems)
            setError(null)
        } catch (error) {
            console.error("Error loading shopping list:", error)
            setError("An error occurred while loading the shopping list.")
        }
    }

    const onSubmit = async (data) => {
        const ingredient = data.ingredient.trim()

        if (ingredient === "") {
            return
        }

        try {
            const shoppingListRef = collection(db, "shoppingLists")
            const docRef = await addDoc(shoppingListRef, {
                ingredient: ingredient,
                checked: false,
                userId: userId,
            })

            setItems([...items, { id: docRef.id, ingredient: ingredient, checked: false }])
            reset()
            setError(null)
        } catch (error) {
            console.error("Error adding shopping list item:", error)
            setError("An error occurred while adding item to the shopping list.")
        }
    }


    const handleCheck = async (id) => {
        try {
            const docRef = doc(db, "shoppingLists", id)
            await updateDoc(docRef, { checked: true })

            const updatedItems = items.map((item) =>
                item.id === id ? { ...item, checked: true } : item
            )
            setItems(updatedItems)
            setError(null)
        } catch (error) {
            console.error("Error updating shopping list item:", error)
            setError("An error occurred while updatling the item. ")
        }
    }

    const handleDelete = async (id) => {
        try {
            const docRef = doc(db, "shoppingLists", id)
            await deleteDoc(docRef)

            const updatedItems = items.filter((item) => item.id !== id)
            setItems(updatedItems)
            setError(null)
        } catch (error) {
            console.error("Error deleting shopping list item:", error)
            setError("An error accurred deleting item")
        }
    }

    return (
        <div><h1>Welcome back, don't forget to update your shopping list !</h1>
            <div className="shopping-list-container">
                <h2>Shopping List</h2>
                {error && <div className="error-message">{error}</div>}
                <div className="form-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-container">
                            <Controller
                                name="ingredient"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input {...field} placeholder="Add an item" />
                                )}
                            />
                        </div>
                        <button type="submit">+</button>
                    </form>
                </div>
                <div className="list-container">
                    <ul>
                        {items.map((item) => (
                            <li key={item.id} className={item.checked ? "checked" : ""}>
                                <AiOutlineCheck
                                    onClick={() => handleCheck(item.id)}
                                    className="check-icon"
                                />
                                <span onClick={() => handleCheck(item.id)}>
                                    {item.ingredient}
                                </span>
                                <AiOutlineDelete
                                    onClick={() => handleDelete(item.id)}
                                    className="delete-icon"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default ShoppingList
