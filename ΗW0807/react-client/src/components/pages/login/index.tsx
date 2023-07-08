import { useState } from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    async function loginService() {
        const loginPayload = {
            email,
            password
        }
        try {
            const result = await axios.post("http://localhost:4000/auth/login", loginPayload)
            localStorage.setItem("token", result.data.token)
            setTimeout(() => { navigate("/products") }, 3000)
        } catch (ex) {
            alert("Something went wrong!")
        }
    }

    return (
        <form >
            <h2>Login</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <button type="button" onClick={loginService}>Login</button>
        </form>
    );
};

export default LoginForm;
