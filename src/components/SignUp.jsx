import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userAuthentication } from '../context/AuthContext';
import '../styles/SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { createUser } = userAuthentication()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await createUser(email, password)
            navigate("/dashboard")
        } catch (e) {
            setError("Something went wrong, try again.")
            console.log(e.message)
        }
    }

    return (
        <div className="sign-up-container">
            <h1>Sign Up</h1>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                {error && <p className="error-message">{error}</p>}
                <div className="sign-up-inputs">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className="sign-up-inputs">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <button className="btn-primary" type="submit">
                    Sign Up
                </button>

                <p className="correct-link" onClick={() => navigate("/login")}>Already have an account? Log in</p>
            </form>
        </div>
    )
}

export default SignUp
