import { useCallback, useEffect, useState } from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('initEmail');
    const [password, setPassword] = useState('initPassword');
    // const testRef = useRef()
    // console.log("SET EMAIL OR SET PASSWORD MADE RENDER - NOW LETS DECLARE : [handleEmailChange && handlePasswordChange] ")


    const handleEmailChangeCallback = useCallback((e: any) => {
        setEmail(e.target.value)
    }, [email])

    const handlePasswordChangeCallback = useCallback(
        (e: any) => {
            console.log(`the passowrd is: ${e.target.value}`)
            console.log(`the email is: ${email}`)
            setPassword(e.target.value);
        },
        [password]
    )

    // const handleEmailChangeCallback = (e: any) => {
    //     setEmail(e.target.value)
    // }

    // const handlePasswordChangeCallback = (e: any) => {
    //     console.log(`the passowrd is: ${e.target.value}`)
    //     console.log(`the email is: ${email}`)
    //     setPassword(e.target.value);
    // }




    // const handlePasswordChange = (e: any) => {
    //     setPassword(e.target.value);
    // };

    useEffect(() => {
        localStorage.removeItem("token")
        return () => {
            console.log("Unmount Login Component Now!!!!")
        }
    }, [])

    async function loginService() {
        const loginPayload = {
            email,
            password
        }
        try {
            const result = await axios.post("http://localhost:4000/auth/login", loginPayload)
            localStorage.setItem("token", result.data.token)
            setTimeout(() => { navigate("/countries") }, 500)
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
                    onChange={handleEmailChangeCallback}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={handlePasswordChangeCallback}
                    required
                />
            </div>
            {/* <div>
                <label htmlFor="password">Test</label>
                <input
                    type="test"
                    id="test"
                    ref={testRef as any}
                    required
                />
            </div> */}
            <button type="button" onClick={loginService}>Login</button>
        </form>
    );
};

export default LoginForm;
