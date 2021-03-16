import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { login } from "./../../features/userSlice";
import { auth } from "./../../firebase";
import './styles/Login.css';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        profileUrl: userAuth.user.photoURL,
                    })
                );
            })
            .catch((error) => alert(error));
    };

    return (
        <div className="login">
            <form>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} placeholder='Email'
                    type="email"
                />

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} placeholder='Password'
                    type="password"
                />

                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
        </div>
    )
}

export default Login