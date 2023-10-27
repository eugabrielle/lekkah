import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userAuthentication } from '../context/AuthContext';

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { signIn } = userAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await signIn(email, password)
            navigate("/dashboard")
        } catch (e) {
            setError("Something went wrong, check your credentials.")
            console.log(e.message)
        }
    }

    return (
        <div className="sign-up-container">
            <h1>Sign In</h1>
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
                    Sign In
                </button>

                <p className="correct-link" onClick={() => navigate("/signup")}>
                    Don't have an account? Sign up
                </p>
            </form>
        </div>
    )
}

export default SignIn
