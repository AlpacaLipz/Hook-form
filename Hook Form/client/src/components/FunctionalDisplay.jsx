import React, { useState } from "react";

const FunctionalDisplay = (props) => {
    const [state, setState] = useState({ firstname: props.firstname,
            lastname: props.lastname,
            email: props.email,
            password: props.password,
            confirmpassword: props.confirmpassword
    })
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")

    const makeForm = (e) => {
        e.preventDefualt();
        const user = {firstname, lastname, email, password, confirmpassword};
    };

    return (
        <div>
            <form onSubmit= { makeForm }>
                <div>
                    <label>First Name:</label>
                    <input onChange={ (e) => setFirstname(e.target.value)} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input onChange={ (e) => setLastname(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input onChange={ (e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input onChange={ (e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input onChange={ (e) => setConfirmpassword(e.target.value)} />
                </div>
                <button onSubmit={ (e) => {makeForm() } }>Submit</button>
            </form>
        
            <div>
                <p>First Name: {firstname} </p>
                <p>Last Name:  {lastname} </p>
                <p>Email: {email} </p>
                <p>Password: {password} </p>
                <p>Confirm Password: {confirmpassword} </p>
            </div>
        </div>
    )
}

export default FunctionalDisplay