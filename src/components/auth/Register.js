import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { login } from "./../../features/userSlice";
import { auth } from "./../../firebase";
import './styles/Register.css';

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            return alert('Please enter your full name!');
        }

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => { // if successful, then do:
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic,
                    })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic,
                            })
                        );
                    })
            })
            .catch((error) => alert(error));
    };

    return (
        <div className="register">
            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Username'
                    type="text"
                />
                <input
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)'
                    type="text"
                />
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
                <button type='submit' onClick={register}>Register</button>
            </form>
        </div>
    )
}

export default Register